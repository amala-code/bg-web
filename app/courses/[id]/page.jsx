



import { useState } from 'react';
import { FiTarget, FiBookOpen, FiCheckCircle, FiLock, FiAward, FiCode, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { FaChalkboardTeacher, FaProjectDiagram, FaRocket } from 'react-icons/fa';
import { MdQuiz, MdWorkspacePremium } from 'react-icons/md';
import { HiSparkles, HiLightningBolt, HiCheckCircle } from 'react-icons/hi';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

import Footer from '../../components/Footer.tsx';
import FloatingChatbot from '../../FloatingChatbot.jsx';
import Navbar from '../../components/Navbar2.jsx';




// Tier-specific header colors for purchase card
const tierHeaderColors = {
  basic: 'bg-gradient-to-r from-blue-400 to-blue-500',

  intermediate: 'bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-600',

  advanced: 'bg-gradient-to-r from-teal-700 via-blue-700 to-indigo-800'
};



const tierContent = {
  'data-science': {
    basic: {
      assessments: [
        'Weekly Quizzes',
        'Module End Tests',
        'Basic Coding Challenges',
        'Final Course Assessment'
      ],
      assessmentCount: '150+',
      projects: [],
      projectCount: 'Projects not included in Basic tier, upgrade to advanced for projects',
   careers: [
  { role: 'Junior Data Analyst', salary: '₹3 LPA – ₹6 LPA', icon: '📊' },
  { role: 'Data Entry Specialist', salary: '₹2 LPA – ₹4 LPA', icon: '⌨️' },
  { role: 'Business Intelligence Trainee', salary: '₹3 LPA – ₹5 LPA', icon: '📈' }
],

      learningOutcomes: {
        technical: [
          'Learn Python programming fundamentals',
          'Understand basic data structures and algorithms',
          'Introduction to data manipulation concepts',
          'Basic data visualization techniques'
        ],
        projects: [
          '3 guided mini projects to practice basics',
          'Foundation for building data science portfolio'
        ],
        career: [
          'Entry-level skills for Junior Data Analyst roles',
          'Basic understanding of data science workflow',
          'Resume building with foundational skills'
        ]
      }
    },
    intermediate: {
      assessments: [
        'Weekly Quizzes',
        'Module End Tests',
        'Intermediate Coding Challenges',
        'Statistics & ML Theory Tests',
        'Project-based Assessments',
        'Mid-term Comprehensive Exam',
        'Final Course Assessment'
      ],
      assessmentCount: '350+',
     projects: [
        { name: 'YouTube Analytics', type: 'Mini', description: 'Complete trend analysis system' },
        { name: 'Social Media Ad Performance', type: 'Mini', description: 'ML-powered prediction engine' },
        { name: 'AI Nutritionist Specialist', type: 'Mini', description: 'Personalized meal planning' },
        { name: 'Tinder Match Predictions', type: 'Mini', description: 'Your choice domain' },
        { name: 'Sports Analytics Platform', type: 'Mini', description: 'Player comparison system' }
      ],
      projectCount: '5 Mini Projects',
    careers: [
  { role: 'Data Analyst', salary: '₹4 LPA – ₹8 LPA', icon: '📊' },
  { role: 'Junior Data Scientist', salary: '₹5 LPA – ₹10 LPA', icon: '🔬' },
  { role: 'Business Intelligence Analyst', salary: '₹4.5 LPA – ₹9 LPA', icon: '📈' },
  { role: 'ML Operations Associate', salary: '₹5 LPA – ₹9 LPA', icon: '⚙️' }
],

      learningOutcomes: {
        technical: [
          'Master Python programming for data science',
          'Perform data analysis with Pandas and NumPy',
          'Create professional data visualizations',
          'Apply basic statistical methods',
          'Build fundamental machine learning models',
          'Work with SQL databases',
          'Understand ML evaluation metrics'
        ],
        projects: [
          '7 hands-on projects (2 major + 5 mini)',
          'Portfolio-ready projects for mid-level positions',
          'Real-world case studies from YouTube and social media',
          'Interactive dashboard development'
        ],
        career: [
          'Job-ready skills for Data Analyst and Junior Data Scientist roles',
          'Basic interview preparation',
          'Professional portfolio development',
          'Community networking opportunities',
          'Resume optimization for data science roles'
        ]
      }
    },
    advanced: {
      assessments: [
        'Weekly Quizzes',
        'Module End Tests',
        'Advanced Coding Challenges',
        'Statistics & ML Theory Tests',
        'Deep Learning Assessments',
        'Project-based Evaluations',
        'Industry Expert Reviews',
        'Technical Interview Prep (250+ Questions)',
        'System Design Assessments',
        'Mid-term & Final Comprehensive Exams',
        'Capstone Project Defense'
      ],
      assessmentCount: '580+',
      projects: [
        { name: 'YouTube Analytics', type: 'Mini', description: 'Complete trend analysis system' },
        { name: 'Social Media Ad Performance', type: 'Mini', description: 'ML-powered prediction engine' },
        { name: 'Student Resume Recommendation System', type: 'Capstone', description: 'NLP-powered career advisor' },
        { name: 'Bias & Fairness Dashboard', type: 'Capstone', description: 'Ethical AI monitoring' },
        { name: 'Ethical AI Investment Analyzer', type: 'Capstone', description: 'ESG-based recommendations' },
        { name: 'AI Nutritionist Specialist', type: 'Mini', description: 'Personalized meal planning' },
        { name: 'Tinder Match Predictions', type: 'Mini', description: 'Your choice domain' },
        { name: 'Sports Analytics Platform', type: 'Mini', description: 'Player comparison system' }
      ],
      projectCount: '5 Mini Projects + 3 Capstone Projects ',
careers: [
  { role: 'Data Scientist', salary: '₹6 LPA – ₹12 LPA', icon: '🚀' },
  { role: 'Machine Learning Engineer', salary: '₹7 LPA – ₹14 LPA', icon: '🤖' },
  { role: 'AI Research Associate', salary: '₹6 LPA – ₹11 LPA', icon: '🔬' },
  { role: 'Junior Data Science Manager', salary: '₹8 LPA – ₹15 LPA', icon: '👔' },
  { role: 'Associate Solutions Architect', salary: '₹7 LPA – ₹13 LPA', icon: '🏗️' },
  { role: 'AI/ML Technical Lead (Early Career)', salary: '₹9 LPA – ₹18 LPA', icon: '⭐' },
  { role: 'Freelance / AI Consultant (Entry Level)', salary: '₹5 LPA – ₹10 LPA', icon: '💼' }
],

      learningOutcomes: {
        technical: [
          'Master Python programming for data science',
          'Perform advanced data analysis with Pandas and NumPy',
          'Create professional data visualizations',
          'Apply statistical methods and probability theory',
          'Build end-to-end machine learning models',
          'Implement deep learning with neural networks',
          'Work with Big Data tools (Spark, Hadoop)',
          'Deploy ML models to production',
          'Use Git for version control',
          'Build interactive dashboards and web apps'
        ],
        projects: [
          '8+ hands-on projects from mini to capstone level',
          'Portfolio-ready projects for job applications',
          'Real-world industry case studies',
          'Experience with medical, sports, social media, and finance domains',
          'Capstone projects showcasing advanced AI capabilities'
        ],
        career: [
          'Job-ready skills for Senior Data Scientist roles',
          'Interview preparation with 250+ questions',
          'Professional portfolio on GitHub',
          'Optimized resume and LinkedIn profile',
          'Premium community access with industry experts',
          'Understanding of ethical AI and bias mitigation',
          'Leadership and team management skills'
        ]
      }
    }
  },
  'modern-ai': {
    basic: {
      assessments: [
        'Weekly Quizzes',
        'Prompt Engineering Challenges',
        'Embeddings & Vector Search Tests',
        'Mini Project Evaluations'
      ],
      assessmentCount: '150+',
      projects: [
        { name: 'ChatGPT-lite Q&A Bot', type: 'Mini', description: 'Build your first LLM chatbot' },
        { name: 'AI Movie Plot Search Engine', type: 'Mini', description: 'Semantic search with embeddings' },
        { name: 'Classic vs Modern Spam Detector', type: 'Mini', description: 'Compare ML approaches' },
        { name: 'Tiny Harry Potter Fanfic Generator', type: 'Mini', description: 'Text generation from scratch' }
      ],
      projectCount: '4 Mini Projects',
careers: [
  { role: 'Junior AI Engineer', salary: '₹4.5 LPA – ₹8 LPA', icon: '🤖' },
  { role: 'Prompt Engineer (Entry Level)', salary: '₹4 LPA – ₹7 LPA', icon: '✍️' },
  { role: 'AI Support Specialist', salary: '₹3.5 LPA – ₹6.5 LPA', icon: '💬' }
],

      learningOutcomes: {
        technical: [
          'Run and interact with open-source LLMs',
          'Master prompt engineering fundamentals',
          'Understand embeddings and semantic similarity',
          'Build simple chatbots and generators',
          'Compare classic ML vs modern transformers'
        ],
        projects: [
          '4 hands-on mini projects in first month',
          'Experience AI magic from Week 1',
          'Portfolio foundation with chatbots and search'
        ],
        career: [
          'Entry-level AI engineering skills',
          'Understanding of modern AI landscape',
          'Basic prompt engineering expertise'
        ]
      }
    },
    intermediate: {
      assessments: [
        'Weekly Quizzes',
        'CNN & Vision Challenges',
        'Transformer Architecture Tests',
        'NLP Application Assessments',
        'Transfer Learning Evaluations',
        'Mid-term Comprehensive Exam'
      ],
      assessmentCount: '350+',
      projects: [
        { name: 'ChatGPT-lite Q&A Bot', type: 'Mini', description: 'Build your first LLM chatbot' },
        { name: 'AI Movie Plot Search Engine', type: 'Mini', description: 'Semantic search with embeddings' },
        { name: 'AI Selfie Emotion Detector', type: 'Mini', description: 'Computer vision application' },
        { name: 'AI Meme Classifier', type: 'Mini', description: 'Transfer learning with ResNet' },
        { name: 'AI Joke Generator', type: 'Mini', description: 'RNN text generation' },
        { name: 'AI News Summarizer', type: 'Mini', description: 'T5 summarization app' },
        { name: 'Classic vs Modern Face-off', type: 'Mini', description: 'Compare architectures' },
        { name: 'Tiny Fanfic Generator', type: 'Mini', description: 'Neural network from scratch' }
      ],
      projectCount: '8 Mini Projects',
   careers: [
  { role: 'AI Engineer', salary: '₹6 LPA – ₹11 LPA', icon: '🤖' },
  { role: 'Computer Vision Engineer', salary: '₹7 LPA – ₹13 LPA', icon: '👁️' },
  { role: 'NLP Engineer', salary: '₹7.5 LPA – ₹14 LPA', icon: '📝' },
  { role: 'ML Engineer', salary: '₹8 LPA – ₹15 LPA', icon: '⚙️' }
],

      learningOutcomes: {
        technical: [
          'Build CNNs for image classification',
          'Implement transfer learning with pre-trained models',
          'Understand RNNs, LSTMs and transformers',
          'Work with BERT, GPT, T5 architectures',
          'Create vision and NLP applications',
          'Compare classic ML vs modern deep learning'
        ],
        projects: [
          '8 mini projects covering vision and NLP',
          'Emotion detection, meme classification, summarization',
          'Hands-on with transformers and transfer learning'
        ],
        career: [
          'Job-ready for AI/ML Engineer roles',
          'Portfolio with diverse AI applications',
          'Understanding of modern architectures'
        ]
      }
    },
    advanced: {
      assessments: [
        'All Intermediate Assessments',
        'Fine-tuning & LoRA Challenges',
        'RAG System Design Tests',
        'Diffusion Model Evaluations',
        'Deployment & MLOps Assessments',
        'AI Safety & Red-teaming Tests',
        'System Design Interviews (250+ Questions)',
        'Capstone Project Defense'
      ],
      assessmentCount: '580+',
      projects: [
        { name: 'ChatGPT-lite Q&A Bot', type: 'Mini', description: 'Build your first LLM chatbot' },
        { name: 'AI Movie Search Engine', type: 'Mini', description: 'Semantic search' },
        { name: 'AI Selfie Emotion Detector', type: 'Mini', description: 'Vision app' },
        { name: 'AI Meme Classifier', type: 'Mini', description: 'Transfer learning' },
        { name: 'AI Joke Generator', type: 'Mini', description: 'Text generation' },
        { name: 'AI News Summarizer', type: 'Mini', description: 'Summarization' },
        { name: 'Personalized AI Twin', type: 'Mini', description: 'Fine-tuned chatbot' },
        { name: 'AI Study Assistant', type: 'Mini', description: 'RAG Q&A system' },
        { name: 'AI Lawyer Assistant', type: 'Mini', description: 'Legal doc RAG' },
        { name: 'Classic vs Modern Face-off', type: 'Mini', description: 'Architecture comparison' },
        { name: 'Tiny Fanfic Generator', type: 'Mini', description: 'NN from scratch' },
        { name: 'AI Tutor', type: 'Capstone', description: 'Personalized learning assistant' },
        { name: 'AI Resume Reviewer', type: 'Capstone', description: 'Job matching with RAG' },
        { name: 'AI Caption Generator', type: 'Capstone', description: 'Social media content creator' }
      ],
      projectCount: '11 Mini + 3 Capstone Projects',
  careers: [
  { role: 'Junior Generative AI Engineer', salary: '₹6 LPA – ₹12 LPA', icon: '🚀' },
  { role: 'Associate LLM Engineer', salary: '₹7 LPA – ₹14 LPA', icon: '🤖' },
  { role: 'AI Product Developer (Junior)', salary: '₹5 LPA – ₹10 LPA', icon: '💼' },
  { role: 'AI Research Associate', salary: '₹6 LPA – ₹11 LPA', icon: '🔬' },
  { role: 'MLOps Associate', salary: '₹6 LPA – ₹12 LPA', icon: '⚙️' },
  { role: 'AI Safety Analyst (Entry Level)', salary: '₹7 LPA – ₹13 LPA', icon: '🛡️' }
],

      learningOutcomes: {
        technical: [
          'Fine-tune LLMs with LoRA/QLoRA on consumer GPUs',
          'Build production RAG systems with hallucination control',
          'Generate images with diffusion models',
          'Deploy fast inference APIs with vLLM and FastAPI',
          'Implement AI safety, red-teaming and alignment',
          'Master prompt engineering at advanced level',
          'Work with multimodal models',
          'Ship production-ready AI applications'
        ],
        projects: [
          '14 total projects (11 mini + 3 capstone)',
          'Portfolio-ready AI applications',
          'Experience with chat, RAG, vision, generation',
          'Production deployment experience'
        ],
        career: [
          'Job-ready for Generative AI Engineer roles',
          'Interview prep with 250+ questions',
          'Professional GitHub portfolio with live demos',
          'LinkedIn optimization for AI jobs',
          'AI ethics and safety expertise',
          'Community networking and job referrals'
        ]
      }
    }
  }
};


// Course data (unchanged from original)
const courseData = {
  'data-science': {
    "courseId": "data-science-mastery",
    "thumbnail": "/images/courses/112.webp",
    "title": "Data Science Mastery",
    "subtitle": "Your complete journey from beginner to job-ready data scientist",
    "description": "Master data science from scratch with our industry-aligned program. Progress through carefully structured modules combining Python, SQL, Statistics, and Machine Learning. Each lesson includes video + written guide for maximum learning.",
    "duration": '120+ Hours',
    "students": '15,420',
    "rating": '4.9',
    "price": '$499',
    "level": 'Beginner to Advanced',
    "language": 'English',
    "courseOverview": {
      "totalChapters": 60,
      "totalProjects": 12,
      "practiceQuestions": "580+",
      "interviewQuestions": "250+",
      "language": "English",
      "format": "Video + Written + Hands-on Practice",
      "lastUpdated": "January 2026"
    },
    "pricingTiers": {
      "basic": {
        "name": "Basic",
        "price": "5,999",
        "originalPrice": "8,000",
        "savings": "Save 50%",
        "badge": "Starter",
        "description": "Perfect starting point for aspiring data scientists",
        "estimatedTime": "1 Month",
        "skillLevel": "Beginner",
        "chaptersIncluded": "8 Core Chapters",
        "projectsIncluded": "Projects not included",
        "questionsIncluded": "Questions not included",
        "jobAssistanceCommunity": "Basic community access",
        "SoftSkillsTraining": "Not Included",
        "Certificate": "Yes, Shareable on LinkedIn",
        "recommended": false,
        "skills": ["Python Programming", "Data Manipulation"]
      },
      "intermediate": {
        "name": "Pro",
        "price": "9,999",
        "originalPrice": "11,900",
        "savings": "Save 50%",
        "badge": "Most Popular",
        "description": "Build practical skills with hands-on projects",
        "estimatedTime": "2 Months",
        "skillLevel": "Intermediate",
        "chaptersIncluded": "15 Chapters",
        "projectsIncluded": "5 Mini + 2 Major",
        "questionsIncluded": "200+ Questions",
        "jobAssistanceCommunity": "Premium Community access",
        "SoftSkillsTraining": "Soft skills Questionnaire",
        "Certificate": "Yes, Shareable on LinkedIn",
        "recommended": false,
        "skills": ["Python Programming", "Data Manipulation", "Data Visualization", "Statistics Fundamentals"]
      },
      "advanced": {
        "name": "Elite",
        "price": "13,999",
        "originalPrice": "20,000",
        "savings": "Save 50%",
        "badge": "Career Ready",
        "description": "Complete job-ready program with interview prep",
        "estimatedTime": "3 Months",
        "skillLevel": "Advanced",
        "chaptersIncluded": "All 25 Chapters",
        "projectsIncluded": "10 Mini + 3 Capstone",
        "questionsIncluded": "500+ Questions",
        "jobAssistanceCommunity": "Premium Community Access",
        "SoftSkillsTraining": "Soft skills Questionnaire",
        "Certificate": "Yes, Shareable on LinkedIn",
        "recommended": true,
        "skills": ["Python Programming", "Data Manipulation", "Data Visualization", "Statistics Fundamentals", "Machine Learning", "SQL for Data Science"]
      }
    },

    "curriculum": [
    {
      "moduleNumber": 1,
      "moduleTitle": "Foundation & Career Roadmap",
      "totalChapters": 2,
      "chapters": [
        {
          "chapterNumber": 1,
          "chapterName": "What is Data Science?",
          "belongsTo": "Basic | Intermediate | Advanced",
          "accessLevel": {
            "basic": true,
            "intermediate": true,
            "advanced": true
          },
          "duration": "Video + Written Content",
          "subtopics": [
            "Different roles in Data Science (Data Analyst, Data Scientist, ML Engineer, etc.)",
            "Which programming language is important for what role",
            "Current scenario of Data Science job scope in 2026",
            "How Data Scientists can survive and thrive in the AI-Gen era",
            "Course roadmap and projects overview",
            "Resume key skills addition and optimization",
            "Community connects and networking",
            "Resume review by experts",
            "LinkedIn profile optimization for Data Science roles"
          ],
          "learningOutcome": "Understand the Data Science landscape and plan your career path"
        },
        {
          "chapterNumber": 2,
          "chapterName": "Jumpstart to Data Science",
          "belongsTo": "Basic | Intermediate | Advanced",
          "accessLevel": {
            "basic": true,
            "intermediate": true,
            "advanced": true
          },
          "duration": "Video + Written Content",
          "subtopics": [
            "Essential books and resources for Data Science",
            "Learning path and study strategies",
            "Setting up your Data Science environment",
            "Industry expectations and skills required"
          ],
          "learningOutcome": "Get oriented with Data Science fundamentals and resources"
        }
      ]
    },
    {
      "moduleNumber": 2,
      "moduleTitle": "Python Programming Mastery",
      "totalChapters": 7,
      "chapters": [
        {
          "chapterNumber": 3,
          "chapterName": "What is Python?",
          "belongsTo": "Basic | Intermediate | Advanced",
          "accessLevel": {
            "basic": true,
            "intermediate": true,
            "advanced": true
          },
          "duration": "Video + Written Content",
          "subtopics": [
            "Introduction to Python and why it's essential for Data Science",
            "Variables and data types (int, float, string, boolean)",
            "Operators and expressions",
            "Loops (for, while) and control flow",
            "Functions: definition, parameters, return values",
            "Basic error handling (try-except blocks)"
          ],
          "learningOutcome": "Write basic Python programs with proper syntax and logic"
        },
        {
          "chapterNumber": 4,
          "chapterName": "Python Data Structures - Lists, Sets, Tuples",
          "belongsTo": "Basic | Intermediate | Advanced",
          "accessLevel": {
            "basic": true,
            "intermediate": true,
            "advanced": true
          },
          "duration": "Video + Written Content",
          "subtopics": [
            "Lists: creation, indexing, slicing, methods",
            "Tuples: immutable sequences and use cases",
            "Sets: unique elements and set operations",
            "Dictionaries: key-value pairs and methods",
            "When to use which data structure"
          ],
          "learningOutcome": "Master Python's core data structures for data manipulation"
        },
        {
          "chapterNumber": 5,
          "chapterName": "Python Data Structure Functions",
          "belongsTo": "Basic | Intermediate | Advanced",
          "accessLevel": {
            "basic": true,
            "intermediate": true,
            "advanced": true
          },
          "duration": "Video + Written Content",
          "subtopics": [
            "List methods: append, extend, insert, remove, sort, reverse",
            "Dictionary methods: keys, values, items, get, update",
            "Set operations: union, intersection, difference",
            "Tuple packing and unpacking",
            "List comprehensions for efficient coding"
          ],
          "learningOutcome": "Efficiently manipulate data using built-in Python functions"
        },
        {
          "chapterNumber": 6,
          "chapterName": "Python Object-Oriented Programming (OOP)",
          "belongsTo": "Basic | Intermediate | Advanced",
          "accessLevel": {
            "basic": true,
            "intermediate": true,
            "advanced": true
          },
          "duration": "Video + Written Content",
          "subtopics": [
            "Classes and objects in Python",
            "Attributes and methods",
            "Inheritance and polymorphism",
            "Encapsulation and abstraction",
            "OOP principles for Data Science applications"
          ],
          "learningOutcome": "Apply object-oriented programming concepts in Python"
        },
        {
          "chapterNumber": 7,
          "chapterName": "Python Theory Questions - 50 Questions",
          "belongsTo": "Basic | Intermediate | Advanced",
          "accessLevel": {
            "basic": true,
            "intermediate": true,
            "advanced": true
          },
          "duration": "Theory + Practice",
          "subtopics": [
            "50 conceptual questions covering Python fundamentals",
            "List comprehensions in Python",
            "Lambda functions and map/filter/reduce",
            "Python best practices and coding standards"
          ],
          "learningOutcome": "Master Python concepts through comprehensive practice"
        },
        {
          "chapterNumber": 8,
          "chapterName": "Python Practice Questions - 50 Coding Problems",
          "belongsTo": ["Intermediate", "Advanced"],
          "accessLevel": {
            "basic": false,
            "intermediate": true,
            "advanced": true
          },
          "duration": "Hands-on Practice",
          "subtopics": [
            "50 coding problems on Python fundamentals",
            "Problems on lists, dictionaries, sets",
            "String manipulation challenges",
            "Logic building exercises",
            "Real-world problem-solving scenarios"
          ],
          "learningOutcome": "Strengthen Python coding skills through extensive practice"
        },
        {
          "chapterNumber": 9,
          "chapterName": "Introduction to Python Libraries",
          "belongsTo": "Basic | Intermediate | Advanced",
          "accessLevel": {
            "basic": true,
            "intermediate": true,
            "advanced": true
          },
          "duration": "Video + Written Content",
          "subtopics": [
            "Overview of essential Data Science libraries",
            "NumPy for numerical computing",
            "Pandas for data manipulation",
            "Understanding arrays and data structures",
            "Google Colab and Jupyter Notebook setup",
            "Different types of Python libraries and their purposes",
            "Resources for learning libraries",
            "Interview questions from these libraries (covered in quiz)",
            "Real testimonials and gamification elements"
          ],
          "learningOutcome": "Navigate the Python Data Science ecosystem confidently"
        }
      ]
    },
    {
      "moduleNumber": 3,
      "moduleTitle": "Data Manipulation with Pandas & NumPy",
      "totalChapters": 3,
      "chapters": [
        {
          "chapterNumber": 10,
          "chapterName": "Pandas - Part 1",
          "belongsTo": ["Intermediate", "Advanced"],
          "accessLevel": {
            "basic": false,
            "intermediate": true,
            "advanced": true
          },
          "duration": "Video + Written Content",
          "subtopics": [
            "Interview questions on Pandas",
            "Basic handholding in different Python libraries",
            "What is Scikit-learn (sklearn)",
            "Where to get datasets (Kaggle, UCI, etc.)",
            "What is Kaggle and how to use it",
            "Data manipulation and exploration techniques",
            "50 practice questions on Pandas and Python"
          ],
          "learningOutcome": "Master Pandas basics and data exploration techniques"
        },
        {
          "chapterNumber": 11,
          "chapterName": "Pandas - Part 2 (Advanced)",
          "belongsTo": "Basic | Intermediate | Advanced",
          "accessLevel": {
            "basic": true,
            "intermediate": true,
            "advanced": true
          },
          "duration": "Video + Written Content",
          "subtopics": [
            "Pandas basics: DataFrames and Series",
            "Reading and writing data (CSV, Excel, JSON)",
            "Data cleaning: handling missing values, duplicates, outliers",
            "Type conversions and data transformations",
            "Exploratory Data Analysis (EDA): descriptive statistics",
            "Grouping and aggregation operations",
            "Basic SQL for data querying (complementary to Pandas)"
          ],
          "learningOutcome": "Perform advanced data cleaning and exploratory analysis"
        },
        {
          "chapterNumber": 12,
          "chapterName": "NumPy for Numerical Computing",
          "belongsTo": "Basic | Intermediate | Advanced",
          "accessLevel": {
            "basic": true,
            "intermediate": true,
            "advanced": true
          },
          "duration": "Video + Written Content",
          "subtopics": [
            "NumPy arrays vs Python lists",
            "Array creation and manipulation",
            "Indexing and slicing arrays",
            "Vectorized operations for performance",
            "Broadcasting in NumPy",
            "Statistical operations with NumPy",
            "Linear algebra with NumPy"
          ],
          "learningOutcome": "Perform fast numerical computations using NumPy"
        }
      ]
    },
    {
      "moduleNumber": 4,
      "moduleTitle": "Understanding Data Types & Visualization",
      "totalChapters": 3,
      "chapters": [
        {
          "chapterNumber": 13,
          "chapterName": "Data Types in Data Science",
          "belongsTo": "Basic | Intermediate | Advanced",
          "accessLevel": {
            "basic": true,
            "intermediate": true,
            "advanced": true
          },
          "duration": "Video + Written Content",
          "subtopics": [
            "By structure: Structured, Unstructured, Semi-structured data",
            "By nature: Numerical, Categorical, Ordinal, Time-series, Spatial data",
            "By source: Files, Databases, Streaming data, Big Data",
            "By format: Text, Image, Audio, Video, Graph, Sensor data",
            "Real-life examples: What data types companies like Netflix, Amazon use and why",
            "Industry-specific data type applications"
          ],
          "learningOutcome": "Identify and work with different data types in real-world scenarios"
        },
        {
          "chapterNumber": 14,
          "chapterName": "Mini Project - Data Exploration",
          "belongsTo": ["Intermediate", "Advanced"],
          "accessLevel": {
            "basic": false,
            "intermediate": true,
            "advanced": true
          },
          "duration": "Hands-on Project",
          "subtopics": [
            "50 practice questions (compulsory)",
            "Interactive chat/talk with instructors",
            "Course feedback and suggestions",
            "Review and rating options",
            "Project submission and evaluation"
          ],
          "learningOutcome": "Apply learned concepts in a practical mini project"
        },
        {
          "chapterNumber": 15,
          "chapterName": "Data Visualization - Part 1 (Matplotlib & Seaborn Basics)",
          "belongsTo": "Basic | Intermediate | Advanced",
          "accessLevel": {
            "basic": true,
            "intermediate": true,
            "advanced": true
          },
          "duration": "Video + Written Content",
          "subtopics": [
            "Introduction to Matplotlib and Seaborn",
            "Creating histograms for distributions",
            "Scatter plots for relationships",
            "Bar charts and column charts",
            "Heatmaps for correlation matrices",
            "Customizing plots: colors, labels, legends",
            "Different types of plots and when to use them"
          ],
          "learningOutcome": "Create professional data visualizations with Matplotlib and Seaborn"
        },
        {
          "chapterNumber": 16,
          "chapterName": "Data Visualization - Part 2 (Advanced Visuals & Storytelling)",
          "belongsTo": "Basic | Intermediate | Advanced",
          "accessLevel": {
            "basic": true,
            "intermediate": true,
            "advanced": true
          },
          "duration": "Video + Written Content",
          "subtopics": [
            "Box plots for identifying outliers",
            "Pair plots for correlation analysis",
            "Violin plots and distribution plots",
            "Time series visualizations",
            "Storytelling with data: principles and best practices",
            "Choosing the right chart for your data",
            "Avoiding misleading visualizations",
            "Creating dashboard-ready visualizations"
          ],
          "learningOutcome": "Master advanced visualization techniques and data storytelling"
        }
      ]
    },
    {
      "moduleNumber": 5,
      "moduleTitle": "Major Project I - YouTube Analytics",
      "totalChapters": 3,
      "chapters": [
        {
          "chapterNumber": 17,
          "chapterName": "Major Project I - Part 1 (YouTube Trending Videos Analysis)",
          "belongsTo": ["Intermediate", "Advanced"],
          "accessLevel": {
            "basic": false,
            "intermediate": true,
            "advanced": true
          },
          "duration": "Hands-on Project",
          "subtopics": [
            "Dataset: YouTube trending dataset from Kaggle",
            "Loading and exploring the dataset",
            "Finding which video category trends the most",
            "Analyzing average likes and dislikes",
            "Identifying trends by country and region",
            "Creating word clouds from trending video titles",
            "Understanding viewer engagement patterns",
            "Why this matters: Real insights from platform students use daily"
          ],
          "learningOutcome": "Analyze YouTube trends and create actionable insights",
          "projectType": "Major Project"
        },
        {
          "chapterNumber": 18,
          "chapterName": "Major Project I - Part 2 (YouTube Analytics Dashboard)",
          "belongsTo": ["Intermediate", "Advanced"],
          "accessLevel": {
            "basic": false,
            "intermediate": true,
            "advanced": true
          },
          "duration": "Hands-on Project",
          "subtopics": [
            "Building visualizations for YouTube data",
            "Creating comparative analysis across categories",
            "Time-based trend analysis",
            "Sentiment analysis on video titles",
            "Geographic distribution of trending videos",
            "Final insights and recommendations",
            "Project documentation and presentation"
          ],
          "learningOutcome": "Complete end-to-end YouTube data analysis project",
          "projectType": "Major Project"
        },
        {
          "chapterNumber": 19,
          "chapterName": "Mini Project - Streamlit/Plotly Dashboard",
          "belongsTo": ["Intermediate", "Advanced"],
          "accessLevel": {
            "basic": false,
            "intermediate": true,
            "advanced": true
          },
          "duration": "Hands-on Project",
          "subtopics": [
            "Introduction to Streamlit for dashboards",
            "Creating interactive visualizations with Plotly",
            "Building a web app for YouTube project",
            "Adding filters and user interactions",
            "Deploying the dashboard",
            "Sharing your work with portfolio"
          ],
          "learningOutcome": "Build and deploy interactive data dashboards",
          "projectType": "Mini Project"
        }
      ]
    },
    {
      "moduleNumber": 6,
      "moduleTitle": "Major Project II - Social Media Analytics",
      "totalChapters": 2,
      "chapters": [
        {
          "chapterNumber": 20,
          "chapterName": "Major Project II - Part 1 (Social Media Ad Performance)",
          "belongsTo": ["Intermediate", "Advanced"],
          "accessLevel": {
            "basic": false,
            "intermediate": true,
            "advanced": true
          },
          "duration": "Hands-on Project",
          "subtopics": [
            "Dataset: Ad clicks dataset from Facebook/Google Ads (Kaggle)",
            "Project workflow and business understanding",
            "Filtering by campaign and analyzing CTR (Click Through Rate)",
            "Building classification model to predict user clicks",
            "Feature engineering: age, interest, device type",
            "Visual insights: which demographics respond best",
            "Industry-level case study approach",
            "Understanding business impact of data science"
          ],
          "learningOutcome": "Analyze social media ad performance and predict user behavior",
          "projectType": "Major Project"
        },
        {
          "chapterNumber": 21,
          "chapterName": "Major Project II - Part 2 (Ad Performance Dashboard)",
          "belongsTo": ["Intermediate", "Advanced"],
          "accessLevel": {
            "basic": false,
            "intermediate": true,
            "advanced": true
          },
          "duration": "Hands-on Project",
          "subtopics": [
            "Building predictive models for ad clicks",
            "Model evaluation and optimization",
            "Creating business insights dashboard",
            "ROI analysis and recommendations",
            "Presenting findings to stakeholders",
            "Documentation and project wrap-up"
          ],
          "learningOutcome": "Complete industry-level social media analytics project",
          "projectType": "Major Project"
        }
      ]
    },
    {
      "moduleNumber": 7,
      "moduleTitle": "Statistics & Probability Fundamentals",
      "totalChapters": 7,
      "chapters": [
        {
          "chapterNumber": 22,
          "chapterName": "Statistics and Probability Fundamentals - Basics",
          "belongsTo": "Basic | Intermediate | Advanced",
          "accessLevel": {
            "basic": true,
            "intermediate": true,
            "advanced": true
          },
          "duration": "Video + Written Content",
          "subtopics": [
            "Mathematical backbone of Data Science",
            "Practical focus for beginners",
            "Descriptive statistics: mean, median, mode, variance",
            "Understanding distributions and spread",
            "Inferential statistics: hypothesis testing basics",
            "p-values and confidence intervals introduction",
            "Real-world statistical thinking"
          ],
          "learningOutcome": "Build strong statistical foundation for data analysis"
        },
        {
          "chapterNumber": 23,
          "chapterName": "Statistics and Probability - Part 1 (Probability Basics)",
          "belongsTo": ["Intermediate", "Advanced"],
          "accessLevel": {
            "basic": false,
            "intermediate": true,
            "advanced": true
          },
          "duration": "Video + Written Content",
          "subtopics": [
            "Probability basics and rules",
            "Bayes' theorem and applications",
            "Conditional probability",
            "Probability distributions (Normal, Binomial, Poisson)",
            "Expected value and variance"
          ],
          "learningOutcome": "Apply probability concepts to data science problems"
        },
        {
          "chapterNumber": 24,
          "chapterName": "Statistics and Probability - Part 2 (Correlation & Causation)",
          "belongsTo": ["Intermediate", "Advanced"],
          "accessLevel": {
            "basic": false,
            "intermediate": true,
            "advanced": true
          },
          "duration": "Video + Written Content",
          "subtopics": [
            "Correlation vs causation: understanding the difference",
            "Common statistical biases and how to avoid them",
            "Simpson's paradox",
            "Confounding variables",
            "When statistics can be misused (media examples)",
            "Critical thinking in statistical analysis"
          ],
          "learningOutcome": "Develop critical statistical thinking and avoid common pitfalls"
        },
        {
          "chapterNumber": 25,
          "chapterName": "Statistics Implementation - Basics (Python)",
          "belongsTo": "Basic | Intermediate | Advanced",
          "accessLevel": {
            "basic": true,
            "intermediate": true,
            "advanced": true
          },
          "duration": "Video + Written Content",
          "subtopics": [
            "Using Python for statistical analysis",
            "SciPy library for statistical computations",
            "StatsModels library introduction",
            "Computing descriptive statistics in Python",
            "Visualizing statistical distributions",
            "Making statistics practical and less abstract"
          ],
          "learningOutcome": "Implement statistical concepts using Python libraries"
        },
        {
          "chapterNumber": 26,
          "chapterName": "Statistics Implementation - Part 1 (A/B Testing)",
          "belongsTo": ["Intermediate", "Advanced"],
          "accessLevel": {
            "basic": false,
            "intermediate": true,
            "advanced": true
          },
          "duration": "Video + Written Content",
          "subtopics": [
            "Real-life examples: A/B testing in marketing",
            "Designing A/B tests",
            "Hypothesis testing in practice",
            "Calculating sample sizes",
            "Interpreting A/B test results",
            "Statistical significance vs practical significance",
            "Industry case studies"
          ],
          "learningOutcome": "Design and analyze A/B tests for business decisions"
        },
        {
          "chapterNumber": 27,
          "chapterName": "Statistics Implementation - Part 2 (Advanced Topics)",
          "belongsTo": ["Intermediate", "Advanced"],
          "accessLevel": {
            "basic": false,
            "intermediate": true,
            "advanced": true
          },
          "duration": "Video + Written Content",
          "subtopics": [
            "Advanced statistical testing",
            "Multi-armed bandit problems",
            "Bayesian statistics introduction",
            "Time series analysis basics",
            "Addressing controversies in statistics",
            "When and how stats can be misused"
          ],
          "learningOutcome": "Apply advanced statistical methods to complex problems"
        },
        {
          "chapterNumber": 28,
          "chapterName": "Statistics & Probability - 50 Practice Questions",
          "belongsTo": ["Intermediate", "Advanced"],
          "accessLevel": {
            "basic": false,
            "intermediate": true,
            "advanced": true
          },
          "duration": "Practice Questions",
          "subtopics": [
            "50 comprehensive questions on statistics and probability",
            "Theory questions covering all topics",
            "Practical implementation problems",
            "Real-world scenario questions",
            "Interview-style questions"
          ],
          "learningOutcome": "Master statistics through extensive practice"
        }
      ]
    },
    {
      "moduleNumber": 8,
      "moduleTitle": "Machine Learning Fundamentals",
      "totalChapters": 7,
      "chapters": [
        {
          "chapterNumber": 29,
          "chapterName": "Introduction to Machine Learning",
          "belongsTo": "Basic | Intermediate | Advanced",
          "accessLevel": {
            "basic": true,
            "intermediate": true,
            "advanced": true
          },
          "duration": "Video + Written Content",
          "subtopics": [
            "What is Machine Learning",
            "AI vs ML vs Deep Learning",
            "Supervised learning: Regression and Classification",
            "Introduction to Linear Regression and Logistic Regression",
            "k-Nearest Neighbors (k-NN) algorithm",
            "Decision Trees basics",
            "When to use which algorithm"
          ],
          "learningOutcome": "Understand ML fundamentals and supervised learning basics"
        },
        {
          "chapterNumber": 30,
          "chapterName": "ML Part 1 - Unsupervised Learning",
          "belongsTo": ["Intermediate", "Advanced"],
          "accessLevel": {
            "basic": false,
            "intermediate": true,
            "advanced": true
          },
          "duration": "Video + Written Content",
          "subtopics": [
            "Unsupervised learning overview",
            "Clustering: k-means algorithm",
            "Hierarchical clustering",
            "DBSCAN clustering",
            "Dimensionality reduction: PCA (Principal Component Analysis)",
            "t-SNE for visualization",
            "Real-world clustering applications"
          ],
          "learningOutcome": "Apply unsupervised learning techniques to discover patterns"
        },
        {
          "chapterNumber": 31,
          "chapterName": "ML Part 2 - Model Evaluation",
          "belongsTo": ["Intermediate", "Advanced"],
          "accessLevel": {
            "basic": false,
            "intermediate": true,
            "advanced": true
          },
          "duration": "Video + Written Content",
          "subtopics": [
            "Train-test split methodology",
            "Cross-validation techniques (k-fold, stratified)",
            "Evaluation metrics for classification: accuracy, precision, recall, F1-score",
            "Confusion matrix interpretation",
            "ROC curve and AUC",
            "Evaluation metrics for regression: MSE, RMSE, R², MAE",
            "Model comparison strategies"
          ],
          "learningOutcome": "Evaluate and compare machine learning models effectively"
        },
        {
          "chapterNumber": 32,
          "chapterName": "ML Part 3 - Scikit-learn Implementation",
          "belongsTo": ["Intermediate", "Advanced"],
          "accessLevel": {
            "basic": false,
            "intermediate": true,
            "advanced": true
          },
          "duration": "Video + Written Content",
          "subtopics": [
            "Introduction to Scikit-learn library",
            "Building ML pipelines",
            "Data preprocessing with sklearn",
            "Model training and prediction workflow",
            "Hyperparameter tuning with GridSearchCV",
            "Saving and loading models",
            "Best practices for ML implementation"
          ],
          "learningOutcome": "Implement end-to-end ML solutions using Scikit-learn"
        },
        {
          "chapterNumber": 33,
          "chapterName": "ML Part 4 - Ensemble Methods",
          "belongsTo": "Advanced",
          "accessLevel": {
            "basic": false,
            "intermediate": false,
            "advanced": true
          },
          "duration": "Video + Written Content",
          "subtopics": [
            "Ensemble learning concepts",
            "Bagging and Bootstrap Aggregating",
            "Random Forests in depth",
            "Boosting algorithms: AdaBoost, Gradient Boosting",
            "XGBoost: Extreme Gradient Boosting",
            "LightGBM and CatBoost",
            "When to use ensemble methods"
          ],
          "learningOutcome": "Master ensemble methods for superior model performance"
        },
        {
          "chapterNumber": 34,
          "chapterName": "ML Part 5 - Neural Networks & Deep Learning",
          "belongsTo": "Advanced",
          "accessLevel": {
            "basic": false,
            "intermediate": false,
            "advanced": true
          },
          "duration": "Video + Written Content",
          "subtopics": [
            "Neural networks basics and architecture",
            "Introduction to Keras and TensorFlow",
            "Building feedforward neural networks",
            "CNNs (Convolutional Neural Networks) for image data",
            "RNNs (Recurrent Neural Networks) for sequences",
            "LSTM and GRU networks",
            "Transfer learning concepts",
            "Deep learning applications"
          ],
          "learningOutcome": "Build and train neural networks for complex problems"
        },
        {
          "chapterNumber": 35,
          "chapterName": "ML Part 6 - Feature Engineering",
          "belongsTo": "Advanced",
          "accessLevel": {
            "basic": false,
            "intermediate": false,
            "advanced": true
          },
          "duration": "Video + Written Content",
          "subtopics": [
            "Feature engineering importance and strategies",
            "Creating new features from existing data",
            "Feature selection techniques",
            "Feature extraction methods",
            "Handling categorical variables (encoding techniques)",
            "Feature scaling and normalization",
            "Hyperparameter tuning strategies",
            "Grid search vs random search vs Bayesian optimization"
          ],
          "learningOutcome": "Master feature engineering for better model performance"
        },
        {
          "chapterNumber": 36,
          "chapterName": "ML Part 7 - Advanced Topics",
          "belongsTo": "Advanced",
          "accessLevel": {
            "basic": false,
            "intermediate": false,
            "advanced": true
          },
          "duration": "Video + Written Content",
          "subtopics": [
            "Handling imbalanced data: SMOTE, undersampling, oversampling",
            "Overfitting prevention techniques",
            "Regularization: L1 (Lasso), L2 (Ridge)",
            "Early stopping and dropout",
            "Class weight adjustments",
            "Cost-sensitive learning",
            "Model interpretability: SHAP, LIME"
          ],
          "learningOutcome": "Handle challenging ML scenarios and interpret models"
        }
      ]
    },
    {
      "moduleNumber": 9,
      "moduleTitle": "ML Practice & Assessment",
      "totalChapters": 3,
      "chapters": [
        {
          "chapterNumber": 37,
          "chapterName": "ML Questions - Part 1 (Basics)",
          "belongsTo": ["Intermediate", "Advanced"],
          "accessLevel": {
            "basic": false,
            "intermediate": true,
            "advanced": true
          },
          "duration": "Practice Questions",
          "subtopics": [
            "50 interview questions on ML basics",
            "Theory questions on supervised and unsupervised learning",
            "Practical coding problems",
            "Algorithm selection questions",
            "Model evaluation scenarios"
          ],
          "learningOutcome": "Master basic ML concepts through practice"
        },
        {
          "chapterNumber": 38,
          "chapterName": "ML Questions - Part 2 (Intermediate)",
          "belongsTo": ["Intermediate", "Advanced"],
          "accessLevel": {
            "basic": false,
            "intermediate": true,
            "advanced": true
          },
          "duration": "Practice Questions",
          "subtopics": [
            "50 intermediate ML interview questions",
            "Theory and practical problems",
            "Feature engineering questions",
            "Model optimization scenarios",
            "Real-world problem-solving"
          ],
          "learningOutcome": "Strengthen intermediate ML knowledge"
        },
        {
          "chapterNumber": 39,
          "chapterName": "ML Questions - Part 3 (Advanced)",
          "belongsTo": "Advanced",
          "accessLevel": {
            "basic": false,
            "intermediate": false,
            "advanced": true
          },
          "duration": "Practice Questions",
          "subtopics": [
            "50 advanced ML interview questions",
            "Complex theory and practical problems",
            "Deep learning questions",
            "Production ML scenarios",
            "Algorithm design questions"
          ],
          "learningOutcome": "Master advanced ML through challenging practice"
        }
      ]
    },
    {
      "moduleNumber": 10,
      "moduleTitle": "Sports Analytics Mini Project",
      "totalChapters": 2,
      "chapters": [
        {
          "chapterNumber": 40,
          "chapterName": "Mini Project - Part 1 (Sports Analytics - Player Similarity)",
          "belongsTo": ["Intermediate", "Advanced"],
          "accessLevel": {
            "basic": false,
            "intermediate": true,
            "advanced": true
          },
          "duration": "Hands-on Project",
          "subtopics": [
            "Sports analytics use case introduction",
            "Player statistics dataset exploration",
            "Feature engineering for player comparison",
            "Similarity metrics: Euclidean distance, cosine similarity",
            "Building player recommendation system",
            "Clustering players by playing style"
          ],
          "learningOutcome": "Build a player similarity finder using ML techniques",
          "projectType": "Mini Project"
        },
        {
          "chapterNumber": 41,
          "chapterName": "Mini Project - Part 2 (Sports Analytics Dashboard)",
          "belongsTo": ["Intermediate", "Advanced"],
          "accessLevel": {
            "basic": false,
            "intermediate": true,
            "advanced": true
          },
          "duration": "Hands-on Project",
          "subtopics": [
            "Creating interactive visualizations",
            "Building comparison dashboard",
            "Player performance analysis",
            "Team composition optimization",
            "Insights and recommendations",
            "Project documentation"
          ],
          "learningOutcome": "Complete sports analytics project with dashboard",
          "projectType": "Mini Project"
        }
      ]
    },
    {
      "moduleNumber": 11,
      "moduleTitle": "Mega Project I - Medical Imaging Classifier",
      "totalChapters": 2,
      "chapters": [
        {
          "chapterNumber": 42,
          "chapterName": "Mega Project - Part 1 (Medical Imaging with CNN)",
          "belongsTo": "Advanced",
          "accessLevel": {
            "basic": false,
            "intermediate": false,
            "advanced": true
          },
          "duration": "Hands-on Mega Project",
          "subtopics": [
            "Medical imaging dataset introduction",
            "Understanding medical image classification",
            "CNN architecture for medical images",
            "Transfer learning with pre-trained models (VGG, ResNet)",
            "Data augmentation for medical images",
            "Building the classifier pipeline",
            "Ethical considerations in medical AI"
          ],
          "learningOutcome": "Build a medical image classifier using deep learning",
          "projectType": "Mega Project"
        },
        {
          "chapterNumber": 43,
          "chapterName": "Mega Project - Part 2 (Model Optimization & Deployment)",
          "belongsTo": "Advanced",
          "accessLevel": {
            "basic": false,
            "intermediate": false,
            "advanced": true
          },
          "duration": "Hands-on Mega Project",
          "subtopics": [
            "Model evaluation and performance metrics",
            "Fine-tuning the CNN model",
            "Handling class imbalance in medical data",
            "Model interpretation and explainability",
            "Deployment considerations for healthcare",
            "Creating project portfolio presentation",
            "Documentation and reporting"
          ],
          "learningOutcome": "Complete production-ready medical imaging AI system",
          "projectType": "Mega Project"
        }
      ]
    },
    {
      "moduleNumber": 12,
      "moduleTitle": "Mega Project II - Hybrid Recommendation System",
      "totalChapters": 2,
      "chapters": [
        {
          "chapterNumber": 44,
          "chapterName": "Mega Project II - Part 1 (Recommendation System)",
          "belongsTo": "Advanced",
          "accessLevel": {
            "basic": false,
            "intermediate": false,
            "advanced": true
          },
          "duration": "Hands-on Mega Project",
          "subtopics": [
            "Recommendation systems overview",
            "Collaborative filtering techniques",
            "Content-based filtering",
            "Hybrid approach combining multiple methods",
            "Deep learning for recommendations",
            "Matrix factorization techniques",
            "Building the recommendation engine"
          ],
          "learningOutcome": "Build a sophisticated hybrid recommendation system",
          "projectType": "Mega Project"
        },
        {
          "chapterNumber": 45,
          "chapterName": "Mega Project II - Part 2 (Advanced Recommendations)",
          "belongsTo": "Advanced",
          "accessLevel": {
            "basic": false,
            "intermediate": false,
            "advanced": true
          },
          "duration": "Hands-on Mega Project",
          "subtopics": [
            "Neural collaborative filtering",
            "Deep learning architectures for recommendations",
            "Handling cold start problem",
            "Real-time recommendation systems",
            "A/B testing recommendations",
            "Evaluation metrics for recommender systems",
            "Deployment and scaling considerations"
          ],
          "learningOutcome": "Master advanced recommendation techniques with deep learning",
          "projectType": "Mega Project"
        }
      ]
    },
    {
      "moduleNumber": 13,
      "moduleTitle": "Big Data & Cloud Technologies",
      "totalChapters": 2,
      "chapters": [
        {
          "chapterNumber": 46,
          "chapterName": "Big Data Tools - Spark & Hadoop",
          "belongsTo": ["Intermediate", "Advanced"],
          "accessLevel": {
            "basic": false,
            "intermediate": true,
            "advanced": true
          },
          "duration": "Video + Written Content",
          "subtopics": [
            "Introduction to Big Data concepts",
            "Apache Hadoop basics and ecosystem",
            "Apache Spark fundamentals",
            "PySpark for data processing",
            "Distributed computing concepts",
            "Virtual labs on cloud free tiers",
            "Scalability challenges in industry",
            "When to use Big Data tools"
          ],
          "learningOutcome": "Understand and work with Big Data technologies"
        },
        {
          "chapterNumber": 47,
          "chapterName": "Cloud Platforms - AWS & Google Cloud",
          "belongsTo": "Advanced",
          "accessLevel": {
            "basic": false,
            "intermediate": false,
            "advanced": true
          },
          "duration": "Video + Written Content",
          "subtopics": [
            "Cloud computing for data science",
            "AWS services: S3, EC2, SageMaker",
            "Google Cloud Platform: BigQuery, Cloud Storage, AI Platform",
            "Data storage strategies in cloud",
            "Cloud-based ML model training",
            "Cost optimization in cloud",
            "Scalability challenges and solutions",
            "Industry cloud adoption patterns"
          ],
          "learningOutcome": "Deploy data science solutions on cloud platforms"
        }
      ]
    },
    {
      "moduleNumber": 14,
      "moduleTitle": "Model Deployment & Version Control",
      "totalChapters": 2,
      "chapters": [
        {
          "chapterNumber": 48,
          "chapterName": "Model Deployment with Flask & Docker",
          "belongsTo": "Advanced",
          "accessLevel": {
            "basic": false,
            "intermediate": false,
            "advanced": true
          },
          "duration": "Video + Written Content",
          "subtopics": [
            "Flask basics for API development",
            "Creating REST APIs for ML models",
            "Docker containerization concepts",
            "Dockerizing ML applications",
            "Streamlit for quick app deployment",
            "Best practices for model serving",
            "Monitoring deployed models",
            "API security considerations"
          ],
          "learningOutcome": "Deploy ML models as production-ready APIs"
        },
        {
          "chapterNumber": 49,
          "chapterName": "Version Control with Git & GitHub",
          "belongsTo": "Advanced",
          "accessLevel": {
            "basic": false,
            "intermediate": false,
            "advanced": true
          },
          "duration": "Video + Written Content",
          "subtopics": [
            "Git basics: init, add, commit, push",
            "GitHub fundamentals and workflows",
            "Branching and merging strategies",
            "Collaboration with pull requests",
            "Version control for data science projects",
            "Managing notebooks and data with Git",
            "Building a professional GitHub portfolio",
            "README best practices for DS projects"
          ],
          "learningOutcome": "Master Git for collaborative data science work"
        }
      ]
    },
    {
      "moduleNumber": 15,
      "moduleTitle": "Capstone Projects - Real-World Applications",
      "totalChapters": 6,
      "chapters": [
        {
          "chapterNumber": 50,
          "chapterName": "Capstone Project 1 - AI Career Coach",
          "belongsTo": "Advanced",
          "accessLevel": {
            "basic": false,
            "intermediate": false,
            "advanced": true
          },
          "duration": "Capstone Project",
          "subtopics": [
            "Building an AI-powered career recommendation system",
            "Natural language processing for resume analysis",
            "Skill gap identification and recommendations",
            "Job market trend analysis",
            "Personalized learning path generation",
            "Interactive chatbot interface",
            "Integration with job platforms"
          ],
          "learningOutcome": "Create an AI career coaching application",
          "projectType": "Capstone Project"
        },
        {
          "chapterNumber": 51,
          "chapterName": "Capstone Project 2 - Bias & Fairness Dashboard",
          "belongsTo": "Advanced",
          "accessLevel": {
            "basic": false,
            "intermediate": false,
            "advanced": true
          },
          "duration": "Capstone Project",
          "subtopics": [
            "Detecting bias in AI models",
            "Fairness metrics and evaluation",
            "Creating bias detection algorithms",
            "Building interactive dashboard for bias analysis",
            "Demographic parity and equal opportunity metrics",
            "Mitigation strategies for biased models",
            "Ethical AI implementation",
            "Reporting and documentation"
          ],
          "learningOutcome": "Build a bias detection and fairness dashboard for AI models",
          "projectType": "Capstone Project"
        },
        {
          "chapterNumber": 52,
          "chapterName": "Capstone Project 3 - Ethical AI Investment Analyzer",
          "belongsTo": "Advanced",
          "accessLevel": {
            "basic": false,
            "intermediate": false,
            "advanced": true
          },
          "duration": "Capstone Project",
          "subtopics": [
            "ESG (Environmental, Social, Governance) scoring system",
            "Analyzing company sustainability practices",
            "Building ethical investment recommendation engine",
            "Sentiment analysis on company practices",
            "Portfolio optimization with ethical constraints",
            "Dashboard for ethical investment insights",
            "Real-time data integration"
          ],
          "learningOutcome": "Create an ethical AI-driven investment analysis platform",
          "projectType": "Capstone Project"
        },
        {
          "chapterNumber": 53,
          "chapterName": "Capstone Project 4 - AI Nutritionist Specialist",
          "belongsTo": "Advanced",
          "accessLevel": {
            "basic": false,
            "intermediate": false,
            "advanced": true
          },
          "duration": "Capstone Project",
          "subtopics": [
            "Building personalized nutrition recommendation system",
            "Analyzing dietary patterns and health data",
            "Meal planning algorithms",
            "Calorie and nutrient tracking",
            "Computer vision for food recognition",
            "Integration with health APIs and wearables",
            "Personalized diet plans based on health goals",
            "User-friendly mobile-ready interface"
          ],
          "learningOutcome": "Develop an AI-powered nutrition and meal planning application",
          "projectType": "Capstone Project"
        },
        {
          "chapterNumber": 54,
          "chapterName": "Capstone Project 5 - Custom Industry Project",
          "belongsTo": "Advanced",
          "accessLevel": {
            "basic": false,
            "intermediate": false,
            "advanced": true
          },
          "duration": "Capstone Project",
          "subtopics": [
            "Choose your own industry and problem",
            "Define business objectives and success metrics",
            "Complete data science workflow",
            "End-to-end model development",
            "Deployment and presentation",
            "Portfolio-ready documentation"
          ],
          "learningOutcome": "Create a custom capstone project in your chosen domain",
          "projectType": "Capstone Project"
        },
        {
          "chapterNumber": 55,
          "chapterName": "Capstone Project 6 - Advanced Custom Project",
          "belongsTo": "Advanced",
          "accessLevel": {
            "basic": false,
            "intermediate": false,
            "advanced": true
          },
          "duration": "Capstone Project",
          "subtopics": [
            "Advanced project in specialized domain",
            "Combining multiple ML techniques",
            "Production-level implementation",
            "Cloud deployment",
            "Comprehensive documentation",
            "Final presentation and defense"
          ],
          "learningOutcome": "Demonstrate mastery with an advanced capstone project",
          "projectType": "Capstone Project"
        }
      ]
    }
  ],

  "projectsSummary": {
    "miniProjects": {
      "count": 5,
      "accessLevel": ["Intermediate", "Advanced"],
      "projects": [
        "Data Exploration Mini Project",
        "Streamlit/Plotly Dashboard",
        "Sports Analytics - Player Similarity Finder (Part 1 & 2)"
      ]
    },
    "majorProjects": {
      "count": 4,
      "accessLevel": ["Intermediate", "Advanced"],
      "projects": [
        "YouTube Trending Videos Analysis (Part 1 & 2)",
        "Social Media Ad Performance Dashboard (Part 1 & 2)"
      ]
    },
    "megaProjects": {
      "count": 4,
      "accessLevel": "Advanced Only",
      "projects": [
        "Medical Imaging Classifier with CNN & Transfer Learning (Part 1 & 2)",
        "Hybrid Recommendation System with Deep Learning (Part 1 & 2)"
      ]
    },
    "capstoneProjects": {
      "count": 6,
      "accessLevel": "Advanced Only",
      "projects": [
        "AI Career Coach",
        "Bias & Fairness Dashboard for AI Models",
        "Ethical AI Investment Analyzer",
        "AI Nutritionist Specialist",
        "Custom Industry Project (Student Choice)",
        "Advanced Custom Project (Student Choice)"
      ]
    }
  },

  "assessmentsSummary": {
    "totalQuestions": "580+",
    "questionBreakdown": {
      "pythonTheory": {
        "count": "50+",
    "accessLevel": ["Basic", "Intermediate", "Advanced"]
      },
      "pythonPractice": {
        "count": "50+",
    "accessLevel": ["Intermediate", "Advanced"]
      },
      "pandasAndLibraries": {
        "count": "50+",
        "accessLevel": ["Intermediate", "Advanced"]
      },
      "statisticsAndProbability": {
        "count": "50+",
        "accessLevel": ["Intermediate", "Advanced"]
      },
      "mlBasics": {
        "count": "50+",
        "accessLevel": ["Intermediate", "Advanced"]
      },
      "mlIntermediate": {
        "count": "50+",
        "accessLevel": ["Intermediate", "Advanced"]
      },
      "mlAdvanced": {
        "count": "50+",
    "accessLevel": ["Advanced"]
      },
      "sql": {
        "count": "100+",
        "accessLevel": "Basic | Intermediate | Advanced"
      },
      "dataScience": {
        "count": "130+",
    "accessLevel": ["Basic", "Intermediate", "Advanced"]
      }
    },
    "inVideoSolutions": "80+ solved examples in videos"
  },

  "bonusContent": {
    "accessLevel": "Advanced Only",
    "items": [
      {
        "title": "Interview Preparation Pack",
        "description": "250+ real data science interview questions with solutions",
        "includes": [
          "Technical coding challenges",
          "ML conceptual questions",
          "Statistical reasoning questions",
          "SQL interview queries",
          "System design questions",
          "Behavioral interview guidance"
        ]
      },
      {
        "title": "Resume & Portfolio Building",
        "description": "Expert resume reviews and LinkedIn optimization",
        "includes": [
          "Resume templates for data scientists",
          "Expert resume review sessions",
          "LinkedIn profile optimization",
          "GitHub portfolio best practices",
          "Project documentation templates"
        ]
      },
      {
        "title": "Community & Networking",
        "description": "Connect with fellow learners and industry experts",
        "includes": [
          "Private community access",
          "Weekly doubt clearing sessions",
          "Industry expert AMAs",
          "Peer project reviews",
          "Job referral network"
        ]
      },
      {
        "title": "Special Offer",
        "description": "50% discount on any mini-course",
        "validFor": "Advanced tier students only"
      }
    ]
  },

  "learningOutcomes": {
    "technical": [
      "Master Python programming for data science",
      "Perform advanced data analysis with Pandas and NumPy",
      "Create professional data visualizations",
      "Apply statistical methods and probability theory",
      "Build end-to-end machine learning models",
      "Implement deep learning with neural networks",
      "Work with Big Data tools (Spark, Hadoop)",
      "Deploy ML models to production",
      "Use Git for version control",
      "Build interactive dashboards and web apps"
    ],
    "projects": [
      "12+ hands-on projects from mini to capstone level",
      "Portfolio-ready projects for job applications",
      "Real-world industry case studies",
      "Experience with medical, sports, social media, and finance domains"
    ],
    "career": [
      "Job-ready skills for Data Scientist roles",
      "Interview preparation with 250+ questions",
      "Professional portfolio on GitHub",
      "Optimized resume and LinkedIn profile",
      "Industry connections through community",
      "Understanding of ethical AI and bias mitigation"
    ]
  },

  "careerPaths": [
    {
      "role": "Data Scientist",
      "skills": "Python, ML, Statistics, SQL, Cloud"
    },
    {
      "role": "Machine Learning Engineer",
      "skills": "Deep Learning, MLOps, Deployment, Cloud"
    },
    {
      "role": "Data Analyst",
      "skills": "Python, SQL, Statistics, Visualization"
    },
    {
      "role": "Business Intelligence Analyst",
      "skills": "SQL, Dashboards, Statistics, Business Acumen"
    },
    {
      "role": "AI/ML Researcher",
      "skills": "Deep Learning, Research, Advanced Math, Python"
    }
  ],

  "whyThisCourse": [
    "🎯 **Comprehensive Curriculum**: 55 chapters covering everything from basics to advanced",
    "📊 **12+ Real Projects**: Mini, Major, Mega, and Capstone projects for portfolio",
    "💡 **580+ Practice Questions**: Master concepts through extensive practice",
    "🎓 **Job-Ready Training**: Interview prep, resume building, and portfolio guidance",
    "🚀 **Flexible Learning Path**: Basic, Intermediate, and Advanced tiers to match your level",
    "🌟 **Industry-Aligned**: Learn tools and techniques used by top companies",
    "👥 **Community Support**: Connect with learners and experts",
    "☁️ **Modern Tech Stack**: Cloud, Docker, Git, APIs, and deployment",
    "🤖 **AI & Ethics**: Learn responsible AI development and bias mitigation",
    "📈 **Career Support**: LinkedIn optimization, resume reviews, and job referrals"
  ],

  "courseSummary": {
    "totalChapters": 55,
    "totalProjects": 12,
    "practiceQuestions": "580+",
    "interviewQuestions": "250+",
    "basicTierChapters": "Select foundational chapters",
    "intermediateTierChapters": "Basic + Intermediate chapters",
    "advancedTierChapters": "All chapters (Complete access)",
    "estimatedCompletionTime": {
      "basic": "2-3 months",
      "intermediate": "4-6 months",
      "advanced": "6-9 months (complete mastery)"
    }
  },

  "accessComparison": {
    "basic": {
      "chaptersAccess": "Limited (Foundation chapters only)",
      "projectsAccess": "Mini projects only",
      "questionsAccess": "Basic practice questions",
      "bonusContent": false,
      "communityAccess": "Limited",
      "interviewPrep": false
    },
    "intermediate": {
      "chaptersAccess": "Basic + Intermediate chapters",
      "projectsAccess": "Mini + Major projects",
      "questionsAccess": "Basic + Intermediate questions",
      "bonusContent": false,
      "communityAccess": "Full access",
      "interviewPrep": "Partial"
    },
    "advanced": {
      "chaptersAccess": "Complete access to all 55 chapters",
      "projectsAccess": "All projects (Mini, Major, Mega, Capstone)",
      "questionsAccess": "Complete question bank (580+)",
      "bonusContent": true,
      "communityAccess": "Full access + Expert sessions",
      "interviewPrep": "Complete (250+ questions + guidance)"
    }
  },

  },
    "modern-ai": {
    "courseId": "modern-ai-mastery",
    "thumbnail": "/images/courses/111.webp",
    "title": "Modern AI Mastery",
    "subtitle": "Build real AI from Week 1 — LLMs, RAG, Diffusion, Deployment & Production Apps",
    "description": "Experience frontier AI magic immediately: build chatbots, semantic search, image classifiers and RAG apps in the first weeks, then deeply understand embeddings, transformers, fine-tuning, diffusion models, RAG systems, safety and deployment. Modern-first curriculum: play with powerful open models Day 1, reverse-engineer how they work, and ship portfolio-ready AI products by the end.",
    "duration": "120+ Hours",
    "students": "12,850",
    "rating": "4.9",
    "price": "$499",
    "level": "Beginner to Advanced",
    "language": "English",
    "courseOverview": {
      "totalChapters": 60,
      "totalProjects": 12,
      "practiceQuestions": "580+",
      "interviewQuestions": "250+",
      "language": "English",
      "format": "Video + Written Guides + Hands-on Coding",
      "lastUpdated": "January 2026"
    },
    "pricingTiers": {
      "basic": {
        "name": "Basic",
        "price": "5,999",
        "originalPrice": "8,000",
        "savings": "Save 50%",
        "badge": "Starter",
        "description": "Experience AI Magic: Build Chatbots in 4 Weeks",
        "estimatedTime": "1 Month",
        "skillLevel": "Beginner",
        "chaptersIncluded": "4 Modules (20 chapters)",
        "projectsIncluded": "4 Mini Projects",
        "questionsIncluded": "Questions not included",
        "jobAssistanceCommunity": "Basic community access",
        "SoftSkillsTraining": "Not Included",
        "Certificate": "Yes, Shareable on LinkedIn",
        "recommended": false,
        "skills": ["Prompt Engineering", "Running Open LLMs", "Embeddings & Similarity Search", "Simple Chat & Generation Apps"]
      },
      "intermediate": {
        "name": "Pro",
        "price": "9,999",
        "originalPrice": "11,900",
        "savings": "Save 50%",
        "badge": "Most Popular",
        "description": "From Classic ML to Transformers: Build AI Apps",
        "estimatedTime": "2 Months",
        "skillLevel": "Intermediate",
        "chaptersIncluded": "8 Modules (40 chapters)",
        "projectsIncluded": "8 Mini Projects",
        "questionsIncluded": "200+ Questions",
        "jobAssistanceCommunity": "Premium community access",
        "SoftSkillsTraining": "Soft skills Questionnaire",
        "Certificate": "Yes, Shareable on LinkedIn",
        "recommended": false,
        "skills": ["Prompt Engineering", "Running Open LLMs", "Embeddings & Similarity Search", "Simple Chat & Generation Apps","CNNs & Transfer Learning", "RNNs vs Transformers", "Vision & NLP Applications", "Classic ML vs Modern Comparison"]
      },
      "advanced": {
        "name": "Elite",
        "price": "13,999",
        "originalPrice": "20,000",
        "savings": "Save 50%",
        "badge": "Career Ready",
        "description": "End-to-End GenAI: Build, Deploy, Evaluate, Scale",
        "estimatedTime": "3 Months",
        "skillLevel": "Advanced",
        "chaptersIncluded": "All 60 Chapters",
        "projectsIncluded": "11 Mini + 3 Capstone",
        "questionsIncluded": "500+ Questions",
        "jobAssistanceCommunity": "Premium Community Access",
        "SoftSkillsTraining": "Soft skills Questionnaire",
        "Certificate": "Yes, Shareable on LinkedIn",
        "recommended": true,
        "skills": ["Prompt Engineering", "Running Open LLMs", "Embeddings & Similarity Search", "Simple Chat & Generation Apps","CNNs & Transfer Learning", "RNNs vs Transformers", "Vision & NLP Applications", "Classic ML vs Modern Comparison","LoRA & QLoRA Fine-tuning", "Advanced RAG Systems", "Diffusion & Generative Media", "Fast LLM Deployment", "AI Safety, Alignment & Red-teaming"]
      }
    },
    "curriculum": [
      {
        "moduleNumber": 1,
        "moduleTitle": "Build Your First Chatbot",
        "totalChapters": 5,
        "chapters": [
          {
            "chapterNumber": 1,
            "chapterName": "Course Kickoff & Hello AI",
            "belongsTo": "Basic | Intermediate | Advanced",
            "accessLevel": { "basic": true, "intermediate": true, "advanced": true },
            "duration": "Video + Written Content",
            "subtopics": [
              "Install Python, VS Code, Jupyter",
              "Hugging Face & transformers setup",
              "Run first open LLM (Llama-3.1-8B or Mistral)",
              "Hello AI live demo"
            ],
            "learningOutcome": "Run frontier open-source AI on your machine Day 1"
          },
          {
            "chapterNumber": 2,
            "chapterName": "What is AI and ML – Classic vs Modern",
            "belongsTo": "Basic | Intermediate | Advanced",
            "accessLevel": { "basic": true, "intermediate": true, "advanced": true },
            "duration": "Video + Written Content",
            "subtopics": [
              "AI/ML landscape in 2026",
              "Classic ML vs transformer era",
              "Live demos: ChatGPT, Stable Diffusion, Whisper"
            ],
            "learningOutcome": "Understand the shift from traditional ML to generative AI"
          },
          {
            "chapterNumber": 3,
            "chapterName": "Prompt Engineering Basics",
            "belongsTo": "Basic | Intermediate | Advanced",
            "accessLevel": { "basic": true, "intermediate": true, "advanced": true },
            "duration": "Video + Written Content",
            "subtopics": [
              "Zero-shot, few-shot, chain-of-thought",
              "Role prompting and system messages",
              "Temperature, top-p/k sampling intro"
            ],
            "learningOutcome": "Control LLM behavior with effective prompts"
          },
          {
            "chapterNumber": 4,
            "chapterName": "Build Chatbot with Hugging Face",
            "belongsTo": "Basic | Intermediate | Advanced",
            "accessLevel": { "basic": true, "intermediate": true, "advanced": true },
            "duration": "Video + Hands-on Coding",
            "subtopics": [
              "Load DistilGPT-2 or small open model",
              "Inference pipeline setup",
              "Simple chat loop implementation"
            ],
            "learningOutcome": "Create your first interactive LLM chatbot"
          },
          {
            "chapterNumber": 5,
            "chapterName": "Mini Project – ChatGPT-lite Q&A Bot",
            "belongsTo": "Basic | Intermediate | Advanced",
            "accessLevel": { "basic": true, "intermediate": true, "advanced": true },
            "duration": "Hands-on Project",
            "subtopics": [
              "Q&A bot using Wikipedia or course documents",
              "Combine prompt + small retrieval",
              "Project submission & feedback"
            ],
            "learningOutcome": "Build and demo your first AI Q&A application",
            "projectType": "Mini Project"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "moduleTitle": "The Math Behind the Magic – Embeddings",
        "totalChapters": 5,
        "chapters": [
          {
            "chapterNumber": 6,
            "chapterName": "Why LLMs Understand Text – Embeddings Explained",
            "belongsTo": "Basic | Intermediate | Advanced",
            "accessLevel": { "basic": true, "intermediate": true, "advanced": true },
            "duration": "Video + Visuals",
            "subtopics": [
              "From tokens to dense vectors",
              "Semantic meaning in embeddings",
              "Visual intuition with examples"
            ],
            "learningOutcome": "Grasp how text becomes math for AI"
          },
          {
            "chapterNumber": 7,
            "chapterName": "Hands-on with Sentence Transformers",
            "belongsTo": "Basic | Intermediate | Advanced",
            "accessLevel": { "basic": true, "intermediate": true, "advanced": true },
            "duration": "Hands-on Coding",
            "subtopics": [
              "Install & use sentence-transformers",
              "Generate embeddings for sentences",
              "Compare similarity scores"
            ],
            "learningOutcome": "Create and compare semantic vectors"
          },
          {
            "chapterNumber": 8,
            "chapterName": "Visualize Embeddings in 2D",
            "belongsTo": "Basic | Intermediate | Advanced",
            "accessLevel": { "basic": true, "intermediate": true, "advanced": true },
            "duration": "Video + Coding",
            "subtopics": [
              "t-SNE and UMAP dimensionality reduction",
              "Plot clusters of similar sentences",
              "Interpret semantic clusters"
            ],
            "learningOutcome": "See semantic relationships visually"
          },
          {
            "chapterNumber": 9,
            "chapterName": "Similarity Search with FAISS Introduction",
            "belongsTo": "Basic | Intermediate | Advanced",
            "accessLevel": { "basic": true, "intermediate": true, "advanced": true },
            "duration": "Hands-on Coding",
            "subtopics": [
              "Build simple FAISS index",
              "Add embeddings & query",
              "Retrieve top-k similar items"
            ],
            "learningOutcome": "Implement basic vector search"
          },
          {
            "chapterNumber": 10,
            "chapterName": "Mini Project – AI Movie Plot Search Engine",
            "belongsTo": "Basic | Intermediate | Advanced",
            "accessLevel": { "basic": true, "intermediate": true, "advanced": true },
            "duration": "Hands-on Project",
            "subtopics": [
              "Index movie plot dataset",
              "Semantic search interface",
              "Project polish & demo"
            ],
            "learningOutcome": "Build your own meaning-based search tool",
            "projectType": "Mini Project"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "moduleTitle": "Classic ML Meets Modern AI",
        "totalChapters": 5,
        "chapters": [
          {
            "chapterNumber": 11,
            "chapterName": "Supervised Learning Foundations",
            "belongsTo": "Basic | Intermediate | Advanced",
            "accessLevel": { "basic": true, "intermediate": true, "advanced": true },
            "duration": "Video + Written Content",
            "subtopics": [
              "Labels, features, training loop",
              "Logistic regression intuition",
              "Decision trees basics"
            ]
          },
          {
            "chapterNumber": 12,
            "chapterName": "Classification Basics",
            "belongsTo": "Basic | Intermediate | Advanced",
            "accessLevel": { "basic": true, "intermediate": true, "advanced": true },
            "duration": "Hands-on Coding",
            "subtopics": [
              "Train logistic regression & tree",
              "Metrics: accuracy, precision, recall",
              "Confusion matrix"
            ]
          },
          {
            "chapterNumber": 13,
            "chapterName": "Clustering & Feature Learning",
            "belongsTo": "Basic | Intermediate | Advanced",
            "accessLevel": { "basic": true, "intermediate": true, "advanced": true },
            "duration": "Video + Coding",
            "subtopics": [
              "K-means clustering",
              "Feature importance & engineering intro",
              "Dimensionality reduction basics"
            ]
          },
          {
            "chapterNumber": 14,
            "chapterName": "Spam Detection Challenge",
            "belongsTo": "Basic | Intermediate | Advanced",
            "accessLevel": { "basic": true, "intermediate": true, "advanced": true },
            "duration": "Hands-on Coding",
            "subtopics": [
              "TF-IDF + classic ML pipeline",
              "Evaluate on real spam dataset"
            ]
          },
          {
            "chapterNumber": 15,
            "chapterName": "Face-Off – Classic ML vs Transformers",
            "belongsTo": "Basic | Intermediate | Advanced",
            "accessLevel": { "basic": true, "intermediate": true, "advanced": true },
            "duration": "Hands-on Project",
            "subtopics": [
              "Compare DistilBERT vs logistic regression",
              "Analyze why transformers win on ambiguous cases",
              "Project report"
            ],
            "learningOutcome": "See the power of transformers empirically",
            "projectType": "Mini Project"
          }
        ]
      },
      {
        "moduleNumber": 4,
        "moduleTitle": "Intro to Neural Networks – Reverse-Engineering GPT",
        "totalChapters": 5,
        "chapters": [
          {
            "chapterNumber": 16,
            "chapterName": "What’s a Neuron – Layers & Activations",
            "belongsTo": "Basic | Intermediate | Advanced",
            "accessLevel": { "basic": true, "intermediate": true, "advanced": true },
            "duration": "Video + Visual Demo",
            "subtopics": [
              "Perceptron to modern neuron",
              "ReLU, sigmoid, tanh visuals",
              "Feedforward intuition"
            ]
          },
          {
            "chapterNumber": 17,
            "chapterName": "Backpropagation Explained Simply",
            "belongsTo": "Basic | Intermediate | Advanced",
            "accessLevel": { "basic": true, "intermediate": true, "advanced": true },
            "duration": "Video + Animation",
            "subtopics": [
              "Chain rule intuition",
              "Gradient descent step-by-step",
              "Why vanishing gradients happen"
            ]
          },
          {
            "chapterNumber": 18,
            "chapterName": "Build Mini Neural Net from Scratch",
            "belongsTo": "Basic | Intermediate | Advanced",
            "accessLevel": { "basic": true, "intermediate": true, "advanced": true },
            "duration": "Hands-on Coding",
            "subtopics": [
              "NumPy forward & backward pass",
              "Train on tiny dataset"
            ]
          },
          {
            "chapterNumber": 19,
            "chapterName": "Next-Word Predictor on Small Text Dataset",
            "belongsTo": "Basic | Intermediate | Advanced",
            "accessLevel": { "basic": true, "intermediate": true, "advanced": true },
            "duration": "Hands-on Coding",
            "subtopics": [
              "Tokenization & embedding layer",
              "Train simple language model"
            ]
          },
          {
            "chapterNumber": 20,
            "chapterName": "Mini Project – Tiny Harry Potter Fanfic Generator",
            "belongsTo": "Basic | Intermediate | Advanced",
            "accessLevel": { "basic": true, "intermediate": true, "advanced": true },
            "duration": "Hands-on Project",
            "subtopics": [
              "Generate short fanfic continuations",
              "Play with temperature & sampling",
              "Demo & portfolio entry"
            ],
            "learningOutcome": "Understand GPT-style generation from scratch",
            "projectType": "Mini Project"
          }
        ]
      },
      {
        "moduleNumber": 5,
        "moduleTitle": "Computer Vision Basics",
        "totalChapters": 5,
        "chapters": [
          {
            "chapterNumber": 21,
            "chapterName": "Intro to CNNs – Filters & Kernels",
            "belongsTo": "Intermediate | Advanced",
            "accessLevel": { "basic": false, "intermediate": true, "advanced": true },
            "duration": "Video + Visuals",
            "subtopics": [
              "Convolution as pattern detection",
              "Edge detection example",
              "Parameter sharing & translation invariance"
            ]
          },
          {
            "chapterNumber": 22,
            "chapterName": "Train CNN for Digit Recognition",
            "belongsTo": "Intermediate | Advanced",
            "accessLevel": { "basic": false, "intermediate": true, "advanced": true },
            "duration": "Hands-on Coding",
            "subtopics": [
              "MNIST dataset & simple CNN",
              "Training loop with PyTorch"
            ]
          },
          {
            "chapterNumber": 23,
            "chapterName": "Apply CNN on CIFAR-10",
            "belongsTo": "Intermediate | Advanced",
            "accessLevel": { "basic": false, "intermediate": true, "advanced": true },
            "duration": "Hands-on Coding",
            "subtopics": [
              "Deeper CNN architecture",
              "Overfitting & regularization intro"
            ]
          },
          {
            "chapterNumber": 24,
            "chapterName": "Experiment with Data Augmentations",
            "belongsTo": "Intermediate | Advanced",
            "accessLevel": { "basic": false, "intermediate": true, "advanced": true },
            "duration": "Hands-on Coding",
            "subtopics": [
              "Random flips, rotations, crops",
              "Measure accuracy improvement"
            ]
          },
          {
            "chapterNumber": 25,
            "chapterName": "Mini Project – AI Selfie Emotion Detector",
            "belongsTo": "Intermediate | Advanced",
            "accessLevel": { "basic": false, "intermediate": true, "advanced": true },
            "duration": "Hands-on Project",
            "subtopics": [
              "Classify emotions from webcam/selfies",
              "Deploy simple demo"
            ],
            "learningOutcome": "Build fun vision application",
            "projectType": "Mini Project"
          }
        ]
      },
      {
        "moduleNumber": 6,
        "moduleTitle": "Transfer Learning & Fun AI Apps",
        "totalChapters": 5,
        "chapters": [
          {
            "chapterNumber": 26,
            "chapterName": "What is Transfer Learning",
            "belongsTo": "Intermediate | Advanced",
            "accessLevel": { "basic": false, "intermediate": true, "advanced": true },
            "duration": "Video + Written Content",
            "subtopics": [
              "Pre-trained models advantages",
              "ImageNet features transfer"
            ]
          },
          {
            "chapterNumber": 27,
            "chapterName": "Load ResNet & Fine-tune",
            "belongsTo": "Intermediate | Advanced",
            "accessLevel": { "basic": false, "intermediate": true, "advanced": true },
            "duration": "Hands-on Coding",
            "subtopics": [
              "Freeze early layers",
              "Train classifier head"
            ]
          },
          {
            "chapterNumber": 28,
            "chapterName": "Train Marvel vs DC Classifier",
            "belongsTo": "Intermediate | Advanced",
            "accessLevel": { "basic": false, "intermediate": true, "advanced": true },
            "duration": "Hands-on Coding",
            "subtopics": [
              "Fun superhero dataset",
              "Evaluate & improve"
            ]
          },
          {
            "chapterNumber": 29,
            "chapterName": "Experiment with MobileNet",
            "belongsTo": "Intermediate | Advanced",
            "accessLevel": { "basic": false, "intermediate": true, "advanced": true },
            "duration": "Hands-on Coding",
            "subtopics": [
              "Mobile-friendly model",
              "Speed vs accuracy trade-off"
            ]
          },
          {
            "chapterNumber": 30,
            "chapterName": "Mini Project – AI Meme Classifier",
            "belongsTo": "Intermediate | Advanced",
            "accessLevel": { "basic": false, "intermediate": true, "advanced": true },
            "duration": "Hands-on Project",
            "subtopics": [
              "Classify meme styles/categories",
              "Create fun demo app"
            ],
            "learningOutcome": "Apply transfer learning to creative task",
            "projectType": "Mini Project"
          }
        ]
      },
      {
        "moduleNumber": 7,
        "moduleTitle": "NLP Evolution",
        "totalChapters": 5,
        "chapters": [
          {
            "chapterNumber": 31,
            "chapterName": "Bag of Words to Word2Vec",
            "belongsTo": "Intermediate | Advanced",
            "accessLevel": { "basic": false, "intermediate": true, "advanced": true },
            "duration": "Video + Coding",
            "subtopics": [
              "TF-IDF limitations",
              "Word embeddings intuition"
            ]
          },
          {
            "chapterNumber": 32,
            "chapterName": "RNNs & LSTMs Explained Visually",
            "belongsTo": "Intermediate | Advanced",
            "accessLevel": { "basic": false, "intermediate": true, "advanced": true },
            "duration": "Video + Animation",
            "subtopics": [
              "Sequential processing",
              "Vanishing gradient problem",
              "LSTM gates"
            ]
          },
          {
            "chapterNumber": 33,
            "chapterName": "Train Tiny RNN Text Generator",
            "belongsTo": "Intermediate | Advanced",
            "accessLevel": { "basic": false, "intermediate": true, "advanced": true },
            "duration": "Hands-on Coding",
            "subtopics": [
              "Character-level RNN",
              "Generate short text"
            ]
          },
          {
            "chapterNumber": 34,
            "chapterName": "Compare RNN vs Transformer Generation",
            "belongsTo": "Intermediate | Advanced",
            "accessLevel": { "basic": false, "intermediate": true, "advanced": true },
            "duration": "Hands-on Coding",
            "subtopics": [
              "Side-by-side generation",
              "Why transformers win"
            ]
          },
          {
            "chapterNumber": 35,
            "chapterName": "Mini Project – AI Joke Generator",
            "belongsTo": "Intermediate | Advanced",
            "accessLevel": { "basic": false, "intermediate": true, "advanced": true },
            "duration": "Hands-on Project",
            "subtopics": [
              "Train on joke dataset",
              "Generate funny continuations"
            ],
            "learningOutcome": "See sequence model evolution in action",
            "projectType": "Mini Project"
          }
        ]
      },
      {
        "moduleNumber": 8,
        "moduleTitle": "Transformers in Depth",
        "totalChapters": 5,
        "chapters": [
          {
            "chapterNumber": 36,
            "chapterName": "Encoder vs Decoder Models Explained",
            "belongsTo": "Intermediate | Advanced",
            "accessLevel": { "basic": false, "intermediate": true, "advanced": true },
            "duration": "Video + Diagrams",
            "subtopics": [
              "BERT (encoder-only)",
              "GPT (decoder-only)",
              "T5 (encoder-decoder)"
            ]
          },
          {
            "chapterNumber": 37,
            "chapterName": "Translation with MarianMT",
            "belongsTo": "Intermediate | Advanced",
            "accessLevel": { "basic": false, "intermediate": true, "advanced": true },
            "duration": "Hands-on Coding",
            "subtopics": [
              "Hugging Face translation pipeline",
              "Multilingual demo"
            ]
          },
          {
            "chapterNumber": 38,
            "chapterName": "Summarization with T5",
            "belongsTo": "Intermediate | Advanced",
            "accessLevel": { "basic": false, "intermediate": true, "advanced": true },
            "duration": "Hands-on Coding",
            "subtopics": [
              "Text-to-text framework",
              "Generate summaries"
            ]
          },
          {
            "chapterNumber": 39,
            "chapterName": "Sentiment Classification with BERT",
            "belongsTo": "Intermediate | Advanced",
            "accessLevel": { "basic": false, "intermediate": true, "advanced": true },
            "duration": "Hands-on Coding",
            "subtopics": [
              "Fine-tune BERT for sentiment",
              "Evaluate performance"
            ]
          },
          {
            "chapterNumber": 40,
            "chapterName": "Mini Project – AI News Summarizer",
            "belongsTo": "Intermediate | Advanced",
            "accessLevel": { "basic": false, "intermediate": true, "advanced": true },
            "duration": "Hands-on Project",
            "subtopics": [
              "Summarize articles / news feed",
              "Interactive Streamlit demo"
            ],
            "learningOutcome": "Build practical transformer application",
            "projectType": "Mini Project"
          }
        ]
      },
      {
        "moduleNumber": 9,
        "moduleTitle": "Large Language Models",
        "totalChapters": 5,
        "chapters": [
          {
            "chapterNumber": 41,
            "chapterName": "How GPT Works – High-level View",
            "belongsTo": "Advanced",
            "accessLevel": { "basic": false, "intermediate": false, "advanced": true },
            "duration": "Video + Diagrams",
            "subtopics": [
              "Autoregressive generation",
              "Token prediction objective",
              "Scaling laws intro"
            ]
          },
          {
            "chapterNumber": 42,
            "chapterName": "Fine-tuning vs LoRA vs Prompt-tuning",
            "belongsTo": "Advanced",
            "accessLevel": { "basic": false, "intermediate": false, "advanced": true },
            "duration": "Video + Written Content",
            "subtopics": [
              "Full fine-tuning drawbacks",
              "Low-rank adapters (LoRA/QLoRA)",
              "Soft prompt tuning"
            ]
          },
          {
            "chapterNumber": 43,
            "chapterName": "Fine-tune on Small Dataset",
            "belongsTo": "Advanced",
            "accessLevel": { "basic": false, "intermediate": false, "advanced": true },
            "duration": "Hands-on Coding",
            "subtopics": [
              "Use LoRA on consumer GPU",
              "Train on FAQ / domain data"
            ]
          },
          {
            "chapterNumber": 44,
            "chapterName": "Train Chatbot on Your WhatsApp Chats",
            "belongsTo": "Advanced",
            "accessLevel": { "basic": false, "intermediate": false, "advanced": true },
            "duration": "Hands-on Coding",
            "subtopics": [
              "Data preparation & privacy",
              "Personalized fine-tuning"
            ]
          },
          {
            "chapterNumber": 45,
            "chapterName": "Mini Project – Personalized AI Twin",
            "belongsTo": "Advanced",
            "accessLevel": { "basic": false, "intermediate": false, "advanced": true },
            "duration": "Hands-on Project",
            "subtopics": [
              "Chat like you using your data",
              "Deploy local demo"
            ],
            "learningOutcome": "Create your own AI clone",
            "projectType": "Mini Project"
          }
        ]
      },
      {
        "moduleNumber": 10,
        "moduleTitle": "RAG Foundations",
        "totalChapters": 5,
        "chapters": [
          {
            "chapterNumber": 46,
            "chapterName": "Embeddings Deep Dive & Semantic Search",
            "belongsTo": "Advanced",
            "accessLevel": { "basic": false, "intermediate": false, "advanced": true },
            "duration": "Video + Coding",
            "subtopics": [
              "Dense retrieval vs keyword",
              "Asymmetric search, HyDE intro"
            ]
          },
          {
            "chapterNumber": 47,
            "chapterName": "FAISS – Store & Query Vectors",
            "belongsTo": "Advanced",
            "accessLevel": { "basic": false, "intermediate": false, "advanced": true },
            "duration": "Hands-on Coding",
            "subtopics": [
              "Index types, add/search",
              "Dynamic updates"
            ]
          },
          {
            "chapterNumber": 48,
            "chapterName": "Document Chunking Strategy",
            "belongsTo": "Advanced",
            "accessLevel": { "basic": false, "intermediate": false, "advanced": true },
            "duration": "Video + Coding",
            "subtopics": [
              "Fixed vs semantic chunking",
              "Overlapping & metadata"
            ]
          },
          {
            "chapterNumber": 49,
            "chapterName": "Build Simple RAG Q&A Bot on Course Notes",
            "belongsTo": "Advanced",
            "accessLevel": { "basic": false, "intermediate": false, "advanced": true },
            "duration": "Hands-on Coding",
            "subtopics": [
              "Retrieve → augment → generate",
              "Basic hallucination control"
            ]
          },
          {
            "chapterNumber": 50,
            "chapterName": "Mini Project – AI Study Assistant",
            "belongsTo": "Advanced",
            "accessLevel": { "basic": false, "intermediate": false, "advanced": true },
            "duration": "Hands-on Project",
            "subtopics": [
              "Upload notes → ask questions",
              "Interactive interface"
            ],
            "learningOutcome": "Build personal knowledge Q&A system",
            "projectType": "Mini Project"
          }
        ]
      },
      {
        "moduleNumber": 11,
        "moduleTitle": "RAG in Practice",
        "totalChapters": 5,
        "chapters": [
          {
            "chapterNumber": 51,
            "chapterName": "End-to-End RAG Pipeline",
            "belongsTo": "Advanced",
            "accessLevel": { "basic": false, "intermediate": false, "advanced": true },
            "duration": "Hands-on Coding",
            "subtopics": [
              "Query rewriting, reranking",
              "Context compression"
            ]
          },
          {
            "chapterNumber": 52,
            "chapterName": "Preventing Hallucinations in RAG",
            "belongsTo": "Advanced",
            "accessLevel": { "basic": false, "intermediate": false, "advanced": true },
            "duration": "Video + Coding",
            "subtopics": [
              "Grounding instructions",
              "Self-check & citation forcing"
            ]
          },
          {
            "chapterNumber": 53,
            "chapterName": "Multiple Document Types – PDFs, Web, Text",
            "belongsTo": "Advanced",
            "accessLevel": { "basic": false, "intermediate": false, "advanced": true },
            "duration": "Hands-on Coding",
            "subtopics": [
              "Parsers & loaders",
              "Hybrid ingestion"
            ]
          },
          {
            "chapterNumber": 54,
            "chapterName": "Build RAG-powered Chatbot for Legal Docs",
            "belongsTo": "Advanced",
            "accessLevel": { "basic": false, "intermediate": false, "advanced": true },
            "duration": "Hands-on Coding",
            "subtopics": [
              "Legal/contract Q&A system",
              "Accuracy & safety focus"
            ]
          },
          {
            "chapterNumber": 55,
            "chapterName": "Mini Project – AI Lawyer Assistant",
            "belongsTo": "Advanced",
            "accessLevel": { "basic": false, "intermediate": false, "advanced": true },
            "duration": "Hands-on Project",
            "subtopics": [
              "Upload contracts → ask questions",
              "Production-style interface"
            ],
            "learningOutcome": "Create domain-specific RAG tool",
            "projectType": "Mini Project"
          }
        ]
      },
      {
        "moduleNumber": 12,
        "moduleTitle": "Capstone + Deployment",
        "totalChapters": 5,
        "chapters": [
          {
            "chapterNumber": 56,
            "chapterName": "MLOps Basics – Model Saving & Serving",
            "belongsTo": "Advanced",
            "accessLevel": { "basic": false, "intermediate": false, "advanced": true },
            "duration": "Video + Coding",
            "subtopics": [
              "Quantization intro",
              "Model export formats"
            ]
          },
          {
            "chapterNumber": 57,
            "chapterName": "FastAPI + Streamlit Deployment",
            "belongsTo": "Advanced",
            "accessLevel": { "basic": false, "intermediate": false, "advanced": true },
            "duration": "Hands-on Coding",
            "subtopics": [
              "API endpoint for chat/RAG",
              "Beautiful Streamlit UI",
              "Local & cloud deploy"
            ]
          },
          {
            "chapterNumber": 58,
            "chapterName": "Capstone Project Development – Week 1",
            "belongsTo": "Advanced",
            "accessLevel": { "basic": false, "intermediate": false, "advanced": true },
            "duration": "Hands-on Project",
            "subtopics": [
              "Choose: AI Tutor / Resume Reviewer / Caption Generator",
              "Architecture & data prep"
            ],
            "projectType": "Capstone Project"
          },
          {
            "chapterNumber": 59,
            "chapterName": "Portfolio Building & GitHub Showcase",
            "belongsTo": "Advanced",
            "accessLevel": { "basic": false, "intermediate": false, "advanced": true },
            "duration": "Video + Guide",
            "subtopics": [
              "README best practices",
              "Live demo links",
              "Project video recording"
            ]
          },
          {
            "chapterNumber": 60,
            "chapterName": "Demo Day – Final Capstone Presentations",
            "belongsTo": "Advanced",
            "accessLevel": { "basic": false, "intermediate": false, "advanced": true },
            "duration": "Project Presentation",
            "subtopics": [
              "Present AI Tutor, Resume Reviewer, Caption Generator",
              "Peer & instructor feedback",
              "Portfolio finalization"
            ],
            "learningOutcome": "Ship & showcase production AI product",
            "projectType": "Capstone Project"
          }
        ]
      }
    ],
    "projectsSummary": {
      "miniProjects": {
        "count": 11,
        "accessLevel": ["Basic", "Intermediate", "Advanced"],
        "projects": [
          "ChatGPT-lite Q&A Bot",
          "AI Movie Plot Search Engine",
          "Classic vs Modern Spam Detector",
          "Tiny Harry Potter Fanfic Generator",
          "AI Selfie Emotion Detector",
          "AI Meme Classifier",
          "AI Joke Generator",
          "AI News Summarizer",
          "Personalized AI Twin",
          "AI Study Assistant",
          "AI Lawyer Assistant"
        ]
      },
      "capstoneProjects": {
        "count": 3,
        "accessLevel": "Advanced Only",
        "projects": [
          "AI Tutor – Personalized Q&A from uploaded notes",
          "AI Resume Reviewer + Job Matcher with RAG",
          "AI Social Media Caption & Hashtag Generator"
        ]
      }
    },
    "assessmentsSummary": {
      "totalQuestions": "580+",
      "questionBreakdown": {
        "Fundamentals & Core Concepts": {
          "count": "90+",
          "accessLevel": ["Basic", "Intermediate", "Advanced"],
          "description": "Prompt engineering, embeddings basics, what is AI/ML, classic vs modern, LLMs high-level"
        },
        "Supervised Learning Algorithms": {
          "count": "60+",
          "accessLevel": ["Intermediate", "Advanced"],
          "description": "Logistic regression, decision trees, classification pipelines, spam detection"
        },
        "Unsupervised Learning & Clustering": {
          "count": "40+",
          "accessLevel": ["Intermediate", "Advanced"],
          "description": "K-means, clustering intuition, feature learning, dimensionality reduction"
        },
        "Neural Networks & Deep Learning": {
          "count": "70+",
          "accessLevel": ["Intermediate", "Advanced"],
          "description": "Neurons, backpropagation, activations, mini NNs from scratch, next-word prediction"
        },
        "NLP & Transformers": {
          "count": "100+",
          "accessLevel": ["Intermediate", "Advanced"],
          "description": "RNNs/LSTMs, attention, encoder/decoder, BERT/T5/GPT, translation, summarization, sentiment"
        },
        "Computer Vision": {
          "count": "70+",
          "accessLevel": ["Intermediate", "Advanced"],
          "description": "CNNs, filters, convolutions, transfer learning, augmentations, ResNet/MobileNet"
        },
        "Model Evaluation & Metrics": {
          "count": "50+",
          "accessLevel": ["Intermediate", "Advanced"],
          "description": "Accuracy, precision/recall/F1, confusion matrix, perplexity, hallucination evaluation"
        },
        "Data Preprocessing & Feature Engineering": {
          "count": "45+",
          "accessLevel": ["Basic", "Intermediate", "Advanced"],
          "description": "Tokenization, TF-IDF, chunking strategies, data augmentation, feature crossing"
        },
        "Production & Deployment": {
          "count": "50+",
          "accessLevel": ["Advanced"],
          "description": "FastAPI/Streamlit, quantization, vLLM inference, model serving, MLOps basics"
        },
        "Advanced Topics & Emerging Areas": {
          "count": "60+",
          "accessLevel": ["Advanced"],
          "description": "Fine-tuning (LoRA/QLoRA), RAG pipelines, diffusion models, multimodal, safety & alignment"
        },
        "Additional Advanced Questions": {
          "count": "45+",
          "accessLevel": ["Advanced"],
          "description": "Red-teaming, jailbreaking, ethics, bias, evaluation without ground truth, interview-style system design"
        }
      },
      "inVideoSolutions": "80+ solved examples in videos"
    },
    "bonusContent": {
      "accessLevel": "Advanced Only",
      "items": [
        {
          "title": "Interview Preparation Pack",
          "description": "250+ real generative AI & LLM engineer interview questions with solutions",
          "includes": [
            "Prompt engineering & jailbreak challenges",
            "RAG system design & failure modes",
            "Fine-tuning & quantization questions",
            "Diffusion & multimodal reasoning",
            "Deployment & inference optimization",
            "AI safety, red-teaming & evaluation"
          ]
        },
        {
          "title": "Resume & Portfolio Building",
          "description": "Expert resume reviews and LinkedIn optimization for AI roles",
          "includes": [
            "Resume templates for AI Engineers / GenAI Developers",
            "Expert resume review sessions",
            "LinkedIn profile optimization for 2026 AI job market",
            "GitHub portfolio best practices with live demos",
            "Project documentation & demo video templates"
          ]
        },
        {
          "title": "Community & Networking",
          "description": "Connect with fellow AI builders and industry experts",
          "includes": [
            "Private community access",
            "Weekly doubt clearing & paper reading sessions",
            "Industry expert AMAs on RAG, fine-tuning, safety",
            "Peer code & project reviews",
            "Job referral network in AI startups & product teams"
          ]
        },
        {
          "title": "Special Offer",
          "description": "50% discount on any mini-course",
          "validFor": "Advanced tier students only"
        }
      ]
    },
    "learningOutcomes": {
      "technical": [
        "Build & deploy AI apps from Week 1 using open LLMs",
        "Master prompt engineering and modern prompting patterns",
        "Implement embeddings, vector search and semantic retrieval",
        "Compare classic ML vs transformers — know when to use each",
        "Fine-tune large models with LoRA/QLoRA on consumer hardware",
        "Create production RAG systems with hallucination controls",
        "Generate images & media with diffusion models",
        "Deploy fast inference APIs with FastAPI, vLLM, Streamlit",
        "Evaluate, red-team and align AI systems ethically",
        "Ship 12+ portfolio-ready AI products"
      ],
      "projects": [
        "11 weekly mini-projects + 3 capstone applications",
        "Portfolio pieces ready for GitHub, resumes & interviews",
        "Mix of fun (meme classifier, joke generator) & professional (AI tutor, resume reviewer, lawyer assistant)",
        "Domain experience: chat, vision, RAG, generative media, deployment"
      ],
      "career": [
        "Job-ready for Generative AI Engineer, LLM Engineer, AI Product Developer roles in 2026",
        "250+ current interview questions with solutions",
        "Professional GitHub portfolio with live demos & videos",
        "Optimized resume & LinkedIn profile for AI job market",
        "Understanding of AI ethics, safety layers & red-teaming practices",
        "Active community for networking & job referrals"
      ]
    },
    "careerPaths": [
  		{
    		"role": "Generative AI Engineer",
    		"skills": "Prompt Engineering, LLMs, Fine-tuning (LoRA/QLoRA), RAG Systems, Diffusion Models, FastAPI/Streamlit Deployment"
  		},
  		{
  		  "role": "LLM Engineer / AI Product Developer",
  		  "skills": "Large Language Models, RAG at Scale, Model Quantization, vLLM/TGI Inference, Production MLOps, AI Safety & Guardrails"
 		 },
 		 {
 		   "role": "Computer Vision Engineer",
		    "skills": "CNNs, Transfer Learning, Data Augmentation, PyTorch Vision, Real-time Deployment, Multimodal Models"
  		},
  		{
    		"role": "NLP / Transformers Specialist",
    		"skills": "BERT, GPT-style Models, Attention Mechanisms, Fine-tuning, Text Generation, Summarization & Translation"
  		},
  		{
    		"role": "AI Research Engineer / Emerging Tech",
    		"skills": "Advanced Alignment (DPO/RLHF), Red-teaming, Multimodal Diffusion, Long-context Models, Evaluation Frameworks"
  		}
		],
    "whyThisCourse": [
      "🚀 Modern-first — touch powerful LLMs & Stable Diffusion in Week 1",
      "🪄 Play → Understand → Build — experience magic before theory",
      "🎯 Weekly mini-projects — portfolio grows every Friday",
      "🛠 Production stack — RAG, LoRA, vLLM, FastAPI, safety guardrails",
      "🌟 Fun + career-relevant — meme classifiers to AI tutors & resume bots",
      "🛡️ Ethics & safety baked in — jailbreak defense, red-teaming, evaluation",
      "👥 Active builder community — weekly sessions, peer reviews, referrals",
      "📈 Ship real apps — 12+ showcaseable projects by graduation"
    ],
    "courseSummary": {
      "totalChapters": 60,
      "totalProjects": 14,
      "practiceQuestions": "580+",
      "interviewQuestions": "250+",
      "basicTierChapters": "Modules 1–4 (Phase 1 – First 20 chapters)",
      "intermediateTierChapters": "Modules 1–8 (Phase 1 + 2 – First 40 chapters)",
      "advancedTierChapters": "All 60 chapters (full Phase 1 + 2 + 3)",
      "estimatedCompletionTime": {
        "basic": "1 Month (Phase 1)",
        "intermediate": "2 Months (Phase 1 + 2)",
        "advanced": "3 Months (complete production mastery)"
      }
    }
  }
};




export default function CourseDetailPage({ params }) {
  const [selectedTier, setSelectedTier] = useState('intermediate');
  const [expandedModule, setExpandedModule] = useState(null);

  const course = courseData[params.id];

  if (!course) {
    return <div>Course not found</div>;
  }

  const currentTier = course.pricingTiers[selectedTier];
  // 👇 THIS IS THE KEY CHANGE - now it's course + tier based
  const currentTierContent = tierContent[params.id]?.[selectedTier];

  const currentHeaderColor = tierHeaderColors[selectedTier];

  const toggleModule = (index) => {
    setExpandedModule(expandedModule === index ? null : index);
  };

  return (

  
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
    <Navbar/>
        {/* Hero Section - Mobile Optimized */}
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 min-h-[500px] md:min-h-[700px]">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-teal-400 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-cyan-400 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-20">
            <a href="/courses" className="inline-flex items-center text-teal-200 hover:text-white transition-colors mb-6 md:mb-12">
              <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Courses
            </a>

            <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
              <div className="space-y-4 md:space-y-6">
                <div className="inline-flex items-center gap-2 bg-teal-500/20 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full text-teal-100 text-sm md:text-base">
                  <HiSparkles className="text-lg md:text-xl" />
                  <span className="font-semibold">Most Comprehensive</span>
                </div>

                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  {course.title}
                </h1>
                <p className="text-lg md:text-xl text-teal-100">{course.subtitle}</p>
                <p className="text-base md:text-lg text-slate-200 leading-relaxed">{course.description}</p>

                <div className="flex flex-wrap gap-2 md:gap-4 pt-2 md:pt-4">
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-full text-white text-sm md:text-base">
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {course.rating}
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-full text-white text-sm md:text-base">
                    <FiBookOpen className="w-4 h-4 md:w-5 md:h-5" />
                    {course.courseOverview.totalChapters} Chapters
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-full text-white text-sm md:text-base">
                    <FaProjectDiagram className="w-4 h-4 md:w-5 md:h-5" />
                    {course.courseOverview.totalProjects} Projects
                  </div>
                </div>
              </div>

              {/* Hide image on mobile, show on md+ */}
              <div className="hidden md:block relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Tier Selection - Mobile: Small Cards, Desktop: Full Cards */}
        <div className="relative mt-6 md:mt-10">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-4 md:p-8"
            >
              <div className="text-center mb-4 md:mb-8">
                <h2 className="text-xl md:text-3xl font-bold text-blue-900 mb-2 md:mb-3">Choose Your Path</h2>
                <p className="text-slate-600 text-xs md:text-lg hidden md:block">Select the tier that matches your goals</p>
              </div>

              {/* Mobile View - Compact Buttons */}
              <div className="md:hidden grid grid-cols-3 gap-2 mb-4">
                {Object.entries(course.pricingTiers).map(([key, tier]) => (
                  <motion.button
                    key={key}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedTier(key)}
                    className={`relative p-3 rounded-xl border-2 transition-all ${
                      selectedTier === key
                        ? 'border-teal-500 bg-gradient-to-br from-teal-50 to-cyan-50 shadow-lg'
                        : 'border-slate-200 bg-white'
                    }`}
                  >
                    {tier.recommended && (
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-2 py-0.5 rounded-full text-[9px] font-bold whitespace-nowrap">
                        Popular
                      </div>
                    )}
                    <div className="text-center">
                      <h3 className="text-sm font-bold text-blue-900 mb-1">{tier.name}</h3>
                      <div className="text-xl font-bold text-teal-600">₹{tier.price}</div>
                      <div className="text-[10px] text-slate-500 line-through">₹{tier.originalPrice}</div>
                    </div>
                    {selectedTier === key && (
                      <div className="absolute top-1 right-1 w-4 h-4 bg-teal-500 rounded-full flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Desktop View - Full Cards */}
              <div className="hidden md:grid md:grid-cols-3 gap-6">
                {Object.entries(course.pricingTiers).map(([key, tier]) => (
                  <motion.div
                    key={key}
                    whileHover={{ scale: 1.03 }}
                    onClick={() => setSelectedTier(key)}
                    className={`relative cursor-pointer rounded-3xl p-7 border-2 transition-all flex flex-col justify-between shadow-lg ${
                      selectedTier === key
                        ? 'border-teal-500 bg-gradient-to-br from-teal-50 to-cyan-50 shadow-xl scale-[1.02]'
                        : 'border-slate-200 bg-white hover:border-teal-300 hover:shadow-xl'
                    }`}
                  >
                    {tier.recommended && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-md">
                          <HiSparkles /> {tier.badge}
                        </div>
                      </div>
                    )}
                    {!tier.recommended && tier.badge && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                          {tier.badge}
                        </div>
                      </div>
                    )}

                    <div className="text-center mb-2">
                      <h3 className="text-2xl font-extrabold text-blue-900 mb-2 tracking-tight">{tier.name}</h3>
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-4xl font-bold text-teal-600">₹{tier.price}</span>
                        {tier.originalPrice && (
                          <span className="text-sm text-slate-400 line-through">₹{tier.originalPrice}</span>
                        )}
                      </div>
                      <div className="text-teal-600 font-semibold text-sm mb-2">{tier.savings}</div>
                    </div>

                    <div className="mb-3 px-3 py-2 rounded-lg bg-gradient-to-r from-blue-50 to-teal-50 text-blue-900 font-medium text-base shadow-sm border border-teal-100">
                      {tier.description}
                    </div>

                    <div className="flex items-center justify-center gap-2 mb-3">
                      <span className="inline-block bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-xs font-semibold">
                        Duration: {tier.estimatedTime}
                      </span>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">Chapters:</span>
                        <span className="font-semibold text-blue-900">{tier.chaptersIncluded}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">Projects:</span>
                        <span className="font-semibold text-blue-900">{tier.projectsIncluded}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">Questions:</span>
                        <span className="font-semibold text-blue-900">{tier.questionsIncluded}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">Community:</span>
                        <span className="font-semibold text-blue-900">{tier.jobAssistanceCommunity}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">Soft Skills:</span>
                        <span className="font-semibold text-blue-900">{tier.SoftSkillsTraining}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">Certificate:</span>
                        <span className="font-semibold text-blue-900">{tier.Certificate}</span>
                      </div>
                    </div>

                    {selectedTier === key && (
                      <div className="absolute top-4 right-4">
                        <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center shadow-lg">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Mobile: Selected Tier Details Below Buttons */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedTier}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="md:hidden bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-4 border-2 border-teal-200"
                >
                  <div className="text-center mb-3">
                    <div className="inline-block bg-teal-500 text-white px-3 py-1 rounded-full text-xs font-bold mb-2">
                      {currentTier.badge}
                    </div>
                    <p className="text-sm text-slate-700 font-medium">{currentTier.description}</p>
                    <div className="text-teal-600 font-bold text-sm mt-2">{currentTier.savings}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                    <div className="bg-white rounded-lg p-2 text-center">
                      <div className="text-slate-600 mb-0.5">Chapters</div>
                      <div className="font-bold text-blue-900">{currentTier.chaptersIncluded}</div>
                    </div>
                    <div className="bg-white rounded-lg p-2 text-center">
                      <div className="text-slate-600 mb-0.5">Projects</div>
                      <div className="font-bold text-blue-900">{currentTier.projectsIncluded}</div>
                    </div>
                    <div className="bg-white rounded-lg p-2 text-center">
                      <div className="text-slate-600 mb-0.5">Questions</div>
                      <div className="font-bold text-blue-900">{currentTier.questionsIncluded}</div>
                    </div>
                    <div className="bg-white rounded-lg p-2 text-center">
                      <div className="text-slate-600 mb-0.5">Duration</div>
                      <div className="font-bold text-blue-900">{currentTier.estimatedTime}</div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-16">
          <div className="grid lg:grid-cols-3 gap-6 md:gap-12">
            {/* Left Column - Course Details */}
            <div className="lg:col-span-2 space-y-6 md:space-y-12 order-2 lg:order-1">

              {/* Complete Course Curriculum Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-xl md:rounded-2xl p-5 md:p-8 shadow-lg"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
                  <FiBookOpen className="text-2xl md:text-4xl text-teal-500" />
                  Complete Course Curriculum
                </h2>

                <div className="space-y-3 md:space-y-4">
                  {course.curriculum?.map((module, index) => {
                    const hasAccessibleChapter = module.chapters.some(
                      (chapter) =>
                        typeof chapter === 'object' && chapter.accessLevel && chapter.accessLevel[selectedTier]
                    );
                    const isModuleAccessible = hasAccessibleChapter;

                    return (
                      <div
                        key={index}
                        className={`border-2 rounded-lg md:rounded-xl overflow-hidden transition-all ${
                          isModuleAccessible
                            ? 'border-teal-200 bg-gradient-to-r from-white to-teal-50'
                            : 'border-slate-200 bg-slate-50 opacity-60'
                        }`}
                      >
                        <div
                          onClick={() => isModuleAccessible && toggleModule(index)}
                          className={`p-4 md:p-5 flex items-center justify-between ${
                            isModuleAccessible ? 'cursor-pointer hover:bg-teal-100/50' : 'cursor-not-allowed'
                          }`}
                        >
                          <div className="flex items-center gap-3 md:gap-4 flex-1">
                            <div className={`flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full font-bold text-sm md:text-base ${
                              isModuleAccessible
                                ? 'bg-teal-500 text-white'
                                : 'bg-slate-300 text-slate-600'
                            }`}>
                              {module.moduleNumber}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 md:gap-3 mb-1 flex-wrap">
                                <h3 className="text-base md:text-lg font-bold text-blue-900">{module.moduleTitle}</h3>
                                {!isModuleAccessible && (
                                  <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-slate-200 text-slate-600">
                                    <FiLock className="w-3 h-3" /> Locked
                                  </span>
                                )}
                              </div>
                              <p className="text-xs md:text-sm text-slate-600">{module.totalChapters} chapters</p>
                            </div>
                          </div>
                          {isModuleAccessible && (
                            <div>
                              {expandedModule === index ? (
                                <FiChevronUp className="w-5 h-5 md:w-6 md:h-6 text-teal-500" />
                              ) : (
                                <FiChevronDown className="w-5 h-5 md:w-6 md:h-6 text-slate-400" />
                              )}
                            </div>
                          )}
                        </div>

                        {isModuleAccessible && expandedModule === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="border-t border-teal-200 bg-white p-4 md:p-5"
                          >
                            <div className="space-y-2 md:space-y-3">
                              {module.chapters.map((chapter, chapterIndex) => {
                                const chapterName = typeof chapter === 'string'
                                  ? chapter
                                  : chapter.chapterName;
                                const chapterNumber = typeof chapter === 'string'
                                  ? chapterIndex + 1
                                  : chapter.chapterNumber;
                                const isChapterAccessible = typeof chapter === 'object' && chapter.accessLevel && chapter.accessLevel[selectedTier];
                                const belongsTo = typeof chapter === 'object' ? chapter.belongsTo : null;
                                const duration = typeof chapter === 'object' ? chapter.duration : null;
                                const learningOutcome = typeof chapter === 'object' ? chapter.learningOutcome : null;
                                return (
                                  <div
                                    key={chapterIndex}
                                    className={`flex items-start gap-2 md:gap-3 p-3 md:p-4 rounded-lg transition-colors ${
                                      isChapterAccessible
                                        ? 'bg-slate-50 hover:bg-teal-50 border border-slate-200'
                                        : 'bg-slate-100 opacity-50 border border-slate-300'
                                    }`}
                                  >
                                    <div className={`flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full font-semibold text-xs md:text-sm flex-shrink-0 ${
                                      isChapterAccessible
                                        ? 'bg-teal-100 text-teal-700'
                                        : 'bg-slate-200 text-slate-500'
                                    }`}>
                                      {chapterNumber}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-start justify-between gap-2 mb-1">
                                        <div className="flex items-center gap-2 flex-wrap">
                                          <p className={`font-medium text-sm md:text-base ${
                                            isChapterAccessible ? 'text-slate-800' : 'text-slate-500'
                                          }`}>
                                            {chapterName}
                                          </p>
                                          {!isChapterAccessible && (
                                            <FiLock className="w-3 h-3 text-slate-400 flex-shrink-0" />
                                          )}
                                        </div>
                                        {belongsTo && (
                                          <span className="hidden md:inline text-xs text-slate-400 whitespace-nowrap">
                                            {belongsTo}
                                          </span>
                                        )}
                                      </div>
                                      {duration && (
                                        <p className="text-xs text-slate-500 mb-1">{duration}</p>
                                      )}
                                      {learningOutcome && isChapterAccessible && (
                                        <p className="hidden md:flex text-xs text-teal-600 mt-2 items-start gap-1">
                                          <span className="flex-shrink-0">📚</span>
                                          <span>{learningOutcome}</span>
                                        </p>
                                      )}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </motion.section>

              {/* Dynamic Assessments Section */}
              <AnimatePresence mode="wait">
                <motion.section
                  key={`assessments-${selectedTier}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-teal-900 to-cyan-700 rounded-xl md:rounded-2xl p-5 md:p-8 shadow-lg text-white"
                >
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
                    <MdQuiz className="text-2xl md:text-4xl text-yellow-300" />
                    Practice & Assessments
                  </h2>
                  <div className="grid gap-4 md:grid-cols-2 md:gap-6">
                    <div>
                      <div className="text-4xl md:text-5xl font-bold text-yellow-300 mb-2">
                        {currentTierContent.assessmentCount}
                      </div>
                      <p className="text-purple-200 text-sm md:text-base mb-4">Practice Questions for {currentTier.name}</p>
                      <div className="space-y-2">
                        {currentTierContent.assessments.map((assessment, idx) => (
                          <div key={idx} className="flex justify-between items-center bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                            <span className="text-xs md:text-sm">{assessment}</span>
                            <FiCheckCircle className="text-yellow-300 flex-shrink-0" />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="hidden md:flex flex-col justify-center">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                        <FiAward className="w-12 h-12 text-yellow-300 mb-4" />
                        <h3 className="text-xl font-bold mb-2">In-Video Solutions</h3>
                        <p className="text-purple-200 mb-2">{course.assessmentsSummary?.inVideoSolutions}</p>
                        <p className="text-sm text-purple-300">Step-by-step solved examples in videos</p>
                      </div>
                    </div>
                  </div>
                </motion.section>
              </AnimatePresence>

              {/* Dynamic Projects Section */}
              <AnimatePresence mode="wait">
                <motion.section
                  key={`projects-${selectedTier}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl md:rounded-2xl p-5 md:p-8 shadow-lg"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
                    <FaProjectDiagram className="text-2xl md:text-4xl text-teal-500" />
                    Hands-on Projects
                  </h2>

                  <div className="mb-4 md:mb-6 p-3 md:p-4 bg-teal-50 rounded-xl border border-teal-200">
                    <p className="text-teal-900 font-semibold text-center text-sm md:text-base">
                      {currentTierContent.projectCount} included in {currentTier.name} Tier
                    </p>
                  </div>

                  <div className="grid gap-3 md:gap-4">
                    {currentTierContent.projects.map((project, index) => {
                      const projectTypeColors = {
                        'Mini': 'bg-blue-500',
                        'Major': 'bg-teal-500',
                        'Mega': 'bg-purple-500',
                        'Capstone': 'bg-orange-500'
                      };
                      return (
                        <motion.div
                          key={project.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="border-2 border-teal-200 rounded-lg md:rounded-xl p-4 md:p-5 bg-gradient-to-br from-blue-50 to-white hover:shadow-lg transition-all"
                        >
                          <div className="flex items-start justify-between gap-3 md:gap-4">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 md:gap-3 mb-2 flex-wrap">
                                <h3 className="text-base md:text-lg font-bold text-blue-900">{project.name}</h3>
                                <span className={`${projectTypeColors[project.type]} text-white px-2 md:px-3 py-0.5 md:py-1 rounded-full text-xs font-bold`}>
                                  {project.type}
                                </span>
                              </div>
                              <p className="text-slate-600 text-xs md:text-sm">{project.description}</p>
                            </div>
                            <div className="w-8 h-8 md:w-10 md:h-10 bg-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                              <FiCode className="w-4 h-4 md:w-5 md:h-5 text-white" />
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.section>
              </AnimatePresence>

              {/* Dynamic Career Opportunities Section */}
              <AnimatePresence mode="wait">
                <motion.section
                  key={`careers-${selectedTier}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-teal-900 to-cyan-700 rounded-xl md:rounded-2xl p-5 md:p-8 shadow-lg text-white"
                >
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
                    <FaRocket className="text-2xl md:text-4xl text-yellow-300" />
                    Career Opportunities
                  </h2>
                  <p className="text-teal-100 text-sm md:text-base mb-4 md:mb-6">Available with {currentTier.name} tier</p>
                  <div className="grid gap-3 md:grid-cols-2 md:gap-4">
                    {currentTierContent.careers.map((career, index) => (
                      <motion.div
                        key={career.role}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className="bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl p-4 md:p-5 hover:bg-white/20 transition-all"
                      >
                        <div className="flex items-start gap-3">
                          <div>
                            <h3 className="text-base md:text-lg font-bold mb-1">{career.role}</h3>
                            <p className="text-teal-200 text-xs md:text-sm font-semibold">{career.salary}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              </AnimatePresence>

              {/* Dynamic Learning Outcomes */}
              <AnimatePresence mode="wait">
                <motion.section
                  key={`learning-outcomes-${selectedTier}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl md:rounded-2xl p-5 md:p-8 shadow-lg"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
                    <FiCheckCircle className="text-2xl md:text-4xl text-teal-500" />
                    Learning Outcomes
                  </h2>

                  <div className="mb-4 p-3 bg-teal-50 rounded-xl border border-teal-200">
                    <p className="text-teal-900 font-semibold text-center text-xs md:text-sm">
                      What you'll achieve with {currentTier.name}
                    </p>
                  </div>

                  <div className="space-y-4 md:space-y-6">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-3 md:mb-4">Technical Skills</h3>
                      <div className="grid gap-2 md:grid-cols-2 md:gap-3">
                        {currentTierContent.learningOutcomes.technical.map((skill, index) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.03 }}
                            className="flex items-start gap-2 md:gap-3"
                          >
                            <svg className="w-4 h-4 md:w-5 md:h-5 text-teal-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-slate-700 text-xs md:text-sm">{skill}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-3 md:mb-4">Project Experience</h3>
                      <div className="grid gap-2 md:grid-cols-2 md:gap-3">
                        {currentTierContent.learningOutcomes.projects.map((item, index) => (
                          <motion.div
                            key={item}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.03 }}
                            className="flex items-start gap-2 md:gap-3"
                          >
                            <svg className="w-4 h-4 md:w-5 md:h-5 text-purple-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-slate-700 text-xs md:text-sm">{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-3 md:mb-4">Career Readiness</h3>
                      <div className="grid gap-2 md:grid-cols-2 md:gap-3">
                        {currentTierContent.learningOutcomes.career.map((item, index) => (
                          <motion.div
                            key={item}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.03 }}
                            className="flex items-start gap-2 md:gap-3"
                          >
                            <svg className="w-4 h-4 md:w-5 md:h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-slate-700 text-xs md:text-sm">{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.section>
              </AnimatePresence>
            </div>

            {/* Right Column - Purchase Card & Skills - MOVED TO TOP ON MOBILE */}
            <div className="lg:col-span-1 order-1 lg:order-2">
              <div className="lg:sticky lg:top-20 space-y-4 md:space-y-6">
                {/* Purchase Card */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`purchase-${selectedTier}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-xl md:rounded-2xl shadow-2xl overflow-hidden"
                  >
                    <div className={`${currentHeaderColor} p-4 md:p-6 text-white`}>
                      <div className="text-center">
                        <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs md:text-sm font-bold mb-2 md:mb-3">
                          {currentTier.badge}
                        </div>
                        <h3 className="text-lg md:text-2xl font-bold mb-2">{currentTier.name} Tier</h3>
                        <div className="text-3xl md:text-5xl font-bold mb-1 md:mb-2">₹{currentTier.price}</div>
                        <div className="text-xs md:text-sm line-through opacity-75">₹{currentTier.originalPrice}</div>
                        <div className="text-sm md:text-lg font-semibold mt-1 md:mt-2">{currentTier.savings}</div>
                      </div>
                    </div>

                    <div className="p-4 md:p-8">
                      {/* <Link href="" target='_blank'> */}
                        <button className="w-full bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-700 text-white py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:shadow-2xl hover:scale-[1.04] transition-all duration-300 mb-3 md:mb-4">
                          Enrollment begins from March 15
                        </button>
                      {/* </Link> */}

                      <p className="text-center text-xs md:text-sm text-slate-500 flex items-center justify-center gap-2">
                        <FiLock className="inline text-base md:text-lg" /> 7-day money-back guarantee
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Skills Component */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="bg-white rounded-xl md:rounded-2xl shadow-2xl overflow-hidden p-4 md:p-6"
                >
                  <div className="flex items-center gap-2 mb-3 md:mb-4">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-sm md:text-lg font-bold text-slate-800">Skills You'll Master</h3>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedTier}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-wrap gap-2"
                    >
                      {currentTier.skills && currentTier.skills.map((skill, index) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2, delay: index * 0.05 }}
                          className="inline-flex items-center px-2.5 py-1 md:px-4 md:py-2 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white text-xs md:text-sm font-semibold rounded-md transition-all cursor-default shadow-sm hover:shadow-md"
                        >
                          {skill}
                        </motion.div>
                      ))}
                    </motion.div>
                  </AnimatePresence>

                  <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-slate-200">
                    <div className="flex items-start gap-2">
                      <HiSparkles className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-slate-600">
                        Add these job-ready skills to your resume upon completion.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FloatingChatbot />
      <Footer />
    </>


  );
}