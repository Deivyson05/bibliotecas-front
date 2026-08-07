import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";

export const metadata = {
  title: "O Correspondente — Portfólio de Desenvolvedor",
  description:
    "Portfólio editorial de um programador full-stack: projetos, habilidades e processo, compostos como um jornal.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
