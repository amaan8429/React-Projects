import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <main>
        <h1>Contact Us</h1>
        <form action="">
          <div className="name">
            <label>Name</label>
            <input type="text" required placeholder="Abc" />
          </div>
          <div className="email">
            <label>Email</label>
            <input type="text" required placeholder="Abc@xyz.com" />
          </div>
          <div className="message">
            <label>Your Message</label>
            <input type="text" required placeholder="Please leave a message" />
          </div>
          <button type="submit" className="btn">
            Send
          </button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
