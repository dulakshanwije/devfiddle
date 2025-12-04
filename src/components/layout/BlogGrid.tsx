import BlogCard from "../ui/BlogCard";
import SectionTitle from "../ui/SectionTitle";

const data = [
    {
        "icon": "/images/blog/blog-1.png",
        "title": "Ratio Calculator Tools Online",
        "description": "A step-by-step guide on using ratio calculators for solving real-world problems in various industries.",
        "tags": ["technology", "software", "tools", "calculators"]
    },
    {
        "icon": "/images/blog/blog-1.png",
        "title": "Introduction to Cloud Computing",
        "description": "A beginner's guide to understanding cloud computing, its benefits, and how businesses are adopting cloud solutions. A beginner's guide to understanding cloud computing, its benefits, and how businesses are adopting cloud solutions.",
        "tags": ["cloud computing", "technology", "business", "software"]
    },
    {
        "icon": "/images/blog/blog-1.png",
        "title": "What is Blockchain Technology?",
        "description": "An overview of blockchain technology, how it works, and its applications in industries like finance and healthcare. An overview of blockchain technology, how it works, and its applications in industries like finance and healthcare.",
        "tags": ["blockchain", "cryptocurrency", "tech trends", "finance"]
    }
];


const BlogGrid = () => {
    return <section className="relative">
        <div className="bg-primary absolute h-1/4 w-full -z-50 bottom-0 rounded-t-2xl"></div>
        <div className="max-w-7xl mx-auto w-full pb-24">
            <SectionTitle title="Recent Articles"/>
            <div className="grid max-w-7xl w-full px-4 xl:p-0 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10">
                {data.map((item, key) => (
                    <BlogCard
                        key={key}
                        image={item.icon}
                        title={item.title}
                        description={item.description}
                        tags={item.tags}
                    />
                ))}
            </div>
        </div>
    </section>
}

export default BlogGrid;