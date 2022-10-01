import React from 'react';
import Navbar from "../Navbar";
import Header from "../Header";
import Footer from "../Footer";
import BlogPost from './BlogPost';

function Blog() {
  return (
    <>
      <Navbar />
      <Header />
      <BlogPost />
      <Footer />
    </>
  )
}

export default Blog