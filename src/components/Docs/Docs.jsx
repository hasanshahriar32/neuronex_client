
const Docs = () => {

    return (
        <div className=" py-[5.6rem] text-sm">
            <div className="mx-auto max-w-[120rem] px-8 flex flex-col space-y-[80px] ">
                <Main />
                <SecuritySection />
                <PaymentSection />
                <Other />
            </div>
        </div>
    );
};

const Main = () => {
    const faq = [
        {
            question: "Can I check my token use?",
            answer: "Yes you can check your token use and remaining tokens from the dashboard."
        },
        {
            question: "Is the payment recurring or should I pay manually?",
            answer: "You have to purchage tokens manually once you have used all the tokenes or the duration of the tokens is expired"
        },
    ]

    return (
        <div className="">
            <div className="border min-h-[70vh]">
            </div>
            <div className="my-10">
                <FaqSection data={faq} />
            </div>
        </div>

    )
}
const FaqSection = ({ data }) => {

    return (
        <div>
            <div className="">
                <div className="">
                    <p className="text-3xl font-bold text-center mb-4">Related questions</p>
                </div>
                <div className="mx-2">
                    {data.map((f) => (
                        <details className="py-3 border-b md:w-80 hover:cursor-pointer" key={f.question}>
                            <summary className="flex justify-between items-center text-summary md:text-sm font-normal text-very-dark-grayish-blue hover:text-soft-red">
                                {f.question}
                            </summary>
                            <p className="text-dark-grayish-blue text-xs font-normal">{f.answer}</p>
                        </details>
                    ))}
                </div>
            </div>
        </div>
    )
}

const SecuritySection = () => {
    const faq = [
        {
            question: "Can I check my token use?",
            answer: "Yes you can check your token use and remaining tokens from the dashboard."
        },
        {
            question: "Is the payment recurring or should I pay manually?",
            answer: "You have to purchage tokens manually once you have used all the tokenes or the duration of the tokens is expired"
        },
    ]
    return (
        <div className={`flex flex-col  gap-4  md:flex-row min-h-[300px]`}>
            <div className="md:w-1/2 border ">hello</div>
            <div className="md:w-1/2 ">
                <FaqSection data={faq} />
            </div>
        </div>

    )
}

const PaymentSection = () => {
    const faq = [
        {
            question: "Can I check my token use?",
            answer: "Yes you can check your token use and remaining tokens from the dashboard."
        },
        {
            question: "Is the payment recurring or should I pay manually?",
            answer: "You have to purchage tokens manually once you have used all the tokenes or the duration of the tokens is expired"
        },
    ]
    return (
        <div className={`flex flex-col  gap-4  md:flex-row-reverse min-h-[300px]`}>
            <div className="md:w-1/2 border ">hello</div>
            <div className="md:w-1/2 ">
                <FaqSection data={faq} />
            </div>
        </div>
    )
}

const Other = () => {
    const faq = [
        {
            question: "Can I check my token use?",
            answer: "Yes you can check your token use and remaining tokens from the dashboard."
        },
        {
            question: "Is the payment recurring or should I pay manually?",
            answer: "You have to purchage tokens manually once you have used all the tokenes or the duration of the tokens is expired"
        },
    ]
    return (
        <div className={`flex flex-col  gap-4  md:flex-row min-h-[300px]`}>
            <div className="md:w-1/2 border ">hello</div>
            <div className="md:w-1/2 ">
                <FaqSection data={faq} />
            </div>
        </div>

    )
}

export default Docs;