import { useState } from "react";
import { createContext } from "react";

export const AiContext = createContext();
const FormContext = ({ children }) => {
  const [modalState, setModalState] = useState(false);
  const [aiConfig, setAiConfig] = useState([]);
  const formInfo = { setAiConfig, aiConfig, modalState, setModalState };
  return <AiContext.Provider value={formInfo}>{children}</AiContext.Provider>;
};
export default FormContext;
