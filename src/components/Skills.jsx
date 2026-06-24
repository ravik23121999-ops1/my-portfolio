import React from 'react'

function Skills() {
  const skills = [
    {
      category: 'Languages',
      tags: ['JavaScript', 'HTML5', 'CSS3']
    },
    {
      category: 'Frontend',
      tags: ['React.js', 'Next.js', 'Redux', 'Bootstrap']
    },
    {
      category: 'Backend',
      tags: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'RBAC']
    },
    {
      category: 'Database',
      tags: ['MongoDB', 'Mongoose', 'CRUD Ops']
    },
    {
      category: 'Tools & Platforms',
      tags: ['Git', 'GitHub', 'Postman', 'Vercel', 'Netlify']
    },
      {
      category: 'AI Tools',
      tags: ['Gen AI', 'ChatGPT', 'Claude Code', 'Antigravity', 'Devin']
    },
    {
      category: 'Core Concepts',
      tags: ['API Integration', 'State Mgmt', 'Auth & RBAC', 'Perf. Opt.']
    }
  ]

  return (
    <section id="skills">
      <div className="wrap">
        <span className="section-label">Technical Arsenal</span>
        <h2 className="st">Skills & Technologies</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-cat">{skill.category}</div>
              <div className="skill-tags">
                {skill.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills