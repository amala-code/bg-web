'use client';

import { useState } from 'react';
import { FiTarget, FiBookOpen, FiCheckCircle, FiLock, FiAward, FiCode, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { FaChalkboardTeacher, FaProjectDiagram, FaRocket } from 'react-icons/fa';
import { MdQuiz, MdWorkspacePremium } from 'react-icons/md';
import { HiSparkles, HiLightningBolt, HiCheckCircle } from 'react-icons/hi';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer.tsx';

// Tier-specific styling configuration
const tierStyles = {
  basic: {
    gradient: 'from-blue-500 to-blue-600',
    bgGradient: 'bg-gradient-to-r from-blue-500 to-blue-600',
    border: 'border-blue-500',
    text: 'text-blue-600',
    bgLight: 'bg-blue-50',
    hoverBg: 'hover:bg-blue-100',
    ring: 'ring-blue-500',
    shadow: 'shadow-blue-500/50'
  },
  intermediate: {
    gradient: 'from-teal-500 to-teal-600',
    bgGradient: 'bg-gradient-to-r from-teal-500 to-teal-600',
    border: 'border-teal-500',
    text: 'text-teal-600',
    bgLight: 'bg-teal-50',
    hoverBg: 'hover:bg-teal-100',
    ring: 'ring-teal-500',
    shadow: 'shadow-teal-500/50'
  },
  advanced: {
    gradient: 'from-purple-600 via-pink-600 to-purple-700',
    bgGradient: 'bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700',
    border: 'border-purple-600',
    text: 'text-purple-600',
    bgLight: 'bg-purple-50',
    hoverBg: 'hover:bg-purple-100',
    ring: 'ring-purple-600',
    shadow: 'shadow-purple-600/50'
  }
};

// Tier-specific content configuration
const tierContent = {
  basic: {
    assessments: [
      'Weekly Quizzes',
      'Module End Tests',
      'Basic Coding Challenges',
      'Final Course Assessment'
    ],
    assessmentCount: '150+',
    projects: [
      { name: 'Data Exploration Project', type: 'Mini', description: 'Explore and analyze datasets' },
      { name: 'Python Practice Projects', type: 'Mini', description: 'Build coding fundamentals' },
      { name: 'Visualization Dashboard', type: 'Mini', description: 'Create basic charts' }
    ],
    projectCount: '3 Mini Projects',
    careers: [
      { role: 'Junior Data Analyst', salary: '$45k - $65k', icon: '📊' },
      { role: 'Data Entry Specialist', salary: '$35k - $50k', icon: '⌨️' },
      { role: 'Business Intelligence Trainee', salary: '$40k - $60k', icon: '📈' }
    ]
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
      { name: 'YouTube Analytics', type: 'Major', description: 'Analyze trending video patterns' },
      { name: 'Social Media Ad Performance', type: 'Major', description: 'Predict ad click-through rates' },
      { name: 'Sports Analytics Dashboard', type: 'Mini', description: 'Player similarity finder' },
      { name: 'Data Visualization Portfolio', type: 'Mini', description: 'Interactive Streamlit apps' },
      { name: 'Statistical Analysis Project', type: 'Mini', description: 'A/B testing implementation' }
    ],
    projectCount: '2 Major + 3 Mini Projects',
    careers: [
      { role: 'Data Analyst', salary: '$60k - $85k', icon: '📊' },
      { role: 'Junior Data Scientist', salary: '$70k - $95k', icon: '🔬' },
      { role: 'Business Intelligence Analyst', salary: '$65k - $90k', icon: '📈' },
      { role: 'ML Operations Associate', salary: '$65k - $90k', icon: '⚙️' }
    ]
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
      { name: 'YouTube Analytics', type: 'Major', description: 'Complete trend analysis system' },
      { name: 'Social Media Ad Performance', type: 'Major', description: 'ML-powered prediction engine' },
      { name: 'Medical Imaging Classifier', type: 'Mega', description: 'CNN with transfer learning' },
      { name: 'Hybrid Recommendation System', type: 'Mega', description: 'Deep learning recommendations' },
      { name: 'AI Career Coach', type: 'Capstone', description: 'NLP-powered career advisor' },
      { name: 'Bias & Fairness Dashboard', type: 'Capstone', description: 'Ethical AI monitoring' },
      { name: 'Ethical AI Investment Analyzer', type: 'Capstone', description: 'ESG-based recommendations' },
      { name: 'AI Nutritionist Specialist', type: 'Capstone', description: 'Personalized meal planning' },
      { name: 'Custom Industry Project', type: 'Capstone', description: 'Your choice domain' },
      { name: 'Sports Analytics Platform', type: 'Mini', description: 'Player comparison system' }
    ],
    projectCount: '2 Major + 2 Mega + 5 Capstone + 1 Mini',
    careers: [
      { role: 'Senior Data Scientist', salary: '$120k - $180k', icon: '🚀' },
      { role: 'Machine Learning Engineer', salary: '$130k - $200k', icon: '🤖' },
      { role: 'AI Research Scientist', salary: '$140k - $220k', icon: '🔬' },
      { role: 'Data Science Manager', salary: '$150k - $220k', icon: '👔' },
      { role: 'Solutions Architect', salary: '$140k - $200k', icon: '🏗️' },
      { role: 'Technical Lead - AI/ML', salary: '$160k - $240k', icon: '⭐' },
      { role: 'Independent AI Consultant', salary: '$150k+', icon: '💼' }
    ]
  }
};

