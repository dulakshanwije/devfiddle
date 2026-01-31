import BlogCard from "../ui/BlogCard";
import SectionTitle from "../ui/SectionTitle";

type Props = {
  data: {
    cover_image: string;
    title: string;
    slug: string;
    description: string;
    published_date: string;
    author: string;
    tags: [string];
  }[];
  title: string;
  limit?: number;
  bottomDesign?: boolean;
};

const BlogGrid = ({ data, limit, title, bottomDesign = true }: Props) => {
  data = limit ? data.slice(0, limit) : data;
  return (
    <section className="relative">
      {bottomDesign && (
        <div className="bg-primary absolute h-1/4 w-full -z-50 bottom-0 rounded-t-2xl"></div>
      )}
      <div className="max-w-7xl mx-auto w-full pb-24">
        <SectionTitle title={title} link="/articles" />
        <div className="grid max-w-7xl w-full px-4 xl:p-0 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10">
          {data.map((item, key) => (
            <BlogCard
              key={key}
              image={item.cover_image}
              title={item.title}
              description={item.description}
              tags={item.tags}
              link={"articles/" + item.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
