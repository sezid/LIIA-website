import { useEffect} from "react";
import { useLocation } from "react-router-dom";

const BusinessPartner = () => {

    const { pathname } = useLocation();

    useEffect(() => {
    window.scrollTo(0, 0);
    }, [pathname]);


    return (
        <div className="bg-gray-50">
            {/* Our Partner Section */}
            <div className="px-10 py-8 bg-white shadow-lg rounded-lg mb-8">
                <h1 className="font-bold text-4xl text-gray-800 pb-4 border-b-2 border-gray-200">
                    Our Partner
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed pt-4">
                    Functionality You Will LoveAt LIIA Inc., we are proud to collaborate with esteemed partners to enhance our services.
                    Through strategic partnerships with Bangladesh Machine Learning Institute, GeoLyseis, Hoplon Infosec Company, and Esiddinfo, 
                    we can offer innovative solutions and superior services to our clients.
                </p>
            </div>

            {/* BDMLI LTD Section */}
            <div className="px-10 py-8 bg-white shadow-lg rounded-lg mb-8">
                <h2 className="text-red-500 font-semibold text-2xl">BDMLI LTD.</h2>
                <h3 className="font-bold text-2xl text-gray-800 pt-2">Innovation and Collaboration in AI and Machine Learning</h3>
                <p className="text-lg text-gray-600 leading-relaxed pt-4">
                    BDMLI LTD. is a pioneer in fostering collaboration and innovation within the AI and machine learning sectors. Our mission is to create
                    cutting-edge AI-based solutions driven by state-of-the-art deep learning and generative models. By engaging with industry partners,
                    supporting AI-based startups, and nurturing groundbreaking research, we strive to develop real-world applications that address unique
                    business challenges. Our expertise spans sequential decision-making, computer vision, large language models, and more, making us a go-to partner
                    for AI-driven transformations.
                </p>
            </div>

            {/* Esiddinfo Pvt. Ltd. Section */}
            <div className="px-10 py-8 bg-white shadow-lg rounded-lg mb-8">
                <h2 className="text-red-500 font-semibold text-2xl">Esiddinfo Pvt. Ltd.</h2>
                <h3 className="font-bold text-2xl text-gray-800 pt-2">Unlocking the Power of Technology for Your Business Success</h3>
                <p className="text-lg text-gray-600 leading-relaxed pt-4">
                    Esiddinfo Pvt. Ltd. is your comprehensive destination for advanced technology solutions designed to elevate your business. With over 14 years of
                    software development expertise, we offer innovative and cost-effective solutions including CRM, HRM, inventory and supply chain management, custom
                    software development, and cloud-based data warehousing. Our team leverages the latest technologies to provide tailored solutions that drive growth
                    and efficiency. From data analytics and machine learning to IoT integration, we are dedicated to transforming your business through technology.
                </p>
            </div>

            {/* Hoplon InfoSec Section */}
            <div className="px-10 py-8 bg-white shadow-lg rounded-lg mb-8">
                <h2 className="text-red-500 font-semibold text-2xl">Hoplon InfoSec</h2>
                <h3 className="font-bold text-2xl text-gray-800 pt-2">Securing Your Digital World</h3>
                <p className="text-lg text-gray-600 leading-relaxed pt-4">
                    Hoplon InfoSec is dedicated to safeguarding your business with top-tier cybersecurity and cyber defense services. Our proactive approach ensures the
                    security of your digital assets through comprehensive vulnerability assessments, threat intelligence, incident response, and post-incident remediation.
                    Specializing in security compliance, penetration testing, and risk management, we provide tailored solutions to protect your critical infrastructure.
                    Our expertise in cybersecurity focuses on prevention, while our cyber defense capabilities ensure swift threat detection and mitigation, giving you
                    peace of mind in a digital world.
                </p>
            </div>

            {/* Geo Lyseis Section */}
            <div className="px-10 py-8 bg-white shadow-lg rounded-lg">
                <h2 className="text-red-500 font-semibold text-2xl">Geo Lyseis</h2>
                <h3 className="font-bold text-2xl text-gray-800 pt-2">Next-Generation Global IT Solutions</h3>
                <p className="text-lg text-gray-600 leading-relaxed pt-4">
                    Geo Lyseis is a leading IT software and business process services company based in Chicago, USA, offering comprehensive IT and staffing solutions globally.
                    We specialize in UI/UX design, website development, mobile app development, software development, and more. Our services extend across the USA, Canada, India,
                    and Bangladesh, providing competitive pricing options for on-shore, near-shore, and off-shore engagements. At Geo Lyseis, we connect talent with businesses,
                    delivering high-quality services to drive innovation and success for our clients.
                </p>
            </div>
        </div>
    );
};

export default BusinessPartner;
