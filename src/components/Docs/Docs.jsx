import YouTubeEmbed from "../video/YouTubeEmbed";

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
      question: "What is the session feature?",
      answer:
        "The session feature is a unique session Id that is generated for every session. This allows the application to save and load messages from the backend according to the session Id.",
    },
    {
      question: "What AI model is used?",
      answer:
        "The AI model used is Open AI's GPT-3.5-turbo model. It is super fast and cost effective (10X cheaper than text-davinchi model).",
    },
    {
      question: "Can I save my sessions?",
      answer:
        "Yes, you can save your sessions by clicking on the save 💖 icon.",
    },
    {
      question: "Does the AI remember previous responses?",
      answer:
        "Yes, the AI can currently remember last 2 responses. This number can be increased at backend.",
    },
    {
      question: "Is there a voice writing feature?",
      answer: "Yes, there is a voice writing feature available.",
    },
  ];

  return (
    <div className="">
      <div className=" ">
        <div className="">
          <YouTubeEmbed videoId="Ymu11Lr4_JU" />
        </div>
      </div>
      <div className="my-10">
        <div className="flex flex-col max-w-7xl mx-auto">
          <FaqSection data={faq} />
        </div>
      </div>
    </div>
  );
};
const FaqSection = ({ data }) => {
  return (
    <div>
      <div className="">
        <div className="">
          <p className="text-3xl font-bold text-center mb-4">
            Related questions
          </p>
        </div>
        <div className="mx-2">
          {data.map((f) => (
            <details
              className="py-3 border-b md:w-80 hover:cursor-pointer"
              key={f.question}
            >
              <summary className="flex justify-between items-center text-summary md:text-sm font-normal text-very-dark-grayish-blue hover:text-soft-red">
                {f.question}
              </summary>
              <p className="text-dark-grayish-blue text-xs font-normal">
                {f.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};

const SecuritySection = () => {
  const faq = [
    {
      question: "How do I reset my password?",
      answer:
        "To reset your password, go to the login page and click on the 'Forgot Password' link. Follow the instructions sent to your registered email to reset your password.",
    },
    {
      question: "Can I change my username?",
      answer:
        "Currently, the system does not support changing usernames. Please choose your username carefully during the registration process.",
    },
    {
      question: "What should I do if I encounter a technical issue?",
      answer:
        "If you experience any technical issues or errors, please reach out to our support team at support@example.com. Provide details about the problem you're facing, and our team will assist you.",
    },
    {
      question: "Is my personal information secure?",
      answer:
        "Yes, we take the security of your personal information seriously. We have implemented strong security measures to protect your data and ensure confidentiality.",
    },
    {
      question: "How can I upgrade my account?",
      answer:
        "To upgrade your account, go to the account settings page and select the upgrade option. Follow the instructions to complete the upgrade process.",
    },
  ];

  return (
    <>
      <h3 className="text-3xl text-center font-bold">
        Authentication, Authorization and Security
      </h3>
      <div className={`flex flex-col gap-x-4  md:flex-row min-h-[300px]`}>
        <div className="md:w-1/2">
          <YouTubeEmbed videoId="0z-tFb3vC7U" h="min-h-[50vh]" />
        </div>
        <div className="md:w-1/2 ">
          <FaqSection data={faq} />
        </div>
      </div>
    </>
  );
};

const PaymentSection = () => {
  const faq = [
    {
      question: "How can I recharge my account balance?",
      answer:
        "To recharge your account balance, go to the payment section in your user dashboard. Enter your payment details, such as credit card information, and select the recharge amount. After successful payment, your account balance will be updated.",
    },
    {
      question: "Where can I view my transaction history and current balance?",
      answer:
        "You can view your transaction history and current balance in your user dashboard. Navigate to the transactions section to see a list of all your past transactions and the current balance.",
    },
    {
      question: "What happens when my balance runs out?",
      answer:
        "When your balance runs out, you will be prompted to recharge your account. Simply follow the recharge process to add a new balance and extend the validity of your account.",
    },
    {
      question: "Can I customize the recharge amount and duration?",
      answer:
        "Yes, the admin has control over the recharge amount and duration. They can set different recharge options and service charges. Choose the option that best suits your needs.",
    },
    {
      question: "How is the amount deducted from my balance for token usage?",
      answer:
        "The amount is deducted from your balance based on the token usage. The admin sets the cost per 1,000 tokens, and the appropriate amount is deducted from your balance for the tokens you use.",
    },
  ];
  return (
    <>
      <h3 className="text-3xl text-center font-bold">
        {" "}
        Payment and token charge{" "}
      </h3>
      <div
        className={`flex flex-col gap-x-4  md:flex-row-reverse min-h-[300px]`}
      >
        <div className="md:w-1/2">
          <YouTubeEmbed videoId="ieM1wrAPXJA" h="min-h-[50vh]" />
        </div>
        <div className="md:w-1/2 ">
          <FaqSection data={faq} />
        </div>
      </div>
    </>
  );
};

const Other = () => {
  const faq = [
    {
      question: "Can I modify the initial balance for new users?",
      answer:
        "Yes, the admin has the ability to modify the initial balance for new users. This allows you to set a specific amount of credits that new users will have in their accounts upon registration.",
    },
    {
      question: "How can I recharge my account using packages?",
      answer:
        "To recharge your account using packages, go to the AI dashboard and navigate to the recharge section. Select the package that suits your needs, and proceed with the payment. Your account balance will be updated accordingly.",
    },
    {
      question: "Can I customize the charge for 1,000 token usage?",
      answer:
        "Yes, the admin has control over the charge for 1,000 token usage. You can modify the cost associated with token usage according to your requirements and pricing structure.",
    },
    {
      question:
        "What happens if I run out of credits while using the AI services?",
      answer:
        "If your credit balance runs out while using the AI services, you will be prompted to recharge your account. Simply follow the recharge process to add credits and continue using the services.",
    },
    {
      question:
        "Are there different packages available for recharging my account?",
      answer:
        "Yes, there are multiple packages available for recharging your account. The admin can set up different recharge options with varying amounts and benefits. Choose the package that best suits your needs.",
    },
  ];

  return (
    <>
      <h3 className="text-3xl text-center font-bold"> Ai Configuration </h3>
      <div className={`flex flex-col gap-x-4  md:flex-row min-h-[300px]`}>
        <div className="md:w-1/2">
          <YouTubeEmbed videoId="CvPS4hSjgYM" h="min-h-[50vh]" />
        </div>
        <div className="md:w-1/2 ">
          <FaqSection data={faq} />
        </div>
      </div>
    </>
  );
};

export default Docs;
