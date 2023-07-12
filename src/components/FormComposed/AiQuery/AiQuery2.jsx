/* eslint-disable react/no-unescaped-entities */
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AiFillHeart, AiFillPrinter, AiOutlineHeart } from "react-icons/ai";
import { FiEdit3 } from "react-icons/fi";
import { toast } from "react-toastify";
import { AiContext } from "../../../Contexts/FormContext/FormContext";
import { ChatContext } from "../../../Contexts/SessionContext/SessionContext";
import { AuthContext } from "../../../Contexts/UserContext/UserContext";
import DrawerToggle from "../../../layout/Dashboard/DrawerToggle";
import AiSetting from "../AiSetting/AiSetting";
import "./aiQuery.css";

const AiQuery2 = () => {
  const { modalState, setAiConfig, aiConfig } = useContext(AiContext);
  const [loadingAi, setLoadingAi] = useState(false);
  const { messages, sessionMessageLoading, setMessages } =
    useContext(ChatContext);
  const [messageSearch, setMessageSearch] = useState([]);
  const [currentSessionid, setCurrentSessionid] = useState(aiConfig?.sessionId);
  useEffect(() => {
    const modal = document.getElementById("my_modal_4");
    modal.checked = modalState;
  }, [modalState]);
  useEffect(() => {
    setCurrentSessionid(aiConfig?.sessionId);
  }, [setAiConfig, aiConfig?.sessionId]);
  localStorage.setItem("currentSessionid", currentSessionid);
  useEffect(() => {
    setMessageSearch([]);
  }, [setAiConfig, aiConfig?.sessionId]);

  const scrollToBottom = () => {
    const element = document.getElementById("messages");
    element.scrollTop =
      element.scrollHeight || element.clientHeight || element.offsetHeight || 0;
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  const handleSubmit = (event) => {
    event.preventDefault();
    const modal = document.getElementById("my_modal_4");
    modal.checked = modalState;
  };

  const { user } = useContext(AuthContext);
  function convertTextToJson(text) {
    const lines = text.split("\n");
    const json = lines.map((line, index) => {
      return {
        id: index + 1,
        content: line.trim(),
      };
    });
    return json;
  }

  const handleSendMessage = () => {
    const input = document.getElementById("message-input");
    const message = input.value.trim();
    if (message !== "") {
      const newMessage = {
        serial: messages.length + 1,
        type: "outgoing",
        message,
      };
      setLoadingAi(true);
      setMessages((prevMessages) => [...prevMessages, newMessage]);

      // send promptconfig and get response
      const {
        subjectSelection,
        additionalInstruction,
        assistanceLevel,
        sessionId,
      } = aiConfig;
      const promptConfig = {
        subjectSelection,
        question: message,
        sessionId,
        additionalInstruction,
        assistanceLevel,
        uid: user?.uid,
      };
      setMessageSearch([]);
      fetch(
        `https://neuronex-server.onrender.com/generate/prompt/${localStorage.getItem(
          "user_id"
        )}`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(promptConfig),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setLoadingAi(false);
          if (
            Array.isArray(data) &&
            data?.length > 0 &&
            data[0]?.sessionId == localStorage.getItem("currentSessionid")
          ) {
            handleSearchSuggestion(data[1]?.message);
            if (data[1]?.title && data[1]?.title?.length > 1) {
              setAiConfig((prevConfig) => ({
                ...prevConfig,
                sessionTitle: data[1]?.title,
              }));
            }
            setMessages((prevMessages) => {
              // Check if any message with the same serial number already exists
              const existingMessageIndex = prevMessages.findIndex(
                (message) => message.serial === data[0].serial
              );

              if (existingMessageIndex !== -1) {
                // Remove the existing message with the same serial number
                const updatedMessages = prevMessages.filter(
                  (_, index) => index !== existingMessageIndex
                );

                // Append the new data to the updated messages
                return [...updatedMessages, ...data];
              } else {
                // Append the new data to the previous messages
                return [...prevMessages, ...data];
              }
            });
          } else {
            // Handle empty data or non-iterable response
            toast.error("No session available, no response from AI", {
              // position: "bottom-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
            // You can choose to display an error message or handle it as needed.
          }
        })
        // eslint-disable-next-line no-unused-vars
        .catch((err) => {
          setLoadingAi(false);
        });

      input.value = "";
      scrollToBottom();
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && event.shiftKey) {
      return;
    }
    if (event.key === "Enter") {
      event.preventDefault();
      if (loadingAi) {
        return;
      }
      handleSendMessage();
    }
  };

  // make search suggestion
  const handleSearchSuggestion = async (message) => {
    setMessageSearch([]);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const { data: dataGet } = await axios.post(
        `https://neuronex-server.vercel.app/generate/suggestions/${localStorage.getItem(
          "user_id"
        )}`,
        {
          sessionId: aiConfig?.sessionId,
          message: message,
          uid: user?.uid,
        },
        config
      );
      // Use the callback version
      const json = convertTextToJson(dataGet?.message);
      setMessageSearch(json);
    } catch (error) {
      // console.log(error);
    }
  };

  //voice to text
  const [isListening, setIsListening] = useState(false);
  // eslint-disable-next-line no-undef
  const recognition = new webkitSpeechRecognition();
  recognition.lang = "en-US"; // Set the language (optional)
  const startRecognition = () => {
    setIsListening(true);
    recognition.start();
  };
  recognition.addEventListener("result", (event) => {
    document.getElementById("message-input").value =
      event.results[0][0].transcript;
    document.getElementById("message-input").focus();
    setIsListening(false);
  });
  // voice to text end
  const handleSearchInput = (searchItem) => {
    document.getElementById("message-input").value = searchItem;
    // document.getElementById("message-input").focus();
    handleSendMessage();
    setMessageSearch([]);
  };

  const handleFavorite = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const { data: dataGet } = await axios.post(
        "https://neuronex-server.vercel.app/session/favorite/switch",
        {
          sessionId: aiConfig?.sessionId,
          uid: user?.uid,
        },
        config
      );
      // Use the callback version of setAiConfig to work with the latest state
      const currentBookmarkState = dataGet?.isBookmarked;
      setAiConfig((prevConfig) => ({
        ...prevConfig,
        isBookmarked: !currentBookmarkState,
      }));
    } catch (error) {
      toast.error({
        title: "Error Occurred!",
        description: "Failed to switch favourite.",
        status: "error",
        duration: 4000,
        isClosable: true,
        theme: "dark",
      });
    }
  };

  return (
    <div style={{ fontFamily: "'Poppins', sans-serrif" }}>
      {/* <!-- component --> */}
      <div className="flex-1 md:px-[5%] justify-between flex flex-col w-[95vw] lg:w-[70vw] py-2 min-h-screen max-h-screen">
        <div className="flex flex-row justify-between items-center py-3 border-b-2 border-gray-200">
          <div className="flex flex-col-reverse sm:items-center justify-between w-full">
            <div className="relative w-full justify-end flex-row-reverse text-end flex items-center space-x-4 ">
              <div className="flex flex-col leading-tight">
                <div className="text-md md:text-2xl mt-1 flex items-center">
                  <span className="text-gray-700 mr-3 whitespace-nowrap overflow-hidden">
                    {aiConfig?.sessionTitle?.length > 30
                      ? aiConfig?.sessionTitle.substring(0, 30) + "..."
                      : aiConfig?.sessionTitle}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-start flex-row justify-between w-full">
              <DrawerToggle />
              <div className="flex flex-row-reverse justify-between w-full">
                <div className="join join-horizontal flex ml-2 items-center space-x-[1px]">
                  <button
                    onClick={handleFavorite}
                    type="button"
                    className="join-item hover:scale-110 inline-flex btn btn-primary text-lg items-center justify-center rounded-lg border  transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
                  >
                    {aiConfig?.isBookmarked == true ? (
                      <AiFillHeart />
                    ) : (
                      <AiOutlineHeart />
                    )}
                  </button>
                  <label
                    // type="checkbox"
                    htmlFor="my_modal_4"
                    className="join-item hover:scale-110 tracking-wide btn btn-primary text-sm"
                  >
                    <span>
                      <FiEdit3></FiEdit3>
                    </span>
                    <span className="hidden lg:flex">Edit Config</span>
                  </label>
                  <button
                    onClick={() => window.print()}
                    className="join-item hover:scale-110 btn text-lg btn-primary "
                  >
                    <AiFillPrinter />
                  </button>
                </div>
                <span className="text-lg whitespace-nowrap overflow-hidden hidden md:flex text-gray-600 ml-3 lg:ml-0">
                  {aiConfig?.subjectSelection}
                </span>
              </div>
            </div>
          </div>
        </div>
        {sessionMessageLoading ? (
          <div className="flex flex-col items-center">
            <img
              className="w-[150px] lg:w-[200px] h-[150px] lg:h-[200px] mx-auto"
              src="https://i.giphy.com/media/9ZxzuJq34mvgGZmE84/giphy.webp"
              alt="time travel"
            />
            {/* <progress className="progress progress-secondary  w-[50%] h-3 mt-8"></progress> */}
          </div>
        ) : (
          <div
            id="messages"
            className="flex flex-col overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-1 scrolling-touch min-h-[70vh] pt-7 chatScroll"
          >
            {messages.map((message) => (
              <div className="pb-4" key={message.id}>
                {message.type === "incoming" && (
                  <div className="chat chat-start">
                    <div className="chat-image avatar">
                      <div className="w-9 rounded-full">
                        <img
                          className=""
                          src="https://www.cambridgewireless.co.uk/media/uploads/files/AI-icon.png"
                        />
                      </div>
                    </div>
                    <div className="chat-bubble text-sm">
                      <pre
                        style={{
                          overflowWrap: "normal",
                          whiteSpace: "pre-wrap",
                          wordBreak: "break-word",
                          wordWrap: "break-word",
                          width: "fit-content",
                        }}
                        className=""
                      >
                        {message.message}
                      </pre>
                    </div>
                  </div>
                )}
                {message.type === "outgoing" && (
                  <div className="chat chat-end">
                    <div className="chat-image avatar">
                      <div className="w-9 rounded-full">
                        <img className="" src={user?.photoURL} />
                      </div>
                    </div>
                    <div className="chat-bubble text-sm">
                      <pre
                        style={{
                          overflowWrap: "normal",
                          whiteSpace: "pre-wrap",
                          wordBreak: "break-word",
                          wordWrap: "break-word",
                          width: "fit-content",
                        }}
                        className=""
                      >
                        {message.message}
                      </pre>
                    </div>
                  </div>
                )}
                {/* <div
                                    className={`${message.type === "incoming"
                                        ? "backdrop-blur-md bg-grey-dark/40"
                                        : "chat-message bg-grey-dark/30 "
                                        }  md:p-2`}
                                >
                                    <div
                                        className={`flex ${message.type === "incoming"
                                            ? "flex-row-reverse"
                                            : "items-center"
                                            } justify-center`}
                                    >
                                        <div
                                            className={`flex flex-col md:space-y-2 text-sm w-full min-w-xs mx-2 order-${message.type === "incoming" ? 2 : 1
                                                } items-${message.type === "incoming" ? "start" : "end"}`}
                                        >
                                            <div>
                                                <pre
                                                    style={{
                                                        overflowWrap: "normal",
                                                        whiteSpace: "pre-wrap",
                                                        wordBreak: "break-word",
                                                        wordWrap: "break-word",
                                                        width: "fit-content",
                                                      fontFamily: "'Poppins', sans-serrif"
                          }}
                                                    className={`px-1 py-2 rounded-lg inline-block text-lg rounded-${message.type === "incoming" ? "bl" : "br"
                                                        }-none ${message.type === "incoming"
                                                            ? "bg-gray-300 text-gray-600"
                                                            : "bg-blue-600 text-white"
                                                        }`}
                                                >
                                                    {message.message}
                                                </pre>
                                            </div>
                                        </div>
                                        <img
                                            src={
                                                message.type === "incoming"
                                                    ? "https://www.cambridgewireless.co.uk/media/uploads/files/AI-icon.png"
                                                    : user?.photoURL
                                            }
                                            alt="Profile"
                                            className={`w-6 h-6 rounded-full order-2 ${message.type === "incoming" ? "mt-[8px]" : ""
                                                }`}
                                        />
                                    </div>
                                </div> */}
              </div>
            ))}
            {loadingAi && (
              <div>
                {/* <div className={`backdrop-blur-md bg-grey-dark/40 p-2`}>
                                    <div className="flex flex-row-reverse items-center">
                                        <div
                                            className={`flex flex-col space-y-2 text-xs w-full min-w-xs mx-2 order-2 items-start`}
                                        >
                                            <div>
                                                <pre
                                                    style={{
                                                        overflowWrap: "normal",
                                                        whiteSpace: "pre-wrap",
                                                        wordBreak: "break-word",
                                                        wordWrap: "break-word",
                                                        width: "fit-content",
                                                    }}
                                                    className={`px-4  py-2 flex items-end gap-1 rounded-lg  rounded-bl-none bg-gray-300 text-gray-600
                          `}
                                                >
                                                    <span>Generating</span>
                                                    <span className="loading loading-dots loading-xs"></span>
                                                </pre>
                                            </div>
                                        </div>
                                        <img
                                            src={
                                                "https://www.cambridgewireless.co.uk/media/uploads/files/AI-icon.png"
                                            }
                                            alt="Profile"
                                            className="w-6 h-6 rounded-full order-2"
                                        />
                                    </div>
                                </div> */}
                <div className="chat chat-start">
                  <div className="chat-image avatar">
                    <div className="w-9 rounded-full">
                      <img
                        className=""
                        src="https://www.cambridgewireless.co.uk/media/uploads/files/AI-icon.png"
                      />
                    </div>
                  </div>
                  <div className="chat-bubble text-sm">
                    <pre className="">
                      <span className="loading loading-dots loading-xs"></span>
                    </pre>
                  </div>
                </div>
              </div>
            )}
            {messageSearch?.length > 0 && (
              <div className="mb-2">
                <h2 className="text-xl">Also search for :</h2>
                <br />
                {messageSearch?.length > 0 && (
                  <ul className="flex flex-col md:flex-row md:gap-2 flex-wrap gap-0 items-start hover:mouse-pointer justify-start md:justify-between text-sm">
                    {messageSearch.map((search) => (
                      <a
                        className="cursor-pointer"
                        key={search.id}
                        onClick={() => handleSearchInput(search.content)}
                      >
                        {search.content}
                      </a>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        )}
        <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
          <div className="relative flex">
            <span className="absolute inset-y-0 flex items-center">
              {isListening && (
                <span className="loading loading-ring text-success relative left-7 top-2 loading-md"></span>
              )}
              <button
                onClick={startRecognition}
                type="button"
                className="inline-flex absolute top-0 items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6 text-gray-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                  ></path>
                </svg>
              </button>
            </span>
            <textarea
              id="message-input"
              // type="text"
              onKeyDown={handleKeyDown}
              placeholder="Write your question!"
              className="w-full  textarea-secondary h-[50px] min-h-[50px] max-h-[200px] text-md focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3"
            />
            <div className="w-20 h-full max-h-20 items-stretch inset-y-0 flex">
              <button
                type="button"
                className={`inline-flex h-[50px] backdrop-blur-sm border border-grey-dark focus:bg-transparent-white/20 bg-transparent-white items-center justify-center rounded-l-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none ${
                  loadingAi ? "btn-disabled" : ""
                }`}
                onClick={handleSendMessage}
              >
                {loadingAi ? (
                  <span className="loading loading-infinity loading-lg"></span>
                ) : (
                  <>
                    <span className="font-bold tracking-wide text-md hidden sm:flex">
                      Send
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-6 w-6 ml-2 transform rotate-90"
                    >
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                    </svg>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* modal to edit config  */}
      <input type="checkbox" id="my_modal_4" className="modal-toggle" />
      <div className="modal z-10 lg:z-40">
        <div
          onSubmit={handleSubmit}
          className="modal-box -mt-10 w-full bg-transparent mx-auto chatScroll max-w-7xl"
        >
          <button
            onClick={() => {
              const modal = document.getElementById("my_modal_4");
              modal.checked = modalState;
            }}
            className="btn btn-md btn-circle text-md  btn-error sticky  z-20 top-7 lg:top-4 right-8"
          >
            ✕
          </button>
          <AiSetting></AiSetting>
        </div>
      </div>

      {/* end of modal  */}

      <Helmet>
        <script>
          const el = document.getElementById('messages') el.scrollTop =
          el.scrollHeight
        </script>
      </Helmet>
    </div>
  );
};

export default AiQuery2;
