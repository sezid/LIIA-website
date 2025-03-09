import images from "../../assets/images/images";
import React, { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";




const Analyzing = () => {

  const hero_src=images.analyzing_hero

  const [imageLoaded,setImageLoaded]=useState(false)

  useEffect(()=>{
    const img = new Image()
    img.onload=()=>{
      setImageLoaded(true)
    }
    img.src=hero_src
  },[hero_src])
  
 
  return (
    <div>
      <div
        className="hero min-h-screen relative">
         {!imageLoaded && (  
        <Blurhash hash="LMF6ax_MIUM{E3Ri%LWC4V4o9GxZ"
                  width="100%"
                  height="100%"
                  resolutionX={32}
                  resolutionY={32}
                  punch={1}
                  className="w-full h-full"
                  />
                  
          )}

        {imageLoaded && (<img src={hero_src} className="w-full h-full object-cover" alt=""/>)}          
        
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="absolute top-0 left-0 w-full text-left text-white">
          <div className="">
            <div className="p-10">
              <h1 className="mb-5 text-3xl md:text-5xl font-bold">
                Analyzing Business Models
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-26 text-green-500 text-center font-bold text-5xl pt-8">
        <p>Our Special Approach</p>
      </div>

      <div className="pt-3 pb-8 text-center font-medium text-xl">
        <p>LIIA SMART is a Business Improvement and Turnaround Company</p>
      </div>

      <div className="flex justify-center">
        <img src={images.analyzing_concept} alt="" />
      </div>

      <div className="pt-3 pb-8 text-left font-medium text-xl mx-20">
        <p className="italic">
          LIIA SMART is a Business Improvement and Turnaround Company A Business
          Model Analysis involves taking a high-level look at the business as a
          whole and then focusing on areas which are perceived to indicate
          significant potential for performance improvement. The starting point
          is the preparation of a Business Model Canvas which is an
          internationally recognized tool for developing and evaluating business
          models.
        </p>
      </div>

      <div className="mx-26 pb-10 text-black text-center font-bold text-5xl">
        <p>Why is it important to analyze business models</p>
      </div>

      <div className="flex justify-center ">
        <img
          src={images.analyzing_features}
          alt=""
          className="w-[600px] md:w-1/2 mx-auto mb-4"
        />
      </div>

      <div className="bg-white p-8">
        {/* Our Services Section */}
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 text-center p-4">
          {/* Process Mapping & Analysis */}
          <div className="bg-black text-white p-6 rounded-lg">
            <h3 className="text-lg font-bold mb-4">
              PROCESS MAPPING & ANALYSIS
            </h3>
            <p>
              We provide detailed process mapping to identify inefficiencies and
              opportunities for improvement
            </p>
          </div>

          {/* Digital Transformation */}
          <div className="bg-gray-600 text-green-200 p-6 rounded-lg">
            <h3 className="text-lg font-bold mb-4">DIGITAL TRANSFORMATION</h3>
            <p>
              We help businesses transition to digital processes, enhancing
              speed, accuracy, and transparency
            </p>
          </div>

          {/* Optimization & Automation */}
          <div className="bg-gray-100 text-green-500 p-6 rounded-lg">
            <h3 className="text-lg font-bold mb-4">
              OPTIMIZATION & AUTOMATION
            </h3>
            <p>
              We identify areas where automation can improve productivity and
              reduce costs
            </p>
          </div>

          {/* Performance Tracking */}
          <div className="bg-green-500 text-white p-6 rounded-lg">
            <h3 className="text-lg font-bold mb-4">PERFORMANCE TRACKING</h3>
            <p>
              Implementing key performance indicators (KPIs) to track business
              processes and ensure ongoing optimization
            </p>
          </div>

          {/* Risk Management */}
          <div className="bg-blue-500 text-white p-6 rounded-lg">
            <h3 className="text-lg font-bold mb-4">RISK MANAGEMENT</h3>
            <p>
              We analyze your business processes for potential risks and provide
              strategies to mitigate them
            </p>
          </div>
        </div>

        {/* Digital Technology Integration Section */}
        <h3 className="text-2xl font-bold text-center mt-12 mb-8">
          Digital Technology Integration
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center p-4">
          {/* Cloud-Based Solutions */}
          <div className="bg-gray-200 p-6 shadow-md rounded-lg">
            <h4 className="font-bold mb-4">Cloud-Based Solutions</h4>
            <p>
              We offer scalable, cloud-based technology solutions to streamline
              business processes and ensure seamless data flow
            </p>
          </div>

          {/* AI & Machine Learning */}
          <div className="bg-gray-200 p-6 shadow-md rounded-lg">
            <h4 className="font-bold mb-4">AI & Machine Learning</h4>
            <p>
              Leveraging AI and ML to improve forecasting, inventory management,
              and decision-making processes in real-time
            </p>
          </div>

          {/* Data Analytics & Business Intelligence */}
          <div className="bg-gray-200 p-6 shadow-md rounded-lg">
            <h4 className="font-bold mb-4">
              Data Analytics & Business Intelligence
            </h4>
            <p>
              We provide robust analytics to drive decision-making, optimizing
              performance through actionable insights
            </p>
          </div>
        </div>
      </div>

      <div className="pt-3 pb-8 text-center font-medium text-xl mx-20">
        <p>
          At LIIA SMART INC., we utilize a wide range of tools and techniques to
          evaluate and optimize business models, ensuring that every component
          of your organization operates at peak efficiency. Below are some of
          the methods we employ
        </p>
      </div>

      <div className="flex justify-center ">
        <img
          src={images.analyzing_tools}
          alt=""
          className="w-[600px] mx-auto mb-4"
        />
      </div>
    </div>
  );
};

export default Analyzing;
