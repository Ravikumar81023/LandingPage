import React from "react";
import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"

const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
          VirtualR build tools{" "}
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            for developers
          </span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
          Empower your creativity and bring your VR app ideas to life with our
          intuitive development tools. Get started today and turn your
          imagination into immersive reality!
        </p>
        <div className="my-10">
            <a  className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mt-5 rounded-md" href="#">Start for Free</a>
            <a href="#" className="py-3 mx-3 px-4 border rounded-md">Documentation</a>
        </div>
        <div className="flex  max-w-4xl mt-10">
            <video loop autoPlay muted  className="w-[50%] rounded-lg border-orange-700 shadow-orange-400 mx-2 my-4" >
                <source src={video1} />
            </video>
            <video  loop autoPlay muted className="w-[50%] rounded-lg border-orange-700 shadow-orange-400 mx-2 my-4" >
                <source src={video2} />
            </video>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
