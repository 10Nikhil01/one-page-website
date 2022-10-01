import React from "react";
import "./ContactForm.css";
import Image from "../Blog/acciojob.png";

function ContactForm() {
  return (
    <div className="main">
      <section className="contact" id="contact">
        <div className="first">
          <div className="img">
            <img src={Image} alt="" />
          </div>
          <div className="write">
            <h1>Contact Us</h1>
            <p>
              Feel free to give feedback or any suggestion in our feedback
              box....😊💛💛
            </p>
          </div>
        </div>
        <div className="second">
          <h1>Connect with us</h1>
          <form action="" target="_blank" method="get">
            <input
              type="text"
              id="name"
              className="input-fields"
              name="name"
              placeholder="Your name...."
              required=""
            />
            <input
              type="email"
              id="email"
              className="input-fields"
              name="email"
              placeholder="email..."
              required=""
            />
            <br />

            <textarea
              id="subject"
              name="subject"
              placeholder="write your feedback here..."
              style={{
                textAlign: "left",
                paddingTop: 40,
                height: 40,
                width: "100%",
              }}
              defaultValue={""}
            />
            <br />
            <br />
            <button type="submit" className="btn">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default ContactForm;
