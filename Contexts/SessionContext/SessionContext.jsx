import { createContext, useState } from "react";

export const ChatContext = createContext();
const SessionContext = ({ children }) => {
  const [messages, setMessages] = useState([
    // add a loading message
  ]);
  const ChatInfo = { messages, setMessages };
  return (
    <ChatContext.Provider value={ChatInfo}>{children}</ChatContext.Provider>
  );
};
export default SessionContext;
