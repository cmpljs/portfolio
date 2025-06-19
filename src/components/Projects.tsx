import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaEye } from 'react-icons/fa';
import IconWrapper from './IconWrapper';
import './Projects.css';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: `Built an e-commerce platform with React, Next.js and GraphQL that currently has over 30.000.000 of active users.
       Led the development team, delivered over 200 features with weekly releases. Integrated analytics, 3rd party services, optimized bundle size, core web vitals, improved accessibility`,
      tags: ["React", "Next.js", "Redux", "TypeScript", "Bloomreach", "GraphQL", "Redis"],
      image: "/e-commerce.webp",
      liveUrl: "http://delhaize.be/",
      featured: true
    },
    {
      id: 2,
      title: "Kiosk Device Web App",
      description: "Developed a kiosk device app that allows users to scan their loyalty cards, get promotions information, burn loyalty points, etc.",
      tags: ["React", "GraphQL"],
      image: "/kiosk.png",
      liveUrl: "http://kiosk.delhaize.be/",
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Developed a collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tags: ["React", "Socket.io", "Node.js", "MongoDB", "Redis"],
      image: "/tasks.png",
    },
    {
      id: 4,
      title: "Dog Hotel Website",
      description: "Contributed to the development of a Dog Hotel Website with React and Typescript. Mentored junior developers and improved code quality, test coverage.",
      tags: ["React", "Typescript"],
      image: "/dogs.webp",
      liveUrl: "https://www.doghotel.com.ua/",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Featured Projects</h2>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`project-card ${project.featured ? 'featured' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  {project.featured && (
                    <div className="featured-badge">Featured</div>
                  )}
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  
                  <div className="project-tags">
                    {project.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                  
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-links">
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <IconWrapper icon={FaExternalLinkAlt} /> Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <IconWrapper icon={FaGithub} /> GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 