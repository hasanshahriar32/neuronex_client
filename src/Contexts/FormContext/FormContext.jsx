import { useState } from "react";
import { createContext } from "react";

export const AiContext = createContext();
const FormContext = ({ children }) => {
  const [modalState, setModalState] = useState(true);
  const [aiConfig, setAiConfig] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const formInfo = {
    setAiConfig,
    aiConfig,
    modalState,
    setModalState,
    drawerOpen,
    setDrawerOpen,
  };
  return <AiContext.Provider value={formInfo}>{children}</AiContext.Provider>;
};
export default FormContext;
