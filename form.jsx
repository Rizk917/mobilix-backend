import axios from "axios";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TfiLinkedin, TfiFacebook } from "react-icons/tfi";
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const PostForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    subject: "",
    message: "",
  });

  const form = useRef();
  const [typedWords, setTypedWords] = useState(0);
  const limit = 1000;

  const [typedWords2, setTypedWords2] = useState(0);
  const limit2 = 255;

  const [typedWords3, setTypedWords3] = useState(0);
  const limit3 = 255;

  const handleInput = (event) => {
    setTypedWords(event.target.value.length);
  };

  const handleInput1 = (event) => {
    setTypedWords2(event.target.value.length);
  };

  const handleInput2 = (event) => {
    setTypedWords3(event.target.value.length);
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        "service_9spkcxv",
        "template_kz0prl9",
        form.current,
        "X3GWKBc5fNzTxb_rm"
      );

      console.log("email sent successfully");
      form.current.reset();
    } catch (error) {
      console.log("email sending failed", error);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/contactus", formData);
      await sendEmail(e);

      setFormData({
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.log("error", err.response.data);
    }
  };

  const { firstName, lastName, email, company, subject, message } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <section class="contact-section">
        <div className="rowss">
          <h3 className="thheader">Contact</h3>
          <p className="para">Contact Me For Any Related Cyber Security Services.</p>
          <form ref={form} onSubmit={onSubmit} className="form">
            <div class="firstandlast">
              <div class="firstname">
                <label for="name">Name</label>

                <input
                  id="name"
                  type="text"
                  name="firstName"
                  className="field"
                  placeholder="Firstname"
                  required
                  value={firstName}
                  onChange={onChange}
                />
              </div>
              <div class="lastname">
                <label for="lastname">
                  {" "}
                  <br />
                </label>
                <input
                  id="lastname"
                  type="text"
                  name="lastName"
                  className="field"
                  placeholder="Lastname"
                  required
                  value={lastName}
                  onChange={onChange}
                />
              </div>
            </div>
            <br />
            <div class="name">
              <label for="name">Company Name</label>
              <input
                type="text"
                id="company"
                name="company"
                className="field"
                onInput={handleInput1}
                color="red"
                disabled={typedWords2 > limit2}
                placeholder="Company Name"
                icon="mail"
                required
                onChange={onChange}
                value={company}
                maxlength="255"
                size="87"
              />
              <div className="words">
                {typedWords2} / {limit2} max charachters
              </div>
              <br />
              <label for="Email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                className="field"
                required
                value={email}
                onChange={onChange}
                size="87"
              />
              <br />
              <br />
              <label for="name">Subject</label>
              <input
                type="text"
                id="Subject"
                name="subject"
                className="field"
                placeholder="Subject "
                icon="mail"
                onInput={handleInput2}
                required
                disabled={typedWords3 > limit3}
                onChange={onChange}
                value={subject}
                maxlength="255"
                size="87"
              />
              <div className="words">
                {typedWords3} / {limit3} max charachters
              </div>
            </div>
            <br />
            <div className="Message">
              <label>Message</label>

              <textarea
                name="message"
                placeholder="Your message"
                className="msgBox"
                onInput={handleInput}
                color="red"
                value={message}
                disabled={typedWords > limit}
                onChange={onChange}
                required
                rows="5"
                cols="40"
                maxlength="1000"
              />
            </div>
            <div className="words">
              {typedWords} / {limit}
            </div>
            <button  type="submit" value={"Submit"} className="submit">
              Submit
            </button>
            <br />
                      
          </form>
        </div>
      </section>
    </>
  );
};

export default PostForm;