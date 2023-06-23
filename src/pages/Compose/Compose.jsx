import { useContext } from "react";
// import AiQuery from "../../components/FormComposed/AiQuery/AiQuery";
import AiSetting from "../../components/FormComposed/AiSetting/AiSetting";
import { AiContext } from "../../components/FormComposed/FormContext/FormContext";
import AiQuery2 from "../../components/FormComposed/AiQuery/AiQuery2";

const Compose = () => {
  const { aiConfig } = useContext(AiContext);
  return (
    <div className="flex justify-center items-center min-h-screen min-w-full">
      {aiConfig?.length === 0 ? <AiSetting /> : <AiQuery2 />}
      {/* <AiQuery2 /> */}
      {/* <iframe
        width="100%"
        height="800"
        src="https://www.beekai.com/view/project/529acce1-0842-4afe-8390-ad0072759be6"
        title="BEEKAI Form"
        frameBorder="0"
        allowfullscreen
      ></iframe> */}

    </div>
  );
};

export default Compose;
// helllo
