import classNames from "classnames";
// import OneTap from "../../components/Authentication/OneTap (Test)/OneTap";
import Faq from "../../components/Faq/Faq";
import HeroSection from "../../components/Hero/HeroSection";
import Price from "../../components/Price/Price";
import Showcase from "../../components/Showcase/Showcase";
import { Container } from "../../components/features/container";
import { StarsIllustration } from "../../components/features/stars";
import Contact from "../../components/Contact/Contact";

const Home = () => {
  return (
    <div>
      {/* <OneTap /> */}
      <div className="overflow-hidden ">
        <Container className="pt-[6.4rem]">
          <HeroSection />
        </Container>
        <Container>{/* <Clients /> */}</Container>
        <div className="mt-16">
          <Showcase />
        </div>
        <div
          className={classNames(
            "mask-radial-faded pointer-events-none relative z-[-1] my-[-12.8rem] h-[60rem] overflow-hidden",
            "[--color:#7877C6] before:absolute before:inset-0 before:bg-radial-faded before:opacity-[0.4]",
            "after:absolute after:top-1/2 after:-left-1/2 after:h-[142.8%] after:w-[200%] after:rounded-[50%] after:border-t after:border-[rgba(120,_119,_198,_0.4)] after:bg-background -mt-[240px]"
          )}
        >
          {" "}
          <StarsIllustration />
        </div>
        <div className="container mx-auto ">
          <Price />
          <div className="mt-10">
            <Faq />
          </div>
        </div>

        <Contact />
      </div>
    </div>
  );
};

export default Home;
