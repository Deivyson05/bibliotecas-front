"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

// Simula uma chapa de impressão em meio-tom (halftone) flutuando em 3D:
// uma grade de pontos cujo tamanho decai a partir de um centro de luz,
// com leve paralaxe ao mover o mouse — como se o leitor inclinasse a
// página para pegar o reflexo da tinta.
export default function HalftoneField({ className, style }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = mount.clientWidth;
    let height = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0, 14);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const COLS = 26;
    const ROWS = 18;
    const SPACING = 0.42;
    const baseGeometry = new THREE.CircleGeometry(1, 16);
    const material = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#151412"),
      transparent: true,
      opacity: 0.9,
    });

    const count = COLS * ROWS;
    const mesh = new THREE.InstancedMesh(baseGeometry, material, count);
    const dummy = new THREE.Object3D();

    const originX = ((COLS - 1) * SPACING) / 2;
    const originY = ((ROWS - 1) * SPACING) / 2;

    // Centro de "luz" da chapa — de onde os pontos maiores irradiam.
    const lightCenter = { x: 0.35 * COLS * SPACING - originX, y: 0.2 };

    let i = 0;
    const baseScales = new Float32Array(count);
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const x = c * SPACING - originX;
        const y = r * SPACING - originY;
        const dist = Math.hypot(x - lightCenter.x, y - lightCenter.y);
        const falloff = Math.max(0, 1 - dist / (COLS * SPACING * 0.62));
        const scale = 0.02 + falloff * 0.14;
        baseScales[i] = scale;

        dummy.position.set(x, y, 0);
        dummy.scale.setScalar(scale);
        dummy.updateMatrix();
        mesh.setMatrixAt(i, dummy.matrix);
        i++;
      }
    }
    mesh.instanceMatrix.needsUpdate = true;
    group.add(mesh);

    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;

    function handlePointerMove(e) {
      const rect = mount.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      targetRotY = nx * 0.35;
      targetRotX = -ny * 0.22;
    }
    if (!prefersReducedMotion) {
      window.addEventListener("pointermove", handlePointerMove);
    }

    let raf = 0;
    const clock = new THREE.Clock();

    function animate() {
      raf = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        currentRotX += (targetRotX - currentRotX) * 0.04;
        currentRotY += (targetRotY - currentRotY) * 0.04;
        group.rotation.x = currentRotX;
        group.rotation.y = currentRotY + Math.sin(t * 0.08) * 0.03;

        // leve respiração nos pontos, como trama de impressão vibrando
        let idx = 0;
        for (let r = 0; r < ROWS; r++) {
          for (let c = 0; c < COLS; c++) {
            const wobble = 1 + Math.sin(t * 0.6 + c * 0.4 + r * 0.3) * 0.06;
            dummy.position.set(
              c * SPACING - originX,
              r * SPACING - originY,
              0
            );
            dummy.scale.setScalar(baseScales[idx] * wobble);
            dummy.updateMatrix();
            mesh.setMatrixAt(idx, dummy.matrix);
            idx++;
          }
        }
        mesh.instanceMatrix.needsUpdate = true;
      }

      renderer.render(scene, camera);
    }
    animate();

    function handleResize() {
      width = mount.clientWidth;
      height = mount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      baseGeometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div ref={mountRef} className={className} style={style} aria-hidden="true" />
  );
}
