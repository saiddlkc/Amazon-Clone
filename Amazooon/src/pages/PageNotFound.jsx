import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="h-screen ">
      <div className="flex justify-center items-center h-screen  flex-col">
        <h1 className="font-bold text-3xl">Page Not Found</h1>
        <p className="text-red-500 text-xl m-5">
          Sorry, the page you are looking for could not be found.
        </p>
        <button className=" text-white border-red-300 bg-red-600 hover:bg-red-400 rounded-md px-5 py-2">
          <Link to="/"> Back to Home</Link>
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
