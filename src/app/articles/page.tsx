import BlogGrid from "@/components/layout/BlogGrid";

import { promises as fs } from "fs";
import path from "path";

const ToolList = async () => {
  const filePath = path.join(process.cwd(), "src/data/articles/articles.json");
  const jsonData = await fs.readFile(filePath, "utf8");
  const articles = JSON.parse(jsonData);

  return (
    <div className="mt-24">
      <BlogGrid data={articles} title="All Articles" bottomDesign={false} />
    </div>
  );
};

export default ToolList;
