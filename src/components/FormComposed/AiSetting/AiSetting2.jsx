import { useForm } from "react-hook-form";
import { AiContext } from "../../../Contexts/FormContext/FormContext";
import { useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import axios from "axios";
import DrawerToggle from "../../../layout/Dashboard/DrawerToggle";
import { ChatContext } from "../../../Contexts/SessionContext/SessionContext";
import { AuthContext } from "../../../Contexts/UserContext/UserContext";

export default function AiSetting2() {
  const { setAiConfig, setModalState, aiConfig } = useContext(AiContext);
  const { setMessages, sesstionData, setSessionData } = useContext(ChatContext);
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      subjectSelection: "Admission",
      assistanceLevel: aiConfig?.assistanceLevel || "",
      additionalInstruction: aiConfig?.additionalInstruction || "",
    },
  });
  useEffect(() => {
    // Set default values for subjectSelection and assistanceLevel
    const defaultSub = "Admission";
    const defaultAssist = aiConfig?.assistanceLevel || "";
    const defaultAdditional = aiConfig?.additionalInstruction || "";

    reset({
      subjectSelection: defaultSub,
      assistanceLevel: defaultAssist,
      additionalInstruction: defaultAdditional,
    });
  }, [
    reset,
    aiConfig.sessionId,
    aiConfig?.subjectSelection,
    aiConfig?.assistanceLevel,
    aiConfig?.additionalInstruction,
  ]);

  const onSubmit = async (data) => {
    if (
      data?.subjectSelection == aiConfig?.subjectSelection &&
      data?.assistanceLevel == aiConfig?.assistanceLevel &&
      data?.additionalInstruction == aiConfig?.additionalInstruction
    ) {
      setModalState(false);
      toast.warning("No changes made!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
    const dataId = uuidv4();
    data = { ...data, sessionId: dataId };

    if (
      data?.subjectSelection !== "" ||
      data?.assistanceLevel !== "" ||
      data?.additionalInstruction !== ""
    ) {
      setMessages([]);
      toast.success("New session created!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        };
        const { data: dataGet } = await axios.post(
          "https://ai-chatbot-server.vercel.app/session",
          {
            sessionTitle: data?.additionalInstruction || "",
            subjectSelection: data?.subjectSelection,
            assistanceLevel: data?.assistanceLevel,
            additionalInstruction: data?.additionalInstruction,
            sessionId: dataId,
            uid: user?.uid,
          },
          config
        );
        setAiConfig(dataGet);
        // push data to sessiondata
        console.log(data);
        console.log(dataGet);
        console.log(sesstionData);
        if (sesstionData?.length === 0) {
          setSessionData([dataGet]);
        } else {
          setSessionData([dataGet, ...sesstionData]);
        }
      } catch (error) {
        console.log(error);
        toast({
          title: "Error Occurred!",
          description: "Failed to send the message.",
          status: "error",
          duration: 4000,
          isClosable: true,
          theme: "dark",
        });
      }
      setModalState(false);
      return;
    }
    if (
      data?.subjectSelection === "" ||
      data?.assistanceLevel === "" ||
      data?.additionalInstruction === ""
    ) {
      console.log("fill all fields");
      setModalState(true);
      toast.warning("Please fill all the fields!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <div className="card  w-full my-6 max-w-7xl">
      {/* <ToastContainer /> */}
      <div className="card-body shadow-primary mx-[5%]  shadow-sm   flex-shrink-0 border-info bg-hero-glow bg-blend-darken shadow-transparent/90 border-dashed inset-0 border-2  bg-base-100">
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <div className="flex flex-row-reverse justify-between flex-wrap-reverse w-full place-items-end">
            <h1 className="text-4xl font-bold">AI Configure</h1>
            <div className="mb-2">
              <DrawerToggle></DrawerToggle>
            </div>
          </div>

          <div className="mb-4 form-control hidden">
            <label className=" flex flex-col">
              <span className="label text-gray-700 text-lg flex justify-start gap-2">
                <span>Select Your Subject to Proceed</span>
              </span>
              <select
                {...register("subjectSelection", {
                  //   required: "Please select an item.",
                  defaultValue: "Admission",
                })}
                {...register("subjectSelection", {})}
                value="Admission"
                aria-invalid={errors["subjectSelection"] ? "true" : "false"}
                defaultValue={aiConfig?.subjectSelection}
                className="form-select chatScroll select text-sm h-8 w-full select-ghost  border-info text-gray-700"
              >
                <option value="Admission" selected>
                  Fine Tune
                </option>
              </select>
              {errors["subjectSelection"] && (
                <p role="alert" className="text-error mt-2">
                  {errors["subjectSelection"]?.message}
                </p>
              )}
            </label>
          </div>

          <div className="mb-4">
            <p className="label text-lg flex justify-start gap-2">
              <span>Assistance Level</span>
            </p>
            <div className="flex flex-row justify-start md:justify-between flex-wrap gap-1 items-center">
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
                    className="text-sm h-8 min-w-[250px] w-full  max-w-full md:max-w-[45%] flex flex-wrap overflow-hidden items-center input input-ghost border-info border-solid hover:border-double focus:border-dashed mb-2"
                  >
                    <input
                      defaultValue={aiConfig?.assistanceLevel}
                      {...register("assistanceLevel", {
                        required: "Please select an item in the list.",
                      })}
                      aria-invalid={
                        errors["assistanceLevel"] ? "true" : "false"
                      }
                      value={value}
                      type="radio"
                      className="form-radio h-4 w-4 radio radio-info text-indigo-600 transition duration-150 ease-in-out"
                    />
                    <span className="ml-2 ">{label}</span>
                  </label>
                );
              })}
            </div>
            {errors["assistanceLevel"] && (
              <p role="alert" className="text-error">
                {errors["assistanceLevel"]?.message}
              </p>
            )}
          </div>

          {/* get input text from user */}
          <div className="mb-2">
            <p className=" label text-lg">Enter additional instruction</p>
            <input
              {...register("additionalInstruction", {
                // required: "Please enter additional instruction.",
              })}
              defaultValue={aiConfig?.additionalInstruction}
              type="text"
              className="input h-8 input-ghost text-sm input-info border-solid focus:border-dotted w-full"
              placeholder="Enter additional instruction"
            />
          </div>
          {
            // errors will return when field validation fails
            errors["additionalInstruction"] && (
              <p role="alert" className="text-error">
                {errors["additionalInstruction"]?.message}
              </p>
            )
          }

          <div className="flex justify-between mt-2 w-full">
            <p className="mt-4">
              <span className="text-gray-700 text-sm">Step 1 of 2</span>
            </p>
            <button
              disabled={isSubmitting}
              className="btn modal-action btn-info text-md shadow-sm tracking-wide font-semibold focus:shadow-info-text  hover:shadow-primary hover:shadow-info border border-info btn-lg "
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
