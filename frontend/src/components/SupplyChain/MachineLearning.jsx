import images from '../../assets/images/images'
import { useState, useEffect } from 'react';
import {
  Brain,
  LineChart,
  Users,
  Settings2,
  BarChart4,
  BrainCog,
  Workflow,
  SearchCheck,
  Gauge,
  Activity, 
  TrendingUp,
  Boxes,
  Route,
  DollarSign
} from "lucide-react";

import { Link } from 'react-router-dom';



const useCases = [
  {
    icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
    title: "Demand Forecasting",
    description:
      "Accurately predict future demand using advanced machine learning models to improve planning and reduce stockouts.",
  },
  {
    icon: <Boxes className="w-8 h-8 text-green-600" />,
    title: "Inventory Optimization",
    description:
      "Streamline inventory management by identifying optimal stock levels and minimizing holding and replenishment costs.",
  },
  {
    icon: <Route className="w-8 h-8 text-purple-600" />,
    title: "Logistics & Route Optimization",
    description:
      "Enhance delivery efficiency and reduce transportation costs with intelligent route planning and real-time data.",
  },
  {
    icon: <DollarSign className="w-8 h-8 text-orange-600" />,
    title: "Dynamic Pricing & Procurement",
    description:
      "Leverage AI to automate pricing strategies and procurement decisions in response to changing demand and supply dynamics.",
  }
];



  const unique = [
    {
      image: "https://liia-cdn.vercel.app/unique_feature.webp",
      title: "Core Features",
      points: [
        "Predictive analytics for better decision-making",
        "Automated workflows powered by machine learning",
        "Real-time performance monitoring and anomaly detection",
        "Customizable dashboards for visualizing insights and metrics",
        "Seamless integration with ERP, CRM, and other business systems",
      ],
    },
    {
      image: "https://liia-cdn.vercel.app/unique_help.webp",
      title: "Who We Help",
      points: [
        "Brands and retailers seeking smarter customer engagement",
        "Manufacturers and supply chain teams aiming to optimize operations",
        "Financial institutions requiring fraud detection and risk management",
        "Marketing teams focused on improving targeting and conversion rates",
        "Healthcare providers using predictive models for patient care",
      ],
    },
    {
      image: "https://liia-cdn.vercel.app/unique_value.webp",
      title: "How We Deliver Value",
      points: [
        "Usage-Based Pricing – Pay only for what you use",
  "Tailored AI Solutions – Get AI built for your business",
  "Advanced Analytics – Gain insights that drive growth",
  "Seamless Integration – Plug into your systems with ease"
      ],
    },
  ];



  const problems = [
  {
    title: 'Inaccurate Forecasting',
    icon: <BarChart4 className="h-7 w-7 text-indigo-600" />,
    solution: 'Machine learning models for accurate, data-driven forecasts',
  },
  {
    title: 'Complex Customer Behavior',
    icon: <BrainCog className="h-7 w-7 text-teal-800" />,
    solution: 'Advanced segmentation using clustering and neural networks',
  },
  {
    title: 'Manual Data Processing',
    icon: <Workflow className="h-7 w-7 text-yellow-500" />,
    solution: 'Automation of repetitive tasks with intelligent algorithms',
  },
  {
    title: 'Lack of Data Insights',
    icon: <SearchCheck className="h-7 w-7 text-pink-600" />,
    solution: 'Actionable insights through data analytics and visualizations',
  },
  {
    title: 'Inefficient Operations',
    icon: <Gauge className="h-7 w-7 text-green-500" />,
    solution: 'Process optimization using reinforcement learning techniques',
  },
  {
    title: 'Suboptimal Decision Making',
    icon: <Activity className="h-7 w-7 text-purple-600" />,
    solution: 'Predictive intelligence to support better decisions',
  },
];


  const benefits=[
    {
      title: "Automated Decision-Making",
      desc: "Leverage predictive models to streamline complex decisions in real-time.",
      icon: <Brain className="h-8 w-8 text-indigo-600" />,
    },
    {
      title: "Accurate Forecasting",
      desc: "Improve demand, sales, and inventory planning with AI-powered forecasts.",
      icon: <LineChart className="h-8 w-8 text-indigo-600" />,
    },
    {
      title: "Smart Customer Segmentation",
      desc: "Personalize experiences using advanced customer insights and clustering.",
      icon: <Users className="h-8 w-8 text-indigo-600" />,
    },
    {
      title: "Operational Efficiency",
      desc: "Increase productivity by automating repetitive processes with intelligence.",
      icon: <Settings2 className="h-8 w-8 text-indigo-600" />,
    },
  ];


const MachineLearning = () => {

  const [openIdx, setOpenIdx] = useState(null);
  
  const [current, setCurrent] = useState(0);

  
  

  const handleClick = (idx) => {
    // If the clicked card is already open, close it; otherwise, open the new one and close the others
    setOpenIdx(prev => (prev === idx ? null : idx));
  };

  
  const slide = unique[current];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % unique.length);
    }, 5000); // change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  

  return (
    <div>
      <div className="min-h-[90vh] relative flex items-center justify-center text-white px-4 bg-cover bg-center" style={{backgroundImage:`url(https://liia-cdn.vercel.app/ml_hero.webp)`}}>
       <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative text-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Machine Learning-Powered Analytics Platform
        </h1>
        <p className="text-md md:text-xl text-white/90 mb-6">
          Revolutionize Your Business with Intelligent Automation
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-3 rounded-full transition duration-300 text-xl">
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
          Accuracy, Automation, Insights, Efficiency
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
      <img src={images.ml_process} alt="" className="mx-auto mt-6 w-1/3" />
</div>


    <div className='my-10'>
        <h2 className="text-4xl font-bold text-center text-gray-600">
            Use Cases
        </h2>
    </div>

    <div className="p-6 my-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
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
  <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">{slide.title}</h2>
  <ul className="space-y-4">
    {slide.points.map((point, index) => (
      <li
        key={index}
        className="flex items-start space-x-3 p-2 transition-shadow duration-300"
      >
        <span className="flex-shrink-0 mt-1 text-primary">
          <svg
            className="w-5 h-5 text-blue-600"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <span className="text-xl">{point}</span>
      </li>
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
                    Let’s talk about how Machine Learning can enhance your supply chain activites.
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
  )
}

export default MachineLearning
