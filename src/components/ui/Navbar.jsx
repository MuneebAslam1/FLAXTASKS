import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import { ModeToggle } from '../mode-toggle';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null); // To track dropdown

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(prevState => !prevState);
    };

    // Close dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="w-full sticky top-0 z-10">
            {/* Glassmorphism Effect for Navbar */}
            <div className="backdrop-blur-md bg-white/10 border-b border-white/20 shadow-lg">
                <div className="container mx-auto p-4">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <div className="text-blue font-bold text-xl flex items-center">
                           <a href="/"> FLAXTASKS</a>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-6">
                            <Link to="/" className="text-blue hover:text-blue-600 transition duration-300">Home</Link>
                            <Link to="/about" className="text-blue hover:text-blue-600 transition duration-300">About</Link>

                            {/* Services Dropdown */}
                            <div className="relative">
                                <button 
                                    onClick={toggleDropdown}
                                    className="text-blue hover:text-blue-600 transition duration-300"
                                >
                                    Services
                                </button>
                                {isDropdownOpen && (
                                    <div 
                                        ref={dropdownRef} 
                                        className="absolute left-0 mt-2 w-48 backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg text-blue rounded-md"
                                    >
                                        <Link to="/itservices" className="block px-4 py-2 hover:bg-white/20">IT Solution</Link>
                                        <Link to="/accountingservices" className="block px-4 py-2 hover:bg-white/20">Accounting Services</Link>
                                    </div>
                                )}
                            </div>

                            <Link to="/contact" className="text-blue hover:text-blue-600 transition duration-300">Contact Us</Link>
                            <ModeToggle />
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center">
                            <ModeToggle />
                            <button 
                                onClick={toggleMenu}
                                className="text-white focus:outline-none ml-4"
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu (Dropdown) */}
            {isMenuOpen && (
    <div className="md:hidden backdrop-blur-lg bg-black/40 border border-white/10 mt-1 rounded-lg mx-4 shadow-lg">
        <div className="py-2">
            <div className="flex flex-col space-y-3 p-4">
                <Link to="/" className="text-blue hover:text-gray-300 transition duration-300" onClick={toggleMenu}>Home</Link>
                <Link to="/about" className="text-white hover:text-gray-300 transition duration-300" onClick={toggleMenu}>About</Link>

                {/* Services Dropdown in Mobile */}
                <div className="relative">
                    <button 
                        onClick={toggleDropdown} 
                        className="text-white hover:text-gray-300 transition duration-300 w-full text-left"
                    >
                        Services
                    </button>
                    {isDropdownOpen && (
                        <div className="mt-2 backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg text-white rounded-md">
                            <Link 
                                to="/itservices" 
                                className="block px-4 py-2 hover:bg-white/20"
                                onClick={toggleMenu}
                            >
                                IT Solution
                            </Link>
                            <Link 
                                to="/accountingservices" 
                                className="block px-4 py-2 hover:bg-white/20"
                                onClick={toggleMenu}
                            >
                                Accounting Services
                            </Link>
                        </div>
                    )}
                </div>

                <Link to="/contact" className="text-white hover:text-gray-300 transition duration-300" onClick={toggleMenu}>Contact Us</Link>
            </div>
        </div>
    </div>
)}

        </nav>
    );
};

export default Navbar;
