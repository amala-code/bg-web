export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8 sm:py-10 lg:py-12 px-4 sm:px-6 md:px-16">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
                    <div>
                        <div className="flex items-center gap-2 sm:gap-3 mb-4">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg sm:rounded-xl flex items-center justify-center font-bold text-white shadow-lg text-sm sm:text-base">
                                TL
                            </div>
                            <span className="text-lg sm:text-xl font-bold">TechLearn</span>
                        </div>
                        <p className="text-gray-400 text-sm sm:text-base">Empowering the next generation of tech innovators through world-class education.</p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Courses</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Data Science</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">AI & ML</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Blockchain</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Company</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                            <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
                            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4 text-sm sm:text-base">Follow Us</h4>
                        <div className="flex gap-3 sm:gap-4">
                            <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors text-sm sm:text-base">📘</a>
                            <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors text-sm sm:text-base">🐦</a>
                            <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors text-sm sm:text-base">📷</a>
                            <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors text-sm sm:text-base">💼</a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm sm:text-base">© 2024 TechLearn. All rights reserved.</p>
                    <div className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Privacy Policy</a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
