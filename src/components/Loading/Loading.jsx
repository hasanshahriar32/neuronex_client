import { ScaleLoader } from "react-spinners";

const Loading = () => {

    return (
        <ScaleLoader color="#0000"
            height={40}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    );
};
export default Loading;