import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-primary shadow-2xl w-full">
      <hr className="border-t border-background/70" />
      <div className="mx-auto max-w-7xl px-4 xl:px-0 py-4 flex flex-row items-end justify-between">
        <Link href={"/about"}>
          <p className="text-xs font-medium text-background">About</p>
        </Link>
        <p className="text-xs font-medium text-background">
          &copy; DevFiddle 2026
        </p>
      </div>
    </div>
  );
};

export default Footer;
