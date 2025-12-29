'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BlogsSection = () => {
  const [hoveredBlog, setHoveredBlog] = useState(null);

  const blogs = [
    {
      id: 1,
      title: 'Getting Started with Web Development',
      excerpt: 'Learn the fundamentals of HTML, CSS, and JavaScript. Perfect for beginners looking to start their coding journey.',
      category: 'Web Development',
      date: 'Dec 10, 2024',
      author: 'John Doe',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop&q=80',
      color: 'from-blue-500 to-cyan-500',
      tags: ['HTML', 'CSS', 'JavaScript']
    },
    {
      id: 2,
      title: 'React Hooks: A Complete Guide',
      excerpt: 'Master React Hooks and write better functional components. Deep dive into useState, useEffect, and custom hooks.',
      category: 'React',
      date: 'Dec 8, 2024',
      author: 'Sarah Smith',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=300&fit=crop&q=80',
      color: 'from-purple-500 to-pink-500',
      tags: ['React', 'Hooks', 'JavaScript']
    },
    {
      id: 3,
      title: 'Building Scalable Node.js Applications',
      excerpt: 'Best practices for building production-ready Node.js apps. Learn about architecture, error handling, and performance optimization.',
      category: 'Backend',
      date: 'Dec 5, 2024',
      author: 'Mike Johnson',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop&q=80',
      color: 'from-green-500 to-emerald-500',
      tags: ['Node.js', 'Backend', 'Scalability']
    },
    {
      id: 4,
      title: 'Database Design & Optimization Tips',
      excerpt: 'Learn how to design efficient databases and optimize queries. Covering SQL, indexing, and performance tuning.',
      category: 'Database',
      date: 'Dec 3, 2024',
      author: 'Emma Davis',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1578926078328-123c5f4ebd00?w=500&h=300&fit=crop&q=80',
      color: 'from-orange-500 to-red-500',
      tags: ['SQL', 'Database', 'Optimization']
    },
    {
      id: 5,
      title: 'Mastering CSS Grid & Flexbox',
      excerpt: 'Create beautiful, responsive layouts with modern CSS. Compare Grid and Flexbox and when to use each.',
      category: 'CSS',
      date: 'Nov 30, 2024',
      author: 'Alex Chen',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop&q=80',
      color: 'from-indigo-500 to-blue-500',
      tags: ['CSS', 'Layout', 'Responsive']
    },
    {
      id: 6,
      title: 'DevOps Essentials: Docker & Kubernetes',
      excerpt: 'Containerize your applications with Docker and orchestrate them with Kubernetes. Essential DevOps skills for modern developers.',
      category: 'DevOps',
      date: 'Nov 28, 2024',
      author: 'Lisa Wong',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=300&fit=crop&q=80',
      color: 'from-cyan-500 to-blue-500',
      tags: ['Docker', 'Kubernetes', 'DevOps']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Latest Blogs & Articles
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Discover insightful articles, tutorials, and best practices from our expert team
          </p>
        </motion.div>

        {/* Blogs Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              variants={cardVariants}
              onMouseEnter={() => setHoveredBlog(blog.id)}
              onMouseLeave={() => setHoveredBlog(null)}
              className="group cursor-pointer"
            >
              <div className="relative bg-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl"
                style={{
                  transform: hoveredBlog === blog.id ? 'translateY(-8px)' : 'translateY(0)',
                  boxShadow: hoveredBlog === blog.id ? '0 20px 40px rgba(0, 0, 0, 0.5)' : '0 10px 20px rgba(0, 0, 0, 0.3)',
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden bg-gray-700">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${blog.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${blog.color}`}>
                      {blog.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {blog.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded-md hover:bg-gray-600 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Metadata */}
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4 pb-4 border-b border-gray-700">
                    <span>{blog.date}</span>
                    <span>{blog.readTime}</span>
                  </div>

                  {/* Author & Read More */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-400">By <span className="text-white font-semibold">{blog.author}</span></p>
                    </div>
                    <button className={`px-4 py-2 rounded-lg font-semibold text-white bg-gradient-to-r ${blog.color} opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300`}>
                      Read →
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-gray-400 mb-6">Want to share your knowledge with our community?</p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105">
            Contribute a Blog
          </button>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="fixed top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="fixed bottom-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
    </div>
  );
};

export default BlogsSection;
