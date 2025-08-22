import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaGithub, FaLinkedin, FaTelegram, FaEnvelope } from 'react-icons/fa';
import IconWrapper from './IconWrapper';
import './Hero.css';

const Hero: React.FC = () => {
  const handleDownloadResume = async () => {
    try {
      const resumeUrl = '/resume.pdf';
      const response = await fetch(resumeUrl);
      
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Oleksandr_Illiushchenko_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      } else {
        const textResponse = await fetch('/resume.txt');
        if (textResponse.ok) {
          const blob = await textResponse.blob();
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = 'Oleksandr_Illiushchenko_Resume.txt';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
        } else {
          throw new Error('Resume file not found');
        }
      }
    } catch (error) {
      console.error('Error downloading resume:', error);
      alert('Unable to download resume. Please try again or contact me directly.');
    }
  };

  const handleViewProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

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
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="gradient-overlay"></div>
        <div className="animated-pattern"></div>
      </div>
      
      <div className="hero-content">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-name">Oleksandr Illiushchenko</h1>
          <h2 className="hero-title">Senior Software Engineer | React, Next.js, TypeScrit, GraphQL</h2>
          <p className="hero-description">I build fast, accessible, and scalable web apps.</p>
          
          <div className="hero-buttons">
            <motion.button 
              className="btn btn-primary"
              onClick={handleViewProjects}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🔗 View Projects
            </motion.button>
            
            <motion.button 
              className="btn btn-secondary"
              onClick={handleDownloadResume}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <IconWrapper icon={FaDownload} color="white" /> Download Resume
            </motion.button>
          </div>

          <motion.div
            style={{ display: 'flex', justifyContent: 'flex-start' }}
            className="hero-social-links"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              >
                <IconWrapper icon={social.icon} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div 
          style={{ height: '250px', width: '250px' }}
          className="hero-avatar"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src="/avatar.jpg" alt="Oleksandr Illiushchenko" className="avatar-image" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 