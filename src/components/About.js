import React from 'react';
import "../styles/About.css";
import { motion } from "framer-motion";
import ProfileImg from '../images/self.jpg';

const About = () => {

  const horizontal = {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', duration: 2, bounce: 0.3 }
  };

  return (
    <div className="about" id="about">
      <div className="about-section">
        {/* Left Text Content */}
        <motion.div initial={{ x: '-100%', opacity: 0 }} whileInView={horizontal} className="about-text-content" viewport={{ once: true }}>
          <div className="heading">
            <p className="heading-text">About Me</p>
          </div>
          <div className="about-content">
            <p>Hello! My name is Peace and I enjoy creating things that live on the internet. My interest in web development started back in 2018 when I decided to try out for my first school project — turns out putting together a simple website taught me a lot about HTML & CSS!</p>
            <br />
            <p>Since then, I've had the opportunity to collaborate with some talented professionals, which has sharpened my skills and helped me grow faster. These days, I'm all about building accessible and inclusive digital products that make a difference. I also enjoy dabbling in design and illustration whenever I can.</p>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div initial={{ x: '50', opacity: 0 }} whileInView={horizontal} className="about-img">
          <img src={ProfileImg} alt="Profile" />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
