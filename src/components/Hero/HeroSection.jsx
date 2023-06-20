import { Button, Highlight } from "../Button";
import { Hero, HeroSubtitle, HeroTitle } from "../hero";
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
                    <span>Linear 2022 Release – Built for scale</span>{" "}
                    <Highlight>→</Highlight>
                </Button>
                <HeroTitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
                    Linear is a better way
                    <br className="hidden md:block" /> to build products
                </HeroTitle>
                <HeroSubtitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
                    Meet the new standard for modern software development.
                    <br className="hidden md:block" /> Streamline issues, sprints, and product
                    roadmaps.
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