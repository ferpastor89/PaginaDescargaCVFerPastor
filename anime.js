document.addEventListener('DOMContentLoaded', function() {
  const elements = document.querySelectorAll('.staggering-grid-demo .el');

  anime({
    targets: elements,
    scale: [
      { value: 0.1, easing: 'easeOutSine', duration: 500 },
      { value: 1, easing: 'easeInOutQuad', duration: 1200 }
    ],
    delay: anime.stagger(200, { grid: [14, 5], from: 'center' }).start,
    complete: function() {
      // Ocultar los elementos
      elements.forEach(element => {
        element.parentNode.removeChild(element);
      });

      // Mostrar los iconos de las redes sociales en el centro de staggering-grid-demo
      const iconContainer = document.querySelector('.icon-container');
      const staggeringGridDemo = document.querySelector('.staggering-grid-demo');
      const staggeringGridDemoRect = staggeringGridDemo.getBoundingClientRect();
      const iconContainerRect = iconContainer.getBoundingClientRect();

      const offsetX = staggeringGridDemoRect.left + (staggeringGridDemoRect.width - iconContainerRect.width) / 2;
      const offsetY = staggeringGridDemoRect.top + (staggeringGridDemoRect.height - iconContainerRect.height) / 2;

      iconContainer.style.display = 'flex';
      iconContainer.style.position = 'absolute';
      iconContainer.style.left = offsetX + 'px';
      iconContainer.style.top = offsetY + 'px';
    }
  });
});
