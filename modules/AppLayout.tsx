import { ReactNode } from "react";
import Navbar from "../common/components/nav/Navbar";
import Footer from "./../common/components/footer/Footer";

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
