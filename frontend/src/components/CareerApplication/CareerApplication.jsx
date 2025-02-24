import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CareerApplication = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    jobType: "",
    portfolio: "",
    linkedin: "",
    reason: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    for (const key in formData) {
      if (formData[key]) {
        formDataToSend.append(key, formData[key]);
      }
    }

    toast.info("Submitting your application...");

    try {
      const response = await fetch("https://liia-website.onrender.com/apply", {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Server Error: ${errorMessage}`);
      }

      const result = await response.json();
      toast.success("Application submitted successfully!");
      console.log("Server Response:", result);

      setFormData({
        name: "",
        email: "",
        phone: "",
        jobType: "",
        portfolio: "",
        linkedin: "",
        reason: "",
        resume: null,
      });

      onClose();
    } catch (error) {
      console.error("Submission failed:", error);
      toast.error(`Submission failed: ${error.message}`);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="flex flex-col bg-white p-12 rounded-lg shadow-lg relative">
        <button className="absolute top-2 right-3 text-xl" onClick={onClose}>
          &times;
        </button>
        <h2 className="text-3xl font-bold mb-5">Apply for a Job</h2>
        <form onSubmit={handleSubmit} className="flex flex-col md:gap-1">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />

          <div className="flex justify-between gap-5">
            <div className="flex flex-col gap-2 w-[300px]">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border p-2 rounded"
                required
              />
            </div>
            <div className="flex flex-col gap-2 w-[300px]">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="border p-2 rounded"
                required
              />
            </div>
          </div>

          <label>Portfolio Link (if any)</label>
          <input
            type="url"
            name="portfolio"
            value={formData.portfolio}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <label>LinkedIn URL (optional)</label>
          <input
            type="url"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <label>Why do you want to join us?</label>
          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            className="border p-2 rounded"
          ></textarea>

          <label>Job Type:</label>
          <select
            name="jobType"
            value={formData.jobType}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          >
            <option value="" disabled>
              Select job type
            </option>
            <option value="Full-time">Full-time</option>
            <option value="Internship">Internship</option>
            <option value="Part-time">Part-time</option>
          </select>

          <label>Upload your CV (.pdf)</label>
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className="border p-2 rounded"
            required
          />

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 mt-5"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default CareerApplication;
