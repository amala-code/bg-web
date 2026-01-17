"use client";

import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiTwitter, FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi';

export default function Footer() {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    function handleSubscribe(e) {
        e.preventDefault();
        if (!email) return;
        // placeholder: integrate with real service later
        setSubscribed(true);
        setTimeout(() => setEmail(''), 400);
    }

    return (
        <footer className="bg-slate-900/95 text-gray-100 py-12 px-4 sm:px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8">
                    {/* Brand */}
                    <div className="md:col-span-1 lg:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-teal-400 rounded-lg flex items-center justify-center font-bold text-white shadow">
                                TL
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">TechLearn</h3>
                                <p className="text-sm text-gray-300">Practical courses, real outcomes — career-focused learning for the developers of tomorrow.</p>
                            </div>
                        </div>

                        <div className="mt-6">
                            <h4 className="text-sm font-semibold text-gray-200 mb-3">Contact</h4>
                            <div className="flex flex-col gap-2 text-sm text-gray-300">
                                <div className="flex items-center gap-2"><FiMapPin className="text-teal-400"/> <span>123 Learning Ave, Bangalore, India</span></div>
                                <div className="flex items-center gap-2"><FiPhone className="text-teal-400"/> <a href="tel:+911234567890" className="hover:underline">+91 12345 67890</a></div>
                                <div className="flex items-center gap-2"><FiMail className="text-teal-400"/> <a href="mailto:hello@techlearn.example" className="hover:underline">hello@techlearn.example</a></div>
                            </div>
                        </div>
                    </div>

                    {/* Links columns */}
                    <div className="lg:col-span-1">
                        <h4 className="text-sm font-semibold text-gray-200 mb-3">Products</h4>
                        <ul className="space-y-2 text-gray-300 text-sm">
                            <li><a className="hover:text-white transition-colors" href="/courses/bootcamps">Bootcamps</a></li>
                            <li><a className="hover:text-white transition-colors" href="/courses/self-paced">Self-paced</a></li>
                            <li><a className="hover:text-white transition-colors" href="/enterprise">Enterprise</a></li>
                            <li><a className="hover:text-white transition-colors" href="/courses/certifications">Certifications</a></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-1">
                        <h4 className="text-sm font-semibold text-gray-200 mb-3">Company</h4>
                        <ul className="space-y-2 text-gray-300 text-sm">
                            <li><a className="hover:text-white transition-colors" href="#about">About</a></li>
                            <li><a className="hover:text-white transition-colors" href="#careers">Careers</a></li>
                            <li><a className="hover:text-white transition-colors" href="#blog">Blog</a></li>
                            <li><a className="hover:text-white transition-colors" href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="lg:col-span-1">
                        <h4 className="text-sm font-semibold text-gray-200 mb-3">Stay updated</h4>
                        <p className="text-sm text-gray-300 mb-4">Subscribe to our newsletter for new courses, articles and offers.</p>

                        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                            <label htmlFor="footer-email" className="sr-only">Email address</label>
                            <input
                                id="footer-email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@company.com"
                                className="w-full px-3 py-2 rounded-md bg-slate-800 text-gray-100 placeholder:text-gray-400 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
                            />
                            <button type="submit" className="px-4 py-2 bg-gradient-to-r from-blue-600 to-teal-400 text-white rounded-md font-semibold hover:opacity-95 transition-opacity">
                                {subscribed ? 'Subscribed' : 'Subscribe'}
                            </button>
                        </form>

                        <div className="flex items-center gap-3 mt-5">
                            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="p-2 rounded-md bg-slate-800 hover:bg-slate-700 text-gray-200"><FiTwitter/></a>
                            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-2 rounded-md bg-slate-800 hover:bg-slate-700 text-gray-200"><FiFacebook/></a>
                            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 rounded-md bg-slate-800 hover:bg-slate-700 text-gray-200"><FiInstagram/></a>
                            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 rounded-md bg-slate-800 hover:bg-slate-700 text-gray-200"><FiLinkedin/></a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-400">© {new Date().getFullYear()} TechLearn — All rights reserved.</p>
                    <div className="flex items-center gap-4">
                        <a href="/privacy" className="text-sm text-gray-300 hover:text-white">Privacy policy</a>
                        <a href="/terms" className="text-sm text-gray-300 hover:text-white">Terms</a>
                        <a href="/support" className="text-sm text-gray-300 hover:text-white">Support</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
