import { Link } from "react-router-dom";
import images from "../../src/assets/images/images";
import React, { useState, useEffect } from "react";
import { Plus, DollarSign, PieChart, LineChart, Layers, CircleCheck, CalendarClock, Timer, XCircle, Presentation, Sun } from 'lucide-react';


const Airbnb = () => {

  const [current, setCurrent] = useState(0);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedServiceIndex, setSelectedServiceIndex] = useState(null); 

  const im = [
    images.airbnb_room_pic,
    images.airbnb_analyse_pic,
    images.airbnb_success_pic,

  ];

  const dataPoints = [
  {
    icon: <LineChart className="h-8 w-8 text-rose-500" />,
    title: "Revenue per Available Night (RevPAN)",
    description: "See how much you're really earning, even on unbooked nights, and find ways to boost overall profitability.",
    linkText: "Explore Markets"
  },
  {
    icon: <CalendarClock className="h-8 w-8 text-purple-500" />,
    title: "Booking Lead Time",
    description: "Understand when guests book so you can launch early-bird deals or last-minute promos that actually work.",
    linkText: "Compare Listings"
  },
  {
    icon: <Timer className="h-8 w-8 text-indigo-500" />,
    title: "Length of Stay",
    description: "ttract longer stays and cut down on cleaning and turnover costs while earning steady income.",
    linkText: "Evaluate Listings"
  },
  {
    icon: <DollarSign className="h-8 w-8 text-green-500" />,
    title: "Average Daily Rates (ADR)",
    description: "Access real-time ADR data to improve the Airbnb pricing strategy of your vacation rental listings. Price your Airbnb listing strategically to boost gross revenue.",
    linkText: "View Daily Rates"
  },
  {
    icon: <PieChart className="h-8 w-8 text-yellow-500" />,
    title: "Occupancy Rates",
    description: "Take your Airbnb business to the next level by understanding occupancy rate trends. Streamline pricing, boost bookings, and ensure high demand.",
    linkText: "See Trends"
  },
  {
    icon: <XCircle className="h-8 w-8 text-rose-500" />,
    title: "Cancellation Rate",
    description: "Reduce lost bookings by spotting what’s driving cancellations—whether it’s unclear rules, bad timing, or poor pricing.",
    linkText: "View Rental Projections"
  },
  {
    icon: <Presentation className="h-8 w-8 text-sky-500" />,
    title: "Competitor Data",
    description: "Analyze the impact of startup costs and recurring operating expenses, as well as the financing strategy on your bottom line.",
    linkText: "Analyze Properties"
  },
  {
    icon: <Layers className="h-8 w-8 text-fuchsia-500" />,
    title: "Return on Investment",
    description: "See exactly how nearby listings are priced and performing, so you can beat them at their own game.",
    linkText: "Best ROI Picks"
  },
  {
    icon: <Sun className="h-8 w-8 text-orange-500" />,
    title: "Seasonality Trends",
    description: "Know your peak seasons in advance and adjust pricing or promotions to make the most money when demand surges.",
    linkText: "View Hot Markets"
  },
];

  

  const services = [
    {
      title: 'Market Performance Tracking',
      image: images.airbnb_market_pic,
      description: "Stay ahead with our detailed market reports, tracking key performance indicators like Occupancy Rates, Average Daily Rate (ADR), and Revenue Potential. Our Regional Insights offer a clear view of market trends across different locations, helping you identify high-demand areas and strategically position your listings for success."
    },
    {
      title: 'Price Optimization Tools',
      image: images.airbnb_price_pic,
      description:"Optimize your pricing with our advanced tools that analyze seasonal trends, local demand, and competitor pricing. Our algorithms suggest ideal nightly rates to maximize your earnings while maintaining occupancy." 

    },
    {
      title: 'Property Investment Analysis',
      image: images.airbnb_property_pic,
      description: "Make smart investment decisions with insights into cap rates, income potential, and ROI predictions. Our data-driven analysis helps you evaluate and expand your property portfolio confidently."
    },
    {
      title: 'Custom Analytics Solutions',
      image: images.airbnb_custom_pic,
      description: "Tailored to your specific needs, we offer market comparisons, performance forecasting, and custom dashboards. Work with our experts to develop personalized strategies that deliver actionable insights for your business"
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
      <div className="min-h-[90vh] relative flex items-center justify-center text-white px-4 bg-[url('https://liia-cdn.vercel.app/airbnb_hero.webp')] bg-cover bg-center">
             <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="relative text-center max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                Smarter Hosting Starts with Better Data
              </h1>
              <p className="text-md md:text-2xl text-white/90 mb-6">
                Delivering the insights that matter
              </p>
              <button className="bg-green-500 hover:bg-green-600 text-white font-medium px-8 py-3 rounded-full transition duration-300 text-lg">
                Get A Quote
              </button>
            </div>
          </div>

      <div className="py-9 text-blue-500 text-center font-semibold md:text-5xl text-2xl mx-2 flex justify-center my-20">
        <p>Make Your Airbnb Work Smarter, Not Harder</p>
      </div>

      {/* <div className="pt-3 pr-16 pl-16 pb-10 text-center font-bold text-2xl">
        <p>
          Maximize your Airbnb success with LIIA SMART INC's comprehensive
          Market Analytics tools. Whether you're a seasoned investor or just
          starting out, our data-driven insights empower you to make informed
          decisions, optimize your listings, and boost your revenue.
        </p>
      </div> */}

      <div className="w-full flex flex-col md:flex-row items-center bg-white shadow-lg overflow-hidden min-h-[60vh]">
      
      {/* Left Side Image Slideshow */}
      <div className="md:w-1/2 w-full h-64 md:h-auto relative overflow-hidden">
  <img
    key={current}
    src={im[current]}
    alt="Airbnb Market"
    className="w-full h-[600px] object-cover opacity-0 animate-fadeIn"
  />
</div>


      {/* Right Side Text */}
      <div className="md:w-1/2 w-full p-8 text-left">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Why Airbnb Market Analytics</h2>
        <p className="text-gray-600 md:text-xl leading-relaxed">
          In the competitive world of short-term rentals, understanding market dynamics is crucial. Our Airbnb Market Analytics gives you clear insights into local trends and pricing strategies—so you can stay ahead, optimize listings, and maximize revenue.
        </p>
      </div>
    </div>


    <div className="max-w-7xl mx-auto px-4 py-10 my-20">
      <h2 className="text-3xl font-bold text-center mb-10">What Data Can You Get From Airbnb?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
        {dataPoints.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow"
          >
            {item.icon}
            <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
            
          </div>
        ))}
      </div>
    </div> 

    <div className="py-9 text-blue-500 text-center font-semibold md:text-5xl text-2xl mx-2 flex justify-center my-20">
        <p>Why Choose Us?</p>
    </div>
    
    <section className="p-6 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {/* Left: Benefits */}
        <div className="bg-white rounded-2xl shadow-md p-10">
          <h3 className="text-3xl font-bold text-gray-800 mb-7">
            Key Benefits
          </h3>
          <ul className="space-y-3 text-gray-700 text-lg list-disc list-inside p-2 list-none">
            
            <li className="flex gap-2"><CircleCheck className="text-green-500 mt-1" size={22}/>Optimize pricing to maximize revenue based on demand and trends</li>
            <li className="flex gap-2"><CircleCheck className="text-green-500 mt-1" size={22}/>Boost occupancy by aligning availability with booking patterns</li>
            <li className="flex gap-2"><CircleCheck className="text-green-500 mt-1" size={22}/>Benchmark performance against competitors in your area</li>
            <li className="flex gap-2"><CircleCheck className="text-green-500 mt-1" size={22}/>Understand guest behavior to enhance listings and experiences</li>
            <li className="flex gap-2"><CircleCheck className="text-green-500 mt-1" size={22}/>Make informed investment decisions using market and ROI insights</li>
            
           
            
          </ul>
        </div>

        {/* Right: Smaller Property Card */}
        <div className="space-y-4">
          {/* Property Card */}
          <div className="bg-white rounded-xl shadow-md p-3">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Property"
              className="rounded-md w-full h-[300px] object-cover mb-3"
            />
            <div className="grid grid-cols-3 text-center text-gray-700 text-sm">
              <div>
                <p>Occupancy</p>
                <p className="text-base font-bold">55%</p>
                <p className="text-green-500">▲ 32%</p>
              </div>
              <div>
                <p>ADR</p>
                <p className="text-base font-bold">$211</p>
                <p className="text-green-500">▲ 12%</p>
              </div>
              <div>
                <p>Revenue</p>
                <p className="text-base font-bold">$34.7K</p>
                <p className="text-green-500">▲ 67%</p>
              </div>
            </div>
          </div>

          {/* Chart cards */}
          <div className="grid grid-cols-2 gap-4">
            {/* Short Term */}
            <div className="bg-white rounded-xl shadow-md p-3">
              <p className="text-xs text-gray-500">Short term</p>
              <p className="text-green-500 text-xl">▲ 70.5%</p>
              
            </div>

            {/* Long Term */}
            <div className="bg-white rounded-xl shadow-md p-3">
              <p className="text-xs text-gray-500">Long term</p>
              <p className="text-red-500 text-xl">▼ 10.5%</p>
              
            </div>
          </div>

          
        </div>
      </div>
    </section>   




    <div className="flex flex-col md:flex-row mx-auto bg-white rounded-xl shadow-lg overflow-hidden mt-[200px] mb-[150px]">
      <img
        src={images.airbnb_mission_pic} // replace with actual image path
        alt="Mission"
        className="w-full md:w-1/2 object-cover"
      />
      <div className="p-6 flex flex-col md:mt-20">
        <h2 className="text-2xl font-bold mb-5 md:text-4xl">Our Mission</h2>
        
        <p className="text-gray-700 mb-4 md:text-xl md:mr-20">At LIIA Smart, we empower Airbnb hosts to make smarter, data-backed decisions that lead to higher earnings and greater guest satisfaction. Our tailored analytics solutions help you optimize pricing, boost occupancy rates, and stay one step ahead in a competitive short-term rental market.</p>
        
      </div>
    </div>
    <div className="flex justify-center text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold">What do we Offer?</h1>
    </div>
    <div className="flex flex-wrap md:flex-nowrap w-full">
      
      {services.map((service, index) => (
        <div
          key={index}
          className="relative w-full md:w-1/4 h-96 bg-cover bg-center group transition-all duration-300"
          style={{ backgroundImage: `url(${service.image})` }}
          onClick={() => setSelectedServiceIndex(index === selectedServiceIndex ? null : index)}
        >
          {/* Overlay */}
        <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${selectedServiceIndex === index ? 'opacity-50' : 'opacity-30'}`}></div>
      
        {/* Title */}
        <div className={`absolute bottom-4 left-4 z-10 text-white text-xl drop-shadow-lg ${selectedServiceIndex === index ? 'opacity-50 hidden' : ''}`}>
          {service.title}
        </div>
      
        {/* Plus Sign */}
        <div className={`absolute bottom-4 right-4 z-10 text-white text-3xl font-bold pointer-events-none select-none ${selectedServiceIndex === index ? 'opacity-50 hidden' : ''}`} onClick={() => setSelectedServiceIndex(index === selectedServiceIndex ? null : index)} >
          <Plus/>
        </div>
      
        {/* Description */}
        {selectedServiceIndex === index && (
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center p-4 z-20 text-white bg-black bg-opacity-50">
            <p className="text-lg text-center">{service.description}</p>
          </div>
        )}

        </div>
      ))}
    </div>

      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-500 py-20 px-6 md:px-12 my-20">
            <div className="max-w-5xl mx-auto text-center my-20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Elevate Your Airbnb?
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

export default Airbnb;
