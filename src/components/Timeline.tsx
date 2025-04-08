import React from 'react';
import '../styles/timeline.css';
import { Briefcase, GraduationCap, CalendarClock } from "lucide-react";

const Timeline = () => {
  const education = [
    {
      school: "KCA University",
      degree: "Bachelor of Business Information Technology (BBIT)",
      year: "2021 - 2025",
    },
    {
      school: "Garissa High School",
      grade: "KCSE C+",
      year: "2017 - 2020",
    },
    {
      school: "D.E.B Muslim Primary School",
      degree: "Primary Education",
      year: "2010 - 2016",
      marks: "300",
    },
  ];

  const experience = [
    {
      role: "Software Developer",
      company: "Swahilipot Hub",
      location: "Mombasa, Kenya",
      duration: "Jan - April 2023",
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
      <h2 className="section-title">Education</h2>
      <div className="timeline">
        {education.map((item, index) => (
          <div key={index} className="timeline-item reveal">
            <div className="flex items-center mb-3">
              <div className="p-2 rounded-full bg-theme-100 mr-3">
                <GraduationCap className="text-theme-600" size={20} />
              </div>
              <h3>{item.degree}</h3>
            </div>
            <div className="flex items-center text-sm text-muted-foreground mb-2">
              <CalendarClock size={16} className="mr-2" />
              {item.year}
            </div>
            <p className="text-sm font-medium mb-1">{item.school}</p>
            {item.marks && <p className="text-sm text-muted-foreground">Marks: {item.marks}</p>}
          </div>
        ))}
      </div>

      <h2 className="section-title">Experience</h2>
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
            <p className="text-sm font-medium mb-1">{item.company}, {item.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
