import React, { useState, useEffect } from "react";
import images from "../../src/assets/images/images";
import { Blurhash } from "react-blurhash";

const Inventory = () => {

  const hero_src = images.inventory_hero;
  
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
      <div className="text-center bottom-0 left-0 w-full text-left">
        <div className="bg-white bg-opacity-30 w-full">
          <div className="p-3">
            <h1 className="mb-5 text-3xl md:text-5xl font-bold">
              LIIA SMART INVENTORY MANAGEMENT
            </h1>
          </div>
        </div>
      </div>
      <div
        className="hero min-h-screen relative"
      >
        {!imageLoaded && (
                  <Blurhash
                    hash="LtIr~toetmoz~TRjkDf,x^aejEoz"
                    width="100%"
                    height="100%"
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                  />
                )}
        
                {imageLoaded && (<img src={hero_src} className="min-h-screen object-cover bg-center" alt="" />)}

        <div className="hero-overlay bg-opacity-30"></div>
      </div>

      <div className="p-16 text-center font-bold text-2xl">
        <p>
          Optimize and strategize your supply chain execution with our advanced
          Inventory Management System. We provide comprehensive data analytics
          to help you determine which items to restock, forecast demand
          accurately, and assess risks effectively. Enhance your supply chain
          efficiency and make informed decisions with our tailored solutions.
        </p>
      </div>

      <div className="mx-26 text-green-500 text-center font-bold text-5xl">
        <p>
          Optimize Inventory
          <br />
          Drive Customer Satisfaction <br />
          Drive Profitability
        </p>
      </div>

      <div className="p-16 text-center font-medium text-xl">
        <p>
          Inventory tracking can be time-consuming for many small and
          medium-sized businesses. <br /> Our smart system will help you
          effectively manage your stock, so you always know what you have <br />{" "}
          and what you need before you even need it.
        </p>
      </div>

      <div className="flex justify-center">
        <img src={images.inventory_process} alt="" />
      </div>

      <div className="py-9 text-blue-500 text-center font-semibold text-5xl flex justify-center">
        <p>Understand Your Current Inventory and What Needs Restocking</p>
      </div>

      <div className="pl-20 text-left font-bold text-2xl">
        <p>Easy Visibility of Inventory on Hand</p>
      </div>

      <div className="pl-20 pr-20 pt-3 text-left font-normal text-xl">
        <p>
          Complete and clear visibility of current inventory on hand, inventory
          on order, inventory in transit through our python-based system. This
          easy to use and low-cost system can readily transform your inventory
          visibility across the product families, locations, programs.
        </p>
      </div>

      <div className="pt-10 flex justify-center">
        <img src={images.inventory_graph_1} alt="" />
      </div>

      <div className="pl-20 text-left font-bold text-2xl">
        <p>Stay on Top of Inventory</p>
      </div>

      <div className="pl-20 pr-20 pt-3 text-left font-normal text-xl">
        <p>
          Our Python-based inventory system tracks real-time SKU data and
          automatically provides monthly updates on any deviations in stock
          levels. This allows businesses to stay ahead of inventory shortages
          and ensures timely stock replenishment, improving overall efficiency
          and reducing the risk of stockouts for high priority units.
        </p>
      </div>

      <div className="pt-10 flex justify-center">
        <img src={images.inventory_graph_2} alt="" />
      </div>

      <div className="pt-6 pb-8 text-black text-center font-semibold text-5xl">
        <p>
          Key Benefits of LIIA Smart Inventory <br /> Management System
        </p>
      </div>

      <div className="pt-10 flex justify-center">
        <img src={images.inventory_features} alt="" />
      </div>

      <div className="pt-6 pb-8 text-black text-center font-semibold text-5xl">
        <p>End to End Inventory IT System Implementation</p>
      </div>

      <div className="pl-20 pr-20 pt-3 text-center font-normal text-xl">
        <p>
          The Implementation project involves putting a full cycle inventory
          management system in place for the business. This process starts with
          tracking inventory levels across multiple locations, automating the
          inventory stock levels using Artificial Intelligence and centralizing
          data for real-time analysis. The implementation covers everything from
          setting up the software to configuring it to match specific business
          needs, ensuring seamless integration with existing systems.
        </p>
      </div>

      <div className="pt-10 flex justify-center">
        <img src={images.inventory_steps} alt="" />
      </div>

      <div className="pt-10 pb-8 text-black text-center font-medium text-3xl">
        <p>
          <span className="text-cyan-400">Five Reasons</span> to Choose LIIA
          SMART’s Python <br /> Based Inventory Management Services
        </p>
      </div>

      <div className="max-w-6xl mx-auto py-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-teal-400 p-6 rounded-lg text-center">
            <h3 className="font-semibold text-xl">Low Cost</h3>
            <p className="mt-4">
              Keep your expenses low with a cost-effective inventory management
              solution.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-teal-400 p-6 rounded-lg text-center">
            <h3 className="font-semibold text-xl">Easy to Implement</h3>
            <p className="mt-4">
              Quick and hassle-free setup, without the need for complex
              integration.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-teal-400 p-6 rounded-lg text-center">
            <h3 className="font-semibold text-xl">Scalable</h3>
            <p className="mt-4">
              Grow your inventory system effortlessly as your business expands.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-teal-400 p-6 rounded-lg text-center">
            <h3 className="font-semibold text-xl">
              No Need for Heavy Software and IT Implementation
            </h3>
            <p className="mt-4">
              Operate seamlessly without the burden of heavy software or IT
              infrastructure.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-teal-400 p-6 rounded-lg text-center">
            <h3 className="font-semibold text-xl">
              System Tracks Stock Level and Flags Deviations
            </h3>
            <p className="mt-4">
              Automatically monitor stock levels and receive real-time alerts on
              discrepancies.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-10 text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold mb-10">
          How LIIA INC Inventory Management can elevate your business
        </h2>

        {/* Icons and Descriptions */}
        <div className="flex justify-center items-center space-x-12">
          {/* First Icon - Increase sales */}
          <div className="text-center">
            <img
              src={images.graph}
              alt="Increase sales"
              className="w-24 mx-auto mb-4"
            />
            <p className="font-medium text-gray-500">Increase sales</p>
          </div>

          {/* Second Icon - Manage orders */}
          <div className="text-center">
            <img
              src={images.checklist}
              alt="Manage orders"
              className="w-20 mx-auto mb-4"
            />
            <p className="font-medium text-gray-500">Manage orders</p>
          </div>

          {/* Third Icon - End to End Tracking */}
          <div className="text-center">
            <img
              src={images.location}
              alt="End to End Tracking"
              className="w-24 mx-auto mb-4"
            />
            <p className="font-medium text-gray-500">End to End Tracking</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
