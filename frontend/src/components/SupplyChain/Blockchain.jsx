import React from 'react'
import images from '../../assets/images/images'
import { useState, useEffect } from 'react';
import {
  LocateFixed,
  PackageSearch,
  FileCog,
  PackageCheck,
  ShieldCheck,
  Settings,
  Handshake,
  LineChart, 
  Factory,
  ShieldAlert, 
  Megaphone

} from "lucide-react";
import { Link } from 'react-router-dom';


const MachineLearning = () => {

  const [openIdx, setOpenIdx] = useState(null);
  
  const [current, setCurrent] = useState(0);

  
  

  const handleClick = (idx) => {
    // If the clicked card is already open, close it; otherwise, open the new one and close the others
    setOpenIdx(prev => (prev === idx ? null : idx));
  };

  const useCases = [
    {
      icon: <LineChart className="w-8 h-8 text-indigo-600" />,
      title: "Sustainable Food & Agriculture",
      description:
        "Track ethical sourcing, processing, and shipping—verified and consumer-visible",
    },
    {
      icon: <Factory className="w-8 h-8 text-emerald-600" />,
      title: "Clinical & Pharmaceutical Logistics",
      description:
        "Monitor temperature-sensitive drug shipments with built-in regulatory compliance",
    },
    {
      icon: <ShieldAlert className="w-8 h-8 text-rose-600" />,
      title: "High-Value & Regulated Goods",
      description:
        "Ensure provenance, authenticity, and proper handling of luxury or certified products",
    },
    
  ];




const unique = [
  {
    image: images.unique_feature, // Replace with your actual image path
    title: "Core Features",
    points: [
      "Product-level blockchain identity",
  "Smart contract automation for critical supply chain actions",
  "Real-time damage and fraud alerts via IoT"
    ],
  },
  {
    image: images.unique_help,
    title: "Who We Help",
    points: [
      "Exporters and global producers (food, pharma, commodities)",
  "Supply chain & logistics teams at fast-growing brands",
  "Quality, compliance, and risk teams",
  "Retailers and wholesalers requiring full chain-of-custody",
  "Regulatory & certification bodies"
]

  },
  {
    image: images.unique_value,
    title: "How We Deliver Value",
    points: [
      "Usage-Based Pricing – Pay only for what you use",
"Smart Contract Credits - Pay only for what you automate",
"Advanced Analytics – Insights for supply, quality & risk teams",
"Certified IoT Integration - Plug-and-play with trusted sensor providers"
    ],
  },
];



  const problems = [
  {
  title: 'Unclear product origins',
  icon: <LocateFixed className="h-7 w-7 text-indigo-600" />,
  solution: 'Immutable blockchain record of sourcing and movement',
},
{
  title: 'Lost or damaged inventory',
  icon: <PackageSearch className="h-7 w-7 text-teal-800" />,
  solution: 'Real-time alerts via IoT sensors and smart contracts',
},
{
  title: 'Manual document workflows',
  icon: <FileCog className="h-7 w-7 text-yellow-500" />,
  solution: 'Automated smart contracts for validation and payments',
},
{
  title: 'Supplier/customer disputes',
  icon: <Handshake className="h-7 w-7 text-pink-600" />,
  solution: 'Timestamped, auditable, shared ledger',
},
{
  title: 'Regulatory pressure',
  icon: <ShieldCheck className="h-7 w-7 text-green-500" />,
  solution: 'Secure data trails for compliance and certification',
}
];


  const benefits=[
    {
      title: "Eliminate Fraud & Counterfeits",
      desc: "Track every product with tamper-proof records to ensure authenticity",
      icon: <ShieldCheck className="h-8 w-8 text-indigo-600" />,
    },
    {
      title: "Detect Damage & Spoilage",
      desc: "Get real-time alerts to spot handling or storage issues early",
      icon: <PackageCheck className="h-8 w-8 text-indigo-600" />,
    },
    {
      title: "Automate Compliance & Quality",
      desc: "Use smart contracts to enforce rules and simplify checks",
      icon: <Settings className="h-8 w-8 text-indigo-600" />,
    },
    {
      title: "Build Trust Across the Network",
      desc: "Share verified data to boost transparency and collaboration",
      icon: <Handshake className="h-8 w-8 text-indigo-600" />,
    },
  ];

  const slide = unique[current];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % unique.length);
    }, 5000); // change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  

  return (
    <div>
      <div className="min-h-[90vh] relative flex items-center justify-center text-white px-4 bg-cover bg-center" style={{backgroundImage:`url(${images.blockchain_hero})`}}>
       <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative text-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Blockchain-Powered Supply Chain Platform
        </h1>
        <p className="text-md md:text-xl text-white/90 mb-6">
          Built on blocks. Powered by trust.
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-white font-medium px-8 py-3 rounded-full transition duration-300 text-xl">
          Get A Quote
        </button>
      </div>
    </div>
    <div className='my-20'>
        <h2 className="text-4xl font-bold text-center text-gray-600">
            Why Choose Us?
        </h2>

        <section className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-20">
          Transparency. Traceability. Trust. Efficiency
        </h2>


        <div className="grid gap-8 md:grid-cols-2">
          {benefits.map((item, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 text-left"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-indigo-100 p-2 rounded-full">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>


     <section className="bg-white py-16 px-6 md:px-12 mt-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-600 mb-40">
          What Do We Solve for You?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => handleClick(idx)}
              className={`cursor-pointer bg-gray-50 border border-gray-200 hover:shadow-lg transition-all duration-300 rounded-2xl p-6 text-left ${
                openIdx === idx ? 'h-auto' : 'h-20' // Adjust height when open/closed
              }`}
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className="bg-indigo-100 p-2 rounded-full">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              </div>
              {/* Toggle text visibility and the entire box height */}
              <div
                className={`text-center text-gray-600 mt-2 transition-all duration-300 ease-in-out ${
                  openIdx === idx ? 'opacity-100 max-h-[200px]' : 'opacity-0 max-h-0 overflow-hidden'
                }`}
              >
                {item.solution}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <div className='my-20'>
      <h2 className="text-4xl font-bold text-center text-gray-600 mb-20">
        How does it work?
      </h2>
      <img src={images.blockchain_process} alt="" className="mx-auto mt-6 w-1/3" />
</div>


    <div className='my-10'>
        <h2 className="text-4xl font-bold text-center text-gray-600">
            Use Cases
        </h2>
    </div>

    <div className="p-6 my-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {useCases.map((card, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-center text-center"
          >
            <div className="mb-4">{card.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-600 text-sm">{card.description}</p>
          </div>
        ))}
      </div>
    </div>


    
    <div className='my-10'>
        <h2 className="text-4xl font-bold text-center text-gray-600">
            What Makes Us Unique?
        </h2>
    </div>



    <div className="flex flex-col md:flex-row items-center bg-white shadow-lg p-6 md:p-12 mx-auto transition-all duration-500 h-[500px] gap-10">

      
      <div className="md:w-1/2 mb-4 md:mb-0">
        <img
          src={slide.image}
          alt={slide.title}
          className="w-full h-[400px] object-cover"
        />
      </div>
      <div className="md:w-1/2 px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{slide.title}</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {slide.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>

    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-500 py-20 px-6 md:px-12 my-20">
                <div className="max-w-5xl mx-auto text-center my-20">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Want to Integrate this to your business?
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
  )
}

export default MachineLearning
