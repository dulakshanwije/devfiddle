import Image from "next/image";
import Link from "next/link";

type ToolCardProps = {
  title: string;
  icon: string;
  description: string;
  link: string;
};

const ToolCard = ({ title, icon, description, link }: ToolCardProps) => {
  return (
    <>
      <Link href={link}>
        <div className="border border-primary w-full h-[180px] bg-white rounded-2xl drop-shadow-md flex flex-col justify-start items-center gap-2 hover:drop-shadow-lg hover:scale-101">
          <Image
            src={icon}
            width={"80"}
            height={"80"}
            alt={"icon"}
            className="w-10 mb-1 pt-6"
          />
          <h3 className="text-base font-bold leading-4.5 tracking-wide text-center">
            {title}
          </h3>
          <p className="max-w-3/4 text-xs text-center leading-4 text-mute">
            {description}
          </p>
        </div>
      </Link>
    </>
  );
};

export default ToolCard;
