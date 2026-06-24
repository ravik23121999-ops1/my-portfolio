import React from 'react'

function Experience() {
  const experiences = [
    {
      role: 'Full Stack Developer',
      company: 'Weballures Technologies',
      date: 'Jun 2025 — Present',
      // sub: 'LabSkill (https://www.labskill.org/) & CampusDunia (https://www.campusdunia.co.in/)',
      description: 'Architected and built scalable full-stack applications using React.js, Next.js, Node.js, Express.js & MongoDB across healthcare, sports, and booking domains. Developed reusable React/Next.js component libraries with seamless API integration and optimised UX patterns. Implemented REST APIs, JWT authentication, Role-Based Access Control (RBAC), and complex database operations for multi-role platforms. Delivered end-to-end frontend and backend solutions for LabSkill (healthcare education platform) and CampusDunia (educational platform). Led technical decisions, code reviews, and implemented CI/CD pipelines for production deployments.'
    },
    {
      role: 'React Developer',
      company: 'Entritt Solutions Pvt. Ltd.',
      date: 'Apr 2024 — Jun 2025',
      sub: 'Cerebrox — Loan Management Platform (Campus Dunia, Student Loan, Salary Advance, Personal Loan)',
      description: 'Built and maintained the Cerebrox loan platform frontend — covering Campus Dunia, Student Loan, Salary Advance, and Personal Loan products. Developed responsive UI components using React.js and integrated REST APIs for complex loan application workflows. Improved frontend performance by 40% through code optimisation, lazy loading, and state management improvements. Enhanced UX across enterprise web applications with intuitive interfaces and real-time form validations. Delivered scalable frontend solutions aligned with fintech business requirements and compliance standards. Collaborated with backend teams to design API contracts and implement error handling strategies.',
      accentColor: 'var(--accent2)'
    },
    {
      role: 'MERN Stack Developer',
      company: 'Solitaire Infosys',
      date: 'Oct 2023 — Mar 2024',
      description: 'Developed a full-stack eCommerce application using the MERN stack end-to-end from concept to deployment. Built comprehensive REST APIs for authentication, product management, shopping cart, and order processing workflows. Designed and optimised MongoDB schemas for efficient data management, indexing, and scalability. Implemented secure payment gateway integration, order tracking systems, and admin dashboard for inventory management. Reduced page load times by 35% through performance optimisation techniques. Collaborated with designers to translate UI/UX requirements into responsive React components.',
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