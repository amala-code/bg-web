'use client';
import { use } from 'react';
import BlogReaderPage from '../components/Blog';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer.tsx';
import FloatingChatbot from '../FloatingChatbot.jsx';

export default function Page() {

  return <>
  <Navbar/>
  <BlogReaderPage />;
        <FloatingChatbot/>
  
  <Footer/>
  
  </>
}
