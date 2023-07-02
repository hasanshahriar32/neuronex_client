import { Button, Highlight } from "../features/Button";
import HeroBtn from "./HeroBtn/HeroBtn";
import { Hero, HeroSubtitle, HeroTitle } from "./hero";
import { HeroImage } from "./hero_img";

const HeroSection = () => {
  return (
    <div>
      <Hero>
        <Button
          className="translate-y-[-1rem] animate-fade-in opacity-0"
          href="/"
          variant="secondary"
          size="small"
        >
          <span className="pr-2">
            {" "}
            NeuroNex 2023 Release – Built for Education
          </span>
          <Highlight>→</Highlight>
        </Button>
        <HeroTitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          NeuroNex: is a better
          <br className="hidden md:block" /> way to Learn
        </HeroTitle>
        <HeroSubtitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          Learning Journeys, Revolutionizing Education with Transformative
          <br className="hidden md:block" />
          Solutions for Personal Growth and Empowered Futures
        </HeroSubtitle>
        <div className="flex justify-center w-full">
          <HeroBtn />
        </div>

        <HeroImage />
      </Hero>
    </div>
  );
};

export default HeroSection;
