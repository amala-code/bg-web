// // 'use client';

// // import { useState } from 'react';
// // import { X, Bot, Send, Mail } from 'lucide-react';

// // export default function FloatingChatbot() {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [messages, setMessages] = useState([
// //     {
// //       type: 'bot',
// //       text: 'Hi! How can I help you today? Select a question below or ask your own.',
// //     },
// //   ]);
// //   const [showEmailForm, setShowEmailForm] = useState(false);
// //   const [email, setEmail] = useState('');
// //   const [customQuestion, setCustomQuestion] = useState('');
// //   const [submitted, setSubmitted] = useState(false);

// // const predefinedQA = [
// //   {
// //     question: 'What is Bridgegap and how does it help students?',
// //     answer:
// //       'Bridgegap is a career-focused learning platform that helps students build industry-ready skills through courses, mentorship, and placement support.'
// //   },
// //   {
// //     question: 'How can I enroll in Bridgegap courses?',
// //     answer:
// //       'You can enroll directly through our website. Select your preferred course, complete the registration, and our team will guide you further.'
// //   },
// //   {
// //     question: 'Do you provide placement or internship assistance?',
// //     answer:
// //       'Yes, we offer placement guidance, interview preparation, and internship opportunities in collaboration with our hiring partners.'
// //   },
// //   {
// //     question: 'When do new batches or enrollments start?',
// //     answer:
// //       'New batches and enrollments are announced regularly. Upcoming enrollments typically begin from March 25. Please check our website for updates.'
// //   },
// //   {
// //     question: 'Are the courses suitable for beginners?',
// //     answer:
// //       'Yes, our courses are designed for beginners as well as advanced learners, with step-by-step learning and hands-on projects.'
// //   },
// //   {
// //     question: 'How can I contact the Bridgegap support team?',
// //     answer:
// //       'You can reach us at info@thebridgegap.com or use the contact form on our website for quick assistance.'
// //   }
// // ];


// //   const handleQuestionClick = (qa) => {
// //     setMessages((prev) => [
// //       ...prev,
// //       { type: 'user', text: qa.question },
// //       { type: 'bot', text: qa.answer },
// //     ]);
// //     setShowEmailForm(false);
// //   };

// //   const handleAskCustom = () => {
// //     setShowEmailForm(true);
// //     setMessages((prev) => [
// //       ...prev,
// //       {
// //         type: 'bot',
// //         text: 'Please enter your question and email. Our chatbot team will respond shortly.',
// //       },
// //     ]);
// //   };

// //   const handleSubmitCustomQuestion = (e) => {
// //     e.preventDefault();
// //     if (customQuestion && email) {
// //       setMessages((prev) => [
// //         ...prev,
// //         { type: 'user', text: customQuestion },
// //         { type: 'bot', text: `Thanks! We’ll reply to ${email} within 24 hours.` },
// //       ]);
// //       setCustomQuestion('');
// //       setEmail('');
// //       setShowEmailForm(false);
// //       setSubmitted(true);
// //       setTimeout(() => setSubmitted(false), 3000);
// //     }
// //   };

// //   return (
// //     <>
// //       {/* Floating Button */}
// //       {!isOpen && (
// //         <button
// //           onClick={() => setIsOpen(true)}
// //           className="fixed bottom-6 right-6 bg-blue-700 hover:bg-blue-800 text-white rounded-full p-4 shadow-xl transition-all hover:scale-110 z-50"
// //           aria-label="Open chatbot"
// //         >
// //           <Bot size={28} />
// //         </button>
// //       )}

// //       {/* Chat Window */}
// //       {isOpen && (
// //         <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-xl shadow-2xl flex flex-col z-50 border border-blue-100">

// //           {/* Header */}
// //           <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white p-4 rounded-t-xl flex justify-between items-center">
// //             <div className="flex items-center gap-3">
// //               <div className="bg-white/20 p-2 rounded-full">
// //                 <Bot size={22} />
// //               </div>
// //               <div>
// //                 <h3 className="font-semibold text-lg">AI Chatbot</h3>
// //                 <p className="text-xs text-blue-100">Smart • Fast • Helpful</p>
// //               </div>
// //             </div>
// //             <button
// //               onClick={() => setIsOpen(false)}
// //               className="hover:bg-blue-800 rounded-full p-1 transition"
// //             >
// //               <X size={20} />
// //             </button>
// //           </div>

