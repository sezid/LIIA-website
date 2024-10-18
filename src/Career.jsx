import { useState } from "react";
import emailjs from "emailjs-com";

const Career = () => {
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!file) {
            alert("Please select a file first.");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);
        setIsSubmitting(true);

        // Use EmailJS to send the email
        emailjs.send(
            'service_l4coco6',  // Replace with your EmailJS service ID
            'template_34znhfh',  // Replace with your EmailJS template ID
            {
                file_name: fileName
            },
            'mCBFtwviOHw4fOMEh'  // Replace with your EmailJS user ID
        ).then((response) => {
            alert("File successfully sent!");
            setIsSubmitting(false);
            setFile(null); // Reset the file input
            setFileName(""); // Reset the file name
        }).catch((error) => {
            alert("Failed to send file. Please try again.");
            setIsSubmitting(false);
        });
    };

    return (
        <div className="bg-gray-100 p-8">
            <div className="max-w-7xl mx-auto">
                {/* Welcome Section */}
                <section className="text-center py-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">Welcome to LIIA SMART INC.</h1>
                    <p className="text-lg text-gray-700">
                        We are constantly searching for passionate, innovative, and driven professionals who want
                        to make an impact in the world of supply chain analytics, business modeling, and IT system
                        implementation. Explore our open positions and find your next career opportunity!
                    </p>
                    <button 
                        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700" 
                        onClick={() => document.getElementById('file-input').click()}>
                        Submit Your Application
                    </button>
                    <form onSubmit={handleSubmit} className="mt-6">
                        <input
                            id="file-input"
                            type="file"
                            onChange={handleFileChange}
                            className="hidden"
                            accept=".pdf,.doc,.docx"
                        />
                        {fileName && (
                            <div className="mt-4 text-gray-700">
                                Selected File: {fileName}
                            </div>
                        )}
                        {file && (
                            <button 
                                type="submit" 
                                className={`mt-4 bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 ${isSubmitting ? "opacity-50" : ""}`} 
                                disabled={isSubmitting}>
                                {isSubmitting ? "Submitting..." : "Send Your Application"}
                            </button>
                        )}
                    </form>
                </section>
                

               {/* Why Work at LIIA SMART INC. */}
               <section className="bg-white p-8 shadow-md rounded-lg mt-8">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-4">Why Work at LIIA SMART INC.?</h2>
                    <p className="text-lg text-gray-700 mb-6">
                        At LIIA SMART INC., we’re more than just a business – we’re a family of innovators, strategists, and problem-solvers.
                        Our mission is to empower businesses through intelligent systems and data-driven solutions.
                        We believe that great companies are built by great people, and we are committed to fostering a work environment
                        that values growth, creativity, and collaboration.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
                        <li>Innovation at the Core</li>
                        <li>Career Growth Opportunities</li>
                        <li>Work-Life Balance</li>
                        <li>A Collaborative Environment</li>
                        <li>Competitive Benefits</li>
                    </ul>
                </section>

                {/* Career Growth Path */}
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

                {/* Internships and Graduate Programs */}
                <section className="bg-white p-8 shadow-md rounded-lg mt-8">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-4">Internships and Graduate Programs</h2>
                    <p className="text-lg text-gray-700 mb-6">
                        Are you a recent graduate or student looking to kickstart your career in supply chain analytics, AI, or business modeling?
                        At LIIA SMART INC., we offer exciting internship and co-op opportunities that provide real-world experience
                        in a fast-paced and innovative environment.
                    </p>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Areas of Focus:</h3>
                    <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
                        <li>Supply Chain Analytics</li>
                        <li>Data Science and AI</li>
                        <li>IT System Development</li>
                        <li>Business Development</li>
                    </ul>
                    <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">
                        Apply for Internships
                    </button>
                </section>
            </div>
        </div>
    );
};

export default Career;
