/* Ariana Grill — interactions */
(function () {
  // Nav scroll state
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => {
      if (window.scrollY > 40) nav.classList.add('nav--solid');
      else nav.classList.remove('nav--solid');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Mobile menu toggle
  const burger = document.querySelector('.burger');
  const links = document.querySelector('.nav-links');
  if (burger && links) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('open');
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        burger.classList.remove('open');
        links.classList.remove('open');
      });
    });
  }

  // Hero parallax
  const hero = document.querySelector('.hero');
  if (hero) {
    window.addEventListener('scroll', () => {
      hero.style.setProperty('--hero-parallax', `${window.scrollY * 0.25}px`);
    }, { passive: true });
  }

  // Reveal on scroll (up, left, right)
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => io.observe(el));

  // FAQ
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    if (q) q.addEventListener('click', () => item.classList.toggle('open'));
  });

  // Menu tabs
  const tabs = document.querySelectorAll('.menu-tabs button');
  const cats = document.querySelectorAll('.menu-category');
  if (tabs.length) {
    tabs.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.target;
        tabs.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        if (target === 'all') {
          cats.forEach(c => c.style.display = '');
        } else {
          cats.forEach(c => {
            c.style.display = c.dataset.cat === target ? '' : 'none';
          });
        }
      });
    });
  }

  // Reservation form dummy handler
  const form = document.querySelector('#booking-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const confirm = document.querySelector('#booking-confirm');
      if (confirm) {
        confirm.hidden = false;
        confirm.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      form.reset();
    });
  }
})();
