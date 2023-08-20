let projectsArray = [];

// Se cargan  los datos de portfolio desde un archivo JSON
fetch('JS/portfolio.json')
.then(response => response.json())
.then(data => {
 projectsArray = data;
 generateProjects(projectsArray);
})

//  Referencia al elemento de la lista de proyectos
const projectsList = document.querySelector('.projects-list'); 

// Función para generar los íconos
function generateProjectIcons(project) {
    const projectIcons = document.createElement('div');
    projectIcons.classList.add('project-icons');
    projectIcons.innerHTML = `
    <ion-icon aria-hidden="true" name="folder-outline"></ion-icon>
    <a  href="${project.repositoryLink}" target="_blank" >
      <ion-icon name="logo-github"></ion-icon>
    </a>
    <a  href="${project.deployLink}" target="_blank" >
      <ion-icon name="link-outline"></ion-icon>
    </a>
    `;
  return projectIcons;
}

// Función para generar la lista de habilidades
function generateSkillsList(project) {
  const skillsList = document.createElement('ul');
  skillsList.classList.add('skills-list', 'project-skills');
  project.skills.forEach(function(skill) {
    const skillItem = document.createElement('li');
    skillItem.classList.add('skill');
    skillItem.textContent = skill;
    skillsList.appendChild(skillItem);
  });
  return skillsList;
}

// Función para generar un proyecto en el DOM
function generateProject(project) {
  const article = document.createElement('article');
  article.classList.add('project');
  article.id = project.id;
  article.setAttribute('aria-labelledby',`title-${project.id}`);
  
  const projectIcons = generateProjectIcons(project);
  const projectTitle = generateProjectTitle(project);
  const projectDescription = generateProjectDescription(project);
  const skillsList = generateSkillsList(project);
  
  article.appendChild(projectIcons);
  article.appendChild(projectTitle);
  article.appendChild(projectDescription);
  article.appendChild(skillsList);
  
  return article;
}

// Función para generar el título del proyecto
function generateProjectTitle(project) {
  const projectTitle = document.createElement('h3');
  projectTitle.id = `title-${project.id}`;
  projectTitle.classList.add('project-title');
  projectTitle.textContent = project.title;
  return projectTitle;
}

// Función para generar la descripción del proyecto
function generateProjectDescription(project) {
  const projectDescription = document.createElement('p');
  projectDescription.textContent = project.description;
  return projectDescription;
}

// Función para generar todos los proyectos en el DOM
function generateProjects() {
   
  projectsList.innerHTML = '';

  projectsArray.forEach(function(project) {
    const generatedProject = generateProject(project);
    projectsList.appendChild(generatedProject);
  });
}

// Generar los proyectos al cargar la página
window.addEventListener('load', generateProjects);
