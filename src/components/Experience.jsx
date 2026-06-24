import React from 'react'

function Experience() {
  const experiences = [
    {
      role: 'Full Stack Developer',
      company: 'Weballures Technologies',
      date: 'Jun 2025 — Present',
      description: 'Built scalable full-stack apps using React.js, Next.js, Node.js, Express.js & MongoDB across healthcare, sports, and booking domains. Developed reusable React/Next.js components with seamless API integration and optimised UX. Implemented REST APIs, JWT auth, RBAC, and database operations for multi-role platforms.'
    },
    {
      role: 'React Developer',
      company: 'Entritt Solutions Pvt. Ltd.',
      date: 'Apr 2024 — Jun 2025',
      sub: 'Cerebrox — Loan Management Platform (Campus Dunia, Student Loan, Salary Advance, Personal Loan)',
      description: 'Built and maintained the Cerebrox loan platform frontend — covering Campus Dunia, Student Loan, Salary Advance, and Personal Loan products. Developed responsive UI components and integrated REST APIs for loan application workflows. Improved frontend performance, usability, and UX across enterprise web applications. Delivered scalable frontend solutions aligned with fintech business requirements.',
      accentColor: 'var(--accent2)'
    },
    {
      role: 'MERN Stack Developer',
      company: 'Solitaire Infosys',
      date: 'Oct 2023 — Mar 2024',
      description: 'Developed a full-stack eCommerce app using the MERN stack end-to-end. Built REST APIs for auth, product management, cart, and order handling. Optimised MongoDB schemas for efficient data management and scalability.',
      accentColor: '#5f5e5a'
    }
  ]

  return (
    <section id="experience">
      <div className="wrap">
        <span className="section-label">Career Path</span>
        <h2 className="st">Work Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="exp-item">
              <div 
                className="exp-dot" 
                style={exp.accentColor ? {
                  background: exp.accentColor,
                  boxShadow: `0 0 0 3px ${exp.accentColor}18`
                } : {}}
              ></div>
              <div className="exp-header">
                <div>
                  <div className="exp-role">{exp.role}</div>
                  <div 
                    className="exp-company"
                    style={exp.accentColor ? { color: exp.accentColor } : {}}
                  >
                    {exp.company}
                  </div>
                </div>
                <div className="exp-date">{exp.date}</div>
              </div>
              {exp.sub && <div className="exp-sub">{exp.sub}</div>}
              <ul className="exp-list">
                {exp.description.split('. ').filter(item => item.trim()).map((item, i) => (
                  <li key={i}>{item.trim()}.</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience