import images from "../../assets/images/images";
import Contact from "../ContactForm/Contact";
import ContactInfo from "../ContactInfo/ContactInfo";
import { useState, useRef, useEffect } from "react";
import { Plus } from 'lucide-react';
import { Link } from "react-router-dom";




const image = [
  "https://liia-cdn.vercel.app/home_im1.webp",
  "https://liia-cdn.vercel.app/home_im2.webp",
  "https://liia-cdn.vercel.app/home_im3.webp",
  "https://liia-cdn.vercel.app/home_im4.webp",
  "https://liia-cdn.vercel.app/home_im5.webp",
];


const mission = [
      {
        title: 'Empowering Businesses',
        image: "https://liia-cdn.vercel.app/home_mission_im1.webp",
        description:"Our mission at LIIA Smart Inc is to revolutionize the way businesses operate by offering comprehensive and integrated solutions that drive excellence and innovation.",
      },
      {
        title: 'Innovative Solutions',
        image: "https://liia-cdn.vercel.app/home_mission_im2.webp",
        description:"Providing our clients with the tools and insights needed to streamline operations, reduce costs, and enhance overall efficiency.",
      },
      {
        title: 'Customer Centered Approach',
        image: "https://liia-cdn.vercel.app/home_mission_im3.webp",
        description:"Continuously developing and implementing the latest technologies in supply chain analytics, inventory management, and IT systems to ensure our clients stay at the cutting edge.",
      },
      {
        title: 'Excellence in Service',
        image: "https://liia-cdn.vercel.app/home_mission_im4.webp",
        description:"Maintaining the highest standards of quality and professionalism in all our services, ensuring that every project we undertake is completed to the utmost satisfaction of our clients.",
      },
      {
        title: 'Sustainable Growth',
        image: "https://liia-cdn.vercel.app/home_mission_im5.webp",
        description:" Promoting sustainable business practices that not only drive growth and profitability for our clients but also contribute positively to the wider community and environment.",
      },
    ];


    const services = [
      {
        title: 'Inventory Management System',
        image: "https://liia-cdn.vercel.app/inventory_hero.webp",
        description:"Take control of your inventory with our advanced management system. Get real-time analytics, accurate demand forecasting, and actionable restocking insights to streamline your supply chain and reduce operational risks—designed to drive efficiency at every step.",
        link:"/inventorymanagement"
      },
      {
        title: 'Supply Chain Analytics',
        image: "https://liia-cdn.vercel.app/supply_hero.webp",
        description:"Gain end-to-end visibility and resilience in your supply chain with cutting-edge AI and machine learning. Our analytics platform helps you identify disruptions early, improve operational performance, and stay competitive in a fast-moving market.",
        link:"/supplychain"
      },
      {
        title: 'Airbnb Market Analytics',
        image: "https://liia-cdn.vercel.app/airbnb_hero.webp",
        description:"Supercharge your Airbnb strategy with powerful, data-driven insights. Whether you're just getting started or scaling a portfolio, our analytics tools help you identify high-performing opportunities, optimize listings, and boost revenue with confidence.",
        link:"/airbnbanalytics"
      }
    ];




