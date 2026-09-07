export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-header">
        <span className="section-tag">MY WORK</span>
        <h2>Project Experience</h2>
        <p>
          Enterprise applications developed across automotive, banking,
          financial services, and healthcare domains.
        </p>
      </div>

      <div className="projects-grid">

        {/* Shop Manager */}
        <div className="project">
          <div className="project-header">
            <span className="project-number">01</span>
            <h3>Shop Manager</h3>
          </div>

          <span className="project-domain">Automotive Domain</span>

          <p>
            Built a full-stack application managing customers, vehicles,
            invoices, inspections, and inventory.
          </p>

          <ul>
            <li>Designed scalable backend services using Spring Boot and microservices.</li>
            <li>Optimized API calls and database queries for better performance.</li>
            <li>Integrated external APIs for real-time parts availability and ordering.</li>
            <li>Implemented event-driven architecture for real-time updates.</li>
            <li>Developed responsive UI using Angular, React, TypeScript, and JavaScript.</li>
            <li>Deployed containerized microservices using Docker and Amazon EKS.</li>
            <li>Used Amazon RDS for relational database management.</li>
            <li>Implemented AWS IAM and VPC for secure access and networking.</li>
            <li>Used Amazon CloudWatch for monitoring logs and metrics.</li>
            <li>Testing: JUnit, Mockito, Jest, Jasmine, Karma, Unit & Integration Testing.</li>
          </ul>

          <div className="project-tech">
            <span>Java</span>
            <span>Spring Boot</span>
            <span>React</span>
            <span>Angular</span>
            <span>AWS</span>
            <span>Docker</span>
            <span>Kubernetes</span>
          </div>
        </div>

        {/* Precise ID */}
        <div className="project">
          <div className="project-header">
            <span className="project-number">02</span>
            <h3>Precise ID</h3>
          </div>

          <span className="project-domain">Banking / Fraud Detection</span>

          <p>
            Developed a banking fraud detection system for real-time
            transaction validation and fraud processing.
          </p>

          <ul>
            <li>Integrated multiple fraud detection modules into a unified system.</li>
            <li>Developed backend services for real-time validation.</li>
            <li>Handled high-volume transaction processing.</li>
            <li>Designed scalable workflows for reliable fraud detection.</li>
            <li>Built services using Spring Boot and microservices architecture.</li>
            <li>Developed responsive UI using Angular and React.</li>
            <li>Deployed services using Docker and Amazon EKS.</li>
            <li>Used Amazon RDS for transaction data storage.</li>
            <li>Configured AWS IAM and VPC for secure infrastructure.</li>
            <li>Testing: JUnit, Mockito, Jest, Jasmine, Karma, Unit & Integration Testing.</li>
          </ul>

          <div className="project-tech">
            <span>Java</span>
            <span>Spring Boot</span>
            <span>Microservices</span>
            <span>React</span>
            <span>AWS</span>
            <span>Kafka</span>
          </div>
        </div>

        {/* Funds360 */}
        <div className="project">
          <div className="project-header">
            <span className="project-number">03</span>
            <h3>Funds360</h3>
          </div>

          <span className="project-domain">Mutual Funds Management</span>

          <p>
            Developed a mutual fund management platform for transaction
            processing, operations, and reporting.
          </p>

          <ul>
            <li>Developed microservices and REST APIs for mutual fund operations.</li>
            <li>Implemented backend logic for transaction processing and reporting.</li>
            <li>Designed scalable Spring Boot microservices.</li>
            <li>Developed responsive UI using Angular and React.</li>
            <li>Deployed containerized microservices using Docker and Amazon EKS.</li>
            <li>Used Amazon RDS for relational database management.</li>
            <li>Used AWS IAM and VPC for secure infrastructure.</li>
            <li>Used CloudWatch for application monitoring.</li>
            <li>Focused on reliability, scalability, and performance.</li>
            <li>Testing: JUnit, Mockito, Jest, Jasmine, Karma, Unit & Integration Testing.</li>
          </ul>

          <div className="project-tech">
            <span>Java</span>
            <span>Spring Boot</span>
            <span>REST API</span>
            <span>Angular</span>
            <span>AWS</span>
            <span>PostgreSQL</span>
          </div>
        </div>

        {/* IES */}
        <div className="project">
          <div className="project-header">
            <span className="project-number">04</span>
            <h3>IES</h3>
          </div>

          <span className="project-domain">Healthcare Domain</span>

          <p>
            Built a large-scale healthcare application for insurance
            eligibility and claims processing.
          </p>

          <ul>
            <li>Developed REST APIs and UI modules.</li>
            <li>Improved processing efficiency through optimized backend logic.</li>
            <li>Worked with enterprise healthcare workflows.</li>
            <li>Implemented unit and integration testing.</li>
            <li>Used JUnit, Mockito, Jest, Jasmine, and Karma.</li>
          </ul>

          <div className="project-tech">
            <span>Java</span>
            <span>Spring</span>
            <span>REST API</span>
            <span>Angular</span>
            <span>React</span>
          </div>
        </div>

        {/* AIG */}
        <div className="project">
          <div className="project-header">
            <span className="project-number">05</span>
            <h3>AIG</h3>
          </div>

          <span className="project-domain">Legacy Modernization</span>

          <p>
            Modernized legacy healthcare applications and migrated existing
            services to newer Java technologies.
          </p>

          <ul>
            <li>Migrated legacy applications from Java 5 to Java 8.</li>
            <li>Refactored the codebase for maintainability and performance.</li>
            <li>Developed REST APIs.</li>
            <li>Modernized legacy system architecture.</li>
          </ul>

          <div className="project-tech">
            <span>Java 8</span>
            <span>Spring</span>
            <span>REST API</span>
            <span>Hibernate</span>
          </div>
        </div>

      </div>
    </section>
  );
}