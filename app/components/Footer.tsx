// // // "use client";

// // // import React from "react";
// // // import {
// // //   FiMail,
// // //   FiPhone,
// // //   FiMapPin,
// // //   FiLinkedin
// // // } from "react-icons/fi";

// // // export default function Footer() {
// // //   return (
// // //     <footer className="bg-gradient-to-br from-slate-800 via-teal-900 to-slate-900 text-gray-100">
// // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16">
// // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

// // //           {/* Logo + Contact */}
// // //           <div className="lg:col-span-1">
// // //               <img
// // //                 src="/images/logo.png"
// // //                 alt="Bridgegap Logo"
// // //                 className="w-48 object-contain brightness-0 invert"
// // //               />

// // //             <p className="text-gray-300 text-sm mb-6 leading-relaxed">
// // //               Empowering careers through quality education and industry-relevant skills.
// // //             </p>

// // //             <div className="space-y-3">
// // //               <a
// // //                 href="mailto:info@thebridgegap.com"
// // //                 className="flex items-center gap-3 text-sm text-gray-200 hover:text-teal-300 transition-colors group"
// // //               >
// // //                 <div className="bg-slate-700/50 p-2 rounded-lg group-hover:bg-slate-600/50 transition-colors">
// // //                   <FiMail className="text-teal-400" size={16} />
// // //                 </div>
// // //                 <span>info@thebridgegap.com</span>
// // //               </a>

// // //               <a
// // //                 href="tel:+918982210819"
// // //                 className="flex items-center gap-3 text-sm text-gray-200 hover:text-teal-300 transition-colors group"
// // //               >
// // //                 <div className="bg-slate-700/50 p-2 rounded-lg group-hover:bg-slate-600/50 transition-colors">
// // //                   <FiPhone className="text-teal-400" size={16} />
// // //                 </div>
// // //                 <span>+91 8982210819</span>
// // //               </a>
// // //             </div>
// // //           </div>

// // //           {/* Navigation - Learning */}
// // //           <div>
// // //             <h4 className="text-lg font-bold text-white mb-6 relative inline-block">
// // //               Learning
// // //               <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-teal-500"></span>
// // //             </h4>
// // //             <ul className="space-y-3">
// // //               {[
// // //                 { label: "All Courses", href: "/courses" },
// // //                 { label: "Data Science / ML Track", href: "/tracks/data-science-ml" },
// // //                 { label: "GenAI Track", href: "/tracks/gen-ai" },
// // //                 { label: "Mini Courses", href: "/mini-courses" },
// // //                 { label: "Interview Prep", href: "/interview-questions" }
// // //               ].map((item) => (
// // //                 <li key={item.href}>
// // //                   <a
// // //                     href={item.href}
// // //                     className="text-sm text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
// // //                   >
// // //                     {item.label}
// // //                   </a>
// // //                 </li>
// // //               ))}
// // //             </ul>
// // //           </div>

// // //           {/* Company */}
// // //           <div>
// // //             <h4 className="text-lg font-bold text-white mb-6 relative inline-block">
// // //               Company
// // //               <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-teal-500"></span>
// // //             </h4>
// // //             <ul className="space-y-3">
// // //               {[
// // //                 { label: "About Us", href: "/about" },
// // //                 { label: "For Recruiters", href: "/recruiters" },
// // //                 { label: "For Universities", href: "/universities" },
// // //                 { label: "Blog", href: "/blogs" }
// // //               ].map((item) => (
// // //                 <li key={item.href}>
// // //                   <a
// // //                     href={item.href}
// // //                     className="text-sm text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
// // //                   >
// // //                     {item.label}
// // //                   </a>
// // //                 </li>
// // //               ))}
// // //             </ul>
// // //           </div>

// // //           {/* Connect */}
// // //           <div>
// // //             <h4 className="text-lg font-bold text-white mb-6 relative inline-block">
// // //               Connect
// // //               <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-teal-500"></span>
// // //             </h4>
            
