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

  // ...

// ...

// ...

// ...

const renderContent = () => {
  const { title, subtitle, description, downloadText } = languageContent[currentLanguage];
  contentContainer.innerHTML = `<h1>${title}</h1><h2>${subtitle}</h2><h3>${description}</h3>`;
  downloadBtn.innerHTML = downloadText;
  iconContainer.style.display = 'flex';

  // Agregar clase "hidden" al botón al cambiar el idioma
  downloadBtn.classList.add('hidden');

  // Agregar clase "visible" al botón después de un breve retraso
  setTimeout(() => {
    downloadBtn.classList.remove('hidden');
    downloadBtn.classList.add('visible');
  }, 1000); // Retraso de 1 segundo (ajusta el valor según sea necesario)

  // Aplicar efecto de sacudida después de la transición
  setTimeout(() => {
    downloadBtn.classList.add('shake');
  }, 2000); // Retraso de 2 segundos (ajusta el valor según sea necesario)
};

// Renderizar contenido inicial
renderContent();

// Agregar evento click al botón de descarga
downloadBtn.addEventListener('click', () => {
  if (currentLanguage === 'es') {
    // Descargar archivo en español
    window.open('https://firebasestorage.googleapis.com/v0/b/ferdownloadcv.appspot.com/o/CV%20Fernando%20Pastor.pdf?alt=media&token=52f800ec-84b0-4ccc-8432-708cfc15dfae', '_blank');
  } else {
    // Descargar archivo en inglés
    window.open('https://firebasestorage.googleapis.com/v0/b/ferdownloadcv.appspot.com/o/CV%20Fernando%20Pastor%20English.pdf?alt=media&token=aab119ef-9ec8-4f00-b2cd-92c8c2289b8f', '_blank');
  }
});
})