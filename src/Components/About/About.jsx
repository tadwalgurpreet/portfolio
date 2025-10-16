import React from "react"
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I’m a software developer with a strong focus on cybersecurity. My work centers on building secure-by-default web applications that prioritize data privacy and resilience against modern threats. Beyond development, I design and experiment with practical tools for threat detection and incident response, from log analysis dashboards to lightweight anomaly detection systems.</p>
                    <p>My ultimate goal is to deliver applications that are not only fast and user-friendly but also robust against real-world attacks.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>Forensic</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>Cybersecurity</p><hr style={{width:"50%"}}/></div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default About