// // //             <a
// // //               href="https://www.linkedin.com/company/jointhebridgegap"
// // //               target="_blank"
// // //               rel="noopener noreferrer"
// // //               className="inline-flex items-center gap-3 px-5 py-3 bg-slate-700/50 hover:bg-slate-600/70 rounded-lg text-sm text-gray-200 hover:text-white transition-all duration-200 group mb-6"
// // //             >
// // //               <FiLinkedin className="text-xl group-hover:scale-110 transition-transform" />
// // //               <span className="font-medium">Follow on LinkedIn</span>
// // //             </a>

// // //             <div className="space-y-3 text-sm text-gray-300">
// // //               <p className="leading-relaxed">
// // //                 Stay updated with the latest courses, tips, and industry insights.
// // //               </p>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Bottom bar */}
// // //         <div className="border-t border-slate-700/50 pt-8 mt-8">
// // //           <div className="flex flex-col md:flex-row items-center justify-between gap-6">
// // //             <p className="text-sm text-gray-400">
// // //               © {new Date().getFullYear()} The Bridgegap. All rights reserved.
// // //             </p>

// // //             <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
// // //               {[
// // //                 { label: "Privacy Policy", href: "/privacy" },
// // //                 { label: "Terms & Conditions", href: "/terms" },
// // //                 { label: "Support", href: "/support" }
// // //               ].map((item, index) => (
// // //                 <React.Fragment key={item.href}>
// // //                   <a
// // //                     href={item.href}
// // //                     className="text-gray-400 hover:text-white transition-colors"
// // //                   >
// // //                     {item.label}
// // //                   </a>
// // //                   {index < 2 && (
// // //                     <span className="text-gray-700">•</span>
// // //                   )}
// // //                 </React.Fragment>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </footer>
// // //   );
// // // }


// // "use client";

// // import React from "react";
// // import Link from "next/link";
// // import {
// //   FiMail,
// //   FiPhone,
// //   FiMapPin,
// //   FiLinkedin
// // } from "react-icons/fi";

// // interface NavItem {
// //   label: string;
// //   href: string;
// // }

// // export default function Footer(): JSX.Element {
// //   const learningLinks: NavItem[] = [
// //     { label: "All Courses", href: "/courses" },
// //     { label: "Data Science / ML Track", href: "/tracks/data-science-ml" },
// //     { label: "GenAI Track", href: "/tracks/gen-ai" },
// //     { label: "Mini Courses", href: "/mini-courses" },
// //     { label: "Interview Prep", href: "/interview-questions" }
// //   ];

// //   const companyLinks: NavItem[] = [
// //     { label: "About Us", href: "/about" },
// //     { label: "For Recruiters", href: "/recruiters" },
// //     { label: "For Universities", href: "/universities" },
// //     { label: "Blog", href: "/blogs" }
// //   ];

// //   const legalLinks: NavItem[] = [
// //     { label: "Privacy Policy", href: "/privacy" },
// //     { label: "Terms & Conditions", href: "/terms" },
// //     { label: "Support", href: "/support" }
// //   ];

// //   return (
// //     <footer className="bg-gradient-to-br from-slate-800 via-teal-900 to-slate-900 text-gray-100">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16">
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

// //           {/* Logo + Contact */}
// //           <div>
// //             <Link href="/" className="inline-block mb-6">
// //               <img
// //                 src="/images/logo.png"
// //                 alt="Bridgegap Logo"
// //                 className="w-48 h-auto object-contain brightness-0 invert"
// //               />
// //             </Link>

// //             <p className="text-gray-300 text-sm mb-6 leading-relaxed">
// //               Empowering careers through quality education and industry-relevant skills.
// //             </p>

// //             <div className="space-y-3">
// //               <a
// //                 href="mailto:info@thebridgegap.com"
// //                 className="flex items-center gap-3 text-sm text-gray-200 hover:text-teal-300 transition-colors group"
// //               >
// //                 <div className="bg-slate-700/50 p-2 rounded-lg group-hover:bg-slate-600/50 transition-colors">
// //                   <FiMail className="text-teal-400" size={16} />
// //                 </div>
// //                 <span>info@thebridgegap.com</span>
// //               </a>

