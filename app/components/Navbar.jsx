'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const isCurrentPage = (href) => {
        if (href === '/') {
            return pathname === '/';
        }
        return pathname.startsWith(href);
    };

    const navLinks = [
        { href: '/courses', label: 'Courses' },
        { href: '/about', label: 'About' },
        { href: '/community', label: 'Community' },
        { href: '/recruiters', label: 'Recruiters' },
        { href: '/universities', label: 'Universities' },
        { href: '/blogs', label: 'Blogs' },
        { href: '/nexus', label: 'Nexus 1.0 Hackathon', isLive: true }
    ];

    const LiveDot = () => (
        <span className="relative flex items-center ml-1.5">
            <span className="absolute inline-flex h-2.5 w-2.5 rounded-full bg-red-500 opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500 shadow-[0_0_6px_2px_rgba(239,68,68,0.4)]" />
        </span>
    );

    const LiveBadge = ({ mobile = false }) => (
        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-50 border border-red-200 text-[10px] font-semibold uppercase tracking-wider text-red-600 ${mobile ? 'ml-2' : 'ml-1.5'}`}>
            <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75 animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-500" />
            </span>
            Live
        </span>
    );

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${
                    scrolled 
                        ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm py-2' 
                        : 'bg-white backdrop-blur-md border-b border-white/20 py-2'
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <motion.a 
                            href="/" 
                            className="flex items-center relative z-50 focus:outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Image 
                                src='/images/logo.png'
                                alt="Bridgegap Logo" 
                                width={400} 
                                height={400}
                                className="w-24 sm:w-28 lg:w-32 h-auto pointer-events-none select-none"
                                priority
                                tabIndex={-1}
                            />
                        </motion.a>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`relative px-3 py-2 font-medium text-sm xl:text-base transition-all rounded-lg group flex items-center ${
                                        link.isLive
                                            ? isCurrentPage(link.href)
                                                ? 'text-blue-600'
                                                : 'text-gray-700 hover:text-blue-600'
                                            : isCurrentPage(link.href)
                                                ? 'text-blue-600'
                                                : 'text-gray-700 hover:text-blue-600'
                                    }`}
                                >
                                    {link.label}
                                    {link.isLive && <LiveBadge />}
                                    
                                    {isCurrentPage(link.href) && (
                                        <motion.div
                                            layoutId="activeNav"
                                            className="absolute inset-0 bg-blue-50 rounded-lg -z-10"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    
                                    <motion.div
                                        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full"
                                        initial={{ width: 0 }}
                                        whileHover={{ width: '70%' }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.a>
                            ))}
                        </div>

                        {/* Desktop Action Buttons */}
                        <div className="hidden lg:flex items-center gap-3">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-5 cursor-pointer py-2.5 border-2 border-gray-300 rounded-xl font-medium text-sm text-gray-700 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50/50 transition-all"
                            >
                                <a href="/signin" className="block w-full h-full">Sign In</a>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px -10px rgba(37, 99, 235, 0.5)' }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-2.5 cursor-pointer bg-gradient-to-r from-blue-600 via-blue-500 to-teal-500 rounded-xl font-medium text-sm text-white shadow-lg hover:shadow-xl transition-all relative overflow-hidden group"
                            >
                                <a href="/courses" className="relative z-10 block w-full h-full">Get Started</a>
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-teal-500 via-blue-500 to-blue-600"
                                    initial={{ x: '100%' }}
                                    whileHover={{ x: 0 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.div>
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden p-2 rounded-xl hover:bg-gray-100/50 transition-colors relative z-50"
                            aria-label="Toggle menu"
                        >
                            <motion.div
                                animate={isMenuOpen ? 'open' : 'closed'}
                                className="w-6 h-5 flex flex-col justify-between"
                            >
                                <motion.span
                                    variants={{
                                        closed: { rotate: 0, y: 0 },
                                        open: { rotate: 45, y: 8 }
                                    }}
                                    className="w-full h-0.5 bg-gray-700 rounded-full origin-center transition-all"
                                />
                                <motion.span
                                    variants={{
                                        closed: { opacity: 1 },
                                        open: { opacity: 0 }
                                    }}
                                    className="w-full h-0.5 bg-gray-700 rounded-full"
                                />
                                <motion.span
                                    variants={{
                                        closed: { rotate: 0, y: 0 },
                                        open: { rotate: -45, y: -8 }
                                    }}
                                    className="w-full h-0.5 bg-gray-700 rounded-full origin-center transition-all"
                                />
                            </motion.div>
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
                            onClick={() => setIsMenuOpen(false)}
                        />

                        {/* Mobile Menu */}
                        <motion.div
                            initial={{ x: '100%', opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: '100%', opacity: 0 }}
                            transition={{ 
                                x: { type: 'tween', duration: 0.3, ease: 'easeOut' },
                                opacity: { duration: 0.2 }
                            }}
                            className="fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-white shadow-2xl z-40 lg:hidden overflow-y-auto"
                            style={{ willChange: 'transform' }}
                        >
                            <div className="pt-24 pb-8 px-6">
                                {/* Mobile Navigation Links */}
                                <div className="space-y-2 mb-8">
                                    {navLinks.map((link, index) => (
                                        <motion.a
                                            key={link.href}
                                            href={link.href}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 20 }}
                                            transition={{ 
                                                duration: 0.5,
                                                ease: [0.16, 1, 0.3, 1]
                                            }}
                                            onClick={() => setIsMenuOpen(false)}
                                            className={`block px-5 py-3.5 rounded-xl font-medium text-base transition-all ${
                                                link.isLive
                                                    ? isCurrentPage(link.href)
                                                        ? 'bg-gradient-to-r from-red-50 via-orange-50 to-yellow-50 text-red-600 border-l-4 border-red-500 shadow-sm'
                                                        : 'text-gray-700 hover:bg-red-50/50 active:bg-red-100/50'
                                                    : isCurrentPage(link.href)
                                                        ? 'bg-gradient-to-r from-blue-50 to-teal-50 text-blue-600 border-l-4 border-blue-600'
                                                        : 'text-gray-700 hover:bg-gray-50 active:bg-gray-100'
                                            }`}
                                        >
                                            <div className="flex items-center justify-between">
                                                <span className="flex items-center">
                                                    {link.label}
                                                    {link.isLive && <LiveBadge mobile />}
                                                </span>
                                                {isCurrentPage(link.href) && (
                                                    <motion.svg
                                                        initial={{ scale: 0 }}
                                                        animate={{ scale: 1 }}
                                                        className={`w-5 h-5 ${link.isLive ? 'text-red-600' : 'text-blue-600'}`}
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </motion.svg>
                                                )}
                                            </div>
                                        </motion.a>
                                    ))}
                                </div>

                                {/* Mobile Action Buttons */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ delay: 0.3 }}
                                    className="space-y-3 pt-6 border-t border-gray-200"
                                >
                                    <a href="/signin" className="block w-full px-6 py-3.5 border-2 border-gray-300 rounded-xl font-medium text-base text-gray-700 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50/50 transition-all active:scale-95 text-center">Sign In</a>
                                    <a href="/courses" className="block w-full px-6 py-3.5 bg-gradient-to-r from-blue-600 via-blue-500 to-teal-500 rounded-xl font-medium text-base text-white shadow-lg active:scale-95 transition-transform text-center">Get Started</a>
                                </motion.div>

                                {/* Mobile Menu Footer */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    className="mt-8 pt-6 border-t border-gray-200"
                                >
                                    <p className="text-xs text-gray-500 text-center">
                                        © 2024 Bridgegap. All rights reserved.
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}