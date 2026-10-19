const header = document.querySelector('.site-header');
const revealItems = document.querySelectorAll('.reveal');

const setHeaderState = () => {
  if (window.scrollY > 12) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
};

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealItems.forEach((item) => revealObserver.observe(item));
setHeaderState();
window.addEventListener('scroll', setHeaderState);

document.getElementById('year').textContent = new Date().getFullYear();
