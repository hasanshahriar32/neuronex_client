/* eslint-disable react/no-unescaped-entities */

import { Helmet } from "react-helmet";
import "./aiQuery.css";
import { useContext, useEffect, useState } from "react";
import AiSetting from "../AiSetting/AiSetting";
import { AiContext } from "../FormContext/FormContext";

const AiQuery2 = () => {
  const { modalState, aiConfig } = useContext(AiContext);
  const [messages, setMessages] = useState([
    { id: 1, type: "incoming", message: "Hi" },
    { id: 2, type: "outgoing", message: "Hello" },
  ]);

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

  const handleSendMessage = () => {
    const input = document.getElementById("message-input");
    const message = input.value.trim();
    if (message !== "") {
      const newMessage = {
        id: messages.length + 1,
        type: "outgoing",
        message,
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
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
      handleSendMessage();
    }
  };
  return (
    <div>
      {/* <!-- component --> */}
      <div className="flex-1 px-[5%] justify-between flex flex-col w-[95vw] max-h-screen">
        <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
          <div className="relative flex items-center space-x-4">
            <div className="relative">
              <span className="absolute text-success right-0 bottom-0">
                <svg width="20" height="20">
                  <circle cx="8" cy="8" r="8" fill="currentColor"></circle>
                </svg>
              </span>
              <img
                src="https://cdn0.iconfinder.com/data/icons/celtic/50/Knot14-512.png"
                alt=""
                className="w-10 sm:w-16 h-10 sm:h-16 rounded-full"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <div className="text-2xl mt-1 flex items-center">
                <span className="text-gray-700 mr-3">Title goes here</span>
              </div>
              <span className="text-lg text-gray-600">
                {aiConfig?.subjectSelection}
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
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
              Edit Config
            </label>
          </div>
        </div>
        <style>
          {`
          
        `}
        </style>
        <div
          id="messages"
          className="flex flex-col chatScroll space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-1 scrolling-touch"
        >
          {messages.map((message) => (
            <div
              key={message.id}
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
                    <span
                      className={`px-4 py-2 rounded-lg inline-block rounded-${
                        message.type === "incoming" ? "bl" : "br"
                      }-none ${
                        message.type === "incoming"
                          ? "bg-gray-300 text-gray-600"
                          : "bg-blue-600 text-white"
                      }`}
                    >
                      {message.message}
                    </span>
                  </div>
                </div>
                <img
                  src={
                    message.type === "incoming"
                      ? "https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                      : "https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                  }
                  alt="Profile"
                  className="w-6 h-6 rounded-full order-2"
                />
              </div>
            </div>
          ))}
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
                className="inline-flex h-[50px] backdrop-blur-sm border border-grey-dark focus:bg-transparent-white/20 bg-transparent-white items-center justify-center rounded-l-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none"
                onClick={handleSendMessage}
              >
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
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* modal to edit config  */}
      <input type="checkbox" id="my_modal_4" className="modal-toggle" />
      <div className="modal">
        <div
          onSubmit={handleSubmit}
          className="modal-box w-full mx-auto chatScroll max-w-7xl"
        >
          <button
            onClick={() => {
              const modal = document.getElementById("my_modal_4");
              modal.checked = modalState;
            }}
            className="btn btn-md btn-circle text-md  btn-ghost absolute right-2 top-2"
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
