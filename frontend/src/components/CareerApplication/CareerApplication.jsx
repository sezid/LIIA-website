// import React, { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const CareerApplication = ({ onClose }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     jobType: "",
//     portfolio: "",
//     linkedin: "",
//     reason: "",
//     resume: null,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     setFormData({ ...formData, resume: e.target.files[0] });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formDataToSend = new FormData();
//     for (const key in formData) {
//       if (formData[key]) {
//         formDataToSend.append(key, formData[key]);
//       }
//     }

//     toast.info("Submitting your application...");

//     try {
//       const response = await fetch("https://liia-website.onrender.com/apply", {
//         method: "POST",
//         body: formDataToSend,
//       });

//       if (!response.ok) {
//         const errorMessage = await response.text();
//         throw new Error(`Server Error: ${errorMessage}`);
//       }

//       const result = await response.json();
//       toast.success("✅ Application submitted successfully!");
//       console.log("Server Response:", result);

//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         jobType: "",
//         portfolio: "",
//         linkedin: "",
//         reason: "",
//         resume: null,
//       });

//       onClose();
//     } catch (error) {
//       console.error("🚨 Submission failed:", error);
//       toast.error(`⚠️ Submission failed: ${error.message}`);
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
//       <ToastContainer position="top-right" autoClose={3000} />
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm sm:max-w-lg relative">
//         <button className="absolute top-2 right-3 text-2xl" onClick={onClose}>
//           &times;
//         </button>
//         <h2 className="text-2xl font-bold mb-4 text-center">Apply for a Job</h2>
//         <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
//           <label className="text-sm font-medium">Full Name</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="border p-2 rounded w-full"
//             required
//           />

//           {/* Email and Phone Number side by side on larger screens */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="flex flex-col">
//               <label className="text-sm font-medium">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="border p-2 rounded w-full"
//                 required
//               />
//             </div>
//             <div className="flex flex-col">
//               <label className="text-sm font-medium">Phone Number</label>
//               <input
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="border p-2 rounded w-full"
//                 required
//               />
//             </div>
//           </div>

//           <label className="text-sm font-medium">Portfolio Link (if any)</label>
//           <input
//             type="url"
//             name="portfolio"
//             value={formData.portfolio}
//             onChange={handleChange}
//             className="border p-2 rounded w-full"
//           />

//           <label className="text-sm font-medium">LinkedIn URL (optional)</label>
//           <input
//             type="url"
//             name="linkedin"
//             value={formData.linkedin}
//             onChange={handleChange}
//             className="border p-2 rounded w-full"
//           />

//           <label className="text-sm font-medium">Why do you want to join us?</label>
//           <textarea
//             name="reason"
//             value={formData.reason}
//             onChange={handleChange}
//             className="border p-2 rounded w-full"
//           ></textarea>

//           <label className="text-sm font-medium">Job Type:</label>
//           <select
//             name="jobType"
//             value={formData.jobType}
//             onChange={handleChange}
//             className="border p-2 rounded w-full"
//             required
//           >
//             <option value="" disabled>
//               Select job type
//             </option>
//             <option value="Full-time">Full-time</option>
//             <option value="Internship">Internship</option>
//             <option value="Part-time">Part-time</option>
//           </select>

//           <label className="text-sm font-medium">Upload your CV (.pdf)</label>
//           <input
//             type="file"
//             accept=".pdf"
//             onChange={handleFileChange}
//             className="border p-2 rounded w-full"
//             required
//           />

//           <button
//             type="submit"
//             className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
//           >
//             Submit Application
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CareerApplication;


import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

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
  const [submitted, setSubmitted] = useState(false);

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

    try {
      const response = await fetch("https://liia-website.onrender.com/apply", {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error("Server Error: Unable to submit");
      }

      setSubmitted(true);
      setTimeout(onClose, 3000); // Auto close after 3 seconds
    } catch (error) {
      console.error("Submission failed:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm sm:max-w-lg relative">
        
        {submitted ? (
          <div className="flex flex-col items-center justify-center p-5">
            <button className="absolute top-2 right-3 text-4xl" onClick={onClose}>
            &times;</button>
            <FaCheckCircle size={50}  className="text-green-600"/>
            <div className="flex flex-col gap-2 mt-7 text-black text-center">
              <p className="text-2xl font-semibold mb-2">Application Submitted!</p>
              <p className="text-lg"> Thank you for applying to LIIA Smart Inc. Our hiring team will carefully review your application, and if your qualifications align with our requirements, we will reach out to you.</p>
            </div>
          </div>
        ) : (
          <>
            <button className="absolute top-2 right-3 text-4xl" onClick={onClose}>
          &times;
        </button>
            <h2 className="text-2xl font-bold mb-4 text-center">Apply for a Job</h2>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
              <label className="text-sm font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border p-2 rounded w-full"
                required
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="text-sm font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border p-2 rounded w-full"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-medium">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border p-2 rounded w-full"
                    required
                  />
                </div>
              </div>
              <label className="text-sm font-medium">Portfolio Link (if any)</label>
              <input type="url" name="portfolio" value={formData.portfolio} onChange={handleChange} className="border p-2 rounded w-full" />
              <label className="text-sm font-medium">LinkedIn URL (optional)</label>
              <input type="url" name="linkedin" value={formData.linkedin} onChange={handleChange} className="border p-2 rounded w-full" />
              <label className="text-sm font-medium">Why do you want to join us?</label>
              <textarea name="reason" value={formData.reason} onChange={handleChange} className="border p-2 rounded w-full"></textarea>
              <label className="text-sm font-medium">Job Type:</label>
              <select name="jobType" value={formData.jobType} onChange={handleChange} className="border p-2 rounded w-full" required>
                <option value="" disabled>Select job type</option>
                <option value="Full-time">Full-time</option>
                <option value="Internship">Internship</option>
                <option value="Part-time">Part-time</option>
              </select>
              <label className="text-sm font-medium">Upload your CV (.pdf)</label>
              <input type="file" accept=".pdf" onChange={handleFileChange} className="border p-2 rounded w-full" required />
              <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Submit Application</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default CareerApplication;

