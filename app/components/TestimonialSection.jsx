// 'use client';

// import React from 'react';

// const avatarUrls = {
//   victoria: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
//   rebecca: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
//   martha: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
//   kelly: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop',
//   betty: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
//   matt: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop',
//   wesley: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
//   sarah: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
//   michael: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
//   naomi: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
//   jacob: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop'
// };

// const TestimonialsSection = () => {
//   return (
//     <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
//       {/* Background decorations matching your theme */}
//       <div className="absolute inset-0 pointer-events-none opacity-30 lg:opacity-40">
//         <div className="absolute top-5 left-5 lg:top-10 lg:left-10 w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 rounded-full bg-white/70 blur-2xl lg:blur-3xl" />
//         <div className="absolute bottom-10 right-10 lg:bottom-20 lg:right-20 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 rounded-full bg-blue-200/50 blur-2xl lg:blur-3xl" />
//         <div className="absolute top-1/2 left-1/4 lg:left-1/3 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full bg-indigo-200/40 blur-xl lg:blur-2xl" />
//       </div>

//       <div className="relative max-w-7xl mx-auto">
//         {/* Mobile-first responsive testimonial layout */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6 auto-rows-min">
          
//           {/* Top Row */}
//           {/* Top Left - Large Quote Card */}
//           <div className="col-span-1 sm:col-span-2 lg:col-span-4 bg-white rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 sm:p-6 lg:p-8 relative">
//             <div className="text-4xl sm:text-6xl lg:text-8xl text-gray-200 font-serif absolute -top-2 -left-1 lg:-top-4 lg:-left-2">"</div>
//             <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mt-6 sm:mt-8 lg:mt-12 mb-4 lg:mb-6">
//               Eligendi numquam ut ullam excepturi sint incidunt labore. Expedita ipsum et dolorem qui dolores dolor. Nostrum qui dolore unde placeat sequi dicta.
//             </p>
//             <div className="flex items-center gap-3 border-t border-gray-200 pt-3 lg:pt-4">
//               <img src={avatarUrls.victoria} alt="Victoria Walton" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover" />
//               <div>
//                 <p className="font-semibold text-gray-900 text-xs sm:text-sm">Victoria Walton</p>
//                 <p className="text-xs text-gray-500">Information Officer Co.</p>
//               </div>
//             </div>
//           </div>

//           {/* Top Center - Star Rating Card */}
//           <div className="col-span-1 sm:col-span-2 lg:col-span-4 bg-white rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 sm:p-6 lg:p-8 text-center relative">
//             <div className="flex justify-center mb-3 lg:mb-4">
//               <img
//                 src={avatarUrls.rebecca}
//                 alt="Rebecca Tylor"
//                 className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-full object-cover ring-2 sm:ring-4 ring-yellow-100"
//               />
//             </div>
//             <div className="flex justify-center gap-1 mb-3 lg:mb-4">
//               {[...Array(5)].map((_, i) => (
//                 <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
//                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                 </svg>
//               ))}
//             </div>
//             <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">I really appreciate it!</h3>
//             <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 lg:mb-4">
//               Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque.
//             </p>
//             <div className="border-t border-gray-200 pt-3 lg:pt-4">
//               <p className="font-semibold text-gray-900 text-xs sm:text-sm">Rebecca Tylor</p>
//               <p className="text-xs text-gray-500">Marketer</p>
//             </div>
//             <div className="absolute -bottom-4 right-4 sm:-bottom-6 sm:right-8 text-3xl sm:text-5xl text-gray-200 font-serif">"</div>
//           </div>

//           {/* Top Right - Small Good Job Card */}
//           <div className="col-span-1 sm:col-span-1 lg:col-span-4 bg-white rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 sm:p-6">
//             <div className="flex items-center gap-2 mb-3">
//               <img src={avatarUrls.sarah} alt="Sarah Wilson" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover" />
//             </div>
//             <h4 className="font-bold text-gray-900 text-xs sm:text-sm mb-2">Good job!</h4>
//             <p className="text-gray-600 text-xs leading-relaxed mb-3">
//               Molestiae fugiat quia sint nostrum dolorem denique denique!
//             </p>
//             <p className="text-xs text-gray-500">Sarah Wilson • Product Manager</p>
//           </div>

