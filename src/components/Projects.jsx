import React from 'react'

function Projects() {
  const projects = [
    {
      title: 'Tea Spark',
      description: 'Independently built and deployed end-to-end — designed, developed, and shipped the complete frontend and backend solo, showcasing full-stack ownership across the entire MERN stack.',
      tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Full Stack'],
      badge: 'Personal Project',
      badgeColor: 'personal',
      github: 'https://github.com/ravik23121999-ops1/'
    },
    {
      title: 'Waitlist Management Platform',
      description: 'End-to-end waitlist management system with queue tracking, user registration flows, admin controls, and automated status notifications.',
      tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      badge: 'Professional',
      badgeColor: 'default'
    },
    {
      title: 'Cricket League Management',
      description: 'Role-based sports platform with 7 permission levels. Built dashboards, backend APIs, and secure access logic for Admin, Teams, Players, and Scorecard managers.',
      tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'RBAC'],
      badge: 'Professional',
      badgeColor: 'default'
    },
    {
      title: 'Venue & Hotel Booking',
      description: 'Venue discovery and booking platform with vendor listing, user booking workflows, and admin management — integrated frontend flows with backend data handling.',
      tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      badge: 'Professional',
      badgeColor: 'default'
    }
  ]

  return (
    <section id="projects">
      <div className="wrap">
        <span className="section-label">Selected Work</span>
        <h2 className="st">Key Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className={`proj-badge ${project.badgeColor === 'personal' ? 'personal' : ''}`}>
                <span className="bdot"></span>
                {project.badge}
              </div>
              <h3 className="pt">{project.title}</h3>
              <p className="pd">{project.description}</p>
              <div className="proj-stack">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="stag">{tag}</span>
                ))}
              </div>
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="proj-link">
                  View on GitHub ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects