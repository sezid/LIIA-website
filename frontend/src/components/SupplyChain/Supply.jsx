import React, { useState, useEffect } from "react";
import images from "../../assets/images/images";
import { Blurhash } from "react-blurhash";
import { Link, NavLink } from "react-router-dom";
import { FaBrain } from "react-icons/fa";
import { FaCube } from "react-icons/fa";
import { CircleCheck } from 'lucide-react'; // Or use any icon library of your choice
import { FaChartLine } from 'react-icons/fa';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { FaUserTie } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa';




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

    const features = [
      {
        title: "Smart Forecasting",
        description:
          "Predict demand with Machine Learning & AI-driven insights, and manage resources efficiently.",
        image: "https://liia-cdn.vercel.app/ml_pic.jpg",
      },
      {
        title: "Enhanced Inventory Optimization",
        description:
          "Ensure optimal stock levels to reduce holding costs and improve service.",
        image: images.inventory_pic,
      },
      {
        title: "Delivery Optimization",
        description:
          "Accurately estimate delivery times and optimize shipment routes in real time.",
        image: images.delivery_pic,
      },
      {
        title: "Agentic Supply Chain Automation",
        description:
          "Enable autonomous decisions with AI that responds in real-time to market changes and disruptions.",
        image: images.ai_agent_pic,
      },
      {
        title: "Proactive Risk & Fraud Control",
        description:
          "Identify and reduce supply chain risks while preventing fraud before it happens.",
        image: images.risk_pic,
      }
    ];  
  
  

  return (
    <div>
      

      {/* <div
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
      </div> */}
       {/* <div className="min-h-[90vh] relative flex items-center justify-center text-white px-4 bg-cover bg-center" style={{backgroundImage:`url(${"https://liia-website-cdn.vercel.app/supply_hero.webp"})`}}>
       <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative text-center max-w-4xl">
        <h1 className="text-4xl md:text-7xl font-extrabold mb-6">
          Smarter Supply Chain Starts Here
        </h1>
        <p className="text-md md:text-2xl text-white/90 mb-6">
          Innovating tomorrow's Supply Chain Today
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-white font-medium px-8 py-3 rounded-full transition duration-300 text-xl">
          Get A Quote
        </button>
      </div>
    </div> */}

<div className="min-h-[90vh] relative flex items-center justify-center text-white px-4 bg-[url('https://liia-cdn.vercel.app/supply_hero.webp')] bg-cover bg-center">
  <div className="absolute inset-0 bg-black opacity-40"></div>
  <div className="relative text-center max-w-4xl">
    <h1 className="text-4xl md:text-7xl font-extrabold mb-6">
      Smarter Supply Chain Starts Here
    </h1>
    <p className="text-md md:text-2xl text-white/90 mb-6">
      Innovating tomorrow's Supply Chain Today
    </p>
    <button className="bg-green-500 hover:bg-green-600 text-white font-medium px-8 py-3 rounded-full transition duration-300 text-xl">
      Get A Quote
    </button>
  </div>
</div>


      {/* machinelearning and blockchain links */}
<div className="bg-gray-100 py-40 px-4 min-h-[60vh]">
  {/* Section Heading */}
  <h2 className="text-3xl md:text-5xl font-bold text-center mb-20 text-gray-800">
    Explore Our Technologies
  </h2>

  {/* Cards Container */}
  <div className="flex flex-col md:flex-row justify-center items-center gap-8">
    {/* Machine Learning Card */}
    <div className="bg-white p-6 rounded-2xl shadow-md text-center w-72 md:w-1/6">
      <FaBrain className="text-5xl mx-auto mb-4 text-blue-600" />
      <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
      <p className="text-gray-600 mb-4">Explore our machine learning solutions.</p>
      <a href="/machinelearning"
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
        Learn More
      </a>
    </div>

    {/* Blockchain Card */}
    <div className="bg-white p-6 rounded-2xl shadow-md text-center w-72 md:w-1/6">
      <FaCube className="text-5xl mx-auto mb-4 text-blue-600" />
      <h3 className="text-xl font-semibold mb-2">Blockchain</h3>
      <p className="text-gray-600 mb-4">Learn more about our blockchain technology.</p>
      <a
        href="/blockchain"
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Learn More
      </a>
    </div>
  </div>
</div>

      

      <div className="p-10 md:p-16 text-center font-bold text-2xl">
        <h1 className="text-lg md:text-xl text-blue-500 mb-5">YOU ARE IN GOOD HANDS</h1>
        
        <p className="md:text-6xl text-3xl">
            We help businesses stay on top of challenges from start to finish.
        </p>
        
      </div>
      <section className="flex justify-center items-center min-h-screen bg-white px-6 lg:px-20">
  <div className="flex flex-col items-center max-w-6xl w-full space-y-16">
    <h2 className="text-4xl font-bold text-center text-blue-600">
      Why Choose Us?
    </h2>
    
    {features.map((feature, index) => (
      <div
        key={index}
        className={`flex flex-col md:flex-row ${
          index % 2 !== 0 ? "md:flex-row-reverse" : ""
        } items-center gap-10`}
      >
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={feature.image}
            alt={feature.title}
            className="max-w-[500px] w-full rounded-xl shadow-md"
            loading="lazy"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="text-5xl font-semibold mb-3 text-gray-800">
            {feature.title}
          </h3>
          <p className="text-gray-600 text-2xl">{feature.description}</p>
        </div>
      </div>
    ))}
  </div>
</section>


      
        
          {/* Image container */}
          
            {/* <img
              src={images.supply_AL_ML}
              alt="Increase sales"
              className="mx-auto sm:w-[1200px] md:w-full"
            /> */}
          
          
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
          
       

        

        {/* <img className="mx-auto w-[950px]" src={images.ml_supply_chain_image} alt="" /> */}
        
        <div className="flex flex-col md:flex-row items-stretch overflow-hidden shadow-xl my-[150px] bg-white">
  {/* Image Side */}
  <div className="md:w-1/2 h-64 md:h-auto">
    <img
      src="https://liia-cdn.vercel.app/business_impact_pic.webp" // Replace with your image path
      alt="Business Impact"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Text Side */}
  <div className="p-10 md:w-1/2 flex flex-col justify-center">
    <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-snug">Business Impacts</h2>
    <ul className="space-y-4 text-gray-700 text-base leading-relaxed">
      {[
        "Accelerate decisions with faster, data-driven insights",
        "Stay ahead through proactive, real-time alerts",
        "Respond faster and adapt to market shifts",
        "Unlock measurable cost savings with smarter choices",
      ].map((item, index) => (
        <li key={index} className="flex items-start gap-5">
          <CircleCheck className="text-green-500 mt-1" size={30}/>
          <span className="mb-7 text-xl md:text-2xl">{item}</span>
        </li>
      ))}
    </ul>
  </div>
</div>




      <div className="text-center py-16 px-4 bg-gray-50">
      <h2 className="text-4xl font-bold mb-12 text-gray-800">Meet Our Solutions Team</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 justify-center my-40">
        {/* Data Scientists */}
        <div className="flex flex-col items-center transition-transform duration-500 ease-in-out hover:scale-105">
            <FaChartLine size={85} className="text-indigo-600" />
            <p className="mt-4 text-xl font-medium text-gray-700">Data Scientists</p>
        </div>


        {/* Python Programmers */}
        <div className="flex flex-col items-center hover:scale-105 transition-transform duration-500 ease-in-out">
          <FaCode size={85} className="text-green-600" />
          <p className="mt-4 text-xl font-medium text-gray-700">Programmers</p>
        </div>

        {/* ML Engineers */}
        <div className="flex flex-col items-center hover:scale-105 transition-transform duration-500 ease-in-out">
          <FaBrain size={85} className="text-yellow-500" />
          <p className="mt-4 text-xl font-medium text-gray-700">ML Engineers</p>
        </div>

        {/* Client Services Lead */}
        <div className="flex flex-col items-center hover:scale-105 transition-transform duration-500 ease-in-out">
          <FaUserTie size={85} className="text-pink-500" />
          <p className="mt-4 text-xl font-medium text-gray-700">Client Services Lead</p>
        </div>

        {/* Product Manager */}
        <div className="flex flex-col items-center hover:scale-105 transition-transform duration-500 ease-in-out">
          <HiOutlineClipboardList size={85} className="text-blue-600" />
          <p className="mt-4 text-xl font-medium text-gray-700">Product Manager</p>
        </div>
      </div>
    </div>
      
        {/* Why Choose Section */}
        {/* <h2 className="text-3xl font-bold text-center mb-8">
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
        </div> */}

        {/* Our Commitment Section */}
        <h2 className="text-4xl font-bold text-center mt-12 mb-8 p-8">
          Our Commitments
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center p-4 my-20">
          {/* Boost */}
          <div className="bg-white p-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-500 ease-in-out">
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
          <div className="bg-white p-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-500 ease-in-out">
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
          <div className="bg-white p-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-500 ease-in-out">
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
      

      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-500 py-20 px-6 md:px-12 my-20">
            <div className="max-w-5xl mx-auto text-center my-20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Elevate Your Supply Chain?
              </h2>
              <p className="text-lg text-white mb-8">
                Let’s talk about how we can help you achieve your goals through our custom services.
              </p>
              <Link
                to="/home"
                className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold text-lg md:text-xl px-6 py-3 rounded-full transition duration-300"
              >
                Contact Us
              </Link>
            </div>
        </section>
    </div>
  );
};

export default Supply;
