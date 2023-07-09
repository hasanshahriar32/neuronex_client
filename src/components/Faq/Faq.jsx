import Lottie from 'lottie-react';
import faq from '../../assets/lottie/faq1.json';
import { useLocation } from 'react-router';
const FAQ = () => {

    const location = useLocation()
    const isFaqRoute= location.pathname === "/faq"

    const additionalFaq= [
        {
            question: "Can I check my token use?",
            answer: "Yes you can check your token use and remaining tokens from the dashboard."
        },
        {question: "Is the payment recurring or should I pay manually?",
        answer: "You have to purchage tokens manually once you have used all the tokenes or the duration of the tokens is expired"
        },
    ]

    return (
        <div className="my-[100px] container mx-auto lg:px-[80px]">
            <div className="md:flex gap-4">
                <div className="md:w-1/2 md:flex  items-center  justify-items-center">
                    <Lottie className='w-[350px] lg:w-[450px] mx-auto' animationData={faq} loop={true} />
                </div>

                <div className="md:w-1/2 p-4 md:p-0 text-md">
                    <div className="transform -translate-y-26 md:translate-y-0 mt-15 md:mb-20 flex flex-col justify-center ">
                        <h1 className="text-5xl font-bold text-center md:text-left mb-10">
                            FAQ
                        </h1>
                        <div className="mt-9.5 space-y-4">
                            <details className="pb-5 border-b md:w-80 hover:cursor-pointer">
                                <summary className="flex justify-between items-center text-summary md:text-sm font-normal text-very-dark-grayish-blue hover:text-soft-red">
                                    How many team members can I invite?
                                </summary>
                                <p className="text-dark-grayish-blue text-xs font-normal">
                                    You can invite up to 2 additional users on the Free plan.
                                    There is no limit on team members for the Premium plan.
                                </p>
                            </details>

                            <details className="pb-5 border-b md:w-80 hover:cursor-pointer">
                                <summary className="flex justify-between items-center text-summary md:text-sm font-normal text-very-dark-grayish-blue hover:text-soft-red">
                                    What is the maximum file upload size?
                                </summary>
                                <p className="text-dark-grayish-blue text-xs font-normal">
                                    No more than 2GB. All files in your account must fit your
                                    allotted storage space.
                                </p>
                            </details>

                            <details className="pb-5 border-b md:w-80 hover:cursor-pointer">
                                <summary className="flex justify-between items-center text-summary md:text-sm font-normal text-very-dark-grayish-blue hover:text-soft-red">
                                    How do I reset my password?
                                </summary>
                                <p className="text-dark-grayish-blue text-xs font-normal">
                                    Click “Forgot password” from the login page or “Change
                                    password” from your profile page. A reset link will be emailed
                                    to you.
                                </p>
                            </details>

                            <details className="pb-5 border-b md:w-80 hover:cursor-pointer">
                                <summary className="flex justify-between items-center text-summary md:text-sm font-normal text-very-dark-grayish-blue hover:text-soft-red">
                                    Can I cancel my subscription?
                                </summary>
                                <p className="text-dark-grayish-blue text-xs font-normal">
                                    Yes! Send us a message and we’ll process your request no
                                    questions asked.
                                </p>
                            </details>

                            <details className="pb-5 border-b md:w-80 hover:cursor-pointer">
                                <summary className="flex justify-between items-center text-summary md:text-sm font-normal text-very-dark-grayish-blue hover:text-soft-red">
                                    Do you provide additional support?
                                </summary>
                                <p className="text-dark-grayish-blue text-xs font-normal">
                                    Chat and email support is available 24/7. Phone lines are open
                                    during normal business hours.
                                </p>
                            </details>
                            
                            {
                            isFaqRoute &&
                            additionalFaq.map((f) => (
                                <details className="pb-5 border-b md:w-80 hover:cursor-pointer" key={f.question}>
                                <summary className="flex justify-between items-center text-summary md:text-sm font-normal text-very-dark-grayish-blue hover:text-soft-red">
                                    {f.question}
                                </summary>
                                <p className="text-dark-grayish-blue text-xs font-normal">{f.answer}</p>
                                </details>
                            ))
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
