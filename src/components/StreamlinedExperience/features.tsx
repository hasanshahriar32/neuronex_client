import { stylesWithCssVar } from "./motion";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import React from "react";
export const Features = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.9, 1], [0.8, 0.8, 1]);
  const x = useTransform(scrollYProgress, [0.3, 1], ["50%", "0%"]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5, 0.6, 0.85, 0.9],
    [1, 1, 0.4, 0.4, 1]
  );

  const text1Opacity = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.5],
    [0, 1, 0]
  );
  const text1Y = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.5],
    ["30px", "0px", "-30px"]
  );

  const text2Opacity = useTransform(
    scrollYProgress,
    [0.5, 0.6, 0.7],
    [0, 1, 0]
  );
  const text2Y = useTransform(
    scrollYProgress,
    [0.5, 0.6, 0.7],
    ["30px", "0px", "-30px"]
  );

  const text3Opacity = useTransform(
    scrollYProgress,
    [0.7, 0.8, 0.9],
    [0, 1, 0]
  );
  const text3Y = useTransform(
    scrollYProgress,
    [0.7, 0.8, 0.9],
    ["30px", "0px", "-30px"]
  );

  const position = useTransform(scrollYProgress, (pos) =>
    pos >= 0.1 && pos <= 0.999999999 ? "fixed" : "relative"
  );
  return (
    <section
      ref={targetRef}
      className="flex h-[500vh] flex-col items-center justify-start"
    >
      <motion.div
        style={{ position }}
        className=" top-[16.7vh] h-[66.8vh] px-16 text-2xl leading-[1] text-white [&_p]:w-[45rem] [&_p]:max-w-[90%]"
      >
        <motion.div style={{ x, scale }} className="relative h-full">
          <motion.figure style={{ opacity }} className="h-full">
            <img
              src="https://i.ibb.co/mSYhp53/356072737-1725566964560639-6041589234748836019-n.jpg"
              className="h-full w-auto object-cover opacity-40"
            />
          </motion.figure>
          <motion.figure style={{ opacity: text2Opacity }}>
            <img
              src="https://i.ibb.co/2dPTPFP/356226858-1725566261227376-3696734891046274627-n.jpg"
              className="absolute inset-0 h-full w-auto object-cover opacity-40"
            />
          </motion.figure>
          <motion.figure style={{ opacity: text3Opacity }}>
            <img
              src="https://i.ibb.co/f90Z8wt/356123136-1725567137893955-649602758100029816-n.jpg"
              className="absolute inset-0 h-full w-auto object-cover opacity-40"
            />
          </motion.figure>
        </motion.div>
        <motion.p
          style={stylesWithCssVar({
            opacity: text1Opacity,
            "--y": text1Y,
          })}
          className="translate-y-centered-offset absolute top-1/2 left-0"
        >
          <span className="text-primary text-3xl lg:text-5xl mb-3">
            1. Academic Assistance
          </span>
          <br />
          Neuronex AI is trained to help the HSTU students at their academic
          lessons.
        </motion.p>
        <motion.p
          style={stylesWithCssVar({
            opacity: text2Opacity,
            "--y": text2Y,
          })}
          className="translate-y-centered-offset absolute top-1/2 left-0"
        >
          <span className="text-primary text-3xl lg:text-5xl mb-3">
            2. Admission Assistance
          </span>
          <br />
          We are developing this AI to help the newcomers and admission
          candidates at different perspective.
        </motion.p>
        <motion.p
          style={stylesWithCssVar({
            opacity: text3Opacity,
            "--y": text3Y,
          })}
          className="translate-y-centered-offset absolute top-1/2 left-0"
        >
          <span className="text-primary text-3xl lg:text-5xl mb-3">
            3. Information Gathering
          </span>
          <br />
          We've bundled useful tools to help you get your work done faster and
          more efficiently.
        </motion.p>
      </motion.div>
    </section>
  );
};
