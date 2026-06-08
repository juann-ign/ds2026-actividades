import type { ReactNode } from "react";
import { Container } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";
import "../../assets/styles/Layout.css";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <Header />
      <Container className="main-content">{children}</Container>
      <Footer />
    </div>
  );
}
export default Layout;
