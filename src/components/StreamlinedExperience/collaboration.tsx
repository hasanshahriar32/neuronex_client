import { useTransform, useScroll, motion } from "framer-motion";
import { useRef } from "react";
import React from "react";
import { isSafari } from "react-device-detect";
import { useInView } from "react-intersection-observer";
import { HeroTitle } from "../Hero/hero";
export const Collaboration = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const extendedRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });
  const [ref, inView] = useInView({
    triggerOnce: false, // Only trigger once when the component comes into view
    threshold: 0.1, // Adjust the threshold value as per your needs
  });
  const { scrollYProgress: scrollYProgressIncludingOverlap } = useScroll({
    target: extendedRef,
    offset: ["start end", "end end"],
  });
  const position = useTransform(scrollYProgress, (pos) =>
    pos >= 0.3 && pos <= 1 ? "fixed" : "relative"
  );
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
  const positions = useTransform(scrollYProgress, (pos) =>
    pos <= 9 ? "relative" : "hidden"
  );
  const scale = useTransform(
    scrollYProgressIncludingOverlap,
    [0.1, 0.4, 0.75, 1],
    [1, 2.5, 4.2, 1]
  );
  const x = useTransform(
    scrollYProgressIncludingOverlap,
    [0.1, 0.25, 0.75, 1],
    ["0vw", "-55vw", "-135vw", "-18vw"]
  );
  const y = useTransform(
    scrollYProgressIncludingOverlap,
    [0.75, 1],
    ["0vh", "40vh"]
  );
  const opacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);

  const avatarGroupOpacity = useTransform(
    scrollYProgress,
    [0, 0.23, 0.25],
    [0, 0, 1]
  );
  const text = "Three in One";
  const avatarGroupX = useTransform(
    scrollYProgress,
    [0, 0.23, 0.25, 0.4, 0.45, 0.6, 0.65],
    ["60px", "60px", "40px", "40px", "20px", "20px", "0px"]
  );

  const avatarOneScale = useTransform(
    scrollYProgress,
    [0, 0.23, 0.25, 0.85, 0.9],
    [0, 0, 1, 1, 0]
  );

  const avatarTwoScale = useTransform(
    scrollYProgress,
    [0, 0.4, 0.45],
    [0, 0, 1]
  );

  const avatarTwoOpacity = useTransform(
    scrollYProgressIncludingOverlap,
    [0.9999, 1],
    [1, 0]
  );

  const avatarThreeScale = useTransform(
    scrollYProgress,
    [0, 0.6, 0.65, 0.85, 0.9],
    [0, 0, 1, 1, 0]
  );

  return (
    <section
      ref={targetRef}
      className="scroll-smooth relative z-10 mt-60 h-[300vh]"
    >
      <div ref={extendedRef} className="mb-[-120vh] h-[420vh] w-full">
        <motion.div style={{ position }} className="sticky top-[10vh]">
          <div className="flex justify-center">
            <motion.div style={{ scale, x, y }} className="origin-top">
              <motion.img
                style={{ opacity, position: positions }}
                src="https://i.ibb.co/N9YgJjq/Screenshot-2023-07-22-130559.png"
                className={`h-auto max-h-none w-[70vw] `}
              />
              <motion.div
                style={{ opacity: avatarGroupOpacity, x: avatarGroupX }}
                className="absolute right-[10%] top-[1.5%] flex gap-2"
              >
                <motion.img
                  style={{ scale: avatarOneScale }}
                  className="h-[1.5vw] w-[1.5vw] rounded-full border border-[#a422db] object-cover"
                  src="https://sjinnovation.com/sites/default/files/inline-images/pic%201_39.png"
                />
                <motion.img
                  style={{ scale: avatarTwoScale, opacity: avatarTwoOpacity }}
                  className="h-[1.5vw] w-[1.5vw] rounded-full border border-[#c82] object-cover"
                  src="https://www.cambridgewireless.co.uk/media/uploads/files/AI-icon.png"
                />
                <motion.img
                  style={{ scale: avatarThreeScale }}
                  className="h-[1.5vw] w-[1.5vw] rounded p-[1px] border border-secondary object-cover"
                  src="https://hstu.ac.bd/img/hstu_logo_.png"
                />
              </motion.div>
            </motion.div>
          </div>
          <motion.h2
            ref={ref}
            className="absolute font-sans scroll-smooth flex items-center flex-col text-6xl lg:text-8xl text-success top-2 right-1 h-screen justify-center"
            style={{ opacity: avatarThreeScale }}
          >
            <HeroTitle className={undefined}>
              <motion.div
                initial={!isSafari ? { rotate: 0 } : "scale: 0"}
                className="text container"
              >
                {text.split("").map((letter, index) => (
                  <motion.span
                    variants={container}
                    key={index}
                    initial={{ opacity: 0 }}
                    // animate={{}}
                    animate={inView ? { opacity: 1 } : "rotate: 360, scale: 1"}
                    className="text container"
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.div>
            </HeroTitle>
            {/* <motion.span>Three</motion.span>
            <motion.span>in</motion.span>
            <motion.span>One</motion.span> */}
          </motion.h2>
        </motion.div>
      </div>
    </section>
  );
};
