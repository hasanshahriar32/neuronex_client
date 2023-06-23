import classNames from "classnames";

const HeroTitle = ({ children, className }) => {
  return (
    <h1
      className={classNames(
        "text-gradient my-6 text-6xl md:text-8xl",
        className
      )}
    >
      {children}
    </h1>
  );
};

const HeroSubtitle = ({ children, className }) => {
  return (
    <p
      className={classNames(
        "mb-12 text-lg text-primary-text md:text-xl",
        className
      )}
    >
      {children}
    </p>
  );
};

const Hero = ({ children }) => {
  return <div className="text-center dark:disabled">{children}</div>;
};

export { Hero, HeroSubtitle, HeroTitle };
