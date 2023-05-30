const switchInput = document.getElementById('switch');
const contentContainer = document.querySelector('.container');
let isEnglish = false;

switchInput.addEventListener('change', () => {
  isEnglish = switchInput.checked;
  loadContent();
});

function loadContent() {
  const url = isEnglish ? 'english.html' : 'index.html';
  fetchContent(url)
    .then(responseText => {
      contentContainer.innerHTML = responseText;
    })
    .catch(error => {
      console.error('Error al cargar el archivo:', error);
    });
}

function fetchContent(url) {
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.text();
      }
      throw new Error(`HTTP error! Status: ${response.status}`);
    });
}

// Cargar contenido inicial
window.addEventListener('DOMContentLoaded', () => {
  loadContent();
});








const downloadBtn = document.getElementById('downloadBtn');

document.getElementById('downloadBtn').addEventListener('click', function() {
  window.open('https://firebasestorage.googleapis.com/v0/b/ferdownloadcv.appspot.com/o/CV%20Fernando%20Pastor.pdf?alt=media&token=52f800ec-84b0-4ccc-8432-708cfc15dfae', '_blank');
});

// Ocultar el botón inicialmente
downloadBtn.style.opacity = '0';
downloadBtn.style.transform = 'translateY(80px)';

// Mostrar el botón después de que el contenido se haya cargado
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    downloadBtn.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    downloadBtn.style.opacity = '1';
    downloadBtn.style.transform = 'translateY(0)';
  }, 1000); // Ajusta el tiempo de retraso según tus necesidades
});




