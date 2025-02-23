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
          <div className="">
            <div className="p-10">
              <h1 className="mb-5 text-3xl md:text-5xl font-bold">
                SUPPLY CHAIN ANALYTICS
              </h1>
            </div>
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
          Seven Reasons to Choose LIIA SMART’s Supply Chain Analytics
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
      <div className="max-w-6xl mx-auto py-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-teal-400 p-6 rounded-lg text-left">
            <h3 className="font-bold text-2xl">01</h3>
            <h3 className="font-semibold text-xl">Improved Forecasting</h3>
            <p className="mt-4">
              Demand forecasting capabilities through machine learning allow you
              to accurately predict customer demand and reduce stock shortages
              and excess inventory.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-teal-400 p-6 rounded-lg text-left">
            <h3 className="font-bold text-2xl">02</h3>
            <h3 className="font-semibold text-xl">
              Enhanced Inventory Optimization
            </h3>
            <p className="mt-4">
              AI/ML and processed-based recommendations to augment
              humandecisions in real-time.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-teal-400 p-6 rounded-lg text-left">
            <h3 className="font-bold text-2xl">03</h3>
            <h3 className="font-semibold text-xl">
              High Performing Supply Chain
            </h3>
            <p className="mt-4">
              LIIA SMART’s unparalleled experience in computational intelligence
              delivers Supply Chain Planning solutions equipped with advanced AI
              and ML capabilities, allowing businesses to optimize inventory
              levels, adapt to changing circumstances, and ultimately improve
              the overall efficiency and effectiveness of supply chain
              operations.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-teal-400 p-6 rounded-lg text-left">
            <h3 className="font-bold text-2xl">04</h3>
            <h3 className="font-semibold text-xl">
              Sourcing Optimization Alert
            </h3>
            <p className="mt-4">
              Our analytics tools optimize sourcing decisions by analyzing
              supplier performance, costs, and lead times, ensuring you select
              the best suppliers for your business needs.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-teal-400 p-6 rounded-lg text-left">
            <h3 className="font-bold text-2xl">05</h3>
            <h3 className="font-semibold text-xl">Increased Responsiveness</h3>
            <p className="mt-4">
              Respond to changing market conditions and customer demands more
              quickly while increasing overall responsiveness and improving your
              overall competitiveness.
            </p>
          </div>
          {/* Card 6 */}
          <div className="bg-teal-400 p-6 rounded-lg text-left">
            <h3 className="font-bold text-2xl">06</h3>
            <h3 className="font-semibold text-xl">
              Adaptive Metrics and Processes
            </h3>
            <p className="mt-4">
              We enable the adaptive determination of supply chain metrics and
              processes, ensuring that your supply chain remains flexible and
              responsive to changing market conditions.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-10 px-4">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 justify-center p-4">
          {/* Image container */}
          <div className="rounded-lg text-left">
            <img
              src={images.supply_AL_ML}
              alt="Increase sales"
              className="w-full lg:w-[700px] h-auto lg:h-[1100px] object-cover"
            />
          </div>

          {/* Text container */}
          <div className="bg-teal-400 p-6 rounded-lg text-left w-full lg:w-[900px] h-auto lg:h-[400px]">
            <h3 className="font-bold text-xl lg:text-2xl">07</h3>

            <p className="mt-4 text-base lg:text-lg">
              To enhance shipment tracking and visibility using AI and ML in our
              supply chain analytics system, we will leverage data from various
              sources to optimize routes, estimate delivery dates, and manage
              fleets efficiently. By analyzing historical and real-time data,
              our AI algorithms will predict the best routes, balance inventory
              levels, and detect potential fraud. The system will also generate
              alerts for potential delays and suggest proactive measures to
              ensure timely deliveries. This approach ensures seamless
              integration of shipment tracking with broader supply chain
              management, driving efficiency and reducing costs.
            </p>
          </div>
        </div>

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