//           {/* Second Row */}
//           {/* Large Portrait Card - Spans 2 columns */}
//           <div className="col-span-1 sm:col-span-2 lg:col-span-6 lg:col-start-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl lg:rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden">
//             <div className="flex flex-col sm:flex-row h-full">
//               <div className="sm:w-2/5">
//                 <img
//                   src={avatarUrls.martha}
//                   alt="Martha Maldonado"
//                   className="w-full h-48 sm:h-64 lg:h-full object-cover"
//                 />
//               </div>
//               <div className="flex-1 p-4 sm:p-6 lg:p-8 flex flex-col justify-center text-white">
//                 <div className="text-4xl sm:text-5xl lg:text-6xl text-white/20 font-serif mb-3 lg:mb-4">"</div>
//                 <p className="text-base sm:text-lg leading-relaxed mb-4 lg:mb-6">
//                   Good job!
//                 </p>
//                 <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4 lg:mb-6">
//                   Molestiae fugiat sint quia nost quisquam dolors denique denique denique!
//                 </p>
//                 <div className="border-t border-white/20 pt-3 lg:pt-4">
//                   <p className="font-bold text-sm sm:text-base lg:text-lg">Martha Maldonado</p>
//                   <p className="text-xs sm:text-sm text-gray-400">Information Officer</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Side Card */}
//           <div className="col-span-1 sm:col-span-1 lg:col-span-3 lg:col-start-10 bg-white rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 sm:p-6 flex gap-3 sm:gap-4 items-center">
//             <img src={avatarUrls.matt} alt="Matt Stewart" className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover" />
//             <div>
//               <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-2">
//                 "Quasi praesentium odio sit atque, officiis minus dolore sequi."
//               </p>
//               <p className="text-xs font-semibold text-gray-900">Matt Stewart</p>
//               <p className="text-[10px] sm:text-[11px] text-gray-500">Co-Founder • Head of Design</p>
//             </div>
//           </div>

//           {/* Third Row */}
//           {/* Wide impressed card */}
//           <div className="col-span-1 sm:col-span-2 lg:col-span-7 bg-white rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 sm:p-6 lg:p-8">
//             <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3">I was very impressed!</h3>
//             <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 lg:mb-6">
//               Diam natoque mollitia sit, quis volutpat sodales eget. Adipiscing enim ex nulla aliquet porttitor lacinia.
//             </p>
//             <div className="flex items-center -space-x-1 sm:-space-x-2">
//               <img src={avatarUrls.betty} alt="Person 1" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover ring-2 ring-white" />
//               <img src={avatarUrls.naomi} alt="Person 2" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover ring-2 ring-white" />
//               <img src={avatarUrls.jacob} alt="Person 3" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover ring-2 ring-white" />
//             </div>
//             <div className="mt-3 lg:mt-4 border-t border-gray-200 pt-3">
//               <p className="font-semibold text-gray-900 text-xs sm:text-sm">Betty Siaz</p>
//               <p className="text-xs text-gray-500">Economist</p>
//             </div>
//           </div>

//           {/* Speech bubble card */}
//           <div className="col-span-1 sm:col-span-1 lg:col-span-3 bg-white rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 sm:p-6 relative">
//             <div className="flex justify-center mb-3">
//               <img src={avatarUrls.kelly} alt="Kelly Joe" className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover ring-2 ring-gray-100" />
//             </div>
//             <div className="text-3xl sm:text-4xl text-gray-300 font-serif text-center mb-2">"</div>
//             <p className="text-gray-600 text-xs leading-relaxed text-center mb-3">
//               Eligtur fugiat quia nostrum et facatus excepturi omni.
//             </p>
//             <p className="text-center text-xs font-semibold text-gray-900">Kelly Joe</p>
//             <p className="text-center text-[10px] text-gray-500">UX/UI Designer</p>
//           </div>

