import images from "../../assets/images/images";
import React, { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";


const Sunshine = () => {

  const hero_src = images.sunshine_hero;
  
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = hero_src;
  }, [hero_src]);
  

  return (
    <div>
      <div
        className="hero min-h-screen relative"
      >
        {!imageLoaded && (
                  <Blurhash
                    hash="LIM7Z7.8?wjEyZadD%WB~Va#V?x]"
                    width="100%"
                    height="100%"
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                  />
                )}
                {imageLoaded && (<img src={hero_src} className="min-h-screen object-cover bg-center" alt="" />)}

        <div className="hero-overlay bg-opacity-30"></div>
        <div className="absolute center-0 left-0 w-full text-center text-white ">
          <div className="">
            <div className="p-10">
              <h1 className="mb-5 text-3xl md:text-5xl font-bold">
                Sunshine Airbnb Cleaning
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="p-16 text-center font-bold text-2xl">
        <p>
          Best-in-class Airbnb Cleaning Services are offered by experienced and
          dedicated team members. We take care of cleaning for Airbnb Hosts so
          that they can grow their customer base exponentially.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-6 p-8">
        {/* Left Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={images.sunshine_service_1}
            alt="Left Section"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={images.sunshine_service_2}
            alt="Right Section"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Sunshine;
