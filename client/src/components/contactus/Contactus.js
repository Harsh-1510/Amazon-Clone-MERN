import React, { useState } from 'react';
import './contactus.css';

const ContactUsPage = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement logic to handle form submission (e.g., send email)
    console.log(`Email submitted: ${email}`);
    setEmail('');
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <p>Thank you for your interest in contacting Amazon.com!</p>
      <p>
        If you have any questions, concerns, or feedback, please feel free to
        reach out to our customer service team. We are here to assist you and
        provide the best possible support.
      </p>
      <form onSubmit={handleSubmit}>
        <h2>Email Support</h2>
        <p>
          If you prefer to reach out to us via email, please enter your email
          address below and we will respond to your inquiry as soon as possible:
        </p>
        <input
          type="email"
          value={email}
          onChange={handleChange}
          placeholder="Enter your email address"
          required
        />
        <button type="submit">Submit</button>
      </form>
      <p>
        Thank you again for choosing Amazon.com. We value your feedback and are
        committed to ensuring your satisfaction with our services.
      </p>
    </div>
  );
};

export default ContactUsPage;
