import React from "react";
import Button from "../components/Button";

const LandingPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-5">
      <div className="text-center">
        <p className="font-dmsans text-5xl">Trends for Him, Her & Home</p>
        <p className="font-dmsans text-4xl"> All in One Click!</p>
      </div>
      <div className="flex gap-2">
        <Button title="Explore" />
        <Button title="Shop Now" />
      </div>
    </div>
  );
};

export default LandingPage;
