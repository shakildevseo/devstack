import { useState } from 'react';
import logo from '../assets/logo.png';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Hamburger button start  */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-500 hover:bg-gray-100 focus:outline-none"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* hamburger icon */}
                            {!isMenuOpen ? (
                                <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>


                    {/* logo add */}
                    <div>
                        <img src={logo} alt="DevStack logo" className="h-35 w-35 object-contain" />
                    </div>



                    {/* dekstop */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
                            Home
                        </a>
                        <a href="#technologies" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
                            Technologies
                        </a>
                        <a href="#projects" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
                            Projects
                        </a>
                        <a href="#about" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
                            About
                        </a>
                        <a href="#contact" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
                            Contact
                        </a>
                    </div>


                    <div className="flex items-center space-x-3">
                        <button className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-orange-500 transition-colors cursor-pointer">
                            Sign In
                        </button>
                        <button className="px-5 py-2 text-sm font-semibold text-white bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 rounded-full hover:opacity-90 shadow-md transition-all cursor-pointer">
                            Sign Up
                        </button>
                    </div>

                </div>
            </div>


            {isMenuOpen && (
                <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-4 space-y-2 shadow-lg">
                    <a
                        href="#home"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-gray-50"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Home
                    </a>
                    <a
                        href="#technologies"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-gray-50"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Technologies
                    </a>
                    <a
                        href="#projects"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-gray-50"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Projects
                    </a>
                    <a
                        href="#about"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-gray-50"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        About
                    </a>
                    <a
                        href="#contact"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-gray-50"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Contact
                    </a>
                </div>
            )}
        </nav>
    );
};