// //               <a
// //                 href="tel:+918982210819"
// //                 className="flex items-center gap-3 text-sm text-gray-200 hover:text-teal-300 transition-colors group"
// //               >
// //                 <div className="bg-slate-700/50 p-2 rounded-lg group-hover:bg-slate-600/50 transition-colors">
// //                   <FiPhone className="text-teal-400" size={16} />
// //                 </div>
// //                 <span>+91 8982210819</span>
// //               </a>
// //             </div>
// //           </div>

// //           {/* Learning */}
// //           <div>
// //             <h4 className="text-lg font-bold text-white mb-6 relative inline-block">
// //               Learning
// //               <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-teal-500"></span>
// //             </h4>
// //             <ul className="space-y-3">
// //               {learningLinks.map(item => (
// //                 <li key={item.href}>
// //                   <Link
// //                     href={item.href}
// //                     className="text-sm text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all"
// //                   >
// //                     {item.label}
// //                   </Link>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>

// //           {/* Company */}
// //           <div>
// //             <h4 className="text-lg font-bold text-white mb-6 relative inline-block">
// //               Company
// //               <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-teal-500"></span>
// //             </h4>
// //             <ul className="space-y-3">
// //               {companyLinks.map(item => (
// //                 <li key={item.href}>
// //                   <Link
// //                     href={item.href}
// //                     className="text-sm text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all"
// //                   >
// //                     {item.label}
// //                   </Link>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>

// //           {/* Connect */}
// //           <div>
// //             <h4 className="text-lg font-bold text-white mb-6 relative inline-block">
// //               Connect
// //               <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-teal-500"></span>
// //             </h4>

// //             <a
// //               href="https://www.linkedin.com/company/jointhebridgegap"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="inline-flex items-center gap-3 px-5 py-3 bg-slate-700/50 hover:bg-slate-600/70 rounded-lg text-sm text-gray-200 hover:text-white transition-all group mb-6"
// //             >
// //               <FiLinkedin className="text-xl group-hover:scale-110 transition-transform" />
// //               <span className="font-medium">Follow on LinkedIn</span>
// //             </a>

// //             <p className="text-sm text-gray-300 leading-relaxed">
// //               Stay updated with the latest courses, tips, and industry insights.
// //             </p>
// //           </div>
// //         </div>

// //         {/* Bottom Bar */}
// //         <div className="border-t border-slate-700/50 pt-8 mt-8">
// //           <div className="flex flex-col md:flex-row items-center justify-between gap-6">
// //             <p className="text-sm text-gray-400">
// //               © {new Date().getFullYear()} The Bridgegap. All rights reserved.
// //             </p>

// //             <div className="flex items-center gap-4 text-sm">
// //               {legalLinks.map((item, index) => (
// //                 <React.Fragment key={item.href}>
// //                   <Link
// //                     href={item.href}
// //                     className="text-gray-400 hover:text-white transition-colors"
// //                   >
// //                     {item.label}
// //                   </Link>
// //                   {index < legalLinks.length - 1 && (
// //                     <span className="text-gray-700">•</span>
// //                   )}
// //                 </React.Fragment>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // }


// "use client";

// import React, { JSX } from "react";
// import Link from "next/link";
// import {
//   FiMail,
//   FiPhone,
//   FiLinkedin,
//   FiInstagram
// } from "react-icons/fi";

// interface NavItem {
//   label: string;
//   href: string;
// }

// export default function Footer(): JSX.Element {
//   const learningLinks: NavItem[] = [
//     { label: "All Courses", href: "/courses" },
//     { label: "Data Science / ML Track", href: "/courses/data-science" },
//     { label: "GenAI Track", href: "/tracks/ai-ml" },
//     { label: "Mini Courses", href: "/courses/" },
//     { label: "Interview Prep", href: "/courses" }
//   ];

//   const companyLinks: NavItem[] = [
//     { label: "About Us", href: "/about" },
//     { label: "For Recruiters", href: "/recruiters" },
//     { label: "For Universities", href: "/universities" },
//     { label: "Blog", href: "/blogs" }
//   ];

//   const legalLinks: NavItem[] = [
//     { label: "Privacy Policy", href: "/privacy-policy" },
//     { label: "Terms & Conditions", href: "/terms" },
//   ];

//   return (
//     <footer className="bg-gradient-to-br from-slate-800 via-teal-900 to-slate-900 text-gray-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-12 pb-16">
        
