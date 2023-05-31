document.addEventListener('DOMContentLoaded', () => {
  const toggleSwitch = document.getElementById('switch');
  const contentContainer = document.getElementById('contentContainer');
  const downloadBtn = document.getElementById('downloadBtn');
  const iconContainer = document.querySelector('.icon-container');
  let currentLanguage = 'es';

  toggleSwitch.addEventListener('change', () => {
    currentLanguage = toggleSwitch.checked ? 'en' : 'es';
    renderContent();
  });

  const languageContent = {
    en: {
      title: "Hi, I'm Fernando Pastor!",
      subtitle: "Frontend Developer",
      description: "Here below, I invite you to download my resume.",
      downloadText: "Download CV"
    },
    es: {
      title: "¡Hola, soy Fernando Pastor!",
      subtitle: "Desarrollador Frontend",
      description: "Acá abajo te invito a que descargues mi CV",
      downloadText: "Descargar CV"
    }
  };

  const renderContent = () => {
    const { title, subtitle, description, downloadText } = languageContent[currentLanguage];
    contentContainer.innerHTML = `<h1>${title}</h1><h2>${subtitle}</h2><h3>${description}</h3>`;
    downloadBtn.innerHTML = downloadText;
    iconContainer.style.display = 'flex';
  };

  renderContent();
});
