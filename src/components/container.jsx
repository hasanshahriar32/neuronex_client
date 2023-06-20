export const Container = ({ children, className }) => {
    const containerClassName = `mx-auto max-w-[120rem] px-8` + (className ? ` ${className}` : '');

    return (
        <div className={containerClassName}>
            {children}
        </div>
    );
};
