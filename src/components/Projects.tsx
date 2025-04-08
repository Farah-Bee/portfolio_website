import React, { useState } from 'react';
import { ExternalLink, Github } from "lucide-react";
import '../styles/projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Movie Search App',
      description: 'Search your favorite movies using OMDB API',
      image: '/images/project1.png',
      category: 'app', // Updated to 'app'
      tags: ['Node.js', 'Express', 'HTML', 'CSS'],
      liveUrl: 'https://movie-app-demo.vercel.app',
      codeUrl: 'https://github.com/kenuze/movie-app',
    },
    {
      id: 2,
      title: 'Iman Cloth Line',
      description: 'A clothing brand website showcasing products and details.',
      image: '/images/project2.png',
      category: 'web',
      tags: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://iman-cloth-line.vercel.app',
      codeUrl: 'https://github.com/kenuze/iman-cloth-line',
    },
    {
      id: 3,
      title: 'Mother & Child Online Reservation',
      description: 'A web platform for booking maternal and child health services.',
      image: '/images/project3.png',
      category: 'web',
      tags: ['PHP', 'MySQL', 'HTML', 'CSS'],
      liveUrl: '#',
      codeUrl: 'https://github.com/kenuze/mother-child-reservation',
    },
    {
      id: 4,
      title: 'SwahiliPot Hub Template',
      description: 'A modern template built for the SwahiliPot Hub community website.',
      image: '/images/project4.png',
      category: 'web',
      tags: ['Next.js', 'Tailwind CSS'],
      liveUrl: 'https://swahilipot-template.vercel.app',
      codeUrl: 'https://github.com/kenuze/swahilipot-template',
    },
    {
      id: 5,
      title: 'Weather App',
      description: 'Check current weather data by city using OpenWeather API.',
      image: '/images/project5.png',
      category: 'app', // Updated to 'app'
      tags: ['Node.js', 'Express', 'HTML', 'CSS'],
      liveUrl: 'https://weather-app-demo.vercel.app',
      codeUrl: 'https://github.com/kenuze/weather-app',
    },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Explore some of my recent work and personal projects
        </p>

        <div className="filter-buttons">
          <button
            onClick={() => setFilter('all')}
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('web')}
            className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
          >
            Web
          </button>
          <button
            onClick={() => setFilter('app')}
            className={`filter-btn ${filter === 'app' ? 'active' : ''}`}
          >
            Apps
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card reveal">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><strong>Tech:</strong> {project.tags.join(', ')}</p>
              <div className="project-links">
                <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="icon" /> Code
                </a>
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="icon" /> Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