// //           {/* Messages */}
// //           <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-blue-50/40">
// //             {messages.map((message, index) => (
// //               <div
// //                 key={index}
// //                 className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
// //               >
// //                 <div
// //                   className={`max-w-[80%] rounded-lg p-3 ${
// //                     message.type === 'user'
// //                       ? 'bg-blue-700 text-white'
// //                       : 'bg-white text-gray-800 border border-blue-100 shadow-sm'
// //                   }`}
// //                 >
// //                   <p className="text-sm">{message.text}</p>
// //                 </div>
// //               </div>
// //             ))}

// //             {/* Quick Questions */}
// //             {!showEmailForm && messages.length <= 3 && (
// //               <div className="space-y-2 pt-2">
// //                 <p className="text-xs text-blue-600 font-semibold">
// //                   Popular questions
// //                 </p>
// //                 {predefinedQA.map((qa, index) => (
// //                   <button
// //                     key={index}
// //                     onClick={() => handleQuestionClick(qa)}
// //                     className="w-full text-left text-sm bg-white hover:bg-blue-100 border border-blue-200 rounded-lg p-3 transition shadow-sm"
// //                   >
// //                     {qa.question}
// //                   </button>
// //                 ))}
// //                 {/* <button
// //                   onClick={handleAskCustom}
// //                   className="w-full text-left text-sm bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-3 font-medium shadow hover:opacity-95"
// //                 >
// //                   🤖 Ask the chatbot anything
// //                 </button> */}
// //               </div>
// //             )}

// //             {/* Email Form */}
// //             {showEmailForm && !submitted && (
// //               <div className="bg-white rounded-lg p-4 border border-blue-200 shadow-sm">
// //                 <form onSubmit={handleSubmitCustomQuestion} className="space-y-3">
// //                   <textarea
// //                     value={customQuestion}
// //                     onChange={(e) => setCustomQuestion(e.target.value)}
// //                     placeholder="Type your question..."
// //                     className="w-full border rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-600"
// //                     rows="3"
// //                     required
// //                   />
// //                   <div className="relative">
// //                     <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
// //                     <input
// //                       type="email"
// //                       value={email}
// //                       onChange={(e) => setEmail(e.target.value)}
// //                       placeholder="your@email.com"
// //                       className="w-full border rounded-lg p-2 pl-9 text-sm focus:ring-2 focus:ring-blue-600"
// //                       required
// //                     />
// //                   </div>
// //                   <button
// //                     type="submit"
// //                     className="w-full bg-blue-700 hover:bg-blue-800 text-white rounded-lg p-2 text-sm font-semibold flex items-center justify-center gap-2"
// //                   >
// //                     <Send size={16} />
// //                     Submit to Chatbot
// //                   </button>
// //                 </form>
// //               </div>
// //             )}
// //           </div>

// //           {/* Footer */}
// //           <div className="p-3 bg-blue-50 border-t border-blue-100 rounded-b-xl">
// //             <p className="text-xs text-center text-blue-600">
// //               Powered by Bridgegap
// //             </p>
// //           </div>
// //         </div>
// //       )}
// //     </>
// //   );
// // }


// 'use client';

// import { useState } from 'react';
// import { X, Bot, Send, Mail } from 'lucide-react';

// export default function FloatingChatbot() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([
//     {
//       type: 'bot',
//       text: 'Hi! How can I help you today? Select a question below or ask your own.',
//     },
//   ]);
//   const [showEmailForm, setShowEmailForm] = useState(false);
//   const [email, setEmail] = useState('');
//   const [customQuestion, setCustomQuestion] = useState('');
//   const [submitted, setSubmitted] = useState(false);

//   const predefinedQA = [
//     {
//       question: 'What is Bridgegap and how does it help students?',
//       answer:
//         'Bridgegap is a career-focused learning platform that helps students build industry-ready skills.',
//     },
//     {
//       question: 'How can I enroll in Bridgegap courses?',
//       answer:
//         'You can enroll directly through our website and complete the registration.',
//     },
//     {
//       question: 'Do you provide placement assistance?',
//       answer:
//         'Yes, we offer placement guidance and interview preparation.',
//     },
//     {
//       question: 'When do new batches start?',
//       answer:
//         'Upcoming enrollments typically begin from March 25.',
//     },
//     {
//       question: 'Are courses beginner friendly?',
//       answer:
//         'Yes, they are suitable for beginners and advanced learners.',
//     },
//     {
//       question: 'How can I contact support?',
//       answer:
//         'Email us at info@thebridgegap.com.',
//     },
//   ];

