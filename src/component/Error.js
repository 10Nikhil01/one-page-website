import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import './Error.css'

function Error() {
  return (
    <>
    <Navbar />
    <div className='error'>ERROR 404 - NOT FOUND</div>
    <Footer />
    </>
  )
}

export default Error