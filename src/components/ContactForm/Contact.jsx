import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    const handleFormSubmission = (event) => {
      // Check the origin of the message to ensure it's from your Netlify form
      if (event.origin === "https://liiacontact.netlify.app") {
        if (event.data === "formSubmitted") {
          alert("Thank you! Your form has been submitted.");
          const iframe = document.querySelector("iframe");
          if (iframe) {
            iframe.src = iframe.src; // Refresh the iframe
          }
        }
      }
    };

    window.addEventListener("message", handleFormSubmission);

    return () => {
      window.removeEventListener("message", handleFormSubmission);
    };
  }, []);

  return (
    <div className="flex h-[470px]">
      <iframe src="https://liiacontact.netlify.app/" className="w-3/4"></iframe>
    </div>
  );
};

export default Contact;
