import React, { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "None",  
    message: "",
  });

  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionSuccess(false);

    try {
      const response = await fetch("https://liia-website.onrender.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: "", email: "", phone: "", serviceType: "", message: "" });
        setSubmissionSuccess(true);

        // Auto-hide success message after 4 seconds
        setTimeout(() => {
          setSubmissionSuccess(false);
        }, 3000);
      }
    } catch (error) {
      console.error("Submission failed", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg relative">
      {submissionSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm sm:max-w-lg relative">
            <div className="flex flex-col justify-center items-center gap-5 text-center">
              <FaCheckCircle size={50} className="text-green-600" />
              <span>Form submitted successfully! We will get back to you soon.</span>
            </div>
          </div>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name, Email, Phone */}
        <label className="font-bold">Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} className="border p-2 rounded w-full" required />
        
        <div className="flex justify-between gap-5">
          <div className="flex flex-col gap-2">
            <label className="font-bold">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="border p-2 rounded w-full" required />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-bold">Phone</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="border p-2 rounded w-full" />
          </div>
        </div>

        {/* Service Dropdown */}
        <div className="flex flex-col gap-2">
          <label className="font-bold">Service</label>
          <select name="serviceType" value={formData.serviceType} onChange={handleChange} className="border p-2 rounded w-full">
            <option value="">None</option>
            <option value="Other">Other</option>
            <option value="Inventory System">Inventory System</option>
            <option value="Airbnb Analytics">Airbnb Analytics</option>
            <option value="Supply Chain Analytics">Supply Chain Analytics</option>
            <option value="Web Development Services">Web Development Services</option>
          </select>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <label className="font-bold">Message</label>
          <textarea name="message" value={formData.message} onChange={handleChange} className="border p-2 rounded w-full h-24" required></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition">Submit Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
