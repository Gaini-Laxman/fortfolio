import "./About.css";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        <div className="about-header">
          <span className="about-tag">ABOUT ME</span>

          <h2>
            Building Scalable & Modern
            <span> Full-Stack Applications</span>
          </h2>
        </div>

        <div className="about-content">

          <div className="about-intro">
            <p className="about-highlight">
              Hi, I'm <strong>Gaini Laxman</strong>, a Senior Software
              Engineer specializing in Java Full Stack development.
            </p>

            <p>
              I have over <strong>7+ years of experience</strong> building
              scalable, reliable, and high-performance enterprise
              applications across multiple domains including automotive,
              banking, financial services, and healthcare.
            </p>

            <p>
              My primary expertise is in <strong>Java, Spring Boot,
              Microservices, React, Angular, and AWS</strong>. I enjoy
              designing backend services, developing responsive user
              interfaces, building REST APIs, and creating cloud-native
              applications.
            </p>

            <p>
              I also work with modern technologies such as
              <strong> Kafka, Docker, Kubernetes, Jenkins, PostgreSQL,
              MySQL, TypeScript, and Node.js</strong>.
            </p>

            <p>
              I focus on writing clean, maintainable code and designing
              solutions that are scalable, secure, and easy to maintain.
            </p>
          </div>

          <div className="about-stats">

            <div className="about-stat">
              <span className="stat-number">7+</span>
              <span className="stat-label">Years Experience</span>
            </div>

            <div className="about-stat">
              <span className="stat-number">300+</span>
              <span className="stat-label">DSA Problems</span>
            </div>

            <div className="about-stat">
              <span className="stat-number">5+</span>
              <span className="stat-label">Enterprise Projects</span>
            </div>

            <div className="about-stat">
              <span className="stat-number">4</span>
              <span className="stat-label">Industry Domains</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}