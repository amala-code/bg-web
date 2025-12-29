'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import logo from '../images/logo.png';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProductsOpen, setIsProductsOpen] = useState(false);
    const pathname = usePathname();

    const isCurrentPage = (href) => {
        if (href === '/') {
            return pathname === '/';
        }
        return pathname.startsWith(href);
    };

    const navLinks = [
        { href: '#courses', label: 'Courses' },
        { href: '/about', label: 'About' },
        { href: '/community', label: 'Community' },
        { href: '/recruiters', label: 'Recruiters' },
        { href: '/universities', label: 'Universities' },
        { href: '#features', label: 'Features' },
        { href: '#contact', label: 'Contact' },
    ];

    const products = [
        { href: '/products/bigitrack', label: 'BigiTrack', description: 'Advanced project tracking' },
        { href: '/products/validator', label: 'Open Source Validator', description: 'Code validation tool' },
        { href: '/products/bigilms', label: 'BigiLMS', description: 'Learning Management System' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 left-0 right-0 z-50 w-full bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-sm transition-all duration-300"
        >
            <div className="w-full px-4 sm:px-6 md:px-12 py-1 flex items-center justify-between">
                {/* Logo - Left */}
                <a href="/" className="flex items-center gap-2 sm:gap-3 -my-10">
                    <Image 
                        src={logo} 
                        alt="Bridgegap Logo" 
                        width={400} 
                        height={400}
                        className="w-50 sm:w-56 h-auto"
                    />
                </a>

                {/* Nav Links - Center (Desktop) */}
                <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                    {navLinks.map((link) => (
                        <a 
                            key={link.href}
                            href={link.href} 
                            className={`font-medium transition-all relative group ${
                                isCurrentPage(link.href)
                                    ? 'text-blue-600 font-bold'
                                    : 'text-gray-600 hover:text-blue-600'
                            }`}
                        >
                            {link.label}
                            {isCurrentPage(link.href) && (
                                <motion.div
                                    layoutId="underline"
                                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full"
                                    transition={{ duration: 0.3 }}
                                />
                            )}
                            {!isCurrentPage(link.href) && (
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                            )}
                        </a>
                    ))}

                    {/* Products Dropdown */}
                    <div className="relative group">
                        <button 
                            onMouseEnter={() => setIsProductsOpen(true)}
                            onMouseLeave={() => setIsProductsOpen(false)}
                            className={`font-medium transition-all flex items-center gap-2 ${
                                isCurrentPage('/products')
                                    ? 'text-blue-600 font-bold'
                                    : 'text-gray-600 hover:text-blue-600'
                            }`}
                        >
                            Products
                            <motion.svg
                                animate={{ rotate: isProductsOpen ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </motion.svg>
                        </button>

                        {/* Dropdown Menu */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ 
                                opacity: isProductsOpen ? 1 : 0, 
                                y: isProductsOpen ? 0 : -10,
                                pointerEvents: isProductsOpen ? 'auto' : 'none'
                            }}
                            transition={{ duration: 0.2 }}
                            onMouseEnter={() => setIsProductsOpen(true)}
                            onMouseLeave={() => setIsProductsOpen(false)}
                            className="absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-xl border border-gray-200 rounded-xl shadow-xl overflow-hidden z-50"
                        >
                            <div className="p-2">
                                {products.map((product) => (
                                    <a
                                        key={product.href}
                                        href={product.href}
                                        className={`block p-4 rounded-lg transition-all ${
                                            isCurrentPage(product.href)
                                                ? 'bg-blue-50 border-l-4 border-blue-600'
                                                : 'hover:bg-gray-50'
                                        }`}
                                    >
                                        <div className="font-semibold text-gray-900">{product.label}</div>
                                        <div className="text-sm text-gray-600 mt-1">{product.description}</div>
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Mobile menu button and Desktop buttons */}
                <div className="flex items-center gap-2 sm:gap-3">
                    {/* Desktop Buttons */}
                    <div className="hidden md:flex items-center gap-3">
                        <button className="px-4 sm:px-6 py-2 sm:py-3 border border-gray-300 rounded-lg font-medium text-xs sm:text-sm text-gray-700 hover:bg-gray-50 transition-all">
                            Sign In
                        </button>
                        <button className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg font-medium text-xs sm:text-sm text-white shadow-lg hover:shadow-xl transition-all">
                            Get Started
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
                initial={false}
                animate={{ height: isMenuOpen ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden bg-white/90 backdrop-blur-xl border-t border-gray-200/50"
            >
                <div className="px-4 py-4 space-y-3">
                    {/* Mobile Nav Links */}
                    <div className="space-y-3">
                        {navLinks.map((link) => (
                            <a 
                                key={link.href}
                                href={link.href} 
                                className={`block py-2 font-medium transition-colors ${
                                    isCurrentPage(link.href)
                                        ? 'text-blue-600 font-bold border-l-4 border-blue-600 pl-3'
                                        : 'text-gray-600 hover:text-blue-600'
                                }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}

                        {/* Mobile Products Menu */}
                        <div className="border-t border-gray-200/50 pt-3">
                            <button
                                onClick={() => setIsProductsOpen(!isProductsOpen)}
                                className="w-full text-left py-2 font-medium text-gray-600 hover:text-blue-600 flex items-center justify-between"
                            >
                                Products
                                <motion.svg
                                    animate={{ rotate: isProductsOpen ? 180 : 0 }}
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </motion.svg>
                            </button>

                            {/* Mobile Products Dropdown */}
                            <motion.div
                                initial={false}
                                animate={{ height: isProductsOpen ? 'auto' : 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden mt-2 space-y-2"
                            >
                                {products.map((product) => (
                                    <a
                                        key={product.href}
                                        href={product.href}
                                        className={`block p-3 rounded-lg transition-all ${
                                            isCurrentPage(product.href)
                                                ? 'bg-blue-50 border-l-4 border-blue-600'
                                                : 'hover:bg-gray-50'
                                        }`}
                                        onClick={() => {
                                            setIsMenuOpen(false);
                                            setIsProductsOpen(false);
                                        }}
                                    >
                                        <div className="font-semibold text-gray-900">{product.label}</div>
                                        <div className="text-xs text-gray-600 mt-1">{product.description}</div>
                                    </a>
                                ))}
                            </motion.div>
                        </div>
                    </div>

                    {/* Mobile Buttons */}
                    <div className="pt-4 border-t border-gray-200/50 space-y-3">
                        <button 
                            className="w-full py-3 border border-gray-300 rounded-lg font-medium text-sm text-gray-700 hover:bg-gray-50 transition-all"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Sign In
                        </button>
                        <button 
                            className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg font-medium text-sm text-white shadow-lg hover:shadow-xl transition-all"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            </motion.div>
        </motion.nav>
    );
}