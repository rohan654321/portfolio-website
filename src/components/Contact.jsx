import axios from "axios";
import React, { useState } from "react";
import "./Contact.css";
// const CONTACT = {
//   address: "Bangalore, India",
//   phoneNo: "+91 8617461530 ",
//   email: "mondalrohan201@gmail.com",
// };

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  let data = {name, email,message}

  const dropMessage = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("https://portfolio-backend-gaje.onrender.com/data", data);
      console.log(response.data.message);
      alert("Message sent successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to send the message. Please try again later.");
    } finally {
      setLoading(false);
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div className="contact" id="contact">
      <form onSubmit={dropMessage} className="contact-form">
        <h2>Contact Me</h2>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            required
          />
        </div>
        <div>
          <label>Message</label>
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
      {/* <div className="border-b border-neutral-900 pb-20">
            <h1 className="my-10 text-center text-4xl">Get In Touch</h1>
            <div className="text-center tracking-tighter">
                <p  className="my-4">{CONTACT.address}</p>
                <p  className="my-4">{CONTACT.phoneNo}</p>
                <a  href="#" className="border-b">{CONTACT.email}</a>
            </div>
        </div> */}
    </div>
    
  );
};

export default Contact;
