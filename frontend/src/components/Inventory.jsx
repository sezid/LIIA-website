import React, { useState, useEffect } from "react";
import images from "../../src/assets/images/images";
import { Box, MapPinned, TrendingUp, Rocket, FileText, Settings, Target } from "lucide-react";
import { Link } from "react-router-dom";

const Inventory = () => {

    const [current, setCurrent] = useState(0);
  
    const im = [
      "https://liia-cdn.vercel.app/inventory_system.webp",
      "https://liia-cdn.vercel.app/inventory_analyse.webp",
      "https://liia-cdn.vercel.app/airbnb_success.webp",
    ];



    const features = [
      {
        title: "Smart Stock Control",
        description:
          "Automated alerts and real-time tracking to prevent shortages and overstocking.",
        image: "https://liia-cdn.vercel.app/inventory_stock.webp" 
      },
      {
        title: "Insightful Forecasting",
        description:
          "Use clear data to make accurate, informed business decisions.",
        image:"https://liia-cdn.vercel.app/inventory_forecasting.webp"
      },
      {
        title: "Multi-Location Management",
        description:
          "Easily manage inventory across multiple stores or warehouses.",
          image:"https://liia-cdn.vercel.app/inventory_location.webp"

      },
      {
        title: "Scalable & Cost-Efficient",
        description:
          "Grows with your business—no complex setup or costly systems required.",
        image: "https://liia-cdn.vercel.app/inventory_scalable.webp" 
      },
      {
        title: "Streamlined Operations",
        description:
          "Improve workflow, reduce manual work, and boost efficiency.",
        image: "https://liia-cdn.vercel.app/inventory_operation.webp" 
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
              
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-3 rounded-full transition duration-300 text-xl">
                Get A Quote
              </button>
              
            </div>
          </div>

      <div className="py-9 text-center font-bold md:text-5xl text-2xl mx-2 flex justify-center my-20">
        <p>
        We help you take control of your inventory — from planning to performance.
        </p>
      </div>

        <div className="flex justify-center items-center min-h-screen bg-gray-50">
  <div className="w-full max-w-5xl aspect-video">
    <iframe
      className="w-full h-full rounded-xl shadow-lg"
      src="https://www.youtube.com/embed/38WHuxuHbN4"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  </div>
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

    <div className="py-9 text-center font-bold md:text-5xl text-2xl mx-2 flex justify-center my-20">
        <p>
        Get More Out of Your Inventory
        </p>
    </div>


    <div className="mx-auto p-6 mb-40">
      <div className="flex flex-col md:flex-row bg-white shadow-lg overflow-hidden">
        {/* Left Side - Image */}
        <div className="md:w-full">
          <img
            src={images.dashboard}
            alt="Card"
            className="w-full object-cover"
          />
        </div>

        {/* Right Side - Content */}
        <div className="md:w-3/4 p-6 flex flex-col justify-center">
          <h2 className="md:text-3xl font-bold mb-4">Data Driven Supply Chain Dashboards</h2>
          <p className="text-gray-600 md:text-xl">
            Achieve complete supply chain visibility with our custom, interactive dashboards. From accurate demand forecasting to seamless logistics optimization, our solutions empower you to make faster, smarter, and data-driven decisions—no matter where you operate. Enhance agility, reduce risk, and stay ahead in today’s dynamic global market.
          </p>
        </div>
      </div>
    </div>

    <section className="flex justify-center items-center min-h-screen bg-white px-6 lg:px-20">
  <div className="flex flex-col items-center max-w-6xl w-full space-y-16">
    <h2 className="text-3xl md:text-5xl font-bold text-center text-blue-600 mb-40">
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
        <h1 className="text-5xl font-bold text-center text-gray-800 my-40">
          Our Process
        </h1>

        
          <img className="scale-[1.1]" src="https://liia-cdn.vercel.app/inventory_process_step.webp" alt="" loading="lazy"/>
        
        
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

export default Inventory;
