const HeroTitle = ({ children }) => {
    return (
        <h1 className="text-gradient my-6 text-6xl md:text-8xl">
            {children}
        </h1>
    );
};

const HeroSubtitle = ({ children }) => {
    return (
        <p className="mb-12 text-lg text-primary-text md:text-xl">
            {children}
        </p>
    );
};

const Hero = ({ children }) => {
    return <div className="text-center">{children}</div>;
};

export { Hero, HeroSubtitle, HeroTitle };