//           {/* Bottom quote card */}
//           <div className="col-span-1 sm:col-span-1 lg:col-span-2 bg-white rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 sm:p-6">
//             <div className="text-3xl sm:text-4xl lg:text-5xl text-gray-300 font-serif mb-3">"</div>
//             <p className="text-gray-600 text-xs leading-relaxed mb-3 lg:mb-4">
//               Eram soluta excepturi nostrum aut facatus.
//             </p>
//             <div className="border-t border-gray-200 pt-3">
//               <p className="font-semibold text-gray-900 text-xs">Wesley Burges</p>
//               <p className="text-[10px] text-gray-500">Broker</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSection;

'use client';

import React from 'react';

const avatarUrls = {
  victoria: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  rebecca: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
  martha: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
  kelly: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop',
  betty: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
  matt: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop',
  wesley: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
  sarah: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
  michael: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
  naomi: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
  jacob: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop'
};

const TestimonialsSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-100 via-gray-50 to-white py-16 px-6 lg:py-24 lg:px-12 overflow-hidden">
      {/* Subtle background decorations */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-blue-100 blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-purple-100 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Masonry-style grid layout */}
        <div className="grid grid-cols-12 gap-5 auto-rows-auto">
          
          {/* Row 1 */}
          {/* Top Left - Large Quote Card */}
          <div className="col-span-12 lg:col-span-3 bg-white rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300 p-7 relative min-h-[280px] flex flex-col">
            <div className="text-7xl text-gray-200 font-serif absolute top-2 left-3 leading-none">"</div>
            <p className="text-gray-700 text-sm leading-relaxed mt-14 mb-6 flex-grow">
              Eligendi numquam ut ullam excepturi sint incidunt labore. Expedita ipsum et dolorem qui dolores dolor. Nostrum qui dolore unde placeat sequi dicta.
            </p>
            <div className="flex items-center gap-3 border-t border-gray-200 pt-4 mt-auto">
              <img src={avatarUrls.victoria} alt="Victoria Walton" className="w-12 h-12 rounded-full object-cover flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900 text-sm">Victoria Walton</p>
                <p className="text-xs text-gray-500">Information Officer Co.</p>
              </div>
            </div>
          </div>

          {/* Top Center - Star Rating Card */}
          <div className="col-span-12 lg:col-span-4 bg-white rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300 p-7 text-center relative min-h-[280px] flex flex-col">
            <div className="flex justify-center mb-4">
              <img
                src={avatarUrls.rebecca}
                alt="Rebecca Tylor"
                className="w-20 h-20 rounded-full object-cover ring-4 ring-yellow-50"
              />
            </div>
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">I really appreciate it!</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
              Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque.
            </p>
            <div className="border-t border-gray-200 pt-4 mt-auto">
              <p className="font-semibold text-gray-900 text-sm">Rebecca Tylor</p>
              <p className="text-xs text-gray-500">Marketer</p>
            </div>
            <div className="absolute bottom-6 right-6 text-5xl text-gray-200 font-serif leading-none">"</div>
          </div>

          {/* Top Right - Small Good Job Card */}
          <div className="col-span-12 lg:col-span-2 bg-white rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 min-h-[140px]">
            <div className="flex items-center gap-3 mb-3">
              <img src={avatarUrls.sarah} alt="Sarah Wilson" className="w-12 h-12 rounded-full object-cover" />
            </div>
            <h4 className="font-bold text-gray-900 text-sm mb-2">Good job!</h4>
            <p className="text-gray-600 text-xs leading-relaxed mb-3">
              Molestiae fugiat quia sint nostrum dolorem denique denique!
            </p>
            <p className="text-xs text-gray-500">Sarah Wilson • Product Manager</p>
          </div>

          {/* Right Side Small Card */}
          <div className="col-span-12 lg:col-span-3 bg-white rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex gap-4 items-start min-h-[140px]">
            <img src={avatarUrls.michael} alt="Michael Chen" className="w-14 h-14 rounded-full object-cover flex-shrink-0" />
            <div>
              <p className="text-gray-600 text-xs leading-relaxed mb-2">
                "Quasi praesentium odio sit atque, officiis minus dolore sequi."
              </p>
              <p className="text-xs font-semibold text-gray-900">Michael Chen</p>
              <p className="text-[11px] text-gray-500">Developer</p>
            </div>
          </div>

          {/* Row 2 */}
          {/* Large Portrait Card - Martha */}
          <div className="col-span-12 lg:col-span-6 lg:col-start-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden min-h-[320px]">
            <div className="flex flex-col sm:flex-row h-full">
              <div className="sm:w-2/5">
                <img
                  src={avatarUrls.martha}
                  alt="Martha Maldonado"
                  className="w-full h-64 sm:h-full object-cover"
                />
              </div>
              <div className="flex-1 p-8 flex flex-col justify-center text-white">
                <div className="text-6xl text-white/20 font-serif mb-4 leading-none">"</div>
                <p className="text-lg font-medium leading-relaxed mb-4">
                  Good job!
                </p>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  Molestiae fugiat sint quia nost quisquam dolors denique denique denique!
                </p>
                <div className="border-t border-white/20 pt-4">
                  <p className="font-bold text-base">Martha Maldonado</p>
                  <p className="text-sm text-gray-400">Information Officer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Card - Matt */}
          <div className="col-span-12 lg:col-span-3 lg:col-start-10 bg-white rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex gap-4 items-center min-h-[160px]">
            <img src={avatarUrls.matt} alt="Matt Stewart" className="w-16 h-16 rounded-full object-cover flex-shrink-0" />
            <div>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                "Quasi praesentium odio sit atque, officiis minus dolore sequi."
              </p>
              <p className="text-xs font-semibold text-gray-900">Matt Stewart</p>
              <p className="text-[11px] text-gray-500">Co-Founder • Head of Design</p>
            </div>
          </div>

          {/* Row 3 */}
          {/* Wide impressed card */}
          <div className="col-span-12 lg:col-span-7 bg-white rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">I was very impressed!</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Diam natoque mollitia sit, quis volutpat sodales eget. Adipiscing enim ex nulla aliquet porttitor lacinia.
            </p>
            <div className="flex items-center -space-x-2 mb-4">
              <img src={avatarUrls.betty} alt="Person 1" className="w-12 h-12 rounded-full object-cover ring-2 ring-white" />
              <img src={avatarUrls.naomi} alt="Person 2" className="w-12 h-12 rounded-full object-cover ring-2 ring-white" />
              <img src={avatarUrls.jacob} alt="Person 3" className="w-12 h-12 rounded-full object-cover ring-2 ring-white" />
            </div>
            <div className="border-t border-gray-200 pt-4">
              <p className="font-semibold text-gray-900 text-sm">Betty Siaz</p>
              <p className="text-xs text-gray-500">Economist</p>
            </div>
          </div>

          {/* Speech bubble card - Kelly */}
          <div className="col-span-12 lg:col-span-3 bg-white rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300 p-7 relative min-h-[240px] flex flex-col items-center text-center">
            <div className="flex justify-center mb-4">
              <img src={avatarUrls.kelly} alt="Kelly Joe" className="w-16 h-16 rounded-full object-cover ring-2 ring-gray-100" />
            </div>
            <div className="text-5xl text-gray-200 font-serif mb-3 leading-none">"</div>
            <p className="text-gray-600 text-xs leading-relaxed mb-4 flex-grow">
              Eligtur fugiat quia nostrum et facatus excepturi omni.
            </p>
            <div className="mt-auto">
              <p className="text-xs font-semibold text-gray-900">Kelly Joe</p>
              <p className="text-[11px] text-gray-500">UX/UI Designer</p>
            </div>
          </div>

          {/* Bottom quote card - Wesley */}
          <div className="col-span-12 lg:col-span-2 bg-white rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 min-h-[200px] flex flex-col">
            <div className="text-5xl text-gray-200 font-serif mb-4 leading-none">"</div>
            <p className="text-gray-600 text-xs leading-relaxed mb-4 flex-grow">
              Eram soluta excepturi nostrum aut facatus.
            </p>
            <div className="border-t border-gray-200 pt-3 mt-auto">
              <p className="font-semibold text-gray-900 text-xs">Wesley Burges</p>
              <p className="text-[11px] text-gray-500">Broker</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;