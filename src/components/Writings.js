import React from 'react';
import '../styles/Writings.css';
import { motion } from 'framer-motion';

const writings = [
  {
    title: 'The Polyglot’s Dilemma',
    description: 'A reflective essay on the paradoxes of multilingualism in modern digital life.',
    link: 'https://example.com/polyglot-dilemma'
  },
  {
    title: 'Syntax of the Stars',
    description: 'Analyzing the metaphorical syntax of constellation names across ancient languages.',
    link: 'https://example.com/syntax-stars'
  },
  {
    title: 'Lost Tongues and Hidden Codes',
    description: 'On cryptographic thought and the evolution of dead languages.',
    link: 'https://example.com/lost-tongues'
  }
];

const Writings = () => {
  const fadeIn = {
    opacity: 1,
    transition: {
      duration: 1.4,
    },
  };

  return (
    <div className='writings' id='writings'>
      <div className='container'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={fadeIn}
          viewport={{ once: true }}
          className='heading'
        >
          <p className='heading-sub-text'>What I've Written</p>
          <p className='heading-text'>Writings</p>
        </motion.div>

        <motion.div className='writings-box' initial={{ opacity: 0 }} whileInView={fadeIn}>
          {writings.map((writing, index) => (
            <a
              key={index}
              href={writing.link}
              target='_blank'
              rel='noreferrer'
              className='writing-card'
            >
              <div className='writing-title'>{writing.title}</div>
              <div className='writing-desc'>{writing.description}</div>
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Writings;
