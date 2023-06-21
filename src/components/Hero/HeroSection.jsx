import { Button, Highlight } from "../../features/Button";
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
                    <span className="pr-2"> NeuroNex 2023 Release – Built for Education</span>
                    <Highlight>→</Highlight>
                </Button>
                <HeroTitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
                    NeuroNex: is a better
                    <br className="hidden md:block" /> way to Learn
                </HeroTitle>
                <HeroSubtitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
                    Learning Journeys, Revolutionizing Education with Transformative
                    <br className="hidden md:block" />Solutions for Personal Growth and Empowered Futures
                </HeroSubtitle>
                <Button
                    className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
                    href="/"
                    variant="primary"
                    size="large"
                >
                    <span>Get Started </span>
                    <Highlight>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M5.46967 11.4697C5.17678 11.7626 5.17678 12.2374 5.46967 12.5303C5.76256 12.8232 6.23744 12.8232 6.53033 12.5303L10.5303 8.53033C10.8207 8.23999 10.8236 7.77014 10.5368 7.47624L6.63419 3.47624C6.34492 3.17976 5.87009 3.17391 5.57361 3.46318C5.27713 3.75244 5.27128 4.22728 5.56054 4.52376L8.94583 7.99351L5.46967 11.4697Z"></path>
                        </svg>
                    </Highlight>
                </Button>
                <HeroImage />
            </Hero>

        </div>
    );
};

export default HeroSection;