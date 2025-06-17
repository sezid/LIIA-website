import images from "../../assets/images/images";
import React, { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";
import { FaCode, FaSearch, FaUser, FaChartLine } from "react-icons/fa";
import {
  FaLightbulb,
  FaTools,
  FaPencilRuler,
  FaRocket,
  FaCheckCircle,
  FaSyncAlt,
} from "react-icons/fa";


const steps = [
    {
      id: "01",
      title: "Kick-Off with Project Idea",
      description:
        "Evaluate project scope and set objectives with expert consultation.",
      icon: FaLightbulb,
    },
    {
      id: "02",
      title: "Decide Tech Stack",
      description:
        "Move forward, right and quick, with useful-only resources.",
      icon: FaTools,
    },
    {
      id: "03",
      title: "Design",
      description:
        "Create an appealing, intuitive interface with our UI/UX experts.",
      icon: FaPencilRuler,
    },
    {
      id: "04",
      title: "Develop",
      description:
        "Code to add functionality and backend features with pro developers.",
      icon: FaRocket,
    },
    {
      id: "05",
      title: "Test",
      description: "Test, debug, and repeat until it's launch-ready.",
      icon: FaCheckCircle,
    },
    {
      id: "06",
      title: "Launch & Maintain",
      description: "Go live and reach users. Adapt as you go.",
      icon: FaSyncAlt,
    },
  ];




const Website = () => {

    const hero_src = images.website_hero;
    
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
           
            <div className="min-h-[90vh] relative flex items-center justify-center text-white px-4 bg-cover bg-center" style={{backgroundImage:`url(${images.website_hero})`}}>
                   <div className="absolute inset-0 bg-black opacity-40"></div>
                  <div className="relative text-center max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                      Web Solutions Engineered for Growth 
                    </h1>
                    <p className="text-md md:text-xl text-white/90 mb-6">
                      Fully responsive, always reliable, and endlessly scalable
                    </p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-3 rounded-full transition duration-300 text-xl">
                      Get A Quote
                    </button>
                  </div>
            </div>

            <section className="bg-gray-100 text-gray-800 py-16 px-6 md:px-20">
      <div className="text-center my-12">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
          Our <span className="text-blue-600">Services</span>
        </h2>
        <p className="text-md md:text-xl max-w-2xl mx-auto mt-10">
          We craft tailored digital solutions that help your business thrive online.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center my-20">
        {/* Web Development */}
        <div className="flex flex-col items-center space-y-4">
          <div className="bg-white p-10 rounded-full shadow-md">
            <FaCode className="text-blue-600 text-5xl" />
          </div>
          <h3 className="text-xl font-semibold">Custom Web Development</h3>
          <p className="text-base text-gray-600">
            Tailored websites built to meet your business needs with responsive design for all devices.
          </p>
        </div>

        {/* SEO */}
        <div className="flex flex-col items-center space-y-4">
          <div className="bg-white p-10 rounded-full shadow-md">
            <FaSearch className="text-blue-600 text-5xl" />
          </div>
          <h3 className="text-xl font-semibold">Search Engine Optimization</h3>
          <p className="text-lg text-gray-600">
            Improve visibility and ranking on search engines to attract more organic traffic.
          </p>
        </div>

        {/* UX Design */}
        <div className="flex flex-col items-center space-y-4">
          <div className="bg-white p-10 rounded-full shadow-md">
            <FaUser className="text-blue-600 text-5xl" />
          </div>
          <h3 className="text-xl font-semibold">User Experience Design</h3>
          <p className="text-lg text-gray-600">
            Design intuitive and engaging interfaces that boost satisfaction and conversions.
          </p>
        </div>

        {/* Digital Growth */}
        <div className="flex flex-col items-center space-y-4">
          <div className="bg-white p-10 rounded-full shadow-md">
            <FaChartLine className="text-blue-600 text-5xl" />
          </div>
          <h3 className="text-xl font-semibold">Digital Growth</h3>
          <p className="text-lg text-gray-600">
            Develop digital strategies and marketing campaigns to grow your online presence.
          </p>
        </div>
      </div>
    </section>

    <section className="bg-white text-gray-800 py-20 px-6 md:px-20">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Our Simple, Frictionless Web Development{" "}
          <span className="text-blue-500">Workflow</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We use lean, agile methodology for collaborative development and faster turnarounds. Join the ranks of the 100s of companies we helped with our optimized and result-driven web development process.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div
            key={step.id}
            className="group border p-6 rounded-lg shadow-sm transition duration-300 bg-white hover:bg-blue-600 hover:text-white"
          >
            <div className="flex justify-between items-center mb-4">
              <span className="text-2xl font-bold text-gray-300 group-hover:text-white transition">
                {step.id}
              </span>
              <div className="text-2xl group-hover:text-white transition">
                <step.icon className="text-blue-500 group-hover:text-white transition" />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-white">
              {step.title}
            </h3>
            <p className="text-sm text-gray-600 group-hover:text-white">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
            

            <div className="flex justify-center ">
                <img className="w-[700px] pb-10" src={images.website_dev_process} alt="" />
            </div>









        </div>
    );
};

export default Website;