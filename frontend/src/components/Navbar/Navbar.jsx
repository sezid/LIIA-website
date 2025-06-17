import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import {
  Package,
  Truck,
  Warehouse,
  Shield,
  Home,
  BarChart,
  LayoutDashboard,
  Phone,
  Brain,
  Blocks,
} from "lucide-react";
import images from "../../assets/images/images";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const timeoutRef = useRef(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const toggleDropdown = (open) => {
    clearTimeout(timeoutRef.current);
    if (open) {
      setDropdownOpen(true);
    } else {
      timeoutRef.current = setTimeout(() => setDropdownOpen(false), 150);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-8xl mx-auto px-4 flex justify-between items-center h-[100px] text-xl">
        {/* Logo and Title */}
        <NavLink to="/">
          <div className="flex items-center space-x-2">
            <img src={images.logo} className="w-[70px]" alt="" />
            <h1 className="font-bold text-2xl">LIIA Smart</h1>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 font-semibold">
          <NavLink to="/" className="hover:text-blue-700">
            Home
          </NavLink>

          {/* Dropdown - Supply Chain Solutions */}
          <div
            className="relative"
            onMouseEnter={() => toggleDropdown(true)}
            onMouseLeave={() => toggleDropdown(false)}
          >
            <button className="hover:text-blue-700 px-3 py-2 rounded-md">
              Supply Chain Solutions
            </button>

            {dropdownOpen && (
              <div className="fixed top-20 left-0 w-screen bg-white shadow-xl z-50">
                <div className="px-10 py-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-7xl mx-auto">
                  <NavLink
                    to="/inventorymanagement"
                    className="transform transition-transform duration-300 hover:-translate-y-2"
                  >
                    <div className="flex flex-col items-center">
                      <Warehouse size={32} className="text-blue-600 mb-2" />
                      <h4 className="font-bold">Smart Inventory Manager</h4>
                      <p className="text-sm text-gray-500">
                        Transform Your Inventory — Unlock Efficiency, Boost
                        Growth
                      </p>
                    </div>
                  </NavLink>

                  <NavLink
                    to="/supplychain"
                    className="transform transition-transform duration-300 hover:-translate-y-2"
                  >
                    <div className="flex flex-col items-center">
                      <Package size={32} className="text-green-600 mb-2" />
                      <h4 className="font-bold">
                        Smart Supply Chain Analytics
                      </h4>
                      <p className="text-sm text-gray-500">
                        Innovating tomorrow's Supply Chain Today
                      </p>
                    </div>
                  </NavLink>

                  <NavLink
                    to="/machinelearning"
                    className="transform transition-transform duration-300 hover:-translate-y-2"
                  >
                    <div className="flex flex-col items-center ">
                      <Brain size={32} className="text-purple-600 mb-2" />
                      <h4 className="font-bold">Machine Learning</h4>
                      <p className="text-sm text-gray-500">
                        Revolutionize Your Business with Intelligent Automation
                      </p>
                    </div>
                  </NavLink>

                  <NavLink
                    to="/blockchain"
                    className="transform transition-transform duration-300 hover:-translate-y-2"
                  >
                    <div className="flex flex-col items-center transform transition-transform duration-300 hover:-translate-y-2">
                      <Blocks size={32} className="text-black-600 mb-2" />
                      <h4 className="font-bold">Blockchain</h4>
                      <p className="text-sm text-gray-500">
                        Built on blocks. Powered by trust.
                      </p>
                    </div>
                  </NavLink>
                </div>
              </div>
            )}
          </div>

          <NavLink to="/airbnbanalytics" className="hover:text-blue-700">
            Airbnb Analytics
          </NavLink>
          <NavLink to="/analyzing" className="hover:text-blue-700">
            Analyzing Business Models
          </NavLink>

          <NavLink
            to="/contact"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full"
          >
            Contact Us
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden px-4 pb-6">
          <ul className="flex flex-col space-y-5 font-semibold">
            <li className="flex items-center gap-2">
              <Home size={18} />
              <NavLink to="/" onClick={() => setMenuOpen(false)}>
                Home
              </NavLink>
            </li>

            <li>
              <button
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                className="w-full text-left font-semibold py-2 flex items-center gap-2"
              >
                <Package size={18} />
                Supply Chain Solutions
              </button>

              {mobileDropdownOpen && (
                <ul className="pl-6 space-y-4 mt-2 text-sm font-normal">
                  <li className="flex items-center gap-2">
                    <Warehouse size={16} />
                    <NavLink
                      to="/inventorymanagement"
                      onClick={() => setMenuOpen(false)}
                    >
                      Smart Inventory Manager
                    </NavLink>
                  </li>
                  <li className="flex items-center gap-2">
                    <Truck size={16} />
                    <NavLink
                      to="/supplychain"
                      onClick={() => setMenuOpen(false)}
                    >
                      Smart Supply Chain Analytics
                    </NavLink>
                  </li>
                  <li className="flex items-center gap-2">
                    <Brain size={16} />
                    <NavLink
                      to="/machinelearning"
                      onClick={() => setMenuOpen(false)}
                    >
                      Machine Learning
                    </NavLink>
                  </li>
                  <li className="flex items-center gap-2">
                    <Blocks size={16} />
                    <NavLink
                      to="/blockchain"
                      onClick={() => setMenuOpen(false)}
                    >
                      Blockchain
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>

            <li className="flex items-center gap-2">
              <LayoutDashboard size={18} />
              <NavLink to="/airbnbanalytics" onClick={() => setMenuOpen(false)}>
                Airbnb Analytics
              </NavLink>
            </li>

            <li className="flex items-center gap-2">
              <BarChart size={18} />
              <NavLink to="/analyzing" onClick={() => setMenuOpen(false)}>
                Analyzing Business Models
              </NavLink>
            </li>

            <li className="flex items-center gap-2">
              <Phone size={18} />
              <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
