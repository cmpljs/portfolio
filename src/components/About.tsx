import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About: React.FC = () => {
  const techStack = [
    'React', 'TypeScript', 'Next.js', 'GraphQL', 'Node.js', 'Redux','Jest', 'Storybook', 'Webpack', 'Bloomreach', 'Redis', 'Git', 'Jenkins', 'AWS', 'Docker', 'MongoDB', 
  ];

  const softSkills = [
    'Collaborative', 'Detail-oriented', 'Problem solver', 'Fast learner',
    'Team player', 'Communication', 'Leadership', 'Mentoring'
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>
          
          <div className="about-content">
            <div className="about-text">
              <p className="about-description">
                With over 5 years of experience in frontend development, I specialize in building 
                high-performance web applications that deliver exceptional user experiences. My expertise 
                spans modern JavaScript frameworks, with a particular focus on React and Next.js ecosystems. 
                I've led development teams on complex e-commerce project always prioritizing accessibility, 
                performance, and scalability.
              </p>
              
              <div className="soft-skills">
                <h3>Soft Skills</h3>
                <div className="skills-grid">
                  {softSkills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      className="skill-tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="tech-stack">
              <h3>Tech Stack</h3>
              <div className="tech-grid">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech}
                    className="tech-badge"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 