// Course data (unchanged from original)
const courseData = {
  'data-science': {
    "courseId": "data-science-mastery",
    "thumbnail": "/images/courses/112.png",
    "title": "Data Science Mastery",
    "subtitle": "Your complete journey from beginner to job-ready data scientist",
    "description": "Master data science from scratch with our industry-aligned program. Progress through carefully structured modules combining Python, SQL, Statistics, and Machine Learning. Each lesson includes video + written guide for maximum learning.",
    duration: '120+ Hours',
    students: '15,420',
    rating: '4.9',
    price: '$499',
    level: 'Beginner to Advanced',
    language: 'English',
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
      basic: {
        name: "Basic",
        price: "6999",
        originalPrice: "9000",
        savings: "Save 50%",
        badge: "Starter",
        description: "Perfect starting point for aspiring data scientists",
        estimatedTime: "1 Month",
        skillLevel: "Beginner",
        chaptersIncluded: "8 Core Chapters",
        projectsIncluded: "Projects not included",
        questionsIncluded: "Questions not included",
        "jobAssistanceCommunity": "Basic community access",
        "SoftSkillsTraining": "Not Included",
        "Certificate": "Yes, Shareable on LinkedIn",
        recommended: false,
        skills: ["Python Programming", "Data Manipulation"]
      },
      intermediate: {
        name: "Intermediate",
        price: "10,999",
        originalPrice: "13900",
        savings: "Save 50%",
        badge: "Most Popular",
        description: "Build practical skills with hands-on projects",
        estimatedTime: "2 Months",
        skillLevel: "Intermediate",
        chaptersIncluded: "15 Chapters",
        projectsIncluded: "5 Mini + 2 Major",
        questionsIncluded: "200+ Questions",
        "jobAssistanceCommunity": "Basic Community access",
        "SoftSkillsTraining": "Soft skills Questionnaire",
        "Certificate": "Yes, Shareable on LinkedIn",
        recommended: false,
        skills: ["Python Programming", "Data Manipulation", "Data Visualization", "Statistics Fundamentals"]
      },
      advanced: {
        name: "Advanced",
        price: "14,999",
        originalPrice: "29900",
        savings: "Save 50%",
        badge: "Career Ready",
        description: "Complete job-ready program with interview prep",
        estimatedTime: "3 Months",
        skillLevel: "Advanced",
        chaptersIncluded: "All 25 Chapters",
        projectsIncluded: "10 Mini + 3 Capstone",
        "questionsIncluded": "500+ Questions",
        "jobAssistanceCommunity": "Premium Community Access",
        "SoftSkillsTraining": "Soft skills Questionnaire",
        "Certificate": "Yes, Shareable on LinkedIn",
        "recommended": true,
        skills: ["Python Programming", "Data Manipulation", "Data Visualization", "Statistics Fundamentals", "Machine Learning", "SQL for Data Science"]
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
  }
    // ... rest of the courseData remains the same
  }
};

