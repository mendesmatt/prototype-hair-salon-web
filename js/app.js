/* HEADER SCROLL */
const header = document.getElementById('header');
const onScroll = () => {
  if (window.scrollY > 40) {
    header.classList.add('bg-ink/90', 'backdrop-blur', 'border-line');
  } else {
    header.classList.remove('bg-ink/90', 'backdrop-blur', 'border-line');
  }
};
window.addEventListener('scroll', onScroll);
onScroll();

/* MENU MOBILE */
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const iconMenu = document.getElementById('iconMenu');
const iconClose = document.getElementById('iconClose');

const closeMenu = () => {
  mobileMenu.classList.add('hidden');
  iconMenu.classList.remove('hidden');
  iconClose.classList.add('hidden');
};
menuBtn.addEventListener('click', () => {
  const isHidden = mobileMenu.classList.toggle('hidden');
  iconMenu.classList.toggle('hidden', !isHidden);
  iconClose.classList.toggle('hidden', isHidden);
});
document.querySelectorAll('.mobile-link').forEach(link => link.addEventListener('click', closeMenu));

/* TABS DE SERVICOS */
const tabBtns = document.querySelectorAll('.tab-btn');
const panels = document.querySelectorAll('.tab-panel');
tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tab;
    tabBtns.forEach(b => b.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(target).classList.add('active');
  });
});

/* REVELACAO NO SCROLL */
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduce && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
}