//         {/* MAIN GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 items-start">
          
//           {/* Logo + Contact */}
//           <div>
//             <Link href="/" className="block mb-4">
//               <img
//                 src="/images/logo.png"
//                 alt="Bridgegap Logo"
//                 className="w-48 h-auto object-contain brightness-0 invert"
//               />
//             </Link>

//             <p className="text-gray-300 text-sm mb-6 leading-relaxed">
//               Empowering careers through quality education and industry-relevant skills.
//             </p>

//             <div className="space-y-3">
//               <a
//                 href="mailto:info@thebridgegap.com"
//                 className="flex items-center gap-3 text-sm text-gray-200 hover:text-teal-300 transition-colors group"
//               >
//                 <div className="bg-slate-700/50 p-2 rounded-lg group-hover:bg-slate-600/50 transition-colors">
//                   <FiMail className="text-teal-400" size={16} />
//                 </div>
//                 <span>info@thebridgegap.com</span>
//               </a>

//               <a
//                 href="tel:+918982210819"
//                 className="flex items-center gap-3 text-sm text-gray-200 hover:text-teal-300 transition-colors group"
//               >
//                 <div className="bg-slate-700/50 p-2 rounded-lg group-hover:bg-slate-600/50 transition-colors">
//                   <FiPhone className="text-teal-400" size={16} />
//                 </div>
//                 <span>+91 8982210819</span>
//               </a>
//             </div>
//           </div>

//           {/* Learning */}
//           <div>
//             <h4 className="text-lg  mt-7 font-bold text-white mb-6 relative inline-block">
//               Learning
//               <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-teal-500"></span>
//             </h4>
//             <ul className="space-y-3">
//               {learningLinks.map(item => (
//                 <li key={item.href}>
//                   <Link
//                     href={item.href}
//                     className="text-sm text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all"
//                   >
//                     {item.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Company */}
//           <div>
//             <h4 className="text-lg  mt-7 font-bold text-white mb-6 relative inline-block">
//               Company
//               <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-teal-500"></span>
//             </h4>
//             <ul className="space-y-3">
//               {companyLinks.map(item => (
//                 <li key={item.href}>
//                   <Link
//                     href={item.href}
//                     className="text-sm text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all"
//                   >
//                     {item.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Connect */}
//           <div>
//             <h4 className="text-lg  mt-7 font-bold text-white mb-6 relative inline-block">
//               Connect
//               <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-teal-500"></span>
//             </h4>

//             <a
//               href="https://www.linkedin.com/company/jointhebridgegap"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-3 px-5 py-3 bg-slate-700/50 hover:bg-slate-600/70 rounded-lg text-sm text-gray-200 hover:text-white transition-all group mb-6"
//             >
//               <FiLinkedin className="text-xl group-hover:scale-110 transition-transform" />
//               <span className="font-medium">Follow us on LinkedIn</span>
//             </a>


//             <a
//               href="https://www.instagram.com/bridgegap_official?igsh=MXBycmhtbTBvZHRoMg%3D%3D&utm_source=qr"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-3 px-5 py-3 bg-slate-700/50 hover:bg-slate-600/70 rounded-lg text-sm text-gray-200 hover:text-white transition-all group mb-6"
//             >
//               <FiInstagram className="text-xl group-hover:scale-110 transition-transform" />
//               <span className="font-medium">Follow us on Instagram</span>
//             </a>

//             <p className="text-sm text-gray-300 leading-relaxed">
//               Stay updated with the latest courses, tips, and industry insights.
//             </p>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-slate-700/50 pt-8">
//           <div className="flex flex-col md:flex-row items-center justify-between gap-6">
//             <p className="text-sm text-gray-400">
//               © {new Date().getFullYear()} The Bridgegap. All rights reserved.
//             </p>

//             <div className="flex items-center gap-4 text-sm">
//               {legalLinks.map((item, index) => (
//                 <React.Fragment key={item.href}>
//                   <Link
//                     href={item.href}
//                     target="_blank"
//                     className="text-gray-400 hover:text-white transition-colors"
//                   >
//                     {item.label}
//                   </Link>
//                   {index < legalLinks.length - 1 && (
//                     <span className="text-gray-700">•</span>
//                   )}
//                 </React.Fragment>
//               ))}
//             </div>
//           </div>
//         </div>

