import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCalendar, FaTag } from 'react-icons/fa';
import IconWrapper from './IconWrapper';
import './Blog.css';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  tags: string[];
  readTime: string;
  image: string;
  url: string;
}

const Blog: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Optimizing React Performance: A Deep Dive into Memoization",
      excerpt: "Explore advanced techniques for optimizing React applications, including React.memo, useMemo, useCallback, and when to use each for maximum performance gains.",
      tags: ["React", "Performance", "Optimization"],
      readTime: "4 min read",
      image: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*nODNnPrFXRl4RA0f",
      url: "https://medium.com/jsexpert/optimizing-react-performance-b0018fbbb64",
    },
    {
      id: 2,
      title: "Building Accessible Web Applications: A Comprehensive Guide",
      excerpt: "Learn the essential principles of web accessibility and how to implement them in modern React applications to create inclusive user experiences.",
      tags: ["Accessibility", "React", "UX"],
      readTime: "3 min read",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fwgecw23wlv1aamgvkfx5.jpg",
      url: "https://dev.to/balrajola/building-accessible-web-applications-a-developers-guide-for-2025-361c",
    },
    {
      id: 3,
      title: "Modern Frontend Architecture: From Monoliths to Micro-Frontends",
      excerpt: "Discover how to design scalable frontend architectures that can grow with your application, including patterns for micro-frontends and component libraries.",
      tags: ["Architecture", "Micro-Frontends", "Scalability"],
      readTime: "8 min read",
      image: "https://miro.medium.com/v2/resize:fit:1200/0*FJs_vj2rwdKDqVrY.png",
      url: "https://medium.com/@nexckycort/from-monolith-to-microfrontends-migrating-a-legacy-react-app-to-a-modern-architecture-bd686aee0ce8",
    }
  ];

  return (
    <section className="blog" id="blog">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Latest Insights</h2>
          
          <div className="blog-grid">
            {blogPosts.map((post, index) => (
              <motion.article
                onClick={() => window.open(post.url, '_blank')}
                key={post.id}
                className="blog-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="blog-image">
                  <img src={post.image} alt={post.title} />
                  <div className="blog-overlay">
                    <IconWrapper icon={FaArrowRight} className="read-icon" />
                  </div>
                </div>
                
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="blog-read-time">{post.readTime}</span>
                  </div>
                  
                  <h3 className="blog-title">{post.title}</h3>
                  
                  <p className="blog-excerpt">{post.excerpt}</p>
                  
                  <div className="blog-tags">
                    {post.tags.map(tag => (
                      <span key={tag} className="blog-tag">
                        <IconWrapper icon={FaTag} /> {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button onClick={() => window.open(post.url, '_blank')} className="read-more-btn">
                    Read Full Article <IconWrapper icon={FaArrowRight} />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog; 