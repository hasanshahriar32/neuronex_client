import { useForm } from "react-hook-form";

export default function AiQuery() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      "fill-your-query": "",
      "additional-instruction": "",
    },
  });

  const onSubmit = (data) => alert(JSON.stringify(data));

//   if (submissionId) {
//     return <p>Thank you! Submission Id: {submissionId}</p>;
//   }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Query</h1>

      <div className="mb-4">
        <label className="block">
          <span className="text-gray-700">Ask your question.</span>
          <textarea
            {...register("fill-your-query", {
              required: true,
            })}
            aria-invalid={errors["fill-your-query"] ? "true" : "false"}
            placeholder="What is the value of Pi?"
            type="textarea"
            className="form-textarea mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </label>
        {errors["fill-your-query"] && (
          <p role="alert" className="text-red-500">
            {errors["fill-your-query"]?.message}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label className="block">
          <span className="text-gray-700">Additional Instruction.</span>
          <input
            {...register("additional-instruction")}
            placeholder="Give additional instruction about your query."
            type="text"
            className="form-input mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </label>
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
