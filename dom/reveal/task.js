document.addEventListener('DOMContentLoaded', function() {
  const reveals = document.querySelectorAll('.reveal');
  
  function isElementVisible(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= window.innerHeight && 
      rect.bottom >= 0
    );
  }
  
  function handleScroll() {
    reveals.forEach(reveal => {
      if (isElementVisible(reveal)) {
        reveal.classList.add('reveal_active');
      }
    });
  }
  
  handleScroll();
  
  window.addEventListener('scroll', handleScroll);
});