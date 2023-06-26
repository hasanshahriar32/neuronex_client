const LoadingAnimation = () => {
  return (
    <div className="flex items-center w-full justify-center flex-col gap-3 h-screen max-h-[350px]">
      <span className="text-xl lg:text-3xl ">
        Loading <span className="loading loading-ball loading-xs"></span>
      </span>
      <progress className="progress h-3 lg:h-4 progress-primary w-2/3"></progress>
    </div>
  );
};

export default LoadingAnimation;
