import React from 'react';
import './Help.css';

const Help = () => {
  return (
    <div className="help-container">
      <div className="help-box">
        <h2>Help & Support</h2>
        <p>If you need assistance with using the application, check out our FAQs or reach out to our support team.</p>
        
        {/* FAQ Section */}
        <div className="faq-section">
          <h3>Frequently Asked Questions</h3>
          <div className="faq-item">
            <h4>How do I create an account?</h4>
            <p>To create an account, simply go to the sign-up page, enter your details, and click 'Sign Up'.</p>
          </div>
          <div className="faq-item">
            <h4>How do I recover my password?</h4>
            <p>If you've forgotten your password, click on 'Forgot Password' on the login page to reset it.</p>
          </div>
          <div className="faq-item">
            <h4>How can I contact support?</h4>
            <p>You can contact support by using the form below or reaching out to support@example.com.</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h3>Contact Support</h3>
          <form>
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your Name" required className="help-input"/>
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your Email" required className="help-input"/>
            </div>
            <div className="input-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Describe your issue..." required className="help-textarea"></textarea>
            </div>
            <button type="submit" className="help-button">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Help;
