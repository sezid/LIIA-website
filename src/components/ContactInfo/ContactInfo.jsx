import React from 'react'

const ContactInfo = () => {
  return (
    <>

        <div className="flex flex-col">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Contact</h2>    
        {/* Contact Info */}
        <div className="space-y-4 text-lg">
            <div className="flex items-center space-x-4">
                <span className="text-2xl">📍</span>
                <p>628 Abbot Ave, Daly City, CA 94014</p>
            </div>

            <div className="flex items-center space-x-4">
                <span className="text-2xl">📞</span>
                <p>415-689-8286</p>
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
      
    </div>
    </>
  )
}

export default ContactInfo
