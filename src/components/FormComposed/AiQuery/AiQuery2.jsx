/* eslint-disable react/no-unescaped-entities */

import { Helmet } from "react-helmet";
import "./aiQuery.css";
import { useContext, useEffect, useState } from "react";
import AiSetting from "../AiSetting/AiSetting";
import { AiContext } from "../FormContext/FormContext";
import { AuthContext } from "../../Authentication/UserContext/UserContext";
import { FiEdit3 } from "react-icons/fi";
import { toast } from "react-toastify";
import DrawerToggle from "../../../layout/Dashboard/DrawerToggle";
import { ChatContext } from "../../../../Contexts/SessionContext/SessionContext";

const AiQuery2 = () => {
  const { modalState, aiConfig } = useContext(AiContext);
  const [loadingAi, setLoadingAi] = useState(false);
  const { messages, setMessages } = useContext(ChatContext);

  useEffect(() => {
    const modal = document.getElementById("my_modal_4");
    modal.checked = modalState;
  }, [modalState]);

  const scrollToBottom = () => {
    const element = document.getElementById("messages");
    element.scrollTop = element.scrollHeight;
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

  const handleSendMessage = () => {
    const input = document.getElementById("message-input");
    const message = input.value.trim();
    if (message !== "") {
      const newMessage = {
        serial: messages.length + 1,
        type: "outgoing",
        message,
      };
      console.log(newMessage);
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
      console.log(promptConfig);
      fetch("https://neuronex-server.onrender.com/generate/prompt", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(promptConfig),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setLoadingAi(false);

          if (
            Array.isArray(data) &&
            data?.length > 0 &&
            data[0]?.sessionId === aiConfig?.sessionId
          ) {
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
            console.log("Empty data or non-iterable response");
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
        .catch((err) => {
          console.log(err);
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
  return (
    <div>
      {/* <!-- component --> */}
      <div className="flex-1 px-[5%] justify-between flex flex-col w-[95vw] lg:w-[70vw] py-2 min-h-screen max-h-screen">
        <div className="flex flex-row-reverse sm:items-center justify-between py-3 border-b-2 border-gray-200">
          <div className="relative flex-row-reverse text-end flex items-center space-x-4">
            <div className="relative">
              <span className="absolute text-success right-0 bottom-0">
                <svg width="20" height="20">
                  <circle cx="8" cy="8" r="8" fill="currentColor"></circle>
                </svg>
              </span>
              <img
                src="https://www.cambridgewireless.co.uk/media/uploads/files/AI-icon.png"
                alt=""
                className="w-10 sm:w-16 h-10 sm:h-16  rounded-full"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <div className="text-md md:text-2xl mt-1 flex items-center">
                <span className="text-gray-700 mr-3">Title goes here</span>
              </div>
              <span className="text-lg text-gray-600 mr-3">
                {aiConfig?.subjectSelection}
              </span>
            </div>
          </div>
          <div>
            <DrawerToggle></DrawerToggle>

            <div className="flex items-center space-x-2">
              <button
                type="button"
                className="inline-flex  items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </button>
              <label
                // type="checkbox"
                htmlFor="my_modal_4"
                className=" tracking-wide ml-4 btn btn-primary text-sm"
              >
                <span>
                  <FiEdit3></FiEdit3>
                </span>
                <span className="hidden lg:flex">Edit Config</span>
              </label>
            </div>
          </div>
        </div>
        <div
          id="messages"
          className="flex flex-col chatScroll space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-1 scrolling-touch"
        >
          {messages.map((message) => (
            <div key={message.id}>
              <div
                className={`${
                  message.type === "incoming"
                    ? "backdrop-blur-md bg-grey-dark/40"
                    : "chat-message bg-grey-dark/80"
                }  p-2`}
              >
                <div className="flex items-end">
                  <div
                    className={`flex flex-col space-y-2 text-xs w-full min-w-xs mx-2 order-${
                      message.type === "incoming" ? 2 : 1
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
                        }}
                        className={`px-4  py-2 rounded-lg inline-block rounded-${
                          message.type === "incoming" ? "bl" : "br"
                        }-none ${
                          message.type === "incoming"
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
                    className="w-6 h-6 rounded-full order-2"
                  />
                </div>
              </div>
            </div>
          ))}
          {loadingAi && (
            <div>
              <div className={`backdrop-blur-md bg-grey-dark/40 p-2`}>
                <div className="flex items-end">
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
              </div>
            </div>
          )}
        </div>
        <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
          <div className="relative flex">
            <span className="absolute inset-y-0 flex items-center">
              <button
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
              placeholder="Write your message!"
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
