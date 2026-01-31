import ToolGrid from "@/components/layout/ToolGrid";
import PageTitle from "@/components/ui/PageTitle";

import { promises as fs } from "fs";
import path from "path";

const ToolList = async () => {
  const filePath = path.join(process.cwd(), "src/data/tools/tools.json");
  const jsonData = await fs.readFile(filePath, "utf8");
  const tools = JSON.parse(jsonData);

  return (
    <div className="mt-24">
      <PageTitle title="All Tools" />
      <ToolGrid data={tools} />
    </div>
  );
};

export default ToolList;
