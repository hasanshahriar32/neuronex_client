import { useContext } from "react";
// import AiQuery from "../../components/FormComposed/AiQuery/AiQuery";
import AiSetting from "../../../components/FormComposed/AiSetting/AiSetting";
import { AiContext } from "../../../components/FormComposed/FormContext/FormContext";
import AiQuery2 from "../../../components/FormComposed/AiQuery/AiQuery2";

const Compose = () => {
  const { aiConfig } = useContext(AiContext);
  return (
    <div className="flex justify-center items-center min-h-screen min-w-full">
      {aiConfig?.length === 0 ? <AiSetting /> : <AiQuery2 />}
    </div>
  );
};

export default Compose;
