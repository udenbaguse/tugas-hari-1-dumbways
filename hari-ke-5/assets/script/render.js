import { createProjectCard } from "./card.js";

export function renderProjects(projects, projectsContainer) {
  projectsContainer.innerHTML = "";

  projects.forEach((project) => {
    const card = createProjectCard(project);
    projectsContainer.appendChild(card);
  });
}