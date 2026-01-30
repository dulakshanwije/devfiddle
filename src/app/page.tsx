import BlogGrid from "@/components/layout/BlogGrid";
import ToolGrid from "@/components/layout/ToolGrid";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/layout/HeroSection";
import SnippetGrid from "@/components/layout/SnippetGrid";

import { promises as fs } from "fs";
import path from "path";

export default async function Home() {
  const filePath = path.join(process.cwd(), "src/data/tools/tools.json");
  const jsonData = await fs.readFile(filePath, "utf8");
  const tools = JSON.parse(jsonData);
  return (
    <>
      <NavBar />
      <HeroSection />
      <ToolGrid data={tools} limit={10} title="Recent Tools" />
      <SnippetGrid />
      <BlogGrid />
      <Footer />
    </>
  );
}
