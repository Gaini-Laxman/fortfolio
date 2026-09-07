// components/Skills.jsx
export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Technical Skills</h2>

      <div className="skills-category">
        <h3>Backend</h3>
        <p>
          Java 8/11/17/21, Spring, Spring Boot, Spring MVC, JDBC, Servlets,
          Spring Security, JWT, Spring Batch, Spring Data JPA, XML, JSON,
          Hibernate, Microservices, REST APIs, Node.js, Postman, Swagger
        </p>
      </div>

      <div className="skills-category">
        <h3>Build Tools</h3>
        <p>Maven, Gradle</p>
      </div>

      <div className="skills-category">
        <h3>Web Servers</h3>
        <p>Tomcat, Jetty, WebLogic</p>
      </div>

      <div className="skills-category">
        <h3>IDE & Development Tools</h3>
        <p>
          Eclipse, STS, IntelliJ IDEA, VS Code
        </p>
      </div>

      <div className="skills-category">
        <h3>Testing & Other Tools</h3>
        <p>
          Git, JIRA, Bitbucket, Jenkins CI/CD, SonarQube, Log4j, JUnit,
          Mockito, Jest, Jasmine, Karma, JaCoCo, PuTTY
        </p>
      </div>

      <div className="skills-category">
        <h3>Frontend</h3>
        <p>
          Angular 17, React 18, TypeScript, JavaScript, HTML, Tailwind CSS,
          Bootstrap, JSP, Angular Material
        </p>
      </div>

      <div className="skills-category">
        <h3>Cloud & DevOps</h3>
        <p>
          AWS (EC2, S3, RDS, Lambda, IAM, VPC, Route 53, EKS, ECR, ECS,
          CloudWatch), Docker, Kubernetes, Jenkins CI/CD
        </p>
      </div>

      <div className="skills-category">
        <h3>Messaging</h3>
        <p>Kafka, Amazon SQS, Amazon SNS</p>
      </div>

      <div className="skills-category">
        <h3>Database</h3>
        <p>MySQL, Oracle, PostgreSQL</p>
      </div>
    </section>
  );
}