import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Supply = () => {

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
                    backgroundImage: "url(https://i.ibb.co.com/86PKM55/Whats-App-Image-2024-09-19-at-11-34-50-b4d9b141-1.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}>
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="absolute top-0 left-0 w-full text-left text-white">
                    <div className="">
                        <div className="p-10">
                            <h1 className="mb-5 text-3xl md:text-5xl font-bold">SUPPLY CHAIN ANALYTICS</h1>

                        </div>
                    </div>
                </div>
            </div>

            <div className="p-16 text-center font-bold text-2xl">
                <p>



                    At LIIA Smart Inc., our Supply Chain Analytics service leverages cutting-edge AI and machine learning technologies to optimize supply chain operations, ensuring our clients stay ahead of disruptions and maintain a competitive edge. We help to achieve end-to-end supply chain visibility for optimal profitability.
                </p>
            </div>

            <div className="px-4 md:px-32 text-blue-500 text-left font-bold text-3xl md:text-5xl">
                <p>
                    Seven Reasons to Choose LIIA <br className="hidden md:block" /> SMART’s Supply Chain Analytics
                </p>
            </div>

            <div className="px-4 md:px-32 pt-3 md:pt-5">
                <p className="text-base md:text-xl">
                    With unmatched industry experience, LIIA SMART provides best-in-class <br className="hidden md:block" />
                    analytics solutions for supply chain planning, forecasting, and execution.
                </p>
            </div>


            <div className="max-w-6xl mx-auto py-10 px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-teal-400 p-6 rounded-lg text-left">
                        <h3 className="font-bold text-2xl">
                            01
                        </h3>
                        <h3 className="font-semibold text-xl">Improved Forecasting</h3>
                        <p className="mt-4">
                            Demand forecasting capabilities through machine learning allow you to accurately predict customer demand and reduce stock shortages and excess inventory.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-teal-400 p-6 rounded-lg text-left">
                        <h3 className="font-bold text-2xl">
                            02
                        </h3>
                        <h3 className="font-semibold text-xl">Enhanced Inventory Optimization</h3>
                        <p className="mt-4">
                            AI/ML and processed-based recommendations to augment humandecisions in real-time.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-teal-400 p-6 rounded-lg text-left">
                        <h3 className="font-bold text-2xl">
                            03
                        </h3>
                        <h3 className="font-semibold text-xl">High Performing Supply Chain</h3>
                        <p className="mt-4">
                            LIIA SMART’s unparalleled experience in computational intelligence delivers Supply Chain Planning solutions equipped with advanced AI and ML capabilities, allowing businesses to optimize inventory levels, adapt to changing circumstances, and ultimately improve the overall efficiency and effectiveness of supply chain operations.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-teal-400 p-6 rounded-lg text-left">
                        <h3 className="font-bold text-2xl">
                            04
                        </h3>
                        <h3 className="font-semibold text-xl">
                            Sourcing Optimization Alert
                        </h3>
                        <p className="mt-4">
                            Our analytics tools optimize sourcing decisions by analyzing supplier performance, costs, and lead times, ensuring you select the best suppliers for your business needs.
                        </p>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-teal-400 p-6 rounded-lg text-left">
                        <h3 className="font-bold text-2xl">
                            05
                        </h3>
                        <h3 className="font-semibold text-xl">
                            Increased Responsiveness
                        </h3>
                        <p className="mt-4">
                            Respond to changing market conditions and customer demands more quickly while increasing overall responsiveness and improving your overall competitiveness.
                        </p>
                    </div>
                    {/* Card 6 */}
                    <div className="bg-teal-400 p-6 rounded-lg text-left">
                        <h3 className="font-bold text-2xl">
                            06
                        </h3>
                        <h3 className="font-semibold text-xl">
                            Adaptive Metrics and Processes
                        </h3>
                        <p className="mt-4">
                            We enable the adaptive determination of supply chain metrics and processes, ensuring that your supply chain remains flexible and responsive to changing market conditions.
                        </p>
                    </div>
                </div>
            </div>


            <div className="max-w-6xl mx-auto py-10 px-4">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 justify-center p-4">
                    {/* Image container */}
                    <div className="rounded-lg text-left">
                        <img
                            src="https://i.ibb.co.com/hdCLYg2/AI-ML-Powered-Shipment-Visibility-Alerts-1.jpg"
                            alt="Increase sales"
                            className="w-full lg:w-[700px] h-auto lg:h-[1100px] object-cover"
                        />
                    </div>

                    {/* Text container */}
                    <div className="bg-teal-400 p-6 rounded-lg text-left w-full lg:w-[900px] h-auto lg:h-[400px]">
                        <h3 className="font-bold text-xl lg:text-2xl">07</h3>

                        <p className="mt-4 text-base lg:text-lg">
                            To enhance shipment tracking and visibility using AI and ML in our supply chain analytics system, we will leverage data from various sources to optimize routes, estimate delivery dates, and manage fleets efficiently. By analyzing historical and real-time data, our AI algorithms will predict the best routes, balance inventory levels, and detect potential fraud. The system will also generate alerts for potential delays and suggest proactive measures to ensure timely deliveries. This approach ensures seamless integration of shipment tracking with broader supply chain management, driving efficiency and reducing costs.
                        </p>
                    </div>
                </div>


                <div className="flex flex-col md:flex-row w-full p-5 md:p-10">
                    {/* Left part with "Business Impact" */}
                    <div className="bg-teal-400 text-white w-full md:w-1/3 flex items-center justify-center p-6 md:p-8">
                        <h2 className="text-2xl md:text-4xl font-bold text-center">Business Impact</h2>
                    </div>

                    {/* Right part with the list */}
                    <div className="bg-white text-gray-800 w-full md:w-2/3 p-6 md:p-8">
                        <ul className="text-base md:text-lg list-disc list-inside space-y-2">
                            <li>Faster data processing for quicker decision-making</li>
                            <li>Robust calculations to drive actionable recommendations</li>
                            <li>Scalable solutions that align with cross-functional business goals</li>
                            <li>Competitive advantage through proactive alert mechanisms</li>
                            <li>Achieve operational efficiency</li>
                            <li>Respond faster to change</li>
                            <li>Reduce costs</li>
                        </ul>
                    </div>
                </div>




            </div>


            <div className="text-center my-10">
                <h2 className="text-3xl font-semibold mb-8">Solution Team</h2>

                <div className="flex flex-wrap justify-center gap-8">
                    {/* Data Scientists */}
                    <div className="flex flex-col items-center">
                        <img src="https://i.ibb.co.com/gDxC7TY/t1-1.png" alt="Data Scientists" className="w-24 h-24" />
                        <p className="mt-4 font-medium">Data Scientists</p>
                    </div>

                    {/* Python Programmers */}
                    <div className="flex flex-col items-center">
                        <img src="https://i.ibb.co.com/tZPSsK9/t2-1.png" alt="Python Programmers" className="w-24 h-24" />
                        <p className="mt-4 font-medium">Python Programmers</p>
                    </div>

                    {/* Machine Learning Engineers */}
                    <div className="flex flex-col items-center">
                        <img src="https://i.ibb.co.com/LZss3bm/t3-1.png" alt="Machine Learning Engineers" className="w-24 h-24" />
                        <p className="mt-4 font-medium">Machine Learning Engineers</p>
                    </div>

                    {/* Client Services Lead */}
                    <div className="flex flex-col items-center">
                        <img src="https://i.ibb.co.com/qrGHkVz/t4-1.png" alt="Client Services Lead" className="w-24 h-24" />
                        <p className="mt-4 font-medium">Client Services Lead</p>
                    </div>

                    {/* Product Manager */}
                    <div className="flex flex-col items-center">
                        <img src="https://i.ibb.co.com/NsL5K1b/t5-1.png" alt="Product Manager" className="w-24 h-24" />
                        <p className="mt-4 font-medium">Product Manager</p>
                    </div>
                </div>
            </div>

            <div className="bg-gray-100 p-8">
                {/* Why Choose Section */}
                <h2 className="text-3xl font-bold text-center mb-8">Why Choose LIIA Smart Inc.?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
                    <div className="bg-blue-200 p-4 text-center">
                        <p className="font-bold">Stay in Command of Your ROI</p>
                    </div>
                    <div className="bg-blue-200 p-4 text-center">
                        <p className="font-bold">Bid Goodbye to Piecemeal Tactics</p>
                    </div>
                    <div className="bg-blue-300 p-4 text-center">
                        <p className="font-bold">Fix the Problem, Not the Symptoms</p>
                    </div>
                    <div className="bg-blue-200 p-4 text-center">
                        <p className="font-bold">Transform into a Value Center</p>
                    </div>
                </div>


                {/* Our Commitment Section */}
                <h2 className="text-3xl font-bold text-center mt-12 mb-8">Our Commitment</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center p-4">
                    {/* Boost */}
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <div>
                            <img src="https://i.ibb.co.com/7Cjk0Fz/c1-1.png" alt="Boost Icon" className="h-24 w-24 mx-auto" />
                        </div>
                        <h4 className="font-bold">Boost</h4>
                        <p>Supply Chain performance and build resilient supply chain</p>
                    </div>

                    {/* Reduce */}
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <div>
                            <img src="https://i.ibb.co.com/qFXjsby/c2-1.png" alt="Boost Icon" className="h-24 w-24 mx-auto" />
                        </div>
                        <h4 className="font-bold">Reduce</h4>
                        <p>Working capital and time to value for highly optimized supply chain</p>
                    </div>

                    {/* Decision Making */}
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <div>
                            <img src="https://i.ibb.co.com/bz4J2q7/c3-1.png" alt="Boost Icon" className="h-24 w-24 mx-auto" />
                        </div>
                        <h4 className="font-bold">Decision Making</h4>
                        <p>Robust Decision Making with Real Time Fashion</p>
                    </div>
                </div>

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

export default Supply;