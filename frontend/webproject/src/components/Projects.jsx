import { useEffect, useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
  fetch("/api/projects")
    .then(res => res.json())
    .then(data => setProjects(data))
    .catch(err => console.error("ERROR:", err));
}, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>My Projects</h1>

      {projects.map(project => (
        <div key={project.id} style={{
          border: "1px solid #ccc",
          padding: "1rem",
          marginBottom: "1rem",
          borderRadius: "10px"
        }}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <p><strong>Tech:</strong> {project.tech}</p>

          <a href={project.githubUrl} target="_blank">
            View on GitHub
          </a>
        </div>
      ))}
    </div>
  );
}
