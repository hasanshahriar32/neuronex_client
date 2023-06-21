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
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">AI Configure</h1>

      <div className="mb-4">
        <label className="block">
          <span className="text-gray-700">Select Your Subject to Proceed</span>
          <select
            {...register("subject-selection", {
              required: true,
            })}
            aria-invalid={errors["subject-selection"] ? "true" : "false"}
            className="form-select mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
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
        <p className="mb-2">Assistance Level</p>
        {[
          { label: "Basic explanation", value: "Basic explanation" },
          { label: "In-depth explanation", value: "In-depth explanation" },
          { label: "Step-by-step guidance", value: "Step-by-step guidance" },
          { label: "Practice exercises", value: "Practice exercises" },
        ].map(({ label, value }, index) => {
          return (
            <label key={value + index} className="inline-flex items-center">
              <input
                {...register("assistance-level", {
                  required: "Please select an item in the list.",
                })}
                aria-invalid={errors["assistance-level"] ? "true" : "false"}
                value={value}
                type="radio"
                className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              />
              <span className="ml-2">{label}</span>
            </label>
          );
        })}
        {errors["assistance-level"] && (
          <p role="alert" className="text-red-500">
            {errors["assistance-level"]?.message}
          </p>
        )}
      </div>

      <button
        disabled={isSubmitting}
        className="bg-indigo-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Submit
      </button>
    </form>
  );
}
