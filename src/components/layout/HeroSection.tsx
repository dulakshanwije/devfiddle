"use client";

import HeroSlider from "../custom/HeroSlider";

const data = [
  {
    title: "Articles",
    description:
      "Thoughts on building things, lessons from projects, and ideas worth writing down.",
    cta: "Read Articles",
    link: "/articles",
  },
  {
    title: "Tools",
    description:
      "Converters, calculators, and other utilities. Made for specific needs, left here for general use.",
    cta: "Try Tools",
    link: "/tools",
  },
  {
    title: "Prompts",
    description:
      "Prompts that worked well enough to save. Collected here for easy reference.",
    cta: "Browse Prompts",
    link: "/prompts",
  },
];

const HeroSection = () => {
  return (
    <div className="h-[600px] relative mb-20 lg:mb-16">
      <div className="bg-linear-to-b from-[#156054] to-primary h-16/20 rounded-b-2xl text-4xl">
        <div className="flex flex-col justify-center items-center bg-[url('/images/bg-hero.svg')] bg-no-repeat bg-center h-full w-full">
          <p className="mb-2 bg-white border border-secondary text-secondary rounded-full px-4 py-1 text-sm max-w-1/2 text-center font-semibold tracking-wide">
            #dulabuilds.dev
          </p>
          <h1 className="mb-3 text-shadow-lg/30 text-5xl md:text-7xl text-white font-bold text-center tracking-wide">
            Bringing all
            <br />
            together.
          </h1>
          {/* <h1 className="mb-2 text-shadow-lg/30 text-7xl text-white font-bold text-center tracking-wide">The internet is<br/>your canvas.</h1> */}
          <p className="mb-12 text-lg text-white font-medium text-center tracking-wide px-4 md:px-0">
            A space for meaningful builds, thoughtful notes,
            <br />
            and ongoing experiments.
          </p>
        </div>
      </div>
      <HeroSlider data={data} />
    </div>
  );
};

export default HeroSection;
