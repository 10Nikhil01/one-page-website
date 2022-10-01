import React,{useState} from "react";
import './Main.css'
import Navbar from "../Navbar";
import Header from "../Header";
import Product from "../Product";
import Footer from "../Footer";


function Main() {

  const[number , setNumber] = useState(0)

  return (
    <>
      <Navbar number = {number}/>
      <Header />
      <Product setNumber={setNumber} />
      <Footer />
    </>
  );
}

export default Main;
