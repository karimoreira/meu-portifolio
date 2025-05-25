document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const body = document.body;

  body.classList.add('no-transition');

  setTimeout(() => {
    body.classList.remove('no-transition');
  }, 100); 

  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('open');
  });

  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('open');
      }
    });
  });

  let resizeTimer;
  window.addEventListener('resize', () => {
    body.classList.add('no-transition');
    clearTimeout(resizeTimer); 
    resizeTimer = setTimeout(() => {
      body.classList.remove('no-transition');
    }, 250);
  });
});