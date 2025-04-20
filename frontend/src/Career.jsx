import { useState,useEffect } from "react";
import CareerApplication from "./components/CareerApplication/CareerApplication";
import { useLocation } from "react-router-dom";

const Career = () => {


    const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="bg-gray-100 p-8">
            <div className="max-w-7xl mx-auto">
                <section className="text-center py-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">Welcome to LIIA SMART INC.</h1>
                    <p className="text-lg text-gray-700">
                        We are constantly searching for passionate, innovative, and driven professionals who want
                        to make an impact in the world of supply chain analytics, business modeling, and IT system
                        implementation.
                    </p>
                    <button 
                        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700" 
                        onClick={openModal}>
                        Apply for a Job
                    </button>
                </section>
                
                <section className="bg-white p-8 shadow-md rounded-lg mt-8">
                     <h2 className="text-3xl font-semibold text-gray-900 mb-4">Why Work at LIIA SMART INC.?</h2>
                     <p className="text-lg text-gray-700 mb-6">
                         At LIIA SMART INC., we're more than just a business - we're a family of innovators, strategists, and problem-solvers.
                         Our mission is to empower businesses through intelligent systems and data-driven solutions.
                         We believe that great companies are built by great people, and we are committed to fostering a work environment
                         that values growth, creativity, and collaboration.
                     </p>
                     <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
                         <li>Innovation at the Core</li>
                         <li>Work-Life Balance</li>
                         <li>A Collaborative Environment</li>
                         <li>Competitive Benefits</li>
                     </ul>
                 </section>

                 <section className="bg-white p-8 shadow-md rounded-lg mt-8">
                     <h2 className="text-3xl font-semibold text-gray-900 mb-4">Your Career Growth Path at LIIA SMART INC.</h2>
                     <p className="text-lg text-gray-700 mb-6">
                         At LIIA SMART INC., we’re committed to helping our employees grow both personally and professionally.
                         Whether you’re beginning your career or looking to advance to the next level,
                         we provide the tools and support to help you succeed.
                     </p>
                     <h3 className="text-2xl font-semibold text-gray-900 mb-4">Growth Path:</h3>
                     <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
                         <li>Entry-Level Roles</li>
                         <li>Mid-Level Management</li>
                         <li>Leadership and Beyond</li>
                     </ul>
                 </section>


                

                
            </div>
            
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg relative w-96">
                        
                        <CareerApplication onClose={closeModal}/>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Career;
