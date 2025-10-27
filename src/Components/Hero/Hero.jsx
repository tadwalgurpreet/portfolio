import React from "react"
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import App from "../../App"
import './Hero.css'
import AnchorLink from "react-anchor-link-smooth-scroll"
import Gurpreet_Singh_Resume from '../../assets/Gurpreet_singh_resume.pdf'

const Hero = () => {
  const openResume = () => {
    window.open(Gurpreet_Singh_Resume, "_blank");
  };
const openGitHub = () => {
    window.open("https://github.com/tadwalgurpreet", "_blank");
  };

  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Gurpreet Singh,</span> software developer on cybersecurity</h1>
      <p>I’m a software developer focused on cybersecurity, building secure-by-default web apps and practical tools for threat detection and incident response.</p>
      <div className="hero-action">
        <button className="hero-resume" onClick={openResume} >My Resume</button>
         <button className="hero-github" onClick={openGitHub}>GitHub</button>
      </div>
    </div>
  )
}

export default Hero