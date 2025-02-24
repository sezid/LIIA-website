import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "Other",  // ✅ Changed from 'service' to 'serviceType'
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.info("Submitting your request...");

    try {
      const response = await fetch("https://liia-website.onrender.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("Form submitted successfully! We will get back to you soon.");
        setFormData({ name: "", email: "", phone: "", serviceType: "", message: "" });
      } else {
        toast.error(`Error: ${data.error || "Something went wrong"}`);
      }
    } catch (error) {
      toast.error("Submission failed. Please try again.");
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
      <ToastContainer position="top-right" autoClose={3000} />
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name, Email, Phone */}
        <label className="font-bold">Name</label>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="border p-2 rounded w-full" required />
        
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
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
