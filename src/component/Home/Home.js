import React,{useState} from "react";
import'./Home.css'
import Navbar from "../Navbar";
import Header from "../Header";
import BlogPost from "../Blog/BlogPost";
import ContactForm from "../Contact/ContactForm";
import Footer from "../Footer";
import Product from "../Product";

function Home() {
  const[number , setNumber] = useState(0)
  return (
    <>
      <Navbar  number = {number}/>
      <Header />
      <Product setNumber={setNumber} />
      <BlogPost />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Home;
