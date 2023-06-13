document.addEventListener('DOMContentLoaded', () => {
  const toggleSwitch = document.getElementById('switch');
  const contentContainer = document.getElementById('contentContainer');
  const downloadBtn = document.getElementById('downloadBtn');
  const iconContainer = document.querySelector('.icon-container');
  let currentLanguage = localStorage.getItem('language') || 'es';
  let esContent;
  toggleSwitch.checked = currentLanguage === 'en';

  toggleSwitch.addEventListener('change', () => {
    currentLanguage = toggleSwitch.checked ? 'en' : 'es';
    renderContent();
  });

  const languageContent = {
    en: {
      title: "Hi, I'm Fernando Pastor!",
      subtitle: "Frontend Developer",
      description: "Here below, I invite you to download my resume.",
      downloadText: "Download resume",
    }
  };

  const fetchESContent = async () => {
    const response = await fetch('index.html');
    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const container = doc.getElementById('contentContainer');
    esContent = container.innerHTML;
    renderContent();
  };

  const renderContent = () => {
    if (currentLanguage === 'es') {
      // Renderizar contenido en español desde el archivo HTML
      if (!esContent) {
        fetchESContent();
      } else {
        contentContainer.innerHTML = esContent;
        downloadBtn.innerHTML = 'Descargar CV';
      }
    } else {
      // Renderizar contenido en inglés generado dinámicamente
      const { title, subtitle, description, downloadText } = languageContent.en;
      contentContainer.innerHTML = `
        <h1>${title}</h1>
        <h2>${subtitle}</h2>
        <h3>${description}</h3>
      `;
      downloadBtn.innerHTML = downloadText;
    }

    // Mostrar el botón con los efectos de animación
    const showDownloadBtn = () => {
      downloadBtn.classList.remove('hidden');
      downloadBtn.classList.add('visible');
      downloadBtn.classList.add('shake');
    };

    setTimeout(showDownloadBtn, 2000);
  };

  // Agregar la lógica para reemplazar el texto del footer
  const textFooterP = document.getElementById('textFooterP');
  const languageContentFooter = {
    en: "© 2023 Fer Pastor Dev. All rights reserved."
  };

  toggleSwitch.addEventListener('change', () => {
    currentLanguage = toggleSwitch.checked ? 'en' : 'es';
    renderContent();
    updateFooterText();
  });

  const updateFooterText = () => {
    if (currentLanguage === 'en') {
      textFooterP.textContent = languageContentFooter.en;
    } else {
      textFooterP.textContent = "©2023 Fer Pastor Dev. Todos los derechos reservados.";
    }
  };

  // Renderizar contenido inicial en español y actualizar el texto del footer
  renderContent();
  updateFooterText();

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
});



