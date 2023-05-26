document.getElementById('downloadButton').addEventListener('click', function() {
    // Aquí puedes colocar la lógica para generar y descargar el archivo PDF.
    // Por simplicidad, este ejemplo simplemente abre una nueva ventana con un mensaje.
    window.open('https://ruta-al-archivo.pdf');
  });

  ocument.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.staggering-grid-demo .el');
  
    const iconsContainer = document.createElement('div');
    iconsContainer.classList.add('icons-container');
  
    const githubLink = document.createElement('a');
    githubLink.href = 'https://github.com/ferpastor89';
    githubLink.target = '_blank';
    const githubIcon = document.createElement('i');
    githubIcon.classList.add('fa-brands fa-github');
    githubLink.appendChild(githubIcon);
    iconsContainer.appendChild(githubLink);
  
    const linkedinLink = document.createElement('a');
    linkedinLink.href = 'https://www.linkedin.com/in/ferpastordev/';
    linkedinLink.target = '_blank';
    const linkedinIcon = document.createElement('i');
    linkedinIcon.classList.add('fa-brands fa-linkedin');
    linkedinLink.appendChild(linkedinIcon);
    iconsContainer.appendChild(linkedinLink);
  });
  
