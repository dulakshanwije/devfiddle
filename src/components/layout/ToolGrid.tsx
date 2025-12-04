import SectionTitle from "../ui/SectionTitle";
import ToolCard from "../ui/ToolCard";

const data = [
    {
        "icon": "/images/tools/calculator.svg",
        "title": "Prime Factors",
        "description": "Calculate aspect ratio according to your image",
        "link": "/tools/case-convert"
    },
    {
        "icon": "/images/tools/calculator.svg",
        "title": "Aspect Ratio",
        "description": "Calculate aspect ratio according to your image",
        "link": "/tools/case-convert"
    },
    {
        "icon": "/images/tools/calculator.svg",
        "title": "Ratio Calculator",
        "description": "Calculate aspect ratio according to your image",
        "link": "/tools/case-convert"
    },
    {
        "icon": "/images/tools/calculator.svg",
        "title": "Factor Finder",
        "description": "Calculate aspect ratio according to your image",
        "link": "/tools/case-convert"
    },
    {
        "icon": "/images/tools/calculator.svg",
        "title": "Ratio Check",
        "description": "Calculate aspect ratio according to your image",
        "link": "/tools/case-convert"
    },
    {
        "icon": "/images/tools/calculator.svg",
        "title": "Aspect Finder",
        "description": "Calculate aspect ratio according to your image",
        "link": "/tools/case-convert"
    },
    {
        "icon": "/images/tools/calculator.svg",
        "title": "Prime Check",
        "description": "Calculate aspect ratio according to your image",
        "link": "/tools/case-convert"
    },
    {
        "icon": "/images/tools/calculator.svg",
        "title": "Ratio Check",
        "description": "Calculate aspect ratio according to your image",
        "link": "/tools/case-convert"
    },
    {
        "icon": "/images/tools/calculator.svg",
        "title": "Aspect Finder",
        "description": "Calculate aspect ratio according to your image",
        "link": "/tools/case-convert"
    },
    {
        "icon": "/images/tools/calculator.svg",
        "title": "Prime Check",
        "description": "Calculate aspect ratio according to your image",
        "link": "/tools/case-convert"
    }
];

const ToolGrid = () => {
    return <section className="max-w-7xl mx-auto mb-24">
        <SectionTitle title="Recent Tools" />
        <div className="grid max-w-7xl w-full px-4 xl:p-0 grid-cols-1 min-[400px]:grid-cols-2 min-[580px]:grid-cols-3 min-[720px]:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-10">
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
}

export default ToolGrid;