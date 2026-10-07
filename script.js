const root = document.documentElement;

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

function updateScrollState() {
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
  const eased = clamp(progress, 0, 1);

  root.style.setProperty('--scroll-progress', eased.toFixed(4));

  const hero = document.querySelector('.hero');
  if (hero) {
    hero.style.filter = `saturate(${1 + eased * 0.25}) brightness(${1 + eased * 0.12})`;
  }

  const doorPortal = document.querySelector('.door-portal');
  if (doorPortal) {
    const doorScale = 1 + eased * 1.5;
    doorPortal.style.transform = `translateY(${eased * 30}px) scale(${doorScale})`;
  }
}

window.addEventListener('scroll', updateScrollState, { passive: true });
window.addEventListener('resize', updateScrollState);

window.addEventListener('load', () => {
  updateScrollState();
});