//   const handleQuestionClick = (qa) => {
//     setMessages((prev) => [
//       ...prev,
//       { type: 'user', text: qa.question },
//       { type: 'bot', text: qa.answer },
//     ]);
//     setShowEmailForm(false);
//   };

//   const handleSubmitCustomQuestion = (e) => {
//     e.preventDefault();

//     if (customQuestion && email) {
//       setMessages((prev) => [
//         ...prev,
//         { type: 'user', text: customQuestion },
//         { type: 'bot', text: `Thanks! We’ll reply to ${email} within 24 hours.` },
//       ]);

//       setCustomQuestion('');
//       setEmail('');
//       setShowEmailForm(false);
//       setSubmitted(true);

//       setTimeout(() => setSubmitted(false), 3000);
//     }
//   };

//   return (
//     <>
//       {/* Floating Button */}
//       {!isOpen && (
//         <button
//           onClick={() => setIsOpen(true)}
//           className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 
//           bg-blue-700 hover:bg-blue-800 text-white rounded-full 
//           p-3 sm:p-4 shadow-xl transition-all hover:scale-110 z-50"
//         >
//           <Bot size={26} />
//         </button>
//       )}

//       {/* Chat Window */}
//       {isOpen && (
//         <div
//           className="
//           fixed inset-0 sm:inset-auto
//           sm:bottom-6 sm:right-6
//           w-full h-full sm:w-96 sm:h-[600px]
//           bg-white sm:rounded-xl
//           shadow-2xl flex flex-col z-50
//           border border-blue-100
//           "
//         >
//           {/* Header */}
//           <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white p-4 flex justify-between items-center sm:rounded-t-xl">
//             <div className="flex items-center gap-3">
//               <div className="bg-white/20 p-2 rounded-full">
//                 <Bot size={20} />
//               </div>

//               <div>
//                 <h3 className="font-semibold text-base sm:text-lg">
//                   AI Chatbot
//                 </h3>
//                 <p className="text-xs text-blue-100">
//                   Smart • Fast • Helpful
//                 </p>
//               </div>
//             </div>

//             <button
//               onClick={() => setIsOpen(false)}
//               className="hover:bg-blue-800 rounded-full p-1"
//             >
//               <X size={20} />
//             </button>
//           </div>

//           {/* Messages */}
//           <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-4 bg-blue-50/40">
//             {messages.map((message, index) => (
//               <div
//                 key={index}
//                 className={`flex ${
//                   message.type === 'user'
//                     ? 'justify-end'
//                     : 'justify-start'
//                 }`}
//               >
//                 <div
//                   className={`max-w-[85%] sm:max-w-[80%] rounded-lg p-3 ${
//                     message.type === 'user'
//                       ? 'bg-blue-700 text-white'
//                       : 'bg-white text-gray-800 border border-blue-100 shadow-sm'
//                   }`}
//                 >
//                   <p className="text-sm">{message.text}</p>
//                 </div>
//               </div>
//             ))}

//             {/* Quick Questions */}
//             {!showEmailForm && messages.length <= 3 && (
//               <div className="space-y-2 pt-2">
//                 <p className="text-xs text-blue-600 font-semibold">
//                   Popular questions
//                 </p>

//                 {predefinedQA.map((qa, index) => (
//                   <button
//                     key={index}
//                     onClick={() => handleQuestionClick(qa)}
//                     className="
//                     w-full text-left text-sm 
//                     bg-white hover:bg-blue-100 
//                     border border-blue-200 
//                     rounded-lg p-3 transition shadow-sm
//                     "
//                   >
//                     {qa.question}
//                   </button>
//                 ))}

//                 <button
//                   onClick={() => setShowEmailForm(true)}
//                   className="
//                   w-full text-sm
//                   bg-gradient-to-r from-blue-600 to-blue-800
//                   text-white rounded-lg p-3 font-medium
//                   shadow
//                   "
//                 >
//                   Ask your own question
//                 </button>
//               </div>
//             )}

