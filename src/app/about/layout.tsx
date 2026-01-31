import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/NavBar";
import { PropsWithChildren } from "react";

const ToolsLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <NavBar />
      <section>{children}</section>
      <Footer />
    </>
  );
};

export default ToolsLayout;
