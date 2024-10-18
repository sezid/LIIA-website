import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="navbar h-20 bg-base-100">
                {/* Mobile view */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <NavLink to="/">HOME</NavLink>
                                {/* <ul className="p-2">
                                    <li><NavLink to="/businessPartner">BUSINESS PARTNER</NavLink></li>
                                </ul> */}
                            </li>
                            <li>
                                <NavLink to="/businessOffer">BUSINESS OFFERINGS</NavLink>
                                <ul className="p-2">
                                    <li><NavLink to="/diamondResume">DIAMOND RESUME</NavLink></li>
                                    <li><NavLink to="/sunshine">SUNSHINE AIRBNB CLEANING</NavLink></li>
                                </ul>
                            </li>
                            <li><NavLink to="/inventory">INVENTORY MANAGEMENT SYSTEM</NavLink></li>
                            <li><NavLink to="/supply">SUPPLY CHAIN ANALYTICS</NavLink></li>
                            <li><NavLink to="/airbnb">AIRBNB ANALYTICS</NavLink></li>
                            <li>
                                <NavLink to="/businessProcess">BUSINESS PROCESS MODELING</NavLink>
                                <ul className="p-2">
                                    <li><NavLink to="/analyzing">ANALYZING BUSINESS MODELS</NavLink></li>
                                    <li><NavLink to="/website">WEBSITE DEVELOPMENT</NavLink></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">LIIA Smart</a>
                </div>

                {/* Desktop view */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {/* HOME with submenu */}
                        <li className="relative group">
                            <NavLink to="/" className="btn btn-ghost">HOME</NavLink>
                            {/* <ul className="absolute hidden group-hover:block bg-base-100 rounded-box shadow-lg p-2 mt-10 z-10">
                                <li><NavLink to="/businessPartner" className="block p-2">BUSINESS PARTNER</NavLink></li>
                            </ul> */}
                        </li>

                        {/* BUSINESS OFFERINGS with submenu */}
                        <li className="relative group">
                            <NavLink to="/businessOffer" className="btn btn-ghost">BUSINESS OFFERINGS</NavLink>
                            <ul className="absolute hidden group-hover:block bg-base-100 rounded-box shadow-lg p-2 mt-10 z-10">
                                <li><NavLink to="/diamondResume" className="block p-2">DIAMOND RESUME</NavLink></li>
                                <li><NavLink to="/sunshine" className="block p-2">SUNSHINE AIRBNB CLEANING</NavLink></li>
                            </ul>
                        </li>

                        {/* Other links */}
                        <li><NavLink to="/inventory" className="btn btn-ghost">INVENTORY MANAGEMENT SYSTEM</NavLink></li>
                        <li><NavLink to="/supply" className="btn btn-ghost">SUPPLY CHAIN ANALYTICS</NavLink></li>
                        <li><NavLink to="/airbnb" className="btn btn-ghost">AIRBNB ANALYTICS</NavLink></li>

                        {/* BUSINESS PROCESS MODELING with submenu */}
                        <li className="relative group">
                            <NavLink to="/businessProcess" className="btn btn-ghost">BUSINESS PROCESS MODELING</NavLink>
                            <ul className="absolute hidden group-hover:block bg-base-100 rounded-box shadow-lg p-2 mt-10 z-10">
                                <li><NavLink to="/analyzing" className="block p-2">ANALYZING BUSINESS MODELS</NavLink></li>
                                <li><NavLink to="/website" className="block p-2">WEBSITE DEVELOPMENT</NavLink></li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className="navbar-end">
                    <a className="bg-white"></a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
