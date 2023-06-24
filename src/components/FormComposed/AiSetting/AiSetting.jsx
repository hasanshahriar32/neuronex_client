import { useForm } from "react-hook-form";
import { AiContext } from "../FormContext/FormContext";
import { useContext } from "react";

export default function AiSetting() {
  const { setAiConfig, setModalState } = useContext(AiContext);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      subjectSelection: "",
      assistanceLevel: "",
    },
  });

  const onSubmit = (data) => {
    setAiConfig(data);
    console.log(data);
    setModalState(false);
  };

  return (
    <div className="card  w-full  my-10 max-w-7xl">
      <div className="card-body shadow-primary mx-[5%]  shadow-2xl  flex-shrink-0 border-secondary-focus bg-hero-glow bg-blend-darken shadow-transparent/90 border-dashed border bg-base-100">
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <h1 className="text-4xl font-bold mb-4">AI Configure</h1>

          <div className="mb-4 form-control">
            <label className=" flex flex-col">
              <span className="label text-gray-700 text-lg">
                Select Your Subject to Proceed
              </span>
              <select
                {...register("subjectSelection", {
                  required: "Please select a subject.",
                })}
                aria-invalid={errors["subjectSelection"] ? "true" : "false"}
                className="form-select mb-2 select text-md h-12 w-full select-ghost  border-secondary text-gray-700"
              >
                <option disabled selected>
                  Subject Selection
                </option>
                <option value="Mathematics">Mathematics</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Physics">Physics</option>
                <option value="Literature">Literature</option>
                <option value="IT">IT</option>
                <option value="Biology">Biology</option>
                <option value="History">History</option>
                <option value="Psychology">Psychology</option>
                <option value="Economics">Economics</option>
                <option value="Sociology">Sociology</option>
                <option value="Political Science">Political Science</option>
                <option value="Philosophy">Philosophy</option>
                <option value="Art">Art</option>
                <option value="Music">Music</option>
                <option value="Geography">Geography</option>
              </select>
              {errors["subjectSelection"] && (
                <p role="alert" className="text-red-500 border-error">
                  {errors["subjectSelection"]?.message}
                </p>
              )}
            </label>
          </div>

          <div className="mb-4">
            <p className="mb-2 label text-lg">Assistance Level</p>
            <div className="flex flex-row justify-start md:justify-between flex-wrap gap-4 items-center">
              {[
                { label: "Basic explanation", value: "Basic explanation" },
                {
                  label: "In-depth explanation",
                  value: "In-depth explanation",
                },
                {
                  label: "Step-by-step guidance",
                  value: "Step-by-step guidance",
                },
                { label: "Practice exercises", value: "Practice exercises" },
              ].map(({ label, value }, index) => {
                return (
                  <label
                    key={value + index}
                    className="text-md h-12 min-w-[250px] w-full  max-w-full md:max-w-[45%] flex flex-wrap overflow-hidden items-center input input-ghost border-secondary border-solid hover:border-double focus:border-dashed mb-2"
                  >
                    <input
                      {...register("assistanceLevel", {
                        required: "Please select an item in the list.",
                      })}
                      aria-invalid={
                        errors["assistanceLevel"] ? "true" : "false"
                      }
                      value={value}
                      type="radio"
                      className="form-radio h-6 w-6 radio radio-secondary text-indigo-600 transition duration-150 ease-in-out"
                    />
                    <span className="ml-2 ">{label}</span>
                  </label>
                );
              })}
            </div>
            {errors["assistanceLevel"] && (
              <p role="alert" className="text-red-500">
                {errors["assistanceLevel"]?.message}
              </p>
            )}
          </div>

          {/* get input text from user */}
          <div className="mb-2">
            <p className="mb-2 label text-lg">Enter additional instruction</p>
            <input
              {...register("additional-instruction", {
                required: "Please enter additional instruction.",
              })}
              type="text"
              className="input h-12 input-ghost text-lg input-secondary border-solid focus:border-dotted w-full"
              placeholder="Enter additional instruction"
            />
          </div>
          {
            // errors will return when field validation fails
            errors["additional-instruction"] && (
              <p role="alert" className="text-red-500">
                {errors["additional-instruction"]?.message}
              </p>
            )
          }

          <div className="flex justify-between mt-2 w-full">
            <p className="mt-4">
              <span className="text-gray-700 text-sm">Step 1 of 2</span>
            </p>
            <button
              disabled={isSubmitting}
              className="btn modal-action btn-secondary text-md shadow-sm tracking-wide font-semibold focus:shadow-primary-text  hover:shadow-primary hover:shadow-info border border-secondary btn-lg "
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
