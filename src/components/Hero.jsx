import React from 'react'
import profilePhoto from '../assets/my-image.JPG'

function Hero() {

  return (
    <section id="hero">
      <div className="wrap">
        <div className="hero-content">
          <div className="hero-left">
            <span className="hero-tag">Open to opportunities</span>
            <h1 className="hero-name">
              Suman
            </h1>
            <p className="hero-sub">Full Stack Developer · MERN Stack</p>
            <p className="hero-desc">
              Building scalable, responsive web applications across healthcare, fintech, sports, and SaaS — with clean code and great user experiences.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-p">View Projects ↓</a>
              <a href="#contact" className="btn btn-g">Get in Touch</a>
              <a href="https://github.com/Suman-web-dev/" target="_blank" rel="noopener noreferrer" className="btn btn-g">GitHub ↗</a>
            </div>
            {/* <div className="hero-stats">
              <div>
                <span className="stat-num">2.3+</span>
                <span className="stat-label">Years Exp.</span>
              </div>
              <div>
                <span className="stat-num">5</span>
                <span className="stat-label">Projects</span>
              </div>
              <div>
                <span className="stat-num">MERN</span>
                <span className="stat-label">Core Stack</span>
              </div>
              <div>
                <span className="stat-num">4</span>
                <span className="stat-label">Domains</span>
              </div>
            </div> */}
          </div>
          <div className="hero-right">
            <img
              src={profilePhoto}
              alt="Suman Kashyap"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero