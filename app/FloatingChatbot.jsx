'use client';

import { useState } from 'react';
import { X, Bot, Send, Mail } from 'lucide-react';

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: 'Hi! How can I help you today? Select a question below or ask your own.',
    },
  ]);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [email, setEmail] = useState('');
  const [customQuestion, setCustomQuestion] = useState('');
  const [submitted, setSubmitted] = useState(false);

const predefinedQA = [
  {
    question: 'What is Bridgegap and how does it help students?',
    answer:
      'Bridgegap is a career-focused learning platform that helps students build industry-ready skills through courses, mentorship, and placement support.'
  },
  {
    question: 'How can I enroll in Bridgegap courses?',
    answer:
      'You can enroll directly through our website. Select your preferred course, complete the registration, and our team will guide you further.'
  },
  {
    question: 'Do you provide placement or internship assistance?',
    answer:
      'Yes, we offer placement guidance, interview preparation, and internship opportunities in collaboration with our hiring partners.'
  },
  {
    question: 'When do new batches or enrollments start?',
    answer:
      'New batches and enrollments are announced regularly. Upcoming enrollments typically begin from March 25. Please check our website for updates.'
  },
  {
    question: 'Are the courses suitable for beginners?',
    answer:
      'Yes, our courses are designed for beginners as well as advanced learners, with step-by-step learning and hands-on projects.'
  },
  {
    question: 'How can I contact the Bridgegap support team?',
    answer:
      'You can reach us at info@thebridgegap.com or use the contact form on our website for quick assistance.'
  }
];


  const handleQuestionClick = (qa) => {
    setMessages((prev) => [
      ...prev,
      { type: 'user', text: qa.question },
      { type: 'bot', text: qa.answer },
    ]);
    setShowEmailForm(false);
  };

  const handleAskCustom = () => {
    setShowEmailForm(true);
    setMessages((prev) => [
      ...prev,
      {
        type: 'bot',
        text: 'Please enter your question and email. Our chatbot team will respond shortly.',
      },
    ]);
  };

  const handleSubmitCustomQuestion = (e) => {
    e.preventDefault();
    if (customQuestion && email) {
      setMessages((prev) => [
        ...prev,
        { type: 'user', text: customQuestion },
        { type: 'bot', text: `Thanks! We’ll reply to ${email} within 24 hours.` },
      ]);
      setCustomQuestion('');
      setEmail('');
      setShowEmailForm(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-blue-700 hover:bg-blue-800 text-white rounded-full p-4 shadow-xl transition-all hover:scale-110 z-50"
          aria-label="Open chatbot"
        >
          <Bot size={28} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-xl shadow-2xl flex flex-col z-50 border border-blue-100">

          {/* Header */}
          <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white p-4 rounded-t-xl flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-full">
                <Bot size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">AI Chatbot</h3>
                <p className="text-xs text-blue-100">Smart • Fast • Helpful</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-blue-800 rounded-full p-1 transition"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-blue-50/40">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.type === 'user'
                      ? 'bg-blue-700 text-white'
                      : 'bg-white text-gray-800 border border-blue-100 shadow-sm'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}

            {/* Quick Questions */}
            {!showEmailForm && messages.length <= 3 && (
              <div className="space-y-2 pt-2">
                <p className="text-xs text-blue-600 font-semibold">
                  Popular questions
                </p>
                {predefinedQA.map((qa, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuestionClick(qa)}
                    className="w-full text-left text-sm bg-white hover:bg-blue-100 border border-blue-200 rounded-lg p-3 transition shadow-sm"
                  >
                    {qa.question}
                  </button>
                ))}
                {/* <button
                  onClick={handleAskCustom}
                  className="w-full text-left text-sm bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-3 font-medium shadow hover:opacity-95"
                >
                  🤖 Ask the chatbot anything
                </button> */}
              </div>
            )}

            {/* Email Form */}
            {showEmailForm && !submitted && (
              <div className="bg-white rounded-lg p-4 border border-blue-200 shadow-sm">
                <form onSubmit={handleSubmitCustomQuestion} className="space-y-3">
                  <textarea
                    value={customQuestion}
                    onChange={(e) => setCustomQuestion(e.target.value)}
                    placeholder="Type your question..."
                    className="w-full border rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-600"
                    rows="3"
                    required
                  />
                  <div className="relative">
                    <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full border rounded-lg p-2 pl-9 text-sm focus:ring-2 focus:ring-blue-600"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-700 hover:bg-blue-800 text-white rounded-lg p-2 text-sm font-semibold flex items-center justify-center gap-2"
                  >
                    <Send size={16} />
                    Submit to Chatbot
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-3 bg-blue-50 border-t border-blue-100 rounded-b-xl">
            <p className="text-xs text-center text-blue-600">
              Powered by Bridgegap
            </p>
          </div>
        </div>
      )}
    </>
  );
}
