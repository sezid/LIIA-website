import { useState } from "react";
import images from "../../assets/images/images";



const BusinessPartner = () => {
  

  const partners = [
  {
    name: "BDMLI LTD.",
    title: "Innovation and Collaboration in AI and Machine Learning",
    description:
      "BDMLI LTD. is a pioneer in fostering collaboration and innovation within the AI and machine learning sectors. Our mission is to create cutting-edge AI-based solutions driven by state-of-the-art deep learning and generative models. By engaging with industry partners, supporting AI-based startups, and nurturing groundbreaking research, we strive to develop real-world applications that address unique business challenges. Our expertise spans sequential decision-making, computer vision, large language models, and more, making us a go-to partner for AI-driven transformations.",
    logo: images.bdmli_bus_partner},
    
  {
    name: "BSMA",
    title: "Because Life Depends On Us™",
    description:
      "The Bio Supply Management Alliance (BSMA) was born for the need to create a worldwide community of operations and supply chain management leaders and professionals in the biotech, biopharma, and biomedical device industries. Based in the San Francisco Bay Area, home to more than 400 bio firms, the Alliance provides a forum for collaboration, learning and best practice sharing of practitioners, executives and thought leaders in these uniquely demanding industries.",
    
    logo: images.bsma_bus_partner},
  {
    name: "Hoplon InfoSec",
    title: "Securing Your Digital World",
    description:
      "Hoplon InfoSec is dedicated to safeguarding your business with top-tier cybersecurity and cyber defense services. Our proactive approach ensures the security of your digital assets through comprehensive vulnerability assessments, threat intelligence, incident response, and post-incident remediation. Specializing in security compliance, penetration testing, and risk management, we provide tailored solutions to protect your critical infrastructure. Our expertise in cybersecurity focuses on prevention, while our cyber defense capabilities ensure swift threat detection and mitigation, giving you peace of mind in a digital world.",
    logo:images.hoplon_bus_partner},
  {
    name: "Geo Lyseis",
    title: "Next-Generation Global IT Solutions",
    description:
      "Geo Lyseis is a leading IT software and business process services company based in Chicago, USA, offering comprehensive IT and staffing solutions globally. We specialize in UI/UX design, website development, mobile app development, software development, and more. Our services extend across the USA, Canada, India, and Bangladesh, providing competitive pricing options for on-shore, near-shore, and off-shore engagements. At Geo Lyseis, we connect talent with businesses, delivering high-quality services to drive innovation and success for our clients.",
    logo:images.geo_bus_partner},
];

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Our Partners
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300"
            
          >
            <div className="p-6 flex items-center gap-4">
              <img
                src={partner.logo}
                alt="Logo"
                className="w-20 h-20 object-contain rounded-full border"
              />
              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  {partner.name}
                </h2>
                <h3 className="text-md text-gray-600 mt-1">
                  {partner.title}
                </h3>
              </div>
            </div>
            
              <div className="p-6 pt-0 text-gray-700 text-base">
                <p>{partner.description}</p>
              </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessPartner;
