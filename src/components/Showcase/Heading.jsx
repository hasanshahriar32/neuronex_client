const CommonHeading = ({ heading, noPadding }) => {
    const main = (
        <>
            <h2 className="mr-5 text-2xl md:text-4xl capitalize">{heading}</h2>
            <hr className="w-30 h-1" />
        </>
    );

    const style = 'flex py-4 px-0 items-center justify-between';

    return (
        <div className={`${style} ${noPadding ? 'box' : 'container'} ${noPadding ? '' : 'px-2'}`}>
            {main}
        </div>
    );
};


export default CommonHeading;