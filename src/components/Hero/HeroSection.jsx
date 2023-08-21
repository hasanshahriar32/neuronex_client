import { Link } from "react-router-dom";
import { Button, Highlight } from "../features/Button";
import HeroBtn from "./HeroBtn/HeroBtn";
import { Hero, HeroSubtitle, HeroTitle } from "./hero";
import { HeroImage } from "./hero_img";

const HeroSection = () => {
  return (
    <div className="">
      <Hero>
        <Button
          className="translate-y-[-1rem] animate-fade-in opacity-0"
          href="/"
          variant="secondary"
          size="small"
        >
          <Link to="/docs" className="pr-2 flex flex-row gap-1">
            {" "}
            <span>NeuroNex 2023 Release </span>{" "}
            <span className="hidden md:block">– Built for Education</span>
          </Link>
          <Highlight>→</Highlight>
        </Button>
        <HeroTitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          NeuroNex: Empowering
          <br className="hidden md:block" /> HSTU with AI
        </HeroTitle>
        <HeroSubtitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          Learning Journeys, Revolutionizing Education with Transformative
          <br className="hidden md:block" />
          Solutions for Personal Growth and Empowered Futures
        </HeroSubtitle>
        <div className="flex justify-center w-full">
          <HeroBtn />
        </div>
        <div className="">
          <HeroImage />
        </div>
      </Hero>
    </div>
  );
};

export default HeroSection;
