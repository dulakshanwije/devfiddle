import SnippetCard from "../ui/SnippetCard";
import SectionTitle from "../ui/SectionTitle";

const data = [
  {
    title: "Ratio Calculator Tools Online",
    description:
      "A step-by-step guide on using ratio calculators for solving real-world problems in various industries.",
    tags: ["technology", "software", "tools", "calculators"],
  },
  {
    title: "Introduction to Cloud Computing",
    description:
      "A beginner's guide to understanding cloud computing, its benefits, and how businesses are adopting cloud solutions. A beginner's guide to understanding cloud computing, its benefits, and how businesses are adopting cloud solutions.",
    tags: ["cloud computing", "technology", "business", "software"],
  },
  {
    title: "What is Blockchain Technology?",
    description:
      "An overview of blockchain technology, how it works, and its applications in industries like finance and healthcare. An overview of blockchain technology, how it works, and its applications in industries like finance and healthcare.",
    tags: ["blockchain", "cryptocurrency", "tech trends", "finance"],
  },
];

const SnippetGrid = () => {
  return (
    <section className="max-w-7xl mx-auto mb-24">
      <SectionTitle title="Recent Snippets" link="/snippets" />
      <div className="grid max-w-7xl w-full px-4 xl:p-0 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10">
        {data.map((item, key) => (
          <SnippetCard
            key={key}
            title={item.title}
            description={item.description}
            tags={item.tags}
          />
        ))}
      </div>
    </section>
  );
};

export default SnippetGrid;
