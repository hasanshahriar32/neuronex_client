import { HeroTitle } from "./hero";
import { motion } from "framer-motion";

import { useInView } from "react-intersection-observer";
const Developer = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        delayChildren: 0,
        duration: 1.5,
        staggerChildren: 0.2,
      },
    },
  };
  const handleClick = () => {
    console.log("clicked");
    //go to a link in a new window
    window.open("https://shahriarhasan.vercel.app", "_blank");
  };
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once when the component comes into view
    threshold: 0.1, // Adjust the threshold value as per your needs
  });
  const text = "Consult Further?";
  return (
    <div  className="w-full  m-auto justify-center" ref={ref}>
      <button
        onClick={handleClick}
        className="z-10  btn btn-ghost btn-link cursor-pointer"
      >
        <HeroTitle className=" text-center  hover:shadow-lg shadow translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <span className="">
            {text.split("").map((letter, index) => (
              <motion.span
                variants={container}
                key={index}
                initial={{ opacity: 0 }}
                // animate={{}}
                animate={inView ? { opacity: 1 } : "rotate: 360, scale: 1"}
                className="text container"
                transition={{ duration: 0.4, delay: index * 0.01 }}
              >
                {letter}
              </motion.span>
            ))}
          </span>{" "}
        </HeroTitle>
      </button>
    </div>
  );
};

export default Developer;
