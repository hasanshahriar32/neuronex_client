import img from "./images/illustration-woman-online-mobile.svg";
const FAQ = () => {
  return (
    <div className="my-[100px] ">
      <div className="md:flex justify-around gap-4">
        <div className="md:w-1/2 flex items-center justify-items-center">
          <img
            src={img}
            alt="illustration-woman-online"
            className="h-[380px] -ml-8 md:h-[300px] lg:h-[500px]"
          />
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
