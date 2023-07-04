import { useContext } from "react";
// import AiQuery from "../../components/FormComposed/AiQuery/AiQuery";
import AiQuery2 from "../../../components/FormComposed/AiQuery/AiQuery2";
import AiSetting from "../../../components/FormComposed/AiSetting/AiSetting";
import { AiContext } from "../../../Contexts/FormContext/FormContext";

const Compose = () => {
  const { aiConfig } = useContext(AiContext);
  return (
    <div className=" ">
      {aiConfig?.length === 0 ? <AiSetting /> : <AiQuery2 />}
    </div>
  );
};

export default Compose;
