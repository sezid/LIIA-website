import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Analyzing = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_97uc1et',         // Replace with your EmailJS service ID
            'template_z207q6k',        // Replace with your EmailJS template ID
            form.current,
            'mCBFtwviOHw4fOMEh'             // Replace with your EmailJS user ID (public key)
        ).then((result) => {
            console.log(result.text);
            alert('Message Sent Successfully!');
        }, (error) => {
            console.log(error.text);
            alert('Message Failed to Send. Try again.');
        });

        e.target.reset(); // Clear form after submission
    };
    return (
        <div>
            <div
                className="hero min-h-screen relative"
                style={{
                    backgroundImage: "url(https://i.ibb.co.com/PhSpfBz/ab3-1.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}>
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="absolute top-0 left-0 w-full text-left text-white">
                    <div className="">
                        <div className="p-10">
                            <h1 className="mb-5 text-3xl md:text-5xl font-bold">Analyzing
                                Business Models</h1>

                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-26 text-green-500 text-center font-bold text-5xl pt-8">
                <p>


                    Our Special Approach
                </p>
            </div>

            <div className="pt-3 pb-8 text-center font-medium text-xl">
                <p>



                    LIIA SMART is a Business Improvement and Turnaround Company
                </p>
            </div>

            <div className="flex justify-center">
                <img src="https://i.ibb.co.com/0BdDqq2/mo1-1.png" alt="" />
            </div>

            <div className="pt-3 pb-8 text-left font-medium text-xl mx-20">
                <p className="italic">




                    LIIA SMART is a Business Improvement and Turnaround Company
                    A Business Model Analysis involves taking a high-level look at the business as a whole and then focusing on areas which are perceived to indicate significant potential for performance improvement. The starting point is the preparation of a Business Model Canvas which is an internationally recognized tool for developing and evaluating business models.
                </p>
            </div>

            <div className="mx-26 pb-10 text-black text-center font-bold text-5xl">
                <p>


                    Why is it important to analyze business models
                </p>
            </div>

            <div className="flex justify-center ">
                <img src="https://i.ibb.co.com/Y23PfWF/an1.png" alt="" className="w-[600px] mx-auto mb-4" />
            </div>

            <div className="bg-white p-8">
                {/* Our Services Section */}
                <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 text-center p-4">
                    {/* Process Mapping & Analysis */}
                    <div className="bg-black text-white p-6 rounded-lg">
                        <h3 className="text-lg font-bold mb-4">PROCESS MAPPING & ANALYSIS</h3>
                        <p>We provide detailed process mapping to identify inefficiencies and opportunities for improvement</p>
                    </div>

                    {/* Digital Transformation */}
                    <div className="bg-gray-600 text-green-200 p-6 rounded-lg">
                        <h3 className="text-lg font-bold mb-4">DIGITAL TRANSFORMATION</h3>
                        <p>We help businesses transition to digital processes, enhancing speed, accuracy, and transparency</p>
                    </div>

                    {/* Optimization & Automation */}
                    <div className="bg-gray-100 text-green-500 p-6 rounded-lg">
                        <h3 className="text-lg font-bold mb-4">OPTIMIZATION & AUTOMATION</h3>
                        <p>We identify areas where automation can improve productivity and reduce costs</p>
                    </div>

                    {/* Performance Tracking */}
                    <div className="bg-green-500 text-white p-6 rounded-lg">
                        <h3 className="text-lg font-bold mb-4">PERFORMANCE TRACKING</h3>
                        <p>Implementing key performance indicators (KPIs) to track business processes and ensure ongoing optimization</p>
                    </div>

                    {/* Risk Management */}
                    <div className="bg-blue-500 text-white p-6 rounded-lg">
                        <h3 className="text-lg font-bold mb-4">RISK MANAGEMENT</h3>
                        <p>We analyze your business processes for potential risks and provide strategies to mitigate them</p>
                    </div>
                </div>


                {/* Digital Technology Integration Section */}
                <h3 className="text-2xl font-bold text-center mt-12 mb-8">Digital Technology Integration</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center p-4">
                    {/* Cloud-Based Solutions */}
                    <div className="bg-gray-200 p-6 shadow-md rounded-lg">
                        <h4 className="font-bold mb-4">Cloud-Based Solutions</h4>
                        <p>We offer scalable, cloud-based technology solutions to streamline business processes and ensure seamless data flow</p>
                    </div>

                    {/* AI & Machine Learning */}
                    <div className="bg-gray-200 p-6 shadow-md rounded-lg">
                        <h4 className="font-bold mb-4">AI & Machine Learning</h4>
                        <p>Leveraging AI and ML to improve forecasting, inventory management, and decision-making processes in real-time</p>
                    </div>

                    {/* Data Analytics & Business Intelligence */}
                    <div className="bg-gray-200 p-6 shadow-md rounded-lg">
                        <h4 className="font-bold mb-4">Data Analytics & Business Intelligence</h4>
                        <p>We provide robust analytics to drive decision-making, optimizing performance through actionable insights</p>
                    </div>
                </div>

            </div>


            <div className="pt-3 pb-8 text-center font-medium text-xl mx-20">
                <p>


                    At LIIA SMART INC., we utilize a wide range of tools and techniques to evaluate and optimize business models, ensuring that every component of your organization operates at peak efficiency. Below are some of the methods we employ
                </p>
            </div>

            <div className="flex justify-center ">
                <img src="https://i.ibb.co.com/pzfZ6JR/b12-1.png" alt="" className="w-[600px] mx-auto mb-4" />
            </div>


            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <h2 className="text-4xl font-bold text-gray-800 mb-8">Contact</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Contact Info */}
                    <div className="space-y-4 text-lg">
                        <div className="flex items-center space-x-4">
                            <span className="text-2xl">📍</span>
                            <p>628 Abbot Ave, Daly City, CA 94014</p>
                        </div>

                        <div className="flex items-center space-x-4">
                            <span className="text-2xl">📞</span>
                            <p>312-810-5002</p>
                        </div>

                        <div className="flex items-center space-x-4">
                            <span className="text-2xl">✉️</span>
                            <p>liia.smart.inc@gmail.com</p>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex items-center space-x-4 mt-4">
                            <span>👍</span>
                            <a href="https://www.facebook.com/groups/824524496427577/?ref=share&mibextid=S66gvF&_rdr" target="_blank" rel="noopener noreferrer">
                                <img src="https://i.ibb.co.com/C8RRLhn/download.png" alt="Facebook" className="w-10 h-10" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <img src="https://i.ibb.co.com/VxYcBXc/download-2.png" alt="Twitter" className="w-6 h-6" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <img src="https://i.ibb.co.com/tcVprsv/download-1.png" alt="LinkedIn" className="w-10 h-10" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <img src="https://i.ibb.co.com/CPQQTp6/download-1.jpg" alt="Instagram" className="w-10 h-10" />
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div >
                        <form ref={form} onSubmit={sendEmail} className="space-y-8">
                            <div>
                                <label className="block text-lg font-medium text-gray-700">Name</label>
                                <input type="text" name="from_name" className="mt-1 block w-full h-10 border border-gray-300 rounded-md shadow-sm" required />
                            </div>
                            <div>
                                <label className="block text-lg font-medium text-gray-700">Email</label>
                                <input type="email" name="from_email" className="mt-1 block w-full h-10 border border-gray-300 rounded-md shadow-sm" required />
                            </div>
                            <div>
                                <label className="block text-lg font-medium text-gray-700">Message</label>
                                <textarea name="message" rows="4" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" required></textarea>
                            </div>
                            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-sm">Submit</button>
                        </form>
                    </div>
                </div>
            </div>












        </div>
    );
};

export default Analyzing;