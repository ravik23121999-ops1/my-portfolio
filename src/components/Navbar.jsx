import React, { useState } from 'react'

function Navbar({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { id: 'hero', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Work' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ]

  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav>
      <div className="nav-logo">SK.</div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        {navLinks.map(link => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              onClick={(e) => scrollToSection(e, link.id)}
              className={activeSection === link.id ? 'active' : ''}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <button
        className={`hamburger ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  )
}

export default Navbar