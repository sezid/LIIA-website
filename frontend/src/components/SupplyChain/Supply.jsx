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
import {
  GaugeCircle,     // Speed/acceleration
  BellRing,        // Alerts
  RefreshCcw,      // Adaptation/response
  DollarSign       // Cost savings
} from 'lucide-react';
import { Rocket, ArrowDown, Brain } from 'lucide-react';



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

    const impactData = [
   {
    icon: <GaugeCircle className="w-10 h-10 text-white" />,
    title: "Accelerate Decisions",
    description: "Make smarter decisions faster with real-time, data-driven insights.",
    bgColor: "bg-indigo-600",
  },
  {
    icon: <BellRing className="w-10 h-10 text-white" />,
    title: "Proactive Alerts",
    description: "Stay ahead through intelligent alerts and early warning signals.",
    bgColor: "bg-orange-500",
  },
  {
    icon: <RefreshCcw className="w-10 h-10 text-white" />,
    title: "Adapt Quickly",
    description: "Respond rapidly to disruptions and evolving market demands.",
    bgColor: "bg-emerald-600",
  },
  {
    icon: <DollarSign className="w-10 h-10 text-white" />,
    title: "Unlock Savings",
    description: "Reduce inefficiencies and optimize spend with intelligent automation.",
    bgColor: "bg-blue-700",
  }
];

    const features = [
      {
        title: "Smart Forecasting",
        description:
          "Predict demand with Machine Learning & AI-driven insights, and manage resources efficiently.",
        image: "https://liia-cdn.vercel.app/ml_pic.webp",
      },
      {
        title: "Enhanced Inventory Optimization",
        description:
          "Ensure optimal stock levels to reduce holding costs and improve service.",
        image: "https://liia-cdn.vercel.app/inventory_pic.webp",
      },
      {
        title: "Delivery Optimization",
        description:
          "Accurately estimate delivery times and optimize shipment routes in real time.",
        image: "https://liia-cdn.vercel.app/delivery_pic.webp",
      },
      {
        title: "Agentic Supply Chain Automation",
        description:
          "Enable autonomous decisions with AI that responds in real-time to market changes and disruptions.",
        image: "https://liia-cdn.vercel.app/ai_agent_pic.webp",
      },
      {
        title: "Proactive Risk & Fraud Control",
        description:
          "Identify and reduce supply chain risks while preventing fraud before it happens.",
        image: "https://liia-cdn.vercel.app/risk_pic.webp",
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
    <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-3 rounded-full transition duration-300 text-xl" target="_blank" onClick={() => window.open("https://calendly.com/liia-smart-liiasmart/30min", "_blank")}>
      Book a Demo
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
        
        

  {/* <div className="md:w-1/2 h-64 md:h-auto">
    <img
      src="https://liia-cdn.vercel.app/business_impact_pic.webp" // Replace with your image path
      alt="Business Impact"
      className="w-full h-full object-cover"
    />
  </div>

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
  </div> */}



<section className="py-16 bg-gray-50 my-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 my-20">
          Business Impacts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {impactData.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center p-6 bg-white shadow-lg rounded-xl transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className={`p-4 rounded-full ${item.bgColor} mr-6`}>
                {item.icon}
              </div>
              <div className="text-left">
                <h4 className="text-xl font-semibold text-gray-800 mb-1">{item.title}</h4>
                <p className="text-gray-600 text-base">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>




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
        <h2 className="text-4xl font-bold text-center mb-8 p-8">
          Our Commitments
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4 my-40 text-center">
    
    {/* Boost */}
    <div className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-center text-center">
      <Rocket className="h-16 w-16 text-blue-500 mb-4" />
      <h3 className="text-lg font-semibold mb-2">Boost</h3>
      <p className="text-gray-600 text-sm">
        Supply Chain performance and build resilient supply chain
      </p>
    </div>

    {/* Reduce */}
    <div className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-center text-center">
      <ArrowDown className="h-16 w-16 text-green-500 mb-4" />
      <h3 className="text-lg font-semibold mb-2">Reduce</h3>
      <p className="text-gray-600 text-sm">
        Working capital and time to value for highly optimized supply chain
      </p>
    </div>

    {/* Decision Making */}
    <div className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-center text-center">
      <Brain className="h-16 w-16 text-purple-500 mb-4" />
      <h3 className="text-lg font-semibold mb-2">Decision Making</h3>
      <p className="text-gray-600 text-sm">
        Robust Decision Making with Real Time Fashion
      </p>
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
                to="/contact"
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
