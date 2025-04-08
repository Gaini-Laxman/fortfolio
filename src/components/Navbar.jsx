// components/Navbar.jsx
export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>Laxman's Portfolio</h1>
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="/resume.pdf" download>
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
