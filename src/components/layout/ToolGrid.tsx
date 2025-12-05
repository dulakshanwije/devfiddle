import SectionTitle from "../ui/SectionTitle";
import ToolCard from "../ui/ToolCard";

import { promises as fs } from "fs";
import path from "path";

const ToolGrid = async () => {
  const filePath = path.join(process.cwd(), "src/data/tools/tools.json");
  const jsonData = await fs.readFile(filePath, "utf8");
  const data = JSON.parse(jsonData);

  return (
    <section className="max-w-7xl mx-auto mb-24">
      <SectionTitle title="Recent Tools" />
      <div className="grid max-w-7xl w-full px-4 xl:p-0 grid-cols-1 min-[400px]:grid-cols-2 min-[580px]:grid-cols-3 min-[720px]:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-10">
        {data.map(
          (
            item: {
              icon: string;
              title: string;
              code: string;
              description: string;
              link: string;
              related?: {}[];
            },
            key: number
          ) => (
            <ToolCard
              link={item.link}
              key={key}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          )
        )}
      </div>
    </section>
  );
};

export default ToolGrid;
