// components/Projects.jsx
export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Project Experience</h2>

      {/* Shop Manager */}
      <div className="project">
        <h3>Shop Manager – Automotive Domain</h3>

        <p>
          Built a full-stack application managing customers, vehicles,
          invoices, inspections, and inventory.
        </p>

        <ul>
          <li>
            Designed scalable backend services using Spring Boot and
            microservices architecture.
          </li>
          <li>
            Improved system performance by optimizing API calls and database
            queries.
          </li>
          <li>
            Integrated external APIs for real-time parts availability and
            ordering.
          </li>
          <li>
            Implemented event-driven architecture for real-time updates.
          </li>
          <li>
            Developed responsive UI for web and mobile using Angular and React
            with TypeScript and JavaScript.
          </li>
          <li>
            Deployed containerized microservices using Docker and Amazon EKS.
          </li>
          <li>
            Used Amazon RDS for relational database management and transaction
            data storage.
          </li>
          <li>
            Used AWS IAM and VPC for access control and secure network
            configuration.
          </li>
          <li>
            Used Amazon CloudWatch for monitoring application logs, metrics,
            and services.
          </li>
          <li>
            Testing: JUnit, Mockito, Jest, Jasmine, Karma, Unit Testing, and
            Integration Testing.
          </li>
        </ul>
      </div>

      {/* Precise ID */}
      <div className="project">
        <h3>Precise ID – Fraud Detection System (Banking Domain)</h3>

        <p>
          Developed a banking fraud detection system for real-time transaction
          validation and fraud processing.
        </p>

        <ul>
          <li>
            Integrated multiple fraud detection modules into a unified system.
          </li>
          <li>
            Developed backend services for real-time validation and high-volume
            transaction processing.
          </li>
          <li>
            Designed scalable workflows ensuring reliable fraud detection.
          </li>
          <li>
            Designed scalable backend services using Spring Boot and
            microservices architecture.
          </li>
          <li>
            Developed responsive UI for web and mobile using Angular and React
            with TypeScript and JavaScript.
          </li>
          <li>
            Deployed containerized microservices using Docker and Amazon EKS.
          </li>
          <li>
            Used Amazon RDS for relational database management and transaction
            data storage.
          </li>
          <li>
            Used AWS IAM and VPC for access control and secure network
            configuration.
          </li>
          <li>
            Used Amazon CloudWatch for monitoring application logs, metrics,
            and services.
          </li>
          <li>
            Testing: JUnit, Mockito, Jest, Jasmine, Karma, Unit Testing, and
            Integration Testing.
          </li>
        </ul>
      </div>

      {/* Funds360 */}
      <div className="project">
        <h3>Funds360 – Mutual Funds Management System</h3>

        <p>
          Developed a mutual fund management platform for transaction
          processing and reporting.
        </p>

        <ul>
          <li>
            Developed microservices and REST APIs for mutual fund operations.
          </li>
          <li>
            Implemented backend logic for transaction processing and reporting.
          </li>
          <li>
            Ensured high system reliability and performance.
          </li>
          <li>
            Designed scalable backend services using Spring Boot and
            microservices architecture.
          </li>
          <li>
            Developed responsive UI for web and mobile using Angular and React
            with TypeScript and JavaScript.
          </li>
          <li>
            Deployed containerized microservices using Docker and Amazon EKS.
          </li>
          <li>
            Used Amazon RDS for relational database management and transaction
            data storage.
          </li>
          <li>
            Used AWS IAM and VPC for access control and secure network
            configuration.
          </li>
          <li>
            Used Amazon CloudWatch for monitoring application logs, metrics,
            and services.
          </li>
          <li>
            Testing: JUnit, Mockito, Jest, Jasmine, Karma, Unit Testing, and
            Integration Testing.
          </li>
        </ul>
      </div>

      {/* IES */}
      <div className="project">
        <h3>IES – Integrated Eligibility System (Healthcare Domain)</h3>

        <p>
          Built a large-scale healthcare application for insurance eligibility
          and claims processing.
        </p>

        <ul>
          <li>Developed REST APIs and UI modules.</li>
          <li>
            Improved processing efficiency through optimized backend logic.
          </li>
          <li>
            Testing: JUnit, Mockito, Jest, Jasmine, Karma, Unit Testing, and
            Integration Testing.
          </li>
        </ul>
      </div>

      {/* AIG */}
      <div className="project">
        <h3>AIG – Legacy System Modernization</h3>

        <p>
          Modernized legacy healthcare applications and migrated existing
          services to newer Java technologies.
        </p>

        <ul>
          <li> Migrated legacy applications from Java 5 to Java 8.</li>
          <li>
            Refactored the codebase for better maintainability and performance.
          </li>
          <li>Developed REST APIs and modernized system architecture.</li>
        </ul>
      </div>
    </section>
  );
}