//             {/* Email Form */}
//             {showEmailForm && !submitted && (
//               <div className="bg-white rounded-lg p-4 border border-blue-200 shadow-sm">
//                 <form
//                   onSubmit={handleSubmitCustomQuestion}
//                   className="space-y-3"
//                 >
//                   <textarea
//                     value={customQuestion}
//                     onChange={(e) =>
//                       setCustomQuestion(e.target.value)
//                     }
//                     placeholder="Type your question..."
//                     className="w-full border rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-600"
//                     rows="3"
//                     required
//                   />

//                   <div className="relative">
//                     <Mail
//                       size={16}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
//                     />

//                     <input
//                       type="email"
//                       value={email}
//                       onChange={(e) =>
//                         setEmail(e.target.value)
//                       }
//                       placeholder="your@email.com"
//                       className="w-full border rounded-lg p-2 pl-9 text-sm focus:ring-2 focus:ring-blue-600"
//                       required
//                     />
//                   </div>

//                   <button
//                     type="submit"
//                     className="
//                     w-full bg-blue-700 hover:bg-blue-800
//                     text-white rounded-lg p-2 text-sm font-semibold
//                     flex items-center justify-center gap-2
//                     "
//                   >
//                     <Send size={16} />
//                     Submit
//                   </button>
//                 </form>
//               </div>
//             )}
//           </div>

//           {/* Footer */}
//           <div className="p-2 sm:p-3 bg-blue-50 border-t border-blue-100 sm:rounded-b-xl">
//             <p className="text-xs text-center text-blue-600">
//               Powered by Bridgegap
//             </p>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }


'use client';

import { useState, useEffect, useRef } from 'react';
import { X, Bot, Send, Mail, MessageCircle, ChevronDown, Sparkles } from 'lucide-react';

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: 'Hi! I\'m here to help you learn more about Bridgegap. How can I assist you today?',
    },
  ]);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [email, setEmail] = useState('');
  const [customQuestion, setCustomQuestion] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const predefinedQA = [
    {
      question: 'What is Bridgegap and how does it help students?',
      answer:
        'Bridgegap is a career-focused learning platform that bridges the gap between education and employment. We help students build industry-ready skills through comprehensive courses, real-world projects, mentorship, and direct placement support with our 150+ hiring partners.'
    },
    {
      question: 'How can I enroll in Bridgegap courses?',
      answer:
        'Enrolling is simple! Visit our website, browse our courses, select the one that matches your career goals, and complete the registration process. Our team will guide you through onboarding and help you get started on your learning journey.'
    },
    {
      question: 'Do you provide placement or internship assistance?',
      answer:
        'Absolutely! We offer comprehensive placement support including resume building, interview preparation, mock interviews, and direct access to our HR Hub with 150+ hiring partners. We also facilitate internship opportunities to help you gain practical experience.'
    },
    {
      question: 'When do new batches start?',
      answer:
        'We have rolling admissions with new batches starting regularly. Our next major enrollment period begins on March 25th. However, you can register anytime and we\'ll place you in the next available batch that fits your schedule.'
    },
    {
      question: 'Are the courses suitable for beginners?',
      answer:
        'Yes! Our courses are designed for learners at all levels. Whether you\'re a complete beginner or looking to advance your skills, we offer step-by-step learning paths, hands-on projects, and personalized mentorship to ensure your success.'
    },
    {
      question: 'What makes Bridgegap different from other platforms?',
      answer:
        'We focus on outcomes, not just content. You get industry-aligned curriculum, real project experience, direct HR connections, comprehensive assessments, and a proven track record with a 53% average placement increase for our partner universities!'
    },
  ];

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleQuestionClick = (qa) => {
    // Add user message
    setMessages((prev) => [
      ...prev,
      { type: 'user', text: qa.question },
    ]);

    // Show typing indicator
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { type: 'bot', text: qa.answer },
      ]);
      setShowEmailForm(false);
    }, 800);
  };

  const handleAskCustom = () => {
    setShowEmailForm(true);
    setMessages((prev) => [
      ...prev,
      {
        type: 'bot',
        text: 'For personalized assistance, please email us at info@thebridgegap.com. Our team typically responds within 24 hours!',
      },
    ]);
  };

  const handleClose = () => {
    setIsOpen(false);
    // Reset after animation
    setTimeout(() => {
      setShowEmailForm(false);
    }, 300);
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="
            fixed bottom-4 right-4 sm:bottom-6 sm:right-6 
            bg-gradient-to-r from-blue-600 to-blue-700
            hover:from-blue-700 hover:to-blue-800
            text-white rounded-full 
            p-4 sm:p-5 shadow-2xl 
            transition-all duration-300 
            hover:scale-110 active:scale-95
            z-50
            animate-bounce-subtle
            group
          "
          aria-label="Open chatbot"
        >
          <MessageCircle size={28} className="sm:w-7 sm:h-7" />
          
          {/* Notification Dot */}
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
          
          {/* Tooltip */}
          <span className="
            absolute right-full mr-3 top-1/2 -translate-y-1/2
            bg-gray-900 text-white text-sm px-3 py-2 rounded-lg
            whitespace-nowrap opacity-0 group-hover:opacity-100
            transition-opacity duration-300 pointer-events-none
            hidden sm:block
          ">
            Need help? Chat with us!
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <>
          {/* Mobile Overlay */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 sm:hidden"
            onClick={handleClose}
          />

          <div
            className="
              fixed inset-0 sm:inset-auto
              sm:bottom-6 sm:right-6
              w-full h-full sm:w-[420px] sm:h-[680px]
              bg-white sm:rounded-2xl
              shadow-2xl flex flex-col z-50
              border-0 sm:border border-gray-200
              animate-slide-up sm:animate-scale-in
            "
          >
            {/* Header */}
            <div className="
              bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800
              text-white p-4 sm:p-5
              flex justify-between items-center 
              sm:rounded-t-2xl
              shadow-lg
            ">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="bg-white/20 backdrop-blur-sm p-2.5 rounded-full ring-2 ring-white/30">
                    <Bot size={22} className="text-white" />
                  </div>
                  {/* Online Indicator */}
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-blue-700"></span>
                </div>

                <div>
                  <h3 className="font-bold text-lg flex items-center gap-2">
                    Bridgegap Assistant
                    <Sparkles size={16} className="text-yellow-300" />
                  </h3>
                  <p className="text-xs text-blue-100">
                    Online • Here to help
                  </p>
                </div>
              </div>

              <button
                onClick={handleClose}
                className="
                  hover:bg-white/20 rounded-full p-2 
                  transition-all duration-200
                  active:scale-90
                "
                aria-label="Close chat"
              >
                <X size={22} />
              </button>
            </div>

            {/* Messages Container */}
            <div className="
              flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 
              bg-gradient-to-b from-blue-50/30 to-white
              custom-scrollbar
            ">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`
                    flex animate-fade-in
                    ${message.type === 'user' ? 'justify-end' : 'justify-start'}
                  `}
                >
                  <div
                    className={`
                      max-w-[85%] sm:max-w-[80%] rounded-2xl p-3.5 sm:p-4
                      ${
                        message.type === 'user'
                          ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                          : 'bg-white text-gray-800 border border-gray-200 shadow-md'
                      }
                      animate-message-pop
                    `}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start animate-fade-in">
                  <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-md">
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              )}

              {/* Quick Questions */}
              {!showEmailForm && messages.length <= 2 && !isTyping && (
                <div className="space-y-3 pt-2 animate-fade-in">
                  <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-3">
                    <ChevronDown size={16} className="text-blue-500" />
                    Popular Questions
                  </div>

                  <div className="grid gap-2">
                    {predefinedQA.map((qa, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuestionClick(qa)}
                        className="
                          w-full text-left text-sm 
                          bg-white hover:bg-blue-50
                          border border-gray-200 hover:border-blue-300
                          rounded-xl p-3.5 
                          transition-all duration-200
                          shadow-sm hover:shadow-md
                          group
                          transform hover:-translate-y-0.5
                        "
                      >
                        <span className="text-gray-700 group-hover:text-blue-700 font-medium">
                          {qa.question}
                        </span>
                      </button>
                    ))}

                    <button
                      onClick={handleAskCustom}
                      className="
                        w-full text-sm mt-2
                        bg-gradient-to-r from-blue-600 to-blue-700
                        hover:from-blue-700 hover:to-blue-800
                        text-white rounded-xl p-4 font-semibold
                        shadow-lg hover:shadow-xl
                        transition-all duration-200
                        transform hover:-translate-y-0.5
                        flex items-center justify-center gap-2
                      "
                    >
                      <Mail size={18} />
                      Ask Your Own Question
                    </button>
                  </div>
                </div>
              )}

              {/* Ask Another Question Button - Shows after conversation starts */}
              {!showEmailForm && messages.length > 2 && !isTyping && (
                <div className="space-y-3 pt-2 animate-fade-in">
                  <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-3">
                    <ChevronDown size={16} className="text-blue-500" />
                    Need More Help?
                  </div>

                  <div className="grid gap-2">
                    {/* Show Popular Questions Again */}
                    <div className="bg-white border border-gray-200 rounded-xl p-3 shadow-sm">
                      <p className="text-xs font-medium text-gray-700 mb-2">Select another question:</p>
                      <div className="space-y-2">
                        {predefinedQA.map((qa, index) => (
                          <button
                            key={index}
                            onClick={() => handleQuestionClick(qa)}
                            className="
                              w-full text-left text-xs
                              bg-gray-50 hover:bg-blue-50
                              border border-gray-200 hover:border-blue-300
                              rounded-lg p-2.5
                              transition-all duration-200
                              shadow-sm hover:shadow-md
                              group
                              transform hover:-translate-y-0.5
                            "
                          >
                            <span className="text-gray-700 group-hover:text-blue-700 font-medium">
                              {qa.question}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Or Contact Us */}
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                      </div>
                      <div className="relative flex justify-center text-xs">
                        <span className="px-2 bg-gradient-to-b from-blue-50/30 to-white text-gray-500">or</span>
                      </div>
                    </div>

                    <button
                      onClick={handleAskCustom}
                      className="
                        w-full text-sm
                        bg-gradient-to-r from-blue-600 to-blue-700
                        hover:from-blue-700 hover:to-blue-800
                        text-white rounded-xl p-4 font-semibold
                        shadow-lg hover:shadow-xl
                        transition-all duration-200
                        transform hover:-translate-y-0.5
                        flex items-center justify-center gap-2
                      "
                    >
                      <Mail size={18} />
                      Contact Us Directly
                    </button>
                  </div>
                </div>
              )}

              {/* Email Contact Card */}
              {showEmailForm && (
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border-2 border-blue-200 shadow-xl animate-fade-in">
                  <div className="text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-2">
                      <Mail size={32} className="text-white" />
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-2">Contact Our Team</h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Send us an email and we'll get back to you within 24 hours
                      </p>
                    </div>

                    <div className="bg-white rounded-xl p-4 border border-blue-200">
                      <p className="text-xs font-medium text-gray-500 mb-2">Email Address</p>
                      <div className="flex items-center justify-between gap-3">
                        <a 
                          href="mailto:info@thebridgegap.com"
                          className="text-blue-700 font-semibold hover:text-blue-800 transition-colors text-sm sm:text-base"
                        >
                          info@thebridgegap.com
                        </a>
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText('info@thebridgegap.com');
                            setSubmitted(true);
                            setTimeout(() => setSubmitted(false), 2000);
                          }}
                          className="
                            flex-shrink-0 p-2 rounded-lg
                            bg-blue-600 hover:bg-blue-700
                            text-white transition-all
                            active:scale-95
                          "
                          title="Copy email"
                        >
                          {submitted ? (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                          )}
                        </button>
                      </div>
                      {submitted && (
                        <p className="text-xs text-green-600 mt-2 font-medium">Email copied to clipboard!</p>
                      )}
                    </div>

                    <a
                      href="mailto:info@thebridgegap.com"
                      className="
                        w-full inline-flex items-center justify-center gap-2
                        bg-gradient-to-r from-blue-600 to-blue-700
                        hover:from-blue-700 hover:to-blue-800
                        text-white rounded-xl p-4 font-semibold text-sm
                        shadow-lg hover:shadow-xl
                        transition-all duration-200
                        transform hover:-translate-y-0.5
                      "
                    >
                      <Send size={18} />
                      Open Email Client
                    </a>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Footer */}
            <div className="
              p-4 bg-gradient-to-r from-blue-50 to-blue-100/50
              border-t border-gray-200 sm:rounded-b-2xl
            ">
              <div className="flex items-center justify-center gap-2 text-xs text-gray-600">
                <Sparkles size={14} className="text-blue-600" />
                <span>Powered by <span className="font-semibold text-blue-700">Bridgegap</span></span>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes bounce-subtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes scale-in {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes message-pop {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 3s ease-in-out infinite;
        }

        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }

        .animate-fade-in {
          animation: fade-in 0.4s ease-out;
        }

        .animate-message-pop {
          animation: message-pop 0.3s ease-out;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </>
  );
}