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
      <div className="container">
        <motion.div
          initial={{ x: '-100%', opacity: 0 }}
          whileInView={horizontal}
          viewport={{ once: true }}
          className="heading"
        >
          <p className="heading-sub-text">Who I am</p>
          <p className="heading-text">About Me</p>
        </motion.div>

        <div className="split-about">
          <motion.div
            initial={{ x: '-100%', opacity: 0 }}
            whileInView={horizontal}
            className="about-content"
          >
            <p>
              My name is Aniket Dixit and I'm senior at the University of Michigan pursuing a B.S in Computer Science and Linguistics. As long as I can remember I've had a deep passion for the language and how it can be applied to broaden our understanding of human cognition. As a computer scientist, I've gained extensive experience working with NLP and machine learning systems, relational database structures, and backend development. 
            </p>
            <br />
            <p>
              I love creating and building data-driven projects, especially when they rely on innovative solutions and some deeper analysis. In my free time, I'm a dedicated polyglot, soccer player, and Civil War buff.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            whileInView={horizontal}
            className="about-img"
          >
            <img src={ProfileImg} alt="Profile" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
