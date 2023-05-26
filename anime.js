
document.addEventListener('DOMContentLoaded', function() {
  const elements = document.querySelectorAll('.staggering-grid-demo .el');

  anime({
    targets: elements,
    scale: [
      { value: .1, easing: 'easeOutSine', duration: 500 },
      { value: 1, easing: 'easeInOutQuad', duration: 1200 }
    ],
    delay: anime.stagger(200, { grid: [14, 5], from: 'center' }),
    complete: function() {
      // Ocultar los elementos
      elements.forEach(element => {
        element.parentNode.removeChild(element);
      });
    }
  });
});

d


  






