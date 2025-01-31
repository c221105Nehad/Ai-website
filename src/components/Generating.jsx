import React from "react";
import { loading } from "../assets";

function Generating({ className }) {
  return (
    <div
      className={`flex items-center px-6 bg-n-8/80 h-[3.5rem] text-base ${
        className || ""
      }`}
    >
      <img className="w-5 h-5 mr-4" src={loading} alt="Loading" />
      AI is generating response...
    </div>
  );
}

export default Generating;
