import { useForm } from "react-hook-form";

export default function AiSetting() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      "subject-selection": "",
      "assistance-level": "",
    },
  });

  const onSubmit = (data) => alert(JSON.stringify(data));

  // if (submissionId) {
  //   return <p>Thank you! Submission Id: {submissionId}</p>;
  // }

  return (
    <div className="card flex-shrink-0 border-secondary-focus bg-hero-glow bg-blend-darken  w-full max-w-7xl border-dashed border shadow-2xl bg-base-100">
      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <h1 className="text-4xl font-bold mb-4">AI Configure</h1>

          <div className="mb-4 form-control">
            <label className=" flex flex-col">
              <span className="label text-gray-700 text-lg">
                Select Your Subject to Proceed
              </span>
              <select
                {...register("subject-selection", {
                  required: true,
                })}
                aria-invalid={errors["subject-selection"] ? "true" : "false"}
                className="form-select select text-lg h-12 w-full  border-secondary text-gray-700"
              >
                <option disabled selected>
                  Subject Selection
                </option>
                <option value="Mathematics">Mathematics</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Physics">Physics</option>
                <option value="Literature">Literature</option>
                <option value="IT">IT</option>
              </select>
              {errors["subject-selection"] && (
                <p role="alert" className="text-red-500">
                  {errors["subject-selection"]?.message}
                </p>
              )}
            </label>
          </div>

          <div className="mb-4">
            <p className="mb-2 label text-lg">Assistance Level</p>
            {[
              { label: "Basic explanation", value: "Basic explanation" },
              { label: "In-depth explanation", value: "In-depth explanation" },
              {
                label: "Step-by-step guidance",
                value: "Step-by-step guidance",
              },
              { label: "Practice exercises", value: "Practice exercises" },
            ].map(({ label, value }, index) => {
              return (
                <label
                  key={value + index}
                  className="text-lg h-12 min-w-[250px] max-w-[45%] flex flex-row flex-wrap overflow-hidden items-center input input-ghost border-secondary border-solid hover:border-double focus:border-dashed mb-2"
                >
                  <input
                    {...register("assistance-level", {
                      required: "Please select an item in the list.",
                    })}
                    aria-invalid={errors["assistance-level"] ? "true" : "false"}
                    value={value}
                    type="radio"
                    className="form-radio h-6 w-6 radio radio-secondary text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <span className="ml-2 ">{label}</span>
                </label>
              );
            })}
            {errors["assistance-level"] && (
              <p role="alert" className="text-red-500">
                {errors["assistance-level"]?.message}
              </p>
            )}
          </div>

          <div className="flex justify-end w-full">
            <button
              disabled={isSubmitting}
              className="btn btn-secondary text-md btn-outline border border-secondary btn-lg "
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
