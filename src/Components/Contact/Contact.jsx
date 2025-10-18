import React from "react"
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import instagram_icon from '../../assets/instagram.png'
import din_icon from '../../assets/din.png'

const Contact = () => {

    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "e4bb571d-8d07-44fb-bcc6-237d3a5e53a2");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };


    return (
        <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>If you have any questions or want to discuss a project, feel free to reach out!</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <a href="https://www.linkedin.com/in/gurpreet-singh-3b816a222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                        target="_blank" 
                        rel="noreferrer"
                        className="contact-detail linkedin-detail">
                        <img src={din_icon} alt="" />
                        <p>Linkendin</p>
                        </a>
                    </div>

                    <div className="contact-detail" >
                        <a
                    href="https://www.instagram.com/gurpreettadwal"
                    target="_blank" 
                    rel="noreferrer"
                    className="contact-detail instagram-detail">
                        <img src={instagram_icon} alt=""/>
                        <p>Instagram</p>
                    </a>
                    </div>
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" />
                        <p>gurpreettadwal12@gmail.com</p>
                    </div>
                     <div className="contact-detail">
                        <img src={call_icon} alt="" />
                        <p>+1 (672) 336-2500</p>
                    </div>
                     <div className="contact-detail">
                        <img src={location_icon} alt="" />
                        <p>BC Canada</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder="Enter your name" name="name"/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder="Enter your Email" name="email"/>
                <label htmlFor="">Write your message here</label>
                <textarea placeholder="Type your message" name="message" rows="8"></textarea>
                <button type="submit" className="contact-submit">Submit Now</button>
            </form>
        </div>
        </div>
    )
    }

export default Contact
