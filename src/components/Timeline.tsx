import React, { useState } from 'react';
import '../styles/timeline.css';
import { Briefcase, GraduationCap, CalendarClock } from "lucide-react";

const Timeline = () => {
  const [activeTab, setActiveTab] = useState<'education' | 'experience'>('education');

  const education = [
    {
      school: "KCA University",
      degree: "Bachelor of Business Information Technology (BBIT)",
      year: "2021 - 2025",
    },
    {
      school: "Garissa High School",
      grade: "The Kenya Certificate of Secondary Education (KCSE)",
      year: "2015 - 2017",
    },
    {
      school: "D.E.B Muslim Primary School",
      degree: "The Kenya Certificate of Primary Education (KCPE) ",
      year: "2007 - 2014",
     
    },
  ];

  const experience = [
    {
      role: "Software Developer",
      company: "Swahilipot Hub",
      location: "Mombasa, Kenya",
      duration: "Jan - April 2025",
    },
    {
      role: "Business Analyst",
      company: "Decale Limited",
      location: "Nairobi, Kenya",
      duration: "Sep 2023 - Dec 2023",
    },
    {
      role: "ICT Attaché",
      company: "Bulsho Fiber Link",
      location: "Nairobi, Kenya",
      duration: "Sep 2022 - Dec 2022",
    },
  ];

  return (
    <section className="timeline-section" id="timeline">
      <h2 className="section-title">Timeline</h2>
      <p className="section-subtitle">Explore my academic journey and work experience</p>

      <div className="filter-buttons">
        <button
          className={`filter-btn ${activeTab === 'education' ? 'active' : ''}`}
          onClick={() => setActiveTab('education')}
        >
          Education
        </button>
        <button
          className={`filter-btn ${activeTab === 'experience' ? 'active' : ''}`}
          onClick={() => setActiveTab('experience')}
        >
          Experience
        </button>
      </div>

      {activeTab === 'education' && (
        <div className="timeline">
          {education.map((item, index) => (
            <div key={index} className="timeline-item reveal">
              <div className="flex items-center mb-3">
                <div className="p-2 rounded-full bg-theme-100 mr-3">
                  <GraduationCap className="text-theme-600" size={20} />
                </div>
                <h3>{item.degree || item.grade}</h3>
              </div>
              <div className="flex items-center text-sm text-muted-foreground mb-2">
                <CalendarClock size={16} className="mr-2" />
                {item.year}
              </div>
              <p className="text-sm font-medium mb-1">{item.school}</p>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'experience' && (
        <div className="timeline">
          {experience.map((item, index) => (
            <div key={index} className="timeline-item reveal">
              <div className="flex items-center mb-3">
                <div className="p-2 rounded-full bg-theme-100 mr-3">
                  <Briefcase className="text-theme-600" size={20} />
                </div>
                <h3>{item.role}</h3>
              </div>
              <div className="flex items-center text-sm text-muted-foreground mb-2">
                <CalendarClock size={16} className="mr-2" />
                {item.duration}
              </div>
              <p className="text-sm font-medium mb-1">
                {item.company}, {item.location}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Timeline;
