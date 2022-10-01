import React from "react";
import "./BlogPost.css";
import Image from "./acciojob.png";

function BlogPost() {
  return (
    <>
      <div className="outer">
        <h2>Blog</h2>
        <div className="blog">
          <div className="text-area">
            <h3>Acciojob</h3>
            <p>Build your tech career Get a Guaranteed Job upto 40 lacs</p>
            <ul>
              <li>Learn from the best instructors</li>
              <li>Tie-up with 190+ Startups and Top MNCs</li>
              <li>Get 100% support from our dedicated placement team till you get placed</li>
            </ul>
            <a href="https://acciojob.com/" target="_blank" rel="noreferrer">
              <button>Register Now</button>
            </a>
          </div>
          <div className="image">
            <img src={Image} />
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPost;
