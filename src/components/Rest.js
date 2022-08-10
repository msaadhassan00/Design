import React from "react";
import MainComponent from "./MainComponent";

const Rest = () => {
  return (
    <div className="container-flex flex justify-between items-center flex-col mt-5">
      <div className="container h-full rounded-r-lg rounded-b-lg bg-gray-100 p-7">
        <MainComponent />
        <MainComponent />
        <MainComponent />
      </div>
    </div>
  );
};

export default Rest;
