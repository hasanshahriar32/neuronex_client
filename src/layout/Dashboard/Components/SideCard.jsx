import axios from "axios";
import { useContext } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AiContext } from "../../../Contexts/FormContext/FormContext";
import { ChatContext } from "../../../Contexts/SessionContext/SessionContext";
const SideCard = ({ sesstionData }) => {
    const { setMessages, setSessionMessageLoading } = useContext(ChatContext);
    const { setAiConfig, setModalState, aiConfig } = useContext(AiContext);
    // const handleDelete = (id) => {};
    const handleFetchMessage = async (id) => {
        setSessionMessageLoading(true);
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            };
            const { data: dataGet } = await axios.post(
                "https://neuronex-server-test.vercel.app/session/single",
                {
                    sessionId: id,
                },
                config
            );
            setMessages(dataGet.messages);
            const aiConfigs = {
                subjectSelection: dataGet?.subjectSelection,
                assistanceLevel: dataGet?.assistanceLevel,
                additionalInstruction: dataGet?.additionalInstruction,
                sessionId: dataGet?.sessionId,
                sessionTitle: dataGet?.sessionTitle,
                isBookmarked: dataGet?.isBookmarked || false,
            };
            setAiConfig(aiConfigs);
            console.log(aiConfigs);
            setModalState(false);
            setSessionMessageLoading(false);
            console.log(dataGet);
        } catch (error) {
            console.log(error);
            setSessionMessageLoading(false);
            toast.error({
                title: "Error Occurred!",
                description: "Failed to fetch user session data.",
                status: "error",
                duration: 4000,
                isClosable: true,
                theme: "dark",
            });
        }
    };
    return (
        <>
            {sesstionData?.map((session) => (
                <Link
                    key={session?._id}
                    onClick={() => handleFetchMessage(session?.sessionId)}
                >
                    <div className=" my-2 flex items-center justify-center">
                        <a href="" className="group relative block">
                            <span
                                className={`absolute inset-0 border-2 border-dashed ${aiConfig?.sessionId === session?.sessionId ? "" : "border-accent-focus"}`}
                            ></span>
                            <div
                                className={`relative  duration-100 flex h-full transform items-end border-2 transition-transform  ${aiConfig?.sessionId === session?.sessionId
                                    ? "border-accent mt-2 -translate-x-2 -translate-y-2 ml-2"
                                    : "group-hover:mt-2 group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:ml-2 "
                                    }`}
                            >
                                <div
                                    className={`p-4 my-[2px] lg:my-[1px] !pt-0 transition-opacity ${aiConfig?.sessionId === session?.sessionId
                                        ? "absolute opacity-0"
                                        : "group-hover:absolute group-hover:opacity-0"
                                        }`}
                                >
                                    {/* date and time  */}
                                    <div className="flex items-center text-xs lg:text-sm justify-between mt-2">
                                        <div className="flex items-center">
                                            {/* <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6 mr-2"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                                />
                                            </svg> */}
                                            <p className=" font-medium">
                                                {
                                                    new Date(session?.updatedAt)
                                                        .toISOString()
                                                        .split("T")[0]
                                                }
                                            </p>
                                        </div>
                                        <div className="flex items-center">
                                            <p className="font-medium">
                                                {
                                                    new Date(session?.updatedAt)
                                                        .toISOString()
                                                        .split("T")[1]
                                                        .split(".")[0]
                                                }
                                            </p>
                                        </div>
                                    </div>
                                    {/* title */}
                                    <h2 className="text-sm font-medium mt-1 w-[210px] h-[15px]">
                                        {session?.sessionTitle?.length > 25
                                            ? session?.sessionTitle.substring(0, 25) + "..."
                                            : session?.sessionTitle}
                                    </h2>
                                    <div className="flex mt-4  items-center justify-between flex-row flex-wrap ">
                                        {session?.subjectSelection && (
                                            <div className="flex  gap-1 text-left">
                                                <span className="whitespace-nowrap rounded-full w-[120px] lg:w-[150px]  overflow-hidden bg-success-content px-2 py-1 text-xs text-accent pl-4">{session?.subjectSelection}</span>
                                            </div>
                                        )}
                                        <button
                                            type="button"
                                            className="inline-flex  items-center justify-center rounded-lg border w-10 text-xl lg:text-2xl transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
                                        >
                                            {session?.isBookmarked ? (
                                                <AiFillHeart className="text-red-500" />
                                            ) : (
                                                <AiOutlineHeart />
                                            )}
                                        </button>
                                    </div>
                                </div>
                                <div
                                    className={`absolute p-3  opacity-0 transition-opacity 
                                    ${aiConfig?.sessionId === session?.sessionId
                                            ? "relative opacity-100 bg-base-100/60"
                                            : "group-hover:relative group-hover:opacity-100 group-hover:bg-base-100/40"
                                        } `}
                                >
                                    <h2 className="text-sm font-medium mt-1 w-[210px] h-[20px]">
                                        {session?.sessionTitle?.length > 50
                                            ? session?.sessionTitle.substring(0, 50)
                                            : session?.sessionTitle}
                                    </h2>
                                    <div className="flex mt-6 flex-row items-center justify-between ">
                                        <div className="flex flex-row items-center justify-start">
                                            <p className="text-accent-focus font-bold text-md">
                                                {aiConfig?.sessionId === session?.sessionId
                                                    ? "Active"
                                                    : "Restore"}
                                            </p>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6  group-hover:translate-x-3 duration-1000 rotate-90 text-accent-focus"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 11l7-7 7 7M5 19l7-7 7 7"
                                                />
                                            </svg>
                                        </div>
                                        <button className="btn btn-error btn-outline text-lg">
                                            <RiDeleteBinLine />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </Link>
            ))}
        </>
    );
};

export default SideCard;
