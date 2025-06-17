import images from "../../assets/images/images";
import React, { useState, useEffect } from "react";
import {
  Workflow,
  Laptop,
  Settings2,
  BarChart3,
  ShieldAlert,
  Cloud, Brain, BarChart2
} from 'lucide-react';
import { Link } from "react-router-dom";

const digital = [
  {
    title: "Cloud-Based Solutions",
    description:
      "We offer scalable, cloud-based technology solutions to streamline business processes and ensure seamless data flow.",
    icon: Cloud,
  },
  {
    title: "AI & Machine Learning",
    description:
      "Leveraging AI and ML to improve forecasting, inventory management, and decision-making processes in real-time.",
    icon: Brain,
  },
  {
    title: "Data Analytics & Business Intelligence",
    description:
      "We provide robust analytics to drive decision-making, optimizing performance through actionable insights.",
    icon: BarChart2,
  },
];

const features = [
  {
    title: 'Process Mapping',
    icon: <Workflow className="h-10 w-10 text-blue-600" />,
    description: 'We provide detailed process mapping to identify inefficiencies and opportunities for improvement.',
  },
  {
    title: 'Digital Transformation',
    icon: <Laptop className="h-10 w-10 text-purple-600" />,
    description: 'We help businesses transition to digital processes, enhancing speed, accuracy, and transparency.',
  },
  {
    title: 'Optimization & Automation',
    icon: <Settings2 className="h-10 w-10 text-green-600" />,
    description: 'We identify areas where automation can improve productivity and reduce costs.',
  },
  {
    title: 'Performance Tracking',
    icon: <BarChart3 className="h-10 w-10 text-yellow-600" />,
    description: 'We implement KPIs to monitor processes and ensure ongoing optimization.',
  },
  {
    title: 'Risk Management',
    icon: <ShieldAlert className="h-10 w-10 text-red-600" />,
    description: 'We analyze your business processes for potential risks and provide strategies to mitigate them.',
  },
];

const Analyzing = () => {

  const [openIndex, setOpenIndex] = useState(null);

const toggle = (index) => {
  if (openIndex === index) {
    setOpenIndex(null);  // Close if same index clicked
  } else {
    setOpenIndex(index); // Open the clicked index
  }
};

  const [activeIndex, setActiveIndex] = useState(null);

const handleClick = (index) => {
  setActiveIndex(index === activeIndex ? null : index);
};

  
 
  return (
    <div>
      <div className="min-h-[90vh] relative flex items-center justify-center text-white px-4 bg-[url('https://liia-cdn.vercel.app/analyzing_hero.webp')] bg-cover bg-center">
             <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="relative text-center max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                Transform Data Into Decisions Much Faster
              </h1>
              <p className="text-md md:text-2xl text-white/90 mb-6">
                Unlock smarter strategies with advanced business analytics
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-3 rounded-full transition duration-300 text-xl">
                Get A Quote
              </button>
            </div>
          </div>

      <div className="p-10 md:p-16 text-center font-bold text-2xl my-20">
        <h1 className="text-lg md:text-2xl text-blue-500 mb-10">YOU ARE IN GOOD HANDS</h1>
        
        <p className="md:text-6xl text-3xl">
            We Help You Spot Your Biggest Growth Opportunities.
        </p>
        
      </div>

      <div className="flex justify-center my-20">
        <img src={images.analyzing_concept} alt="" />
      </div>

      


      

      <div className="bg-white p-8 my-20">
        {/* Our Services Section */}
        <h2 className="text-5xl font-bold text-center mb-40">Our Services</h2>
        
         <div className="flex flex-col md:flex-row md:flex-wrap gap-4">
  {features.map((feature, index) => (
    <div
      key={index}
      className="flex-1 min-w-[200px] md:w-1/5 border rounded-2xl p-6 shadow-md cursor-pointer transition-all duration-300 flex flex-col items-center text-center"
      onClick={() => toggle(index)}
    >
      <div className="flex flex-col items-center gap-3 mb-3">
        {feature.icon}
        <h3 className="font-semibold text-xl">{feature.title}</h3>
      </div>
      {openIndex === index && (
        <p className="text-gray-700 text-lg font-sans leading-relaxed max-w-[250px]">
          {feature.description}
        </p>
      )}
    </div>
  ))}
</div>

          

        {/* Digital Technology Integration Section */}
        <h3 className="text-5xl font-bold text-center my-40">
          Our Technology
        </h3>

        <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {digital.map((feature, index) => {
          const Icon = feature.icon;
          const isActive = index === activeIndex;

          return (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className={`min-h-[280px] p-8 border rounded-lg shadow-sm transition-shadow duration-300 cursor-pointer flex flex-col justify-between ${
                isActive ? "bg-gray-50 shadow-inner" : "hover:shadow-md"
              }`}
            >
              {isActive ? (
                <p className="text-gray-700 text-xl leading-relaxed">
                  {feature.description}
                </p>
              ) : (
                <>
                  <Icon className="text-blue-600 w-10 h-10 mb-4" />
                  <h3 className="text-2xl font-semibold text-black mb-4">
                    {feature.title}
                  </h3>
                  <a
                    onClick={(e) => e.preventDefault()}
                    href="#"
                    className="mt-auto text-blue-600 text-base font-medium flex items-center hover:underline"
                  >
                    More <span className="ml-1">›</span>
                  </a>
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
        
      </div>

      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-500 py-20 px-6 md:px-12 my-20">
                  <div className="max-w-5xl mx-auto text-center my-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                      Ready to Elevate Your Business?
                    </h2>
                    <p className="text-lg text-white mb-8">
                      Let’s talk about how we can help you achieve your goals through our customer services.
                    </p>
                    <Link
                      to="/contact"
                      className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold text-lg md:text-xl px-6 py-3 rounded-full transition duration-300"
                    >
                      Contact Us
                    </Link>
                  </div>
      </section>
        

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
