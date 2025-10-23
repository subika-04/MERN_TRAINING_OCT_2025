import React, { useRef } from 'react'
import { MdEmail, MdPhone } from "react-icons/md";     
import { FaLinkedin, FaGithub } from "react-icons/fa";    
import { Link } from 'react-router-dom';


const Contact1 = () => {
   const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'YOUR_SERVICE_ID',   // from EmailJS
      'YOUR_TEMPLATE_ID',  // from EmailJS
      form.current,
      'YOUR_PUBLIC_KEY'    // from EmailJS
    )
    .then(() => {
      alert("✅ Message sent successfully!");
      e.target.reset();
    })
    .catch((error) => {
      console.error("❌ Error sending email:", error);
      alert("Failed to send message.");
    });
  };
  return (
    <div className='contacts'>
    <h1>Contact Me!</h1>
    <h2>Have you any Questions?</h2>
    <h3>I'M AT YOUR SERVICE</h3>
    <div className='contactlist'>
        <div className='contact'>
          <MdPhone className='contact-logo'/>
          <h4>Call Me On</h4>
          <h5>8825602149</h5>
        </div>
        <div className='contact'>
          <MdEmail className='contact-logo'/>
          <h4>Email</h4>
          <h5><Link to="mailto:subikass23it@srishakthi.ac.in">subikass23it@srishakthi.ac.in</Link></h5>
        </div>
        <div className='contact'>
          <FaGithub className='contact-logo'/>
          <h4>Github</h4>
          <h5><Link to="https://github.com/subika-04">https://github.com/subika-04</Link></h5>
        </div>
        <div className='contact'>
          <FaLinkedin className='contact-logo'/>
          <h4>Linkedin</h4>
          <h5><Link to="https://linkedin.com/in/subika">https://linkedin.com/in/subika</Link></h5>
        </div>        
    </div>
    <div className='email'>
      <h2>Send Me an Email</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="user_name" placeholder="Name" required />

        <input type="email"  id="email" name="user_email" placeholder="Your Email" required /><br></br>
<br></br>
        <textarea name="message" placeholder="Write your message..." required></textarea>
<br></br>
<br></br>
        <button type="submit">Send</button>
      </form>

    </div>
    </div>
  )
}

export default Contact1