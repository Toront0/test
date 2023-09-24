import React from "react";

const Loader = () => {
  return (
    <div
      className="animate-spin inline-block w-3.5 h-3.5 border-2 border-current border-t-transparent text-purple-6 rounded-full"
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Loader;
