// components/Contact.jsx
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        <div className="contact-header">
          <span className="section-subtitle">GET IN TOUCH</span>
          <h2>Contact Me</h2>
          <p>
            I'm always open to discussing new opportunities, interesting
            projects, and software engineering challenges.
          </p>
        </div>

        <div className="contact-grid">

          {/* Email */}
          <a
            href="mailto:gainilaxman20@gmail.com"
            className="contact-card"
          >
            <div className="contact-icon">
              ✉
            </div>

            <div>
              <h3>Email</h3>
              <p>gainilaxman20@gmail.com</p>
            </div>
          </a>


          {/* Phone */}
          <a
            href="tel:+918555064001"
            className="contact-card"
          >
            <div className="contact-icon">
              ☎
            </div>

            <div>
              <h3>Phone</h3>
              <p>+91 85550 64001</p>
            </div>
          </a>


          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/gaini-laxman-59510bb0/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="contact-icon">
              in
            </div>

            <div>
              <h3>LinkedIn</h3>
              <p>Connect with me</p>
            </div>
          </a>


          {/* GitHub */}
          <a
            href="https://github.com/Gaini-Laxman"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="contact-icon">
              &lt;/&gt;
            </div>

            <div>
              <h3>GitHub</h3>
              <p>View my projects</p>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}