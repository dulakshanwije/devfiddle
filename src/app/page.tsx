import BlogGrid from "@/components/layout/BlogGrid";
import ToolGrid from "@/components/layout/ToolGrid";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/layout/HeroSection";
import SnippetGrid from "@/components/layout/SnippetGrid";

import { promises as fs } from "fs";
import path from "path";

export default async function Home() {
  const toolsFilePath = path.join(process.cwd(), "src/data/tools/tools.json");
  const articlesFilePath = path.join(
    process.cwd(),
    "src/data/articles/articles.json",
  );
  const toolsJson = await fs.readFile(toolsFilePath, "utf8");
  const articleJson = await fs.readFile(articlesFilePath, "utf8");
  const tools = JSON.parse(toolsJson);
  const articles = JSON.parse(articleJson);
  return (
    <>
      <NavBar />
      <HeroSection />
      <ToolGrid data={tools} limit={10} title="Recent Tools" />
      <SnippetGrid />
      <BlogGrid data={articles} limit={3} title="Recent Articles" />
      <Footer />
    </>
  );
}
