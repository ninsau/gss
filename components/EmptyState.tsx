const EmptyStateComponent = () => {
  return (
    <>
      <div className="flex justify-center items-center h-96">
        <div className="flex flex-col items-center">
          <svg
            className="h-20 w-20 text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          <p className="text-gray-900">No vouchers found</p>
        </div>
      </div>
    </>
  );
};

export default EmptyStateComponent;
