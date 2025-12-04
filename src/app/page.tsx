import BlogGrid from "@/components/layout/BlogGrid";
import ToolGrid from "@/components/layout/ToolGrid";
import NavBar from "@/components/layout/NavBar";
import Image from "next/image";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/layout/HeroSection";
import PromptGrid from "@/components/layout/PromptGrid";

export default function Home() {
  return (
    <>
    <NavBar/>
    <HeroSection/>
    <ToolGrid/>
    <PromptGrid/>
    <BlogGrid/>
    <Footer/>
    </>
  );
}
