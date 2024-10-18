
import { useRef } from 'react';
import emailjs from 'emailjs-com';
const DiamondResume = () => {

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
                    backgroundImage: "url(https://i.ibb.co.com/gS1Lzj0/rb1.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}>
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="absolute top-0 left-0 w-full text-left text-white">
                    <div className="">
                        <div className="p-10">
                            <h1 className="mb-5 text-3xl md:text-5xl font-bold">DIAMOND RESUME WRITING SERVICE</h1>

                        </div>
                    </div>
                </div>
            </div>

            <div className="p-16 text-center font-semibold text-2xl">
                <p>


                    Are you lost? Are you frustrated while searching for the perfect job? We are a team of dedicated professionals to help you achieve your dream career. We craft your resume based on understanding your background, characteristics, and goals. We do not leave you wondering what to do with your job and career. We put you on the right path.
                </p>
            </div>

            <div className="bg-slate-300">
                <div className="text-center p-20 bg">
                    <h1 className="font-bold text-4xl">
                        Get our free resume review

                    </h1>
                    <p className="font-medium text-2xl">
                        Please send your resume to


                    </p>
                    <p className="font-medium text-2xl">liia.smart.inc@gmail.com</p>
                </div>
            </div>

            <div className="p-5">
                <h2 className="text-2xl font-bold mb-4">Here's how we do things</h2>
                <div className="w-full max-w-screen-lg mx-auto">
                    <div className="relative overflow-hidden" style={{ paddingTop: '56.25%' }}> {/* 16:9 aspect ratio */}
                        <iframe
                            src="https://drive.google.com/file/d/1QEibG697YDEhcxEO5-OcRVlfQ_kDIkou/preview"
                            title="Video"
                            className="absolute top-0 left-0 w-full h-full"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>
            </div>




            <div className="p-10 md:p-20 grid grid-cols-1 md:grid-cols-2 gap-10 ">
                <div className="pb-6">
                    <h1 className="text-red-500 font-bold text-3xl">01</h1>
                    <h1 className="font-bold text-2xl">Tell us about yourself </h1>
                    <p className="text-xl">Complete a quick 5-minute questionnaire <br /> to prepare your future writer.</p>

                </div>
                <div className="pb-6">
                    <h1 className="text-red-500 font-bold text-3xl">02</h1>
                    <h1 className="font-bold text-2xl">Meet your match </h1>
                    <p className="text-xl">We'll match you with the writer best suited to work <br /> with your industry and experience. </p>

                </div>
                <div>
                    <h1 className="text-red-500 font-bold text-3xl">03</h1>
                    <h1 className="font-bold text-2xl">Review first draft</h1>
                    <p className="text-xl">Have notes on the first draft? Send them <br /> to your writer to edit and update.</p>


                </div>
                <div>
                    <h1 className="text-red-500 font-bold text-3xl">04</h1>
                    <h1 className="font-bold text-2xl">Receive your resume </h1>
                    <p className="text-xl">Download your final draft and get ready for <br /> a renewed job search.</p>

                </div>
            </div>

            <div className="pl-20 pr-20 p">
                <div className="pb-6">
                    <h1 className="font-bold text-2xl">1-On-1 Time</h1>
                    <p className="text-xl">Our writers take the necessary time to learn about your career goals and what you'd like to see in your new resume.</p>
                    <p className="text-xl">While other resume services only have you filling out a form, you'll be working directly with our writers. They'll set up an initial consultation with you to discuss your resume concerns and answer any sort of questions you may have.</p>



                </div>
                <div>
                    <h1 className="font-bold text-2xl">Unlimited Revisions</h1>
                    <p className="text-xl">Our writers are here to help every step of the way. Even after you've been sent your new resume, they'll be glad to continue providing revisions and updates to for up to 14 days.</p>

                </div>
            </div>


            <div className="p-10">

                <div><h1 className="font-extrabold text-center text-5xl">Our Pricing <span className="text-red-600 font-semibold text-2xl">for U.S</span></h1></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-9 gap-6 justify-items-center">
                    <div>
                        <div className="card bg-teal-300  text-primary-content w-96">
                            <div className="card-body">
                                <h2 className="text-center text-4xl text-black font-bold ">Starter</h2>
                                <h2 className="text-center text-4xl text-black font-bold "><span className="font-semibold text-2xl">USD</span>200</h2>

                                <ul className="text-black list-disc list-inside text-xl px-3 py-4">
                                    <li className="pb-2">Delivery in Word and PDF file</li>
                                    <li className="pb-2">One-to-One discussion</li>
                                    <li className="pb-2">Professional Content to grab employer's attention
                                    </li>
                                    <li className="pb-2">Modification Opportunity</li>
                                    <li className="pb-2">5 to 7 Working Days Delivery</li>
                                    <li className="pb-2">90 Days of Career Support</li>
                                    <li className="pb-2">Lifetime Career advice</li>
                                </ul>
                                <div className="card-actions justify-center">
                                    {/* <button className="btn">Buy Now</button> */}
                                </div>
                            </div>
                        </div>

                    </div>
                    <div>
                        <div className="card bg-teal-300  text-primary-content w-96">
                            <div className="card-body">
                                <h2 className="text-center text-4xl text-black font-bold ">Premium</h2>
                                <h2 className="text-center text-4xl text-black font-bold "><span className="font-semibold text-2xl">USD</span>300</h2>

                                <ul className="text-black list-disc list-inside text-xl px-3 py-4">
                                    <li className="pb-2">Delivery in Word and PDF file</li>
                                    <li className="pb-2">One-to-One discussion</li>
                                    <li className="pb-2">Professional Content to grab employer's attention
                                    </li>
                                    <li className="pb-2">Modification Opportunity</li>
                                    <li className="pb-2">7 to 10 Working Days Delivery</li>
                                    <li className="pb-2">90 Days of Career Support</li>
                                    <li className="pb-2">Lifetime Career advice</li>
                                </ul>
                                <div className="card-actions justify-center">
                                    {/* <button className="btn">Buy Now</button> */}
                                </div>
                            </div>
                        </div>

                    </div>
                    <div>
                        <div className="card bg-teal-300  text-primary-content w-96">
                            <div className="card-body">
                                <h2 className="text-center text-4xl text-black font-bold ">Ultimate</h2>
                                <h2 className="text-center text-4xl text-black font-bold "><span className="font-semibold text-2xl">USD</span>400</h2>

                                <ul className="text-black list-disc list-inside text-xl px-3 py-4">
                                    <li className="pb-2">Delivery in Word and PDF file</li>
                                    <li className="pb-2">One-to-One discussion</li>
                                    <li className="pb-2">Professional Content to grab employer's attention
                                    </li>
                                    <li className="pb-2">Modification Opportunity</li>
                                    <li className="pb-2">10 to 20 Working Days Delivery</li>
                                    <li className="pb-2">90 Days of Career Support</li>
                                    <li className="pb-2">Lifetime Career advice</li>
                                </ul>
                                <div className="card-actions justify-center">
                                    {/* <button className="btn">Buy Now</button> */}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="p-10">
                <div><h1 className="font-extrabold text-center pb-9 text-5xl">Sample Resumes </h1></div>

                <div className="carousel rounded-box h-[700px]">
                    <div className="carousel-item">
                        <img
                            src="https://i.ibb.co.com/YpwBmsd/r3-1.png"
                            alt="Burger" />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://i.ibb.co.com/1vXdVyf/r2-1.png"
                            alt="Burger" />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://i.ibb.co.com/XZHZycN/Whats-App-Image-2024-07-10-at-00-03-32-5783da79-1.jpg"
                            alt="Burger" />
                    </div>

                </div>

            </div>



            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <h2 className="text-4xl font-bold text-gray-800 mb-8">Contact</h2>

                <div className="grid grid-cols-1 justify-center lg:grid-cols-2 gap-8">
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

export default DiamondResume;
