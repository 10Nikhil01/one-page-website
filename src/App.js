import React from "react";
import "./App.css";
import Main from "./component/Main/Main";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Home from "./component/Home/Home";
import Blog from "./component/Blog/Blog";
import Contact from "./component/Contact/Contact";
import Error from "./component/Error";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
