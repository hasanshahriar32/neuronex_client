import { ScaleLoader } from "react-spinners";

const LoadingPx = () => {

    return (
        <ScaleLoader color="#ffffff"
            height={20}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    );
};
export default LoadingPx;