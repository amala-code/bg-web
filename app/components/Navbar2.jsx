'use client';

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
        window.addEventListener('scroll', handleScroll, { passive: true });
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
        if (href === '/') return pathname === '/';
        return pathname.startsWith(href);
    };

    const navLinks = [
        { href: '/courses', label: 'Courses' },
        { href: '/about', label: 'About' },
        { href: '/community', label: 'Community' },
        { href: '/recruiters', label: 'Recruiters' },
        { href: '/universities', label: 'Universities' },
        { href: '/blogs', label: 'Blogs' },
        { href: '/nexus', label: 'Nexus 1.0 Hackathon' }
    ];

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
                    scrolled
                        ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm py-2'
                        : 'bg-white backdrop-blur-md border-b border-white/20 py-2'
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <a
                            href="/"
                            className="flex items-center relative z-50 focus:outline-none active:scale-[0.98] transition-transform"
                        >
                            <Image
                                src="/images/logo.png"
                                alt="Bridgegap Logo"
                                width={400}
                                height={400}
                                className="w-24 sm:w-28 lg:w-32 h-auto pointer-events-none select-none"
                                priority
                                tabIndex={-1}
                            />
                        </a>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className={`relative px-3 py-2 font-medium text-sm xl:text-base transition-colors duration-200 rounded-lg group ${
                                        isCurrentPage(link.href)
                                            ? 'text-blue-600 bg-blue-50'
                                            : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                                    }`}
                                >
                                    {link.label}
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full w-0 group-hover:w-[70%] transition-all duration-300" />
                                </a>
                            ))}
                        </div>

                        {/* Desktop Action Buttons */}
                        <div className="hidden lg:flex items-center gap-3">
                            <a
                                href="/signin"
                                className="px-5 py-2.5 border-2 border-gray-300 rounded-xl font-medium text-sm text-gray-700 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50/50 transition-all active:scale-95"
                            >
                                Sign In
                            </a>
                            <a
                                href="/courses"
                                className="px-6 py-2.5 bg-gradient-to-r from-blue-600 via-blue-500 to-teal-500 rounded-xl font-medium text-sm text-white shadow-lg hover:shadow-xl hover:brightness-110 transition-all active:scale-95"
                            >
                                Get Started
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden p-2 rounded-xl hover:bg-gray-100/50 transition-colors relative z-50 active:scale-90"
                            aria-label="Toggle menu"
                        >
                            <div className="w-6 h-5 flex flex-col justify-between">
                                <span
                                    className={`w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 origin-center ${
                                        isMenuOpen ? 'rotate-45 translate-y-[9px]' : ''
                                    }`}
                                />
                                <span
                                    className={`w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
                                        isMenuOpen ? 'opacity-0' : 'opacity-100'
                                    }`}
                                />
                                <span
                                    className={`w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 origin-center ${
                                        isMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''
                                    }`}
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
                    isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
                onClick={() => setIsMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-white shadow-2xl z-40 lg:hidden overflow-y-auto transition-transform duration-300 ease-out ${
                    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
                style={{ willChange: 'transform' }}
            >
                <div className="pt-24 pb-8 px-6">
                    {/* Mobile Navigation Links */}
                    <div className="space-y-2 mb-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={`block px-5 py-3.5 rounded-xl font-medium text-base transition-all ${
                                    isCurrentPage(link.href)
                                        ? 'bg-gradient-to-r from-blue-50 to-teal-50 text-blue-600 border-l-4 border-blue-600'
                                        : 'text-gray-700 hover:bg-gray-50 active:bg-gray-100'
                                }`}
                            >
                                <div className="flex items-center justify-between">
                                    {link.label}
                                    {isCurrentPage(link.href) && (
                                        <svg
                                            className="w-5 h-5 text-blue-600"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    )}
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* Mobile Action Buttons */}
                    <div className="space-y-3 pt-6 border-t border-gray-200">
                        <a href="/signin" className="block w-full px-6 py-3.5 border-2 border-gray-300 rounded-xl font-medium text-base text-gray-700 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50/50 transition-all active:scale-95 text-center">
                            Sign In
                        </a>
                        <a href="/courses" className="block w-full px-6 py-3.5 bg-gradient-to-r from-blue-600 via-blue-500 to-teal-500 rounded-xl font-medium text-base text-white shadow-lg active:scale-95 transition-transform text-center">
                            Get Started
                        </a>
                    </div>

                    {/* Mobile Menu Footer */}
                    <div className="mt-8 pt-6 border-t border-gray-200">
                        <p className="text-xs text-gray-500 text-center">
                            © 2024 Bridgegap. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}