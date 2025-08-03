document.addEventListener('DOMContentLoaded', function() {
  const rotators = document.querySelectorAll('.rotator');
  
  rotators.forEach(rotator => {
    const cases = rotator.querySelectorAll('.rotator__case');
    let currentIndex = 0;
    
    function rotateCase() {
      cases[currentIndex].classList.remove('rotator__case_active');
      
      currentIndex = (currentIndex + 1) % cases.length;
      
      const nextCase = cases[currentIndex];
      const speed = nextCase.dataset.speed || 1000;
      const color = nextCase.dataset.color || 'black';
      
      nextCase.style.color = color;
      nextCase.classList.add('rotator__case_active');
      
      clearInterval(rotator.interval);
      rotator.interval = setInterval(rotateCase, speed);
    }
    
    const firstCase = cases[0];
    firstCase.style.color = firstCase.dataset.color || 'black';
    
    rotator.interval = setInterval(rotateCase, firstCase.dataset.speed || 1000);
  });
});