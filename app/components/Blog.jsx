import React, { useState, useEffect } from 'react';
import { Search, X, Clock, ArrowLeft, Share2, Bookmark } from 'lucide-react';

const BlogReaderPage = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Hardcoded sample posts with rich content
  const samplePosts = [
    {
      id: 1,
      title: 'The Future of Web Development: What to Expect in 2024',
      content: `<h2>Introduction</h2>
      <p>Web development is evolving at an unprecedented pace. As we move through 2024, several key trends are reshaping how we build and interact with the web.</p>
      
      <h3>1. AI-Powered Development Tools</h3>
      <p>Artificial intelligence is no longer just a buzzword—it's becoming an integral part of the development workflow. Tools like GitHub Copilot and ChatGPT are helping developers write code faster and more efficiently.</p>
      
      <blockquote>"The best way to predict the future is to invent it." - Alan Kay</blockquote>
      
      <h3>2. Server Components and React 19</h3>
      <p>React Server Components are changing how we think about rendering. By moving computation to the server, we can deliver faster, more efficient applications with smaller bundle sizes.</p>
      
      <p>Key benefits include:</p>
      <ul>
        <li>Reduced JavaScript bundle size</li>
        <li>Improved initial page load times</li>
        <li>Better SEO performance</li>
        <li>Enhanced security for sensitive operations</li>
      </ul>
      
      <h3>3. The Rise of Edge Computing</h3>
      <p>Edge computing is bringing computation closer to users, reducing latency and improving performance. Platforms like Vercel Edge, Cloudflare Workers, and Deno Deploy are making it easier than ever to deploy globally distributed applications.</p>
      
      <p>This shift enables developers to create truly global applications that feel instant, regardless of where users are located.</p>`,
      excerpt: 'Exploring the latest trends in web development and what they mean for developers and businesses.',
      author: 'Sarah Chen',
      date: '2024-01-18',
      readTime: '8 min read',
      tags: ['Web Development', 'Technology', 'React', 'AI'],
      coverImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800'
    },
    {
      id: 2,
      title: 'Mastering TypeScript: Advanced Patterns for Production',
      content: `<h2>Why TypeScript Matters</h2>
      <p>TypeScript has become the de facto standard for large-scale JavaScript applications. Its type system helps catch errors early, improves code documentation, and enhances developer productivity.</p>
      
      <h3>Generic Constraints</h3>
      <p>One of TypeScript's most powerful features is generic constraints. They allow you to create flexible, reusable functions while maintaining type safety.</p>
      
      <pre><code>function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}</code></pre>
      
      <h3>Conditional Types</h3>
      <p>Conditional types enable you to create types that depend on other types, making your code more expressive and type-safe.</p>
      
      <blockquote>"Type safety is not about preventing all bugs—it's about catching the ones that matter most."</blockquote>
      
      <h3>Utility Types</h3>
      <p>TypeScript provides several built-in utility types that make common type transformations easier:</p>
      <ul>
        <li><strong>Partial&lt;T&gt;</strong> - Makes all properties optional</li>
        <li><strong>Required&lt;T&gt;</strong> - Makes all properties required</li>
        <li><strong>Pick&lt;T, K&gt;</strong> - Creates a type with selected properties</li>
        <li><strong>Omit&lt;T, K&gt;</strong> - Creates a type without selected properties</li>
      </ul>
      
      <p>Understanding and leveraging these patterns will significantly improve your TypeScript codebase's maintainability and scalability.</p>`,
      excerpt: 'Deep dive into advanced TypeScript patterns that will level up your development skills.',
      author: 'Michael Rodriguez',
      date: '2024-01-15',
      readTime: '12 min read',
      tags: ['TypeScript', 'Programming', 'Best Practices'],
      coverImage: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800'
    },
    {
      id: 3,
      title: 'Building Scalable APIs: A Complete Guide',
      content: `<h2>The Foundation of Great APIs</h2>
      <p>APIs are the backbone of modern applications. Whether you're building a mobile app, web service, or IoT platform, a well-designed API is crucial for success.</p>
      
      <h3>RESTful Design Principles</h3>
      <p>REST (Representational State Transfer) remains the most popular architectural style for APIs. Key principles include:</p>
      
      <ul>
        <li>Stateless communication</li>
        <li>Resource-based URLs</li>
        <li>Standard HTTP methods (GET, POST, PUT, DELETE)</li>
        <li>Consistent error handling</li>
      </ul>
      
      <h3>Authentication and Security</h3>
      <p>Security should never be an afterthought. Implement proper authentication and authorization from day one.</p>
      
      <blockquote>"Security is not a product, but a process." - Bruce Schneier</blockquote>
      
      <h3>Performance Optimization</h3>
      <p>Fast APIs lead to happy users. Consider implementing:</p>
      <ul>
        <li>Caching strategies (Redis, CDN)</li>
        <li>Database query optimization</li>
        <li>Pagination for large datasets</li>
        <li>Rate limiting to prevent abuse</li>
      </ul>
      
      <h3>Documentation</h3>
      <p>Great documentation can make or break API adoption. Tools like Swagger/OpenAPI make it easy to create interactive documentation that developers love.</p>
      
      <p>Remember: an API is only as good as its documentation. Invest time in making it clear, comprehensive, and up-to-date.</p>`,
      excerpt: 'Learn how to design, build, and scale APIs that can handle millions of requests.',
      author: 'David Kim',
      date: '2024-01-12',
      readTime: '10 min read',
      tags: ['API', 'Backend', 'Node.js', 'Architecture'],
      coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800'
    },
    {
  id: 8,
  title: 'How to Find Your First Job as a Student: Complete Career Guide 2024',
  content: `<h2>The Ultimate Guide to Landing Your First Job</h2>
  <p>Finding your first job as a student is a crucial milestone in your career journey. Whether you're looking for internships, part-time positions, or entry-level opportunities after graduation, the job search process can seem daunting. This comprehensive guide will walk you through proven strategies to help you secure the right job and kickstart your professional career in 2024.</p>
  
  <h3>1. Understanding the Current Job Market for Students</h3>
  <p>The job market has evolved significantly, especially post-pandemic. Remote work opportunities have increased, and employers are placing greater emphasis on skills over traditional qualifications. Students with digital literacy, communication skills, and adaptability are in high demand. According to recent surveys, industries like technology, healthcare, digital marketing, and e-commerce are actively hiring students and fresh graduates.</p>
  
  <p>Understanding which sectors are growing helps you target your job search effectively. Research companies in your field of interest, follow industry trends, and identify skills that employers are seeking. This knowledge gives you a competitive advantage when applying for positions.</p>
  
  <h3>2. Crafting a Winning Resume and Cover Letter</h3>
  <p>Your resume is often the first thing recruiters see, so it needs to make a strong impression. As a student, focus on your academic achievements, relevant coursework, projects, internships, volunteer work, and extracurricular activities. Use clear formatting with bullet points and action verbs like "developed," "managed," "created," and "led."</p>
  
  <p>Keep your resume to one page and tailor it for each job application. Highlight skills that match the job description. Include technical skills, software proficiency, and soft skills like teamwork and problem-solving. Don't forget to add a professional email address and LinkedIn profile link.</p>
  
  <p>Your cover letter should complement your resume by telling your story. Explain why you're interested in the position and how your background makes you a great fit. Personalize each cover letter—generic templates are easy to spot and often get rejected.</p>
  
  <blockquote>"Opportunities don't happen. You create them." - Chris Grosser</blockquote>
  
  <h3>3. Best Job Search Platforms for Students</h3>
  <p>Knowing where to look for jobs is half the battle. Popular job portals for students include:</p>
  <ul>
    <li><strong>LinkedIn</strong> - The leading professional networking platform with millions of job listings</li>
    <li><strong>Indeed</strong> - Aggregates jobs from thousands of websites in one place</li>
    <li><strong>Glassdoor</strong> - Offers job listings plus company reviews and salary information</li>
    <li><strong>Internshala</strong> - Specifically designed for student internships and entry-level jobs</li>
    <li><strong>AngelList</strong> - Perfect for students interested in startup opportunities</li>
    <li><strong>Handshake</strong> - College-focused job board connecting students with employers</li>
  </ul>
  
  <p>Set up job alerts on these platforms to receive notifications when relevant positions are posted. Many companies also post openings directly on their career pages, so check websites of organizations you're interested in regularly.</p>
  
  <h3>4. Building Your Professional Network</h3>
  <p>Networking is one of the most effective ways to find job opportunities. Studies show that 70-80% of jobs are filled through networking rather than traditional applications. Attend career fairs, industry conferences, webinars, and campus recruitment events. Connect with alumni from your college who are working in your desired field—they can provide valuable insights and referrals.</p>
  
  <p>Optimize your LinkedIn profile with a professional photo, compelling headline, and detailed experience section. Engage with industry content, join relevant groups, and don't hesitate to reach out to professionals for informational interviews. Building genuine relationships can open doors to opportunities that aren't publicly advertised.</p>
  
  <h3>5. Developing In-Demand Skills</h3>
  <p>Employers value candidates who continuously learn and improve. Identify skills that are in high demand in your field and invest time in developing them. Online learning platforms like Coursera, Udemy, edX, and LinkedIn Learning offer affordable courses in areas like:</p>
  <ul>
    <li>Data analysis and Excel proficiency</li>
    <li>Digital marketing and SEO</li>
    <li>Programming languages (Python, JavaScript, Java)</li>
    <li>Graphic design and video editing</li>
    <li>Content writing and communication</li>
    <li>Project management and leadership</li>
  </ul>
  
  <p>Certifications from recognized platforms add credibility to your resume and demonstrate your commitment to professional development. Even free courses can significantly enhance your skill set and make you more attractive to employers.</p>
  
  <h3>6. Mastering the Interview Process</h3>
  <p>Getting an interview is a major achievement, but preparation is essential to convert it into a job offer. Research the company thoroughly—understand their products, services, culture, recent news, and competitors. Prepare answers to common interview questions like "Tell me about yourself," "What are your strengths and weaknesses," and "Why do you want to work here?"</p>
  
  <p>Practice the STAR method (Situation, Task, Action, Result) to structure your responses to behavioral questions. Prepare thoughtful questions to ask the interviewer about the role, team, and company culture. Dress professionally, arrive early (or log in early for virtual interviews), and maintain good body language throughout.</p>
  
  <p>After the interview, send a thank-you email within 24 hours expressing your appreciation and reiterating your interest in the position. This small gesture can make a significant difference.</p>
  
  <h3>7. Building an Online Portfolio</h3>
  <p>A portfolio showcases your work and abilities in a tangible way. Depending on your field, create a website or use platforms like GitHub (for developers), Behance (for designers), Medium (for writers), or YouTube (for video creators). Include your best projects, case studies, and examples that demonstrate your skills and creativity.</p>
  
  <p>An impressive portfolio can set you apart from other candidates who only have a resume. It proves that you can deliver results and gives employers a preview of what you can contribute to their organization.</p>
  
  <h3>8. Persistence and Patience Pay Off</h3>
  <p>Job searching can be challenging, and rejection is part of the process. Don't get discouraged if you don't hear back immediately or receive rejections. Each application is a learning opportunity. Ask for feedback when possible, refine your approach, and keep applying. Success often comes to those who remain persistent and positive.</p>
  
  <p>Consider starting with internships or freelance projects to gain experience if full-time positions are competitive. These opportunities build your resume, expand your network, and often lead to permanent positions.</p>
  
  <h2>Final Thoughts</h2>
  <p>Finding your first job as a student requires strategy, preparation, and persistence. By building a strong resume, leveraging job search platforms, networking actively, developing relevant skills, and preparing thoroughly for interviews, you significantly increase your chances of landing the right opportunity. Remember, every successful professional started exactly where you are now. Stay focused, keep learning, and your ideal job is within reach.</p>`,
  excerpt: 'Comprehensive guide for students on how to find and secure their first job with proven strategies, top platforms, and expert career advice for 2024.',
  author: 'Jennifer Matthews',
  date: '2024-01-25',
  readTime: '10 min read',
  tags: ['Career Advice', 'Job Search', 'Students', 'Interview Tips', 'Resume', 'Career Development'],
  coverImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800'
},
    {
      id: 4,
      title: 'CSS Grid vs Flexbox: When to Use What',
      content: `<h2>Two Powerful Layout Systems</h2>
      <p>CSS Grid and Flexbox are both powerful layout systems, but they excel in different scenarios. Understanding when to use each is key to creating maintainable layouts.</p>
      
      <h3>Flexbox: The One-Dimensional Champion</h3>
      <p>Flexbox is perfect for laying out items in a single dimension—either a row or a column. It excels at:</p>
      
      <ul>
        <li>Navigation bars and menus</li>
        <li>Card layouts with equal heights</li>
        <li>Centering content vertically and horizontally</li>
        <li>Distributing space between items</li>
      </ul>
      
      <h3>CSS Grid: The Two-Dimensional Powerhouse</h3>
      <p>CSS Grid shines when you need to control both rows and columns simultaneously. Use it for:</p>
      
      <ul>
        <li>Page layouts with header, sidebar, and footer</li>
        <li>Image galleries with complex arrangements</li>
        <li>Dashboard layouts</li>
        <li>Magazine-style layouts</li>
      </ul>
      
      <blockquote>"The best layout system is the one that solves your specific problem most elegantly."</blockquote>
      
      <h3>Combining Both</h3>
      <p>In modern web development, you'll often use both together. For example, use Grid for the overall page structure and Flexbox for component-level layouts.</p>
      
      <p>The key is understanding that these aren't competing technologies—they're complementary tools in your CSS toolkit.</p>`,
      excerpt: 'A practical guide to choosing between CSS Grid and Flexbox for your layouts.',
      author: 'Emma Thompson',
      date: '2024-01-10',
      readTime: '6 min read',
      tags: ['CSS', 'Web Design', 'Frontend', 'Layout'],
      coverImage: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800'
    }
  ];

  // Initialize posts (simulate API call)
  useEffect(() => {
    setIsLoading(true);
    // Simulate API delay
    setTimeout(() => {
      // In a real app: fetch('/api/posts').then(res => res.json()).then(setPosts)
      setPosts(samplePosts);
      setFilteredPosts(samplePosts);
      setIsLoading(false);
    }, 800);
  }, []);

  // Search functionality
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      setFilteredPosts(filtered);
    }
  }, [searchQuery, posts]);

  const handlePostClick = async (post) => {
    // In a real app: fetch(`/api/posts/${post.id}`).then(res => res.json()).then(setSelectedPost)
    setSelectedPost(post);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToList = () => {
    setSelectedPost(null);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-teal-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-teal-600 font-medium">Loading posts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white border-b border-teal-100 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {selectedPost ? (
              <button
                onClick={handleBackToList}
                className="flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to posts
              </button>
            ) : (
              <h1 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                Blog
              </h1>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {!selectedPost ? (
          <>
            {/* Blog Section Heading */}
            <div className="mb-8 max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-2 tracking-tight">Reads</h2>
              <p className="text-lg text-gray-500">Explore our latest articles, guides, and insights</p>
            </div>
            {/* Search Bar */}
            <div className="mb-8 max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-teal-500 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-teal-100 focus:border-teal-400 focus:outline-none bg-white shadow-sm transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>

            {/* Posts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <button
                    key={post.id}
                    type="button"
                    onClick={() => handlePostClick(post)}
                    className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all cursor-pointer border border-teal-50 hover:border-teal-200 group flex flex-col text-left p-0 focus:outline-none"
                    aria-label={`Read more about ${post.title}`}
                  >
                    <div
                      className="aspect-video relative overflow-hidden"
                      style={{
                        backgroundImage: `url(${post.coverImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-blue-500/20"></div>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <h2 className="text-2xl font-bold text-white px-6 text-center drop-shadow-lg">
                          {post.title}
                        </h2>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3 text-sm text-gray-500">
                          <span className="font-medium text-teal-600">{post.author}</span>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2 flex-wrap mt-auto">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-gradient-to-r from-teal-100 to-blue-100 text-teal-700 rounded-full text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </button>
                ))
              ) : (
                <div className="col-span-3 text-center py-16">
                  <p className="text-gray-500 text-lg">No posts found matching your search.</p>
                </div>
              )}
            </div>
          </>
        ) : (
          /* Article View */
          <article className="max-w-3xl mx-auto">
            {/* Article Header */}
            <div className="mb-8">
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {selectedPost.title}
              </h1>
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center text-white font-bold text-lg">
                    {selectedPost.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{selectedPost.author}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span>{selectedPost.date}</span>
                      <span>•</span>
                      <span>{selectedPost.readTime}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-teal-50 rounded-full transition-colors">
                    <Bookmark className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-teal-50 rounded-full transition-colors">
                    <Share2 className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
              <div className="flex gap-2 flex-wrap mb-6">
                {selectedPost.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-gradient-to-r from-teal-100 to-blue-100 text-teal-700 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none"
              style={{
                '--tw-prose-body': '#374151',
                '--tw-prose-headings': '#111827',
                '--tw-prose-links': '#0d9488',
                '--tw-prose-bold': '#111827',
                '--tw-prose-quotes': '#0d9488',
                '--tw-prose-code': '#0d9488',
              }}
            >
              <div 
                dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                className="article-content"
              />
            </div>

            <style>{`
              .article-content h2 {
                font-size: 2rem;
                font-weight: 700;
                margin-top: 2.5rem;
                margin-bottom: 1.5rem;
                color: #111827;
              }
              .article-content h3 {
                font-size: 1.5rem;
                font-weight: 600;
                margin-top: 2rem;
                margin-bottom: 1rem;
                color: #1f2937;
              }
              .article-content p {
                font-size: 1.125rem;
                line-height: 1.8;
                margin-bottom: 1.5rem;
                color: #374151;
              }
              .article-content ul, .article-content ol {
                margin: 1.5rem 0;
                padding-left: 2rem;
              }
              .article-content li {
                margin-bottom: 0.75rem;
                font-size: 1.125rem;
                line-height: 1.8;
                color: #374151;
              }
              .article-content blockquote {
                border-left: 4px solid #0d9488;
                padding-left: 1.5rem;
                margin: 2rem 0;
                font-style: italic;
                font-size: 1.25rem;
                color: #0d9488;
              }
              .article-content pre {
                background: #f3f4f6;
                padding: 1.5rem;
                border-radius: 0.75rem;
                overflow-x: auto;
                margin: 1.5rem 0;
              }
              .article-content code {
                background: #f3f4f6;
                padding: 0.25rem 0.5rem;
                border-radius: 0.25rem;
                font-size: 0.9em;
                color: #0d9488;
              }
              .article-content pre code {
                background: transparent;
                padding: 0;
              }
              .article-content strong {
                font-weight: 600;
                color: #111827;
              }
            `}</style>
          </article>
        )}
      </main>
    </div>
  );


  
};



export default BlogReaderPage;