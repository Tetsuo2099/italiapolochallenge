document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('[data-anim]').forEach((el) => observer.observe(el));

  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  const burger = document.querySelector('.nav-hamburger');
  const overlay = document.querySelector('.nav-overlay');
  if (burger && overlay) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('open');
      overlay.classList.toggle('open');
    });
    overlay.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
      burger.classList.remove('open');
      overlay.classList.remove('open');
    }));
  }
});
