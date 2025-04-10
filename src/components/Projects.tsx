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
      image: '../assets/images/movie_searchapp.png',
      category: 'app', // Updated to 'app'
      tags: ['Node.js', 'Express', 'HTML', 'CSS'],
      liveUrl: 'https://movie_search_app.vercel.app',
      codeUrl: 'https://github.com/Farah-Bee/movie_search_app',
    },
    {
      id: 2,
      title: 'Iman Cloth Line',
      description: 'A clothing brand website showcasing products and details.',
      image: '../assets/images/iman_clothline.png',
      category: 'web',
      tags: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://iman-cloth-line.vercel.app',
      codeUrl: 'https://github.com/Farah-Bee/iman_cloth_line',
    },
    {
      id: 3,
      title: 'Mother & Child Online Reservation',
      description: 'A web platform for booking maternal and child health services.',
      image: '../assets/images/mother_child.png',
      category: 'web',
      tags: ['PHP', 'MySQL', 'HTML', 'CSS'],
      liveUrl: '#',
      codeUrl: 'https://github.com/Farah-Bee/Mother_And_Child_Online_Reservation',
    },
    {
      id: 4,
      title: 'SwahiliPot Hub Template',
      description: 'A modern template built for the SwahiliPot Hub community website.',
      image: '../assets/images/swahilipothub_template.png',
      category: 'web',
      tags: ['Next.js', 'Tailwind CSS'],
      liveUrl: 'https://swahilipot-template.vercel.app',
      codeUrl: 'https://github.com/Farah-Bee/swahilipot-template',
    },
    {
      id: 5,
      title: 'Weather App',
      description: 'Check current weather data by city using OpenWeather API.',
      image: '../assets/images/weather_app.png',
      category: 'app', // Updated to 'app'
      tags: ['Node.js', 'Express', 'HTML', 'CSS'],
      liveUrl: 'https://weather_app.vercel.app',
      codeUrl: 'https://github.com/Farah-Bee/weather_app',
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
