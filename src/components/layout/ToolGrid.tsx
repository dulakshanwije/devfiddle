import SectionTitle from "../ui/SectionTitle";
import ToolCard from "../ui/ToolCard";

type Props = {
  data: {
    icon: string;
    title: string;
    code: string;
    description: string;
    link: string;
  }[];
  title?: string;
  limit?: number;
};

const ToolGrid = ({ data, limit, title }: Props) => {
  data = limit ? data.slice(0, limit) : data;

  return (
    <section className="max-w-7xl mx-auto mb-24">
      {title && <SectionTitle title={title} link="/tools" />}
      <div className="grid max-w-7xl w-full px-4 xl:p-0 grid-cols-1 min-[400px]:grid-cols-2 min-[580px]:grid-cols-2 min-[720px]:grid-cols-3 min-[1024px]:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-10">
        {data.map((item, key) => (
          <ToolCard
            link={item.link}
            key={key}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ToolGrid;
