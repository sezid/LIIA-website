import React from 'react'
import { MdEmail,MdLocalPhone,MdLocationOn } from "react-icons/md";
import images from '../../assets/images/images';


const ContactInfo = () => {
  return (
    <>

        <div className="flex flex-col">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Contact</h2>    
        {/* Contact Info */}
        <div className="space-y-4 text-lg">
            <div className="flex items-center space-x-3">
                <span className="text-3xl"><MdLocationOn /></span>
                <p>628 Abbot Ave, Daly City, CA 94014</p>
            </div>

            <div className="flex items-center space-x-3">
                <span className="text-3xl"><MdLocalPhone />                </span>
                <p>415-689-8286</p>
            </div>

            <div className="flex items-center space-x-3">
                <span className="text-3xl"><MdEmail /></span>
                <p>contact@liiasmart.com</p>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center mt-4">
                {/* <span>Follow Us</span> */}
                <a href="https://www.facebook.com/Media130/" target="_blank" rel="noopener noreferrer">
                    <img src={images.facebook_contact} alt="Facebook" className="w-11 bg-transperant" />
                </a>
                {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://i.ibb.co.com/VxYcBXc/download-2.png" alt="Twitter" className="w-6 h-6" />
                </a> */}
                <a href="https://www.linkedin.com/company/liia-smart-inc/" target="_blank" rel="noopener noreferrer">
                    <img src={images.linkedin_contact} alt="LinkedIn" className="w-11 bg-transperant" />
                </a>
                {/* <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://i.ibb.co.com/CPQQTp6/download-1.jpg" alt="Instagram" className="w-10 h-10" />
                </a> */}
            </div>
        </div>
      
    </div>
    </>
  )
}

export default ContactInfo
