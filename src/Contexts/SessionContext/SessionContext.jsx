import { createContext, useState } from "react";

export const ChatContext = createContext();
const SessionContext = ({ children }) => {
  const [messages, setMessages] = useState([
    // add a loading message
  ]);
  const [sesstionData, setSessionData] = useState([]);
  const [sessionMessageLoading, setSessionMessageLoading] = useState(false);
  const ChatInfo = {
    messages,
    setMessages,
    sessionMessageLoading,
    setSessionMessageLoading,
    sesstionData, 
    setSessionData
  };
  return (
    <ChatContext.Provider value={ChatInfo}>{children}</ChatContext.Provider>
  );
};
export default SessionContext;
