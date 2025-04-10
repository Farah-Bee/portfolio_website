import React, { useEffect } from 'react';
import '../styles/skills.css';

const Skills = () => {
  const technicalSkills = [
    { name: 'HTML5 & CSS3', percentage: 95 },
    { name: 'JavaScript', percentage: 90 },
    { name: 'React', percentage: 85 },
    { name: 'TypeScript', percentage: 80 },
    { name: 'Node.js', percentage: 75 },
    { name: 'UI/UX Design', percentage: 85 },
  ];

  const softSkills = [
    { name: 'Problem Solving', percentage: 90 },
    { name: 'Communication', percentage: 85 },
    { name: 'Teamwork', percentage: 95 },
    { name: 'Time Management', percentage: 80 },
  ];

  const tools = ['Git', 'GitHub', 'Figma', 'Webpack', 'Jest', 'AWS', 'Docker', 'GraphQL'];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('active', entry.isIntersecting);
      });
    });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
  }, []);

  return (
    <section className="skills-section" id="skills">
      <div className="skills-header reveal">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">Expertise and tools I've mastered throughout my journey</p>
      </div>

      <div className="skills-grid">
        {/* Left: Technical Skills */}
        <div className="skills-column technical reveal">
          <h3 className="category-title">Technical Skills</h3>
          {technicalSkills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <div className="skill-label">
                <span>{skill.name}</span>
                <span className="skill-percent">{skill.percentage}%</span>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: `${skill.percentage}%` }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Soft Skills + Tools */}
        <div className="skills-column reveal">
          <h3 className="category-title">Soft Skills</h3>
          <div className="soft-skills-grid">
            {softSkills.map((skill) => (
              <div className="soft-skill-card" key={skill.name}>
                <span>{skill.name}</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: `${skill.percentage}%` }}></div>
                </div>
              </div>
            ))}
          </div>

          <div className="tools-section">
            <h3 className="category-title">Tools & Technologies</h3>
            <div className="tools-grid">
              {tools.map((tool) => (
                <span key={tool} className="tool-tag">{tool}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