const Home = () => {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const servicesRef = useRef(null);

  

  
  
  


  const [selectedMissionIndex, setSelectedMissionIndex] = useState(null); // Track selected mission

  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % image.length);
      }, 5000); // Change every 4 seconds
      return () => clearInterval(interval);
    }, []);

    const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentServiceIndex((prevIndex) => (prevIndex + 1) % services.length);
      }, 5000); // 5 seconds
      return () => clearInterval(interval);
    }, []);


    const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <div className="bg-gray-50">
      <section className="w-full bg-white py-16 px-6 md:px-20">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Text content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-10">
            Where Innovation Meets Technology
          </h1>
          <p className="mt-4 text-2xl text-gray-600 mb-5">
            Welcome to LIIA Smart — your global partner in digital transformation. We empower businesses worldwide with cutting-edge solutions in supply chain analytics, inventory optimization, IT implementation, and business modeling. Backed by seasoned industry experts, we deliver smart, scalable, and data-driven strategies that enhance efficiency, reduce costs, and unlock sustainable growth across markets.
          </p>
          <a href="#services">
          <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-[7px] shadow-md transition-all duration-300 md:w-1/5" onClick={scrollToServices}>
            Our Services
          </button>
          </a>
        </div>

        {/* Image Slideshow */}
        <div className="md:w-1/2 md:h-[700px] h-[200px] rounded-xl shadow-lg overflow-hidden relative">
          <img
            key={currentImageIndex} // This forces React to re-render on index change
            src={image[currentImageIndex]}
            alt={`Slide ${currentImageIndex + 1}`}
            className="w-full h-full rounded-xl animate-fadeIn"
            loading="lazy"
          />
        </div>
      </div>
    </section>


    <div className="flex flex-col md:flex-row mx-auto bg-white rounded-xl shadow-lg overflow-hidden mt-[100px] mb-[150px]">
            <img
              src="https://liia-cdn.vercel.app/home_vision.webp" // replace with actual image path
              alt="Mission"
              className="w-full md:w-1/2 object-cover"
              loading="lazy"
            />
            <div className="p-6 flex flex-col md:mt-20">
              <h2 className="text-2xl font-bold mb-5 md:text-5xl">Our Vision</h2>
              
              <p className="text-gray-700 mb-4 md:text-2xl md:mr-20">To be the trusted partner that helps businesses unlock their full potential with innovative solutions, smart analytics, and seamless system integration.</p>
              
            </div>
    </div>
    
    <div className="py-9 text-center font-bold md:text-6xl text-4xl mx-2 flex justify-center my-20" ref={servicesRef}>
        <p>
        Our Services
        </p>
      </div>

    {/* Services Slideshow Section */}
    <section className="w-full bg-white py-16 px-6 md:px-20">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Text content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              {services[currentServiceIndex].title}
            </h1>
            <p className="text-2xl text-gray-600 mb-5">
              {services[currentServiceIndex].description}
            </p>
            <Link
                        to={services[currentServiceIndex].link}
                        className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold text-lg md:text-base px-6 py-3 rounded-lg transition duration-300 mt-20"
                      >
              Check Service
            </Link>
          </div>

          {/* Image Slideshow */}
          <div className="md:w-1/2 w-full rounded-xl shadow-lg overflow-hidden relative">
            <img
              key={currentServiceIndex}
              src={services[currentServiceIndex].image}
              alt={services[currentServiceIndex].title}
              className="w-full md:h-[700px] rounded-xl transition-all duration-700 ease-in-out animate-fadeIn"
              loading="lazy"
            />
          </div>
        </div>
    </section>



    <div className="flex justify-center text-center my-40">
        <h1 className="text-4xl md:text-6xl font-bold">Our Mission</h1>
    </div>
    <div className="flex flex-wrap md:flex-nowrap w-full cursor-pointer">
      {mission.map((missionItem, index) => (
        <div
        key={index}
        className="relative w-full md:w-1/4 h-96 bg-cover bg-center group transition-all duration-300"
        style={{ backgroundImage: `url(${missionItem.image})` }}
        onClick={() => setSelectedMissionIndex(index === selectedMissionIndex ? null : index)} // Toggle selection
      >
        {/* Overlay */}
        <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${selectedMissionIndex === index ? 'opacity-50' : 'opacity-40'}`}></div>
      
        {/* Title */}
        <div className={`absolute inset-0 flex items-center justify-center z-10 text-white text-3xl drop-shadow-lg text-center transition-opacity duration-300 ${selectedMissionIndex === index ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          {missionItem.title}
        </div>
      
        {/* Plus Sign */}
        <div className={`absolute bottom-4 right-4 z-10 text-white text-3xl font-bold pointer-events-none select-none ${selectedMissionIndex === index ? 'opacity-50 hidden' : ''}`} onClick={() => setSelectedMissionIndex(index === selectedMissionIndex ? null : index)} >
          <Plus/>
        </div>
      
        {/* Description */}
        {selectedMissionIndex === index && (
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center p-4 z-20 text-white bg-black bg-opacity-50">
            <p className="text-lg text-center">{missionItem.description}</p>
          </div>
        )}
      </div>
      
      ))}
    </div>

    
      

      {/* Conclusion Section */}
      {/* <div className="px-10 py-8 bg-white shadow-lg rounded-lg">
        <p className="text-lg text-gray-600 leading-relaxed">
          Through our dedication to these principles, we aim to help businesses
          navigate the complexities of the modern market, achieve their
          strategic goals, and unlock their full potential.
        </p>
      </div> */}
      {/* <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <ContactInfo />

          
          <Contact />
        </div>
      </div> */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-500 py-20 px-6 md:px-12 my-20">
            <div className="max-w-5xl mx-auto text-center my-20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Want to Reach Us?
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
      
    </div>
  );
};

export default Home;
