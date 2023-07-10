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
        {
            question: "Can I access the application on multiple devices?",
            answer: "Yes, you can access the application on multiple devices. Once you have purchased a subscription, you can log in from any device with an internet connection and continue your learning progress seamlessly."
        },
        {
            question: "What happens after the subscription duration ends? ",
            answer: "After the subscription duration ends, your access to the application will be limited. Any unused tokens that you have accumulated during your subscription period will expire and become inaccessible. In order to continue using the app and accessing its features, you will need to purchase new tokens or renew your subscription. "
        }
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
                                What subjects are available for study?
                                </summary>
                                <p className="text-dark-grayish-blue text-xs font-normal">
                                    You can study any subject or topics. Though we've included th most common subjects, you can ask question about a sub-field 
                                    within a specific subject. For example, you can ask astronomy, or rocket science related question after selecting physics as the 
                                    subject. 
                                </p>
                            </details>

                            <details className="pb-5 border-b md:w-80 hover:cursor-pointer">
                                <summary className="flex justify-between items-center text-summary md:text-sm font-normal text-very-dark-grayish-blue hover:text-soft-red">
                                What is the difference among the different subscription options?
                                </summary>
                                <p className="text-dark-grayish-blue text-xs font-normal">
                                The main difference among subscriptions are in the numbers and the validity of the tokens.
                                </p>
                            </details>

                            <details className="pb-5 border-b md:w-80 hover:cursor-pointer">
                                <summary className="flex justify-between items-center text-summary md:text-sm font-normal text-very-dark-grayish-blue hover:text-soft-red">
                                    Can I cancel my subscription?
                                </summary>
                                <p className="text-dark-grayish-blue text-xs font-normal">
                                   No, the payment system is token based. Once you purchage tokens, you can't cancel or get any refund. However, you
                                   can choose not to purchage the tokens after the validity or token ends. 
                                </p>
                            </details>

                            <details className="pb-5 border-b md:w-80 hover:cursor-pointer">
                                <summary className="flex justify-between items-center text-summary md:text-sm font-normal text-very-dark-grayish-blue hover:text-soft-red">
                                Is there a free trial available for the e-learning web app?
                                </summary>
                                <p className="text-dark-grayish-blue text-xs font-normal">
                                    Currently, we don't provide any free trial. 
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