export default function CourseDetailPage({ params }) {
  const [selectedTier, setSelectedTier] = useState('advanced');
  const [expandedModule, setExpandedModule] = useState(null);

  const course = courseData[params.id];

  if (!course) {
    return <div>Course not found</div>;
  }

  const currentTier = course.pricingTiers[selectedTier];
  const currentTierStyle = tierStyles[selectedTier];
  const currentTierContent = tierContent[selectedTier];

  const toggleModule = (index) => {
    setExpandedModule(expandedModule === index ? null : index);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 min-h-[700px]">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-100 bg-teal-400 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 py-20">
            <a href="/courses" className="inline-flex items-center text-teal-200 hover:text-white transition-colors mb-12">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Courses
            </a>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-teal-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-teal-100">
                  <HiSparkles className="text-xl" />
                  <span className="font-semibold">Most Comprehensive Course</span>
                </div>

                <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                  {course.title}
                </h1>
                <p className="text-xl text-teal-100">{course.subtitle}</p>
                <p className="text-lg text-slate-200 leading-relaxed">{course.description}</p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {course.rating} Rating
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white">
                    <FiBookOpen className="w-5 h-5" />
                    {course.courseOverview.totalChapters} Chapters
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white">
                    <FaProjectDiagram className="w-5 h-5" />
                    {course.courseOverview.totalProjects} Projects
                  </div>
                </div>
              </div>

              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl">
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

        {/* Pricing Tier Selection */}
        <div className="relative z-10 -mt-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl shadow-2xl p-8"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-blue-900 mb-3">Choose Your Learning Path</h2>
                <p className="text-slate-600 text-lg">Select the tier that matches your goals - watch content update dynamically!</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {Object.entries(course.pricingTiers).map(([key, tier]) => {
                  const style = tierStyles[key];
                  return (
                    <motion.div
                      key={key}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedTier(key)}
                      className={`relative cursor-pointer rounded-3xl p-7 border-3 transition-all flex flex-col justify-between shadow-lg ${
                        selectedTier === key
                          ? `border-4 ${style.border} ${style.bgLight} ${style.shadow} shadow-2xl scale-[1.02]`
                          : 'border-2 border-slate-200 bg-white hover:border-slate-300 hover:shadow-xl'
                      }`}
                    >
                      {tier.recommended && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <div className={`${style.bgGradient} text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-md`}>
                            <HiSparkles /> {tier.badge}
                          </div>
                        </div>
                      )}
                      {!tier.recommended && tier.badge && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <div className={`${key === 'advanced' ? style.bgGradient : 'bg-blue-900'} text-white px-4 py-1 rounded-full text-sm font-bold shadow-md`}>
                            {tier.badge}
                          </div>
                        </div>
                      )}

                      <div className="text-center mb-2">
                        <h3 className="text-2xl font-extrabold text-blue-900 mb-2 tracking-tight">{tier.name}</h3>
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <span className={`text-4xl font-bold ${style.text}`}>₹{tier.price}</span>
                          {tier.originalPrice && (
                            <span className="text-sm text-slate-400 line-through">₹{tier.originalPrice}</span>
                          )}
                        </div>
                        <div className={`${style.text} font-semibold text-sm mb-2`}>{tier.savings}</div>
                      </div>

                      <div className={`mb-3 px-3 py-2 rounded-lg ${style.bgLight} ${style.text} font-medium text-base shadow-sm border ${style.border}`}>
                        {tier.description}
                      </div>

                      <div className="flex items-center justify-center gap-2 mb-3">
                        <span className={`inline-block ${style.bgLight} ${style.text} px-3 py-1 rounded-full text-xs font-semibold`}>
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
                      </div>

                      {selectedTier === key && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute top-4 right-4"
                        >
                          <div className={`w-8 h-8 ${style.bgGradient} rounded-full flex items-center justify-center shadow-lg`}>
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-12">
              {/* Dynamic Assessments Section */}
              <AnimatePresence mode="wait">
                <motion.section
                  key={`assessments-${selectedTier}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-2xl p-8 shadow-lg"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 ${currentTierStyle.bgGradient} rounded-xl flex items-center justify-center`}>
                      <MdQuiz className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-blue-900">Practice & Assessments</h2>
                      <p className={`text-sm ${currentTierStyle.text} font-semibold`}>{currentTier.name} Tier</p>
                    </div>
                  </div>

                  <div className={`${currentTierStyle.bgLight} rounded-xl p-6 mb-6`}>
                    <div className="text-center mb-4">
                      <div className={`text-5xl font-bold ${currentTierStyle.text} mb-2`}>
                        {currentTierContent.assessmentCount}
                      </div>
                      <p className="text-slate-700 font-medium">Total Practice Questions</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    {currentTierContent.assessments.map((assessment, index) => (
                      <motion.div
                        key={assessment}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-start gap-3 p-4 rounded-lg bg-slate-50 border border-slate-200"
                      >
                        <div className={`w-6 h-6 ${currentTierStyle.bgGradient} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-slate-700 text-sm font-medium">{assessment}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              </AnimatePresence>

              {/* Dynamic Projects Section */}
              <AnimatePresence mode="wait">
                <motion.section
                  key={`projects-${selectedTier}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-2xl p-8 shadow-lg"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 ${currentTierStyle.bgGradient} rounded-xl flex items-center justify-center`}>
                      <FaProjectDiagram className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-blue-900">Hands-on Projects</h2>
                      <p className={`text-sm ${currentTierStyle.text} font-semibold`}>{currentTierContent.projectCount}</p>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    {currentTierContent.projects.map((project, index) => (
                      <motion.div
                        key={project.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className={`p-5 rounded-xl border-2 ${currentTierStyle.border} ${currentTierStyle.bgLight} hover:shadow-lg transition-all`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-lg font-bold text-blue-900">{project.name}</h3>
                              <span className={`${currentTierStyle.bgGradient} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                                {project.type}
                              </span>
                            </div>
                            <p className="text-slate-600 text-sm">{project.description}</p>
                          </div>
                          <div className={`w-10 h-10 ${currentTierStyle.bgGradient} rounded-lg flex items-center justify-center flex-shrink-0`}>
                            <FiCode className="w-5 h-5 text-white" />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              </AnimatePresence>

              {/* Dynamic Career Opportunities Section */}
              <AnimatePresence mode="wait">
                <motion.section
                  key={`careers-${selectedTier}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                  className={`${currentTierStyle.bgGradient} rounded-2xl p-8 shadow-lg text-white`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                      <FaRocket className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold">Career Opportunities</h2>
                      <p className="text-white/80 text-sm font-semibold">Available with {currentTier.name} Tier</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    {currentTierContent.careers.map((career, index) => (
                      <motion.div
                        key={career.role}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className="bg-white/10 backdrop-blur-md rounded-xl p-5 hover:bg-white/20 transition-all"
                      >
                        <div className="flex items-start gap-3">
                          <span className="text-3xl">{career.icon}</span>
                          <div>
                            <h3 className="text-lg font-bold mb-1">{career.role}</h3>
                            <p className="text-white/80 text-sm font-semibold">{career.salary}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-white/10 backdrop-blur-md rounded-xl border-2 border-white/20">
                    <p className="text-sm text-white/90 text-center">
                      💡 Complete the {currentTier.name} tier to qualify for these career paths with confidence!
                    </p>
                  </div>
                </motion.section>
              </AnimatePresence>
            </div>

            {/* Right Column - Purchase Card & Skills */}
            <div className="lg:col-span-1">
              <div className="sticky top-20 space-y-6">
                {/* Purchase Card with Dynamic Styling */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`purchase-${selectedTier}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-2xl shadow-2xl overflow-hidden"
                  >
                    <div className={`${currentTierStyle.bgGradient} p-6 text-white`}>
                      <div className="text-center">
                        <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-bold mb-3">
                          {currentTier.badge}
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{currentTier.name} Tier</h3>
                        <div className="text-5xl font-bold mb-2">₹{currentTier.price}</div>
                        <div className="text-sm line-through opacity-75">₹{currentTier.originalPrice}</div>
                        <div className="text-lg font-semibold mt-2">{currentTier.savings}</div>
                      </div>
                    </div>

                    <div className="p-8">
                      <button className={`w-full ${currentTierStyle.bgGradient} text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 mb-4`}>
                        Enroll Now
                      </button>

                      <p className="text-center text-sm text-slate-500 mb-6 flex items-center justify-center gap-2">
                        <FiLock className="inline text-lg" /> 7-day money-back guarantee
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Skills Component with Dynamic Styling */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`skills-${selectedTier}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-2xl shadow-2xl overflow-hidden p-6"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <div className={`w-6 h-6 ${currentTierStyle.bgGradient} rounded-full flex items-center justify-center`}>
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-slate-800">Skills You'll Master</h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {currentTier.skills && currentTier.skills.map((skill, index) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2, delay: index * 0.05 }}
                          className={`inline-flex items-center px-4 py-2 ${currentTierStyle.bgGradient} text-white text-sm font-semibold rounded-md transition-all cursor-default shadow-sm hover:shadow-md`}
                        >
                          {skill}
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-4 pt-4 border-t border-slate-200">
                      <div className="flex items-start gap-2">
                        <HiSparkles className={`w-5 h-5 ${currentTierStyle.text} flex-shrink-0 mt-0.5`} />
                        <p className="text-xs text-slate-600">
                          Add these job-ready skills directly to your resume upon course completion.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}