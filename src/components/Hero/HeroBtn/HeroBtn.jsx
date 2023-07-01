import "./styles.module.css";
import { Suspense, useState } from "react";
import { motion, MotionConfig, useMotionValue } from "framer-motion";
import { Shapes } from "./Shapes";
import { transition } from "./settings.jsx";
import useMeasure from "react-use-measure";
import { Button, Highlight } from "../../features/Button";
import { useNavigate } from "react-router-dom";

export default function HeroBtn() {
  const [ref, bounds] = useMeasure({ scroll: false });
  const [isHover, setIsHover] = useState(false);
  const [isPress, setIsPress] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const resetMousePosition = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/ai/compose");
  };
  return (
    <MotionConfig transition={transition}>
      <motion.button
        onClick={handleClick}
        className="hero-btn group relative flex justify-center  z-10"
        ref={ref}
        initial={false}
        animate={isHover ? "hover" : "rest"}
        whileTap="press"
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.5 },
          press: { scale: 1.4 },
        }}
        onHoverStart={() => {
          resetMousePosition();
          setIsHover(true);
        }}
        onHoverEnd={() => {
          resetMousePosition();
          setIsHover(false);
        }}
        onTapStart={() => setIsPress(true)}
        onTap={() => setIsPress(false)}
        onTapCancel={() => setIsPress(false)}
        onPointerMove={(e) => {
          mouseX.set(e.clientX - bounds.x - bounds.width / 2);
          mouseY.set(e.clientY - bounds.y - bounds.height / 2);
        }}
      >
        <motion.div
          className="shapes group absolute inset-0 z-10"
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1 },
          }}
        >
          <div className="pink blush" />
          <div className="blue blush" />
          <div className="container relative bottom-16">
            <Suspense fallback={null}>
              <Shapes
                isHover={isHover}
                isPress={isPress}
                mouseX={mouseX}
                mouseY={mouseY}
              />
            </Suspense>
          </div>
        </motion.div>
        <motion.div>
          <Button
            className="translate-y-[-1rem] flex items-center justify-evenly  label animate-fade-in opacity-0 [--animation-delay:600ms]"
            href="/"
            variant="primary"
            size="large"
            variants={{ hover: { scale: 0.85 }, press: { scale: 1.1 } }}
          >
            <span className="z-20 tracking-wide text-primary-text hover:text-white font-semibold font-sans group-hover:text-white">
              Get Started{" "}
            </span>
            <Highlight>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="z-20 group-hover:translate-x-3 animate-bounce duration-700 transform-cpu text-primary-text hover:text-white font-semibold font-sans group-hover:text-white"
              >
                <path d="M5.46967 11.4697C5.17678 11.7626 5.17678 12.2374 5.46967 12.5303C5.76256 12.8232 6.23744 12.8232 6.53033 12.5303L10.5303 8.53033C10.8207 8.23999 10.8236 7.77014 10.5368 7.47624L6.63419 3.47624C6.34492 3.17976 5.87009 3.17391 5.57361 3.46318C5.27713 3.75244 5.27128 4.22728 5.56054 4.52376L8.94583 7.99351L5.46967 11.4697Z"></path>
              </svg>
            </Highlight>
          </Button>
        </motion.div>
      </motion.button>
    </MotionConfig>
  );
}
