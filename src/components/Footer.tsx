import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaTelegram } from 'react-icons/fa';
import IconWrapper from './IconWrapper';
import './Footer.css';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/oleksandr-illiushchenko-2065b8162/',
      icon: FaLinkedin
    },
    {
      name: 'Telegram',
      url: 'https://t.me/heycmpl',
      icon: FaTelegram
    },
    {
      name: 'Email',
      url: 'mailto:oleksandrilliushchenko@gmail.com',
      icon: FaEnvelope
    },
    {
      name: 'GitHub',
      url: 'https://github.com/cmpljs/',
      icon: FaGithub
    },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="lets-build-section">
            <motion.h2 
              className="lets-build-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Let's Build something together
            </motion.h2>
            
            <motion.p 
              className="lets-build-description"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Get in touch
            </motion.p>
            
            <motion.div 
              className="social-links"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <IconWrapper icon={social.icon} />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 