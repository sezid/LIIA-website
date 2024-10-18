import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Inventory = () => {

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
            <div className="text-center bottom-0 left-0 w-full text-left">
                <div className="bg-white bg-opacity-30 w-full">
                    <div className="p-3">
                        <h1 className="mb-5 text-3xl md:text-5xl font-bold">LIIA SMART  INVENTORY MANAGEMENT</h1>

                    </div>
                </div>
            </div>
            <div
                className="hero mt-2 min-h-[600px] relative"
                style={{
                    backgroundImage: "url(https://i.ibb.co.com/n8P5GZM/The-Best-Guide-to-an-Inventory-Control-System-for-Your-Business.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}>
                <div className="hero-overlay bg-opacity-30"></div>
                
            </div>


            <div className="p-16 text-center font-bold text-2xl">
                <p>


                    Optimize and strategize your supply chain execution with our advanced Inventory Management System. We provide comprehensive data analytics to help you determine which items to restock, forecast demand accurately, and assess risks effectively. Enhance your supply chain efficiency and make informed decisions with our tailored solutions.
                </p>
            </div>


            <div className="mx-26 text-green-500 text-center font-bold text-5xl">
                <p>

                    Optimize Inventory
                    <br />Drive Customer Satisfaction <br />
                    Drive Profitability
                </p>
            </div>


            <div className="p-16 text-center font-medium text-xl">
                <p>


                    Inventory tracking can be time-consuming for many small and medium-sized businesses. <br /> Our smart system will help you effectively manage your stock, so you always know what you have <br /> and what you need before you even need it.
                </p>
            </div>

            <div className="flex justify-center">
                <img src="https://i.ibb.co.com/mGnhy66/inventory-managment-procress-diagram-2-1.jpg" alt="" />
            </div>

            <div className="py-9 text-blue-500 text-center font-semibold text-5xl flex justify-center">
                <p>
                    Understand Your Current Inventory and What Needs Restocking
                </p>
            </div>

            <div className="pl-20 text-left font-bold text-2xl">
                <p>


                    Easy Visibility of Inventory on Hand
                </p>
            </div>


            <div className="pl-20 pr-20 pt-3 text-left font-normal text-xl">
                <p>

                    Complete and clear visibility of current inventory on hand, inventory on order, inventory in transit through our python-based system. This easy to use and low-cost system can readily transform your inventory visibility across the product families, locations, programs.
                </p>
            </div>

            <div className="pt-10 flex justify-center">
                <img src="https://i.ibb.co.com/njVGrTT/Whats-App-Image-2024-08-27-at-12-27-29-704e27fe-1.jpg" alt="" />
            </div>


            <div className="pl-20 text-left font-bold text-2xl">
                <p>


                    Stay on Top of Inventory
                </p>
            </div>

            <div className="pl-20 pr-20 pt-3 text-left font-normal text-xl">
                <p>

                    Our Python-based inventory system tracks real-time SKU data and automatically provides monthly updates on any deviations in stock levels. This allows businesses to stay ahead of inventory shortages and ensures timely stock replenishment, improving overall efficiency and reducing the risk of stockouts for high priority units.
                </p>
            </div>


            <div className="pt-10 flex justify-center">
                <img src="https://i.ibb.co.com/bzt2XNs/ni2-1.png" alt="" />
            </div>

            <div className="pt-6 pb-8 text-black text-center font-semibold text-5xl">
                <p>

                    Key Benefits of LIIA Smart Inventory <br /> Management System
                </p>
            </div>


            <div className="pt-10 flex justify-center">
                <img src="https://i.ibb.co.com/TW50NnX/ig1.png" alt="" />
            </div>

            <div className="pt-6 pb-8 text-black text-center font-semibold text-5xl">
                <p>

                    End to End Inventory IT System
                    Implementation
                </p>
            </div>

            <div className="pl-20 pr-20 pt-3 text-center font-normal text-xl">
                <p>

                    The Implementation project involves putting a full cycle inventory management system in place for
                    the business. This process starts with tracking inventory levels across multiple locations, automating
                    the inventory stock levels using Artificial Intelligence and centralizing data for real-time analysis. The
                    implementation covers everything from setting up the software to configuring it to match specific
                    business needs, ensuring seamless integration with existing systems.
                </p>
            </div>

            <div className="pt-10 flex justify-center">
                <img src="https://i.ibb.co.com/Kzr72m2/it1-1.png" alt="" />
            </div>

            <div className="pt-10 pb-8 text-black text-center font-medium text-3xl">
                <p>

                    <span className="text-cyan-400">Five Reasons</span> to Choose LIIA SMART’s Python <br /> Based Inventory Management Services
                </p>
            </div>


            <div className="max-w-6xl mx-auto py-10 px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-teal-400 p-6 rounded-lg text-center">
                        <h3 className="font-semibold text-xl">Low Cost</h3>
                        <p className="mt-4">
                            Keep your expenses low with a cost-effective inventory management solution.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-teal-400 p-6 rounded-lg text-center">
                        <h3 className="font-semibold text-xl">Easy to Implement</h3>
                        <p className="mt-4">
                            Quick and hassle-free setup, without the need for complex integration.
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
                            Operate seamlessly without the burden of heavy software or IT infrastructure.
                        </p>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-teal-400 p-6 rounded-lg text-center">
                        <h3 className="font-semibold text-xl">
                            System Tracks Stock Level and Flags Deviations
                        </h3>
                        <p className="mt-4">
                            Automatically monitor stock levels and receive real-time alerts on discrepancies.
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
                            src="https://i.ibb.co.com/ncK317T/o1-removebg-preview-1.png"
                            alt="Increase sales"
                            className="w-24 mx-auto mb-4"
                        />
                        <p className="font-medium text-gray-500">Increase sales</p>
                    </div>

                    {/* Second Icon - Manage orders */}
                    <div className="text-center">
                        <img
                            src="https://i.ibb.co.com/NKCJ67s/o3-removebg-preview-1.png"
                            alt="Manage orders"
                            className="w-24 mx-auto mb-4"
                        />
                        <p className="font-medium text-gray-500">Manage orders</p>
                    </div>

                    {/* Third Icon - End to End Tracking */}
                    <div className="text-center">
                        <img
                            src="https://i.ibb.co.com/HtH77T6/o2-removebg-preview-1.png"
                            alt="End to End Tracking"
                            className="w-24 mx-auto mb-4"
                        />
                        <p className="font-medium text-gray-500">End to End Tracking</p>
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

export default Inventory;