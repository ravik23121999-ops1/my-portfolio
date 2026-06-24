import React from 'react'

function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <span className="section-label">Let's Connect</span>
        <h2 className="st">Get in Touch</h2>
        <p className="contact-desc">
          Open to full-time roles, freelance projects, and interesting collaborations. Let's build something great.
        </p>
        <div className="contact-grid">
          <a href="mailto:kashyapsanam2001@gmail.com" className="contact-card">
            <div className="ci">📧</div>
            <div>
              <div className="cl">Email</div>
              <div className="cv">kashyapsanam2001@gmail.com</div>
            </div>
          </a>
          <a href="tel:+917018722514" className="contact-card">
            <div className="ci">�</div>
            <div>
              <div className="cl">Phone</div>
              <div className="cv">+91 70187 22514</div>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/suman-73b166252/" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="ci">💼</div>
            <div>
              <div className="cl">LinkedIn</div>
              <div className="cv">in/suman-73b166252</div>
            </div>
          </a>
          <a href="https://github.com/Suman-web-dev/" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="ci">🐙</div>
            <div>
              <div className="cl">GitHub</div>
              <div className="cv">Suman-web-dev</div>
            </div>
          </a>
          <div className="contact-card" style={{ cursor: 'default' }}>
            <div className="ci">📍</div>
            <div>
              <div className="cl">Location</div>
              <div className="cv">
                Mohali, Punjab | Gurugram | Noida | Chandigarh
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact