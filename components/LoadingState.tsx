const LoadingStateComponent = () => {
  return (
    <>
      <div className="flex justify-center items-center h-96">
        <div className="flex flex-col items-center">
          <svg
            className="animate-spin h-5 w-5 text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8z"
            ></path>
          </svg>
          <p className="text-gray-900">
            Loading...if this takes more than a few seconds, there are no
            vouchers available.
          </p>
        </div>
      </div>
    </>
  );
};

export default LoadingStateComponent;
