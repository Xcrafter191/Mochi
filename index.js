// Add any interactive functionality here, such as scroll animations or pop-ups.
document.addEventListener('DOMContentLoaded', () => {
    console.log('YOCHI! Landing Page Loaded');
  });
  
window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);
