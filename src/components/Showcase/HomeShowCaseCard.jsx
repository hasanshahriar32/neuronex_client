const HomeShowCaseCard = ({ author, text }) => {

    return (
        <>
            <div className="" >
                <div className={`overflow-hidden block text-gray-50 transition duration-300 homecate-card hover:no-underline no-underline hover:brightness-100 md:brightness-[.3]  w-full relative cursor-pointer `}>
                    <div className='overflow-hidden w-full h-full rounded-xl'>
                        <div className=''>
                            <div className="max-w-md mx-auto  rounded-lg overflow-hidden shadow-lg">
                                <div className="p-6">
                                    <p className="text-gray-800 text-base">{text}</p>
                                    <p className="text-gray-500 text-sm mt-2">- {author}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeShowCaseCard;