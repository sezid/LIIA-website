import React, { useState, useEffect } from "react";
import images from "../../src/assets/images/images";
import { Blurhash } from "react-blurhash";

const Supply = () => {

  const hero_src = images.supply_hero;
  
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
            hash='LtIr~toetmoz~TRjkDf,x^aejEoz'
            width="100%"
            height="100%"
            resolutionX={32}
            resolutionY={32}
            punch={1}
          />
        )}
        {imageLoaded && (<img src={hero_src} className="w-full min-h-screen object-cover bg-center" alt="" />)}

        <div className="hero-overlay bg-opacity-30"></div>
        <div className="absolute top-0 left-0 w-full text-left text-white">
          
            <div className="p-10">
              <h1 className="mb-5 text-3xl md:text-5xl font-bold">
                SUPPLY CHAIN ANALYTICS
              </h1>
            </div>
         
        </div>
      </div>

      <div className="p-16 text-center font-bold text-2xl">
        <p>
          At LIIA Smart Inc., our Supply Chain Analytics service leverages
          cutting-edge AI and machine learning technologies to optimize supply
          chain operations, ensuring our clients stay ahead of disruptions and
          maintain a competitive edge. We help to achieve end-to-end supply
          chain visibility for optimal profitability.
        </p>
      </div>
      <div className="flex flex-col gap-5 text-center">
      <div className="px-4 md:px-32 text-blue-500 font-bold text-3xl md:text-5xl">
        <p>
          Nine Reasons to Choose LIIA SMART’s Supply Chain Analytics
        </p>
      </div>

      <div className="px-4 md:px-32 pt-3 md:pt-5">
        <p className="text-base md:text-xl">
          With unmatched industry experience, LIIA SMART provides best-in-class{" "}
          
          analytics solutions for supply chain planning, forecasting, and
          execution.
        </p>
      </div>
      </div>
      <div className="max-w-7xl mx-auto py-5 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-teal-400 p-6 rounded-lg text-center">
            
            <h3 className="font-semibold text-xl">Machine Learning Driven Smart Forecasting</h3>
            
          </div>

          {/* Card 2 */}
          <div className="bg-teal-400 p-6 rounded-lg text-center">
            
            <h3 className="font-semibold text-xl">
              Enhanced Inventory Optimization
            </h3>
            
          </div>

          {/* Card 3 */}
          <div className="bg-teal-400 p-6 rounded-lg text-center">
            
            <h3 className="font-semibold text-xl">
              Agentic AI Driven Supply Chain
            </h3>
            
          </div>

          {/* Card 4 */}
          <div className="bg-teal-400 p-6 rounded-lg text-center">
            
            <h3 className="font-semibold text-xl">
              Sourcing Optimization Alert
            </h3>
            
          </div>

          {/* Card 5 */}
          <div className="bg-teal-400 p-6 rounded-lg text-center">
            
            <h3 className="font-semibold text-xl">Agile Supply Chain Activity</h3>
            
          </div>
          {/* Card 6 */}
          <div className="bg-teal-400 p-6 rounded-lg text-center">
            
            <h3 className="font-semibold text-xl">
              Smart Risk Control
            </h3>
            
            
          </div>
          {/* Card 7 */}
          <div className="bg-teal-400 p-6 rounded-lg text-center">
            
            <h3 className="font-semibold text-xl">
            AI-Powered Shipment Optimization
            </h3>
            
            
          </div>
          {/* Card 8 */}
          <div className="bg-teal-400 p-6 rounded-lg text-center">
            
            <h3 className="font-semibold text-xl">
            Delivery Lead Time Prediction
            </h3>
            
          </div>
          {/* Card 7 */}
          <div className="bg-teal-400 p-6 rounded-lg text-center">
            
            <h3 className="font-semibold text-xl">
            Fraud Prevention
            </h3>
        
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        
          {/* Image container */}
          
            <img
              src={images.supply_AL_ML}
              alt="Increase sales"
              className="mx-auto sm:w-[1200px] md:w-full"
            />
          
          
          {/* Text container */}
          {/* <div className="flex flex-col w-1/3 gap-5">
          <div className="bg-teal-400 p-6 rounded-lg text-left w-full lg:w-[500px] h-auto lg:h-[300px]">
            <h3 className="font-bold text-xl lg:text-2xl">07</h3>
            <h3 className="font-semibold text-xl">AI-Powered Shipment Optimization</h3>

            <p className="mt-4 text-base lg:text-lg">
            Our ML-based system will optimize shipment tracking by analyzing data to predict delivery dates, optimize routes and detect fraud. It will also alert for delays and suggest proactive measures, enhancing supply chain efficiency and reducing costs.
            </p>
          </div>

          <div className="bg-teal-400 p-6 rounded-lg text-left w-full lg:w-[500px] h-auto lg:h-[300px]">
            <h3 className="font-bold text-xl lg:text-2xl">08</h3>

            <p className="mt-4 text-base lg:text-lg">
            Our ML-based system will optimize shipment tracking by analyzing data to predict delivery dates, optimize routes and detect fraud. It will also alert for delays and suggest proactive measures, enhancing supply chain efficiency and reducing costs.
            </p>
          </div>
          <div className="bg-teal-400 p-6 rounded-lg text-left w-full lg:w-[500px] h-auto lg:h-[300px]">
            <h3 className="font-bold text-xl lg:text-2xl">09</h3>

            <p className="mt-4 text-base lg:text-lg">
            Our ML-based system will optimize shipment tracking by analyzing data to predict delivery dates, optimize routes and detect fraud. It will also alert for delays and suggest proactive measures, enhancing supply chain efficiency and reducing costs.
            </p>
          </div>
          </div> */}
          
       

        

        <img className="mx-auto w-[950px]" src={images.ml_supply_chain_image} alt="" />
        
        <div className="flex flex-col md:flex-row w-full p-5 md:p-10">
          {/* Left part with "Business Impact" */}
          <div className="bg-teal-400 text-white w-full md:w-1/3 flex items-center justify-center p-6 md:p-8">
            <h2 className="text-2xl md:text-4xl font-bold text-center">
              Business Impact
            </h2>
          </div>

          {/* Right part with the list */}
          <div className="bg-white text-gray-800 w-full md:w-2/3 p-6 md:p-8">
            <ul className="text-base md:text-lg list-disc list-inside space-y-2">
              <li>Faster data processing for quicker decision-making</li>
              <li>Robust calculations to drive actionable recommendations</li>
              <li>
                Scalable solutions that align with cross-functional business
                goals
              </li>
              <li>Competitive advantage through proactive alert mechanisms</li>
              <li>Achieve operational efficiency</li>
              <li>Respond faster to change</li>
              <li>Reduce costs</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center my-10">
        <h2 className="text-3xl font-semibold mb-8">Solution Team</h2>

        <div className="flex flex-wrap justify-center gap-8">
          {/* Data Scientists */}
          <div className="flex flex-col items-center">
            <img
              src={images.supply_ds}
              alt="Data Scientists"
              className="w-24 h-24"
            />
            <p className="mt-4 font-medium">Data Scientists</p>
          </div>

          {/* Python Programmers */}
          <div className="flex flex-col items-center">
            <img
              src={images.supply_python}
              alt="Python Programmers"
              className="w-24 h-24"
            />
            <p className="mt-4 font-medium">Python Programmers</p>
          </div>

          {/* Machine Learning Engineers */}
          <div className="flex flex-col items-center">
            <img
              src={images.supply_ml}
              alt="Machine Learning Engineers"
              className="w-24 h-24"
            />
            <p className="mt-4 font-medium">Machine Learning Engineers</p>
          </div>

          {/* Client Services Lead */}
          <div className="flex flex-col items-center">
            <img
              src={images.supply_client}
              alt="Client Services Lead"
              className="w-24 h-24"
            />
            <p className="mt-4 font-medium">Client Services Lead</p>
          </div>

          {/* Product Manager */}
          <div className="flex flex-col items-center">
            <img
              src={images.supply_pm}
              alt="Product Manager"
              className="w-24 h-24"
            />
            <p className="mt-4 font-medium">Product Manager</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-8">
        {/* Why Choose Section */}
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Choose LIIA Smart Inc.?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          <div className="bg-blue-200 p-4 text-center">
            <p className="font-bold">Stay in Command of Your ROI</p>
          </div>
          <div className="bg-blue-200 p-4 text-center">
            <p className="font-bold">Bid Goodbye to Piecemeal Tactics</p>
          </div>
          <div className="bg-blue-300 p-4 text-center">
            <p className="font-bold">Fix the Problem, Not the Symptoms</p>
          </div>
          <div className="bg-blue-200 p-4 text-center">
            <p className="font-bold">Transform into a Value Center</p>
          </div>
        </div>

        {/* Our Commitment Section */}
        <h2 className="text-3xl font-bold text-center mt-12 mb-8">
          Our Commitment
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center p-4">
          {/* Boost */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div>
              <img
                src={images.supply_boost}
                alt="Boost Icon"
                className="h-24 w-24 mx-auto"
              />
            </div>
            <h4 className="font-bold">Boost</h4>
            <p>Supply Chain performance and build resilient supply chain</p>
          </div>

          {/* Reduce */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div>
              <img
                src={images.supply_reduce}
                alt="Boost Icon"
                className="h-24 w-24 mx-auto"
              />
            </div>
            <h4 className="font-bold">Reduce</h4>
            <p>
              Working capital and time to value for highly optimized supply
              chain
            </p>
          </div>

          {/* Decision Making */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div>
              <img
                src={images.supply_decision}
                alt="Boost Icon"
                className="h-24 w-24 mx-auto"
              />
            </div>
            <h4 className="font-bold">Decision Making</h4>
            <p>Robust Decision Making with Real Time Fashion</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Supply;
