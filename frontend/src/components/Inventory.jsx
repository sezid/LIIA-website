import React, { useState, useEffect } from "react";
import images from "../../src/assets/images/images";
import { Box, MapPinned, TrendingUp, Rocket, FileText, Settings, Target } from "lucide-react";
import { Link } from "react-router-dom";

const Inventory = () => {

    const [current, setCurrent] = useState(0);
  
    const im = [
      images.inventory_system,
      images.inventory_analyse,
      images.airbnb_success_pic,
    ];

    const steps = [
      {
        title: "Requirement Gathering",
        phase: "Kickoff",
        icon: <Rocket className="w-6 h-6 text-cyan-500" />,
        color: "bg-cyan-400",
      },
      {
        title: "Selection & Customization",
        phase: "Planning",
        icon: <FileText className="w-6 h-6 text-purple-800" />,
        color: "bg-purple-800",
      },
      {
        title: "System Setup, Data Migration & Testing",
        phase: "Execution",
        icon: <Settings className="w-6 h-6 text-purple-500" />,
        color: "bg-purple-400",
      },
      {
        title: "Training & Post Implementation",
        phase: "Go Live",
        icon: <Target className="w-6 h-6 text-red-600" />,
        color: "bg-red-500",
      },
    ];

    const features = [
      {
        title: "Smart Stock Control",
        description:
          "Automated alerts and real-time tracking to prevent shortages and overstocking.",
        image: images.inventory_stock  
      },
      {
        title: "Insightful Forecasting",
        description:
          "Use clear data to make accurate, informed business decisions.",
        image:images.inventory_forecasting  
      },
      {
        title: "Multi-Location Management",
        description:
          "Easily manage inventory across multiple stores or warehouses.",
          image:images.inventory_location  

      },
      {
        title: "Scalable & Cost-Efficient",
        description:
          "Grows with your business—no complex setup or costly systems required.",
        image: images.inventory_scalable  
      },
      {
        title: "Streamlined Operations",
        description:
          "Improve workflow, reduce manual work, and boost efficiency.",
        image: images.inventory_operation  
      },
    ];
  

  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % im.length);
      }, 4000); // Change every 4 seconds
      return () => clearInterval(interval);
    }, []);
  


  return (
    <div>
      {/* <div className="text-center bottom-0 left-0 w-full text-left">
        <div className="bg-white bg-opacity-30 w-full">
          <div className="p-3">
            <h1 className="mb-5 text-3xl md:text-5xl font-bold">
              LIIA SMART INVENTORY MANAGEMENT
            </h1>
          </div>
        </div>
      </div> */}
      <div className="min-h-[90vh] relative flex items-center justify-center text-white px-4 bg-[url('https://liia-cdn.vercel.app/inventory_hero.webp')] bg-cover bg-center">
             <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="relative text-center max-w-4xl">
              <h1 className="text-4xl md:text-7xl font-extrabold mb-6">
              Smarter Inventory Stronger Business
              </h1>
              <p className="text-md md:text-2xl text-white/90 mb-6">
              Transform Your Inventory — Unlock Efficiency, Boost Growth
              </p>
              <button className="bg-green-500 hover:bg-green-600 text-white font-medium px-8 py-3 rounded-full transition duration-300 text-xl">
                Get A Quote
              </button>
            </div>
          </div>

      <div className="py-9 text-center font-bold md:text-5xl text-2xl mx-2 flex justify-center my-20">
        <p>
        We help you take control of your inventory — from planning to performance.
        </p>
      </div>

      <div className="w-full flex flex-col md:flex-row items-center bg-white shadow-lg rounded-xl overflow-hidden min-h-[60vh]">
      
      {/* Left Side Image Slideshow */}
      <div className="w-full md:w-1/2 h-[500px] md:h-auto relative overflow-hidden">
  <img
    key={current}
    src={im[current]}
    alt="Inventory"
    className="w-full h-[600px] object-cover opacity-0 animate-fadeIn"
  />
</div>




      {/* Right Side Text */}
      <div className="md:w-1/2 w-full p-8 text-left">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Smarter Inventory Management Drives Results</h2>
        <p className="text-gray-600 md:text-2xl leading-relaxed">
        Inventory tracking can drain time and resources. Our Python-based system gives small and medium-sized businesses real-time visibility into stock levels across locations, product lines, and programs—helping you stay ahead, restock smarter, and boost profitability.
        </p>
      </div>
    </div>

    <div className="py-9 text-center font-bold md:text-5xl text-2xl mx-2 flex justify-center my-20">
        <p>
        What we can do for you
        </p>
      </div>

    <div className="flex md:justify-evenly items-center bg-white md:p-6 mx-auto my-20">
      {/* Icon 1 */}
      <div className="flex flex-col items-center text-gray-700 px-6">
        <Box  className="w-[12vw] h-[12vw] sm:w-[8vw] sm:h-[8vw] lg:w-[6vw] lg:h-[6vw]" />
        <p className="mt-2 text-sm text-center md:text-lg font-medium">Manage orders</p>
      </div>

      {/* Vertical Divider */}
      <div className="h-24 md:h-64 border-l border-gray-300 mx-4"></div>

      {/* Icon 2 */}
      <div className="flex flex-col items-center text-gray-700 px-6">
        <MapPinned  className="w-[12vw] h-[12vw] sm:w-[8vw] sm:h-[8vw] lg:w-[6vw] lg:h-[6vw]" />
        <p className="mt-2 text-sm text-center md:text-lg font-medium">Track Products</p>
      </div>

      {/* Vertical Divider */}
      <div className="h-24 md:h-64 border-l border-gray-300 mx-4"></div>

      {/* Icon 3 */}
      <div className="flex flex-col items-center text-gray-700 px-6">
        <TrendingUp  className="w-[12vw] h-[12vw] sm:w-[8vw] sm:h-[8vw] lg:w-[6vw] lg:h-[6vw]" />
        <p className="mt-2 text-sm text-center md:text-lg font-medium">Increase sales</p>
      </div>
    </div>

    <section className="flex justify-center items-center min-h-screen bg-white px-6 lg:px-20">
  <div className="flex flex-col items-center max-w-6xl w-full space-y-16">
    <h2 className="text-3xl md:text-5xl font-bold text-center text-blue-600">
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


<section className="bg-white py-10 px-4">
      <div className="max-w-6xl mx-auto my-20">
        <h1 className="text-5xl font-bold text-center text-gray-800 my-20">
          Our Process
        </h1>

        
          <img className="scale-[1.2] md:scale-[1.3]" src={images.inventory_process} alt="" loading="lazy"/>
        
        
      </div>
    </section>

    

    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-500 py-20 px-6 md:px-12 my-20">
      <div className="max-w-5xl mx-auto text-center my-20">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Elevate Your Business?
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

export default Inventory;
