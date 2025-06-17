import { NavLink } from "react-router-dom";
import images from "../../assets/images/images";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-sky-900 text-white px-6 md:px-20 py-12 border-t border-sky-800">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* Brand + Contact Info */}
      <div>
        <h2 className="text-2xl font-bold mb-2 text-2xl">LIIA Smart Inc</h2>
        <p className="text-sm mb-4 text-gray-300 text-xl">© 2025 LIIA Smart Inc. All rights reserved.</p>
        <p className="text-sm text-gray-300 text-xl">
          <span className="font-semibold text-white">Email:</span> contact@liiasmart.com
        </p>
        <p className="text-sm text-gray-300 text-xl">
          <span className="font-semibold text-white">Phone:</span> 415-689-8286
        </p>
        <p className="text-sm text-gray-300 mt-2 text-xl">
          <span className="font-semibold text-white">Address:</span> <br />
          50 California St, 
          <br />San Francisco, CA 94111
        </p>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold mb-3 text-xl">Explore</h3>
        <NavLink to="/businessPartner" className="hover:text-sky-300 transition text-sm w-[200px] text-xl">
          Business Partners
        </NavLink>
        <NavLink to="/career" className="hover:text-sky-300 transition text-sm w-[20px] text-xl">
          Career
        </NavLink>
      </div>

      {/* Social Links */}
      <div>
        <h3 className="text-lg font-semibold mb-2 text-xl">Follow Us</h3>
        <div className="flex gap-4 mt-2">
          <a
            href="https://www.facebook.com/Media130/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
          >
            <FaFacebook className="text-3xl"/>
          </a>
          <a
            href="https://www.linkedin.com/company/liia-smart-inc/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
          >
            <FaLinkedin className="text-3xl"/>
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
