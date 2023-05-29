// Obtener el botón de descarga
const downloadBtn = document.getElementById('downloadBtn');

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

// Abrir la URL del archivo al hacer clic en el botón
downloadBtn.addEventListener('click', function() {
  window.open('https://ruta-al-archivo.pdf');
});


