/* =============================================
   APEX REGENERATIVE MEDICINE
   Shared JavaScript Utilities
   ============================================= */

// ---- Scroll Animations ----
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}

// ---- Sticky Nav ----
function initStickyNav() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  const logoImg = nav.querySelector('.nav-logo img');
  const updateNav = () => {
    const scrolled = window.scrollY > 40;
    nav.classList.toggle('scrolled', scrolled);
    if (logoImg) {
      logoImg.src = scrolled ? 'images/logo.png' : 'images/logo-white.png';
    }
  };
  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();
}

// ---- Mobile Nav ----
function initMobileNav() {
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileNav = document.querySelector('.nav-mobile');
  const closeBtn  = document.querySelector('.nav-mobile-close');
  if (!hamburger || !mobileNav) return;

  hamburger.addEventListener('click', () => {
    mobileNav.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
  const close = () => {
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
  };
  if (closeBtn) closeBtn.addEventListener('click', close);
  mobileNav.querySelectorAll('.nav-link, .btn').forEach(el => el.addEventListener('click', close));
}

// ---- Counter Animation ----
function animateCounter(el, target, duration = 1800, suffix = '') {
  let start = 0;
  const step = target / (duration / 16);
  const tick = () => {
    start = Math.min(start + step, target);
    el.textContent = Math.floor(start).toLocaleString() + suffix;
    if (start < target) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.counted) {
        entry.target.dataset.counted = 'true';
        const target  = parseInt(entry.target.dataset.count);
        const suffix  = entry.target.dataset.suffix || '';
        animateCounter(entry.target, target, 1800, suffix);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(el => observer.observe(el));
}

// ---- Active nav link ----
function initActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      link.style.fontWeight = '700';
    }
  });
}

// ---- FAQ Accordion ----
function initFAQ() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    if (!question) return;
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(o => o.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
}

// ---- Smooth scroll for anchor links ----
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ---- Fetch helper ----
async function fetchTable(table, params = {}) {
  const query = new URLSearchParams({ limit: 100, ...params }).toString();
  const res = await fetch(`tables/${table}?${query}`);
  if (!res.ok) throw new Error(`Failed to fetch ${table}`);
  return res.json();
}

// ---- Stars helper ----
function renderStars(rating = 5) {
  return Array.from({ length: 5 }, (_, i) =>
    `<i class="fa-${i < rating ? 'solid' : 'regular'} fa-star star"></i>`
  ).join('');
}

// ---- Init all shared utilities ----
document.addEventListener('DOMContentLoaded', () => {
  initStickyNav();
  initMobileNav();
  initScrollAnimations();
  initCounters();
  initActiveNav();
  initFAQ();
  initSmoothScroll();
});