//       </div>
//     </footer>
//   );
// }


"use client";

import React, { JSX } from "react";
import Link from "next/link";
import {
  FiMail,
  FiPhone,
  FiLinkedin,
  FiInstagram
} from "react-icons/fi";

interface NavItem {
  label: string;
  href: string;
}

export default function Footer(): JSX.Element {
  const learningLinks: NavItem[] = [
    { label: "All Courses", href: "/courses" },
    { label: "Data Science / ML Track", href: "/courses/data-science" },
    { label: "GenAI Track", href: "/tracks/ai-ml" },
    { label: "Mini Courses", href: "/courses/" },
    { label: "Interview Prep", href: "/courses" }
  ];

  const companyLinks: NavItem[] = [
    { label: "About Us", href: "/about" },
    { label: "For Recruiters", href: "/recruiters" },
    { label: "For Universities", href: "/universities" },
    { label: "Blog", href: "/blogs" }
  ];

  const legalLinks: NavItem[] = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-800 via-teal-900 to-slate-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-12 pb-8">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">

          {/* Logo + Contact */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="block mb-4">
         <img
  src="/images/logof.png"
  alt="Bridgegap Logo"
 className="w-40 sm:w-48 h-auto object-contain"

/>

            </Link>

            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Empowering careers through quality education and industry-relevant skills.
            </p>

            <div className="space-y-3">

              {/* Email */}
              <a
                href="mailto:info@thebridgegap.com"
                className="flex items-center gap-3 text-sm text-gray-200 hover:text-teal-300 transition-colors group"
              >
                <div className="bg-slate-700/50 p-2 rounded-lg group-hover:bg-slate-600/50 transition-colors">
                  <FiMail className="text-teal-400" size={16} />
                </div>
                <span className="break-all">info@thebridgegap.com</span>
              </a>

              {/* Phone */}
              <a
                href="tel:+918982210819"
                className="flex items-center gap-3 text-sm text-gray-200 hover:text-teal-300 transition-colors group"
              >
                <div className="bg-slate-700/50 p-2 rounded-lg group-hover:bg-slate-600/50 transition-colors">
                  <FiPhone className="text-teal-400" size={16} />
                </div>
                <span>+91 8982210819</span>
              </a>

            </div>
          </div>

          {/* Learning */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 relative inline-block">
              Learning
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-teal-500"></span>
            </h4>

            <ul className="space-y-3">
              {learningLinks.map(item => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 relative inline-block">
              Company
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-teal-500"></span>
            </h4>

            <ul className="space-y-3">
              {companyLinks.map(item => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-lg font-bold text-white mb-6 relative inline-block">
              Connect
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-teal-500"></span>
            </h4>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 mb-6">

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/jointhebridgegap"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-4 py-2.5 bg-slate-700/50 hover:bg-slate-600/70 rounded-lg text-sm text-gray-200 hover:text-white transition-all group"
              >
                <FiLinkedin className="text-xl group-hover:scale-110 transition-transform" />
                <span className="font-medium">Follow us on LinkedIn</span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/bridgegap_official"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-4 py-2.5 bg-slate-700/50 hover:bg-slate-600/70 rounded-lg text-sm text-gray-200 hover:text-white transition-all group"
              >
                <FiInstagram className="text-xl group-hover:scale-110 transition-transform" />
                <span className="font-medium">Follow us on Instagram</span>
              </a>

            </div>

            <p className="text-sm text-gray-300 leading-relaxed">
              Stay updated with the latest courses, tips, and industry insights.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/50 pt-6">

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

            <p className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">
              © {new Date().getFullYear()} The Bridgegap. All rights reserved.
            </p>

            <div className="flex items-center gap-4 text-xs sm:text-sm">

              {legalLinks.map((item, index) => (
                <React.Fragment key={item.href}>
                  <Link
                    href={item.href}
                    target="_blank"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>

                  {index < legalLinks.length - 1 && (
                    <span className="text-gray-700">•</span>
                  )}
                </React.Fragment>
              ))}

            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
