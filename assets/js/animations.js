/* ============================================
   ANIMACIONES - IntersectionObserver y contadores
   JS nativo, sin librerías
   ============================================ */

(function () {
  'use strict';

  // ---------- Reveal on scroll ----------
  // Soporta elementos añadidos dinámicamente (ej. main.js renderiza después de DOMContentLoaded)
  let revealObserver = null;

  function setupRevealObserver() {
    if (!('IntersectionObserver' in window)) return null;
    return new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });
  }

  function observeRevealTargets(targets) {
    if (!revealObserver) {
      // Fallback si no hay IntersectionObserver: mostrar todo
      targets.forEach(t => t.classList.add('is-visible'));
      return;
    }
    targets.forEach(t => {
      if (!t.classList.contains('is-visible')) revealObserver.observe(t);
    });
  }

  function initReveal() {
    revealObserver = setupRevealObserver();
    const targets = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    if (!targets.length) return;
    observeRevealTargets(targets);

    // MutationObserver: detecta elementos .reveal añadidos dinámicamente al DOM
    if ('MutationObserver' in window) {
      const mo = new MutationObserver((mutations) => {
        const newReveals = [];
        mutations.forEach(m => {
          m.addedNodes.forEach(node => {
            if (node.nodeType !== 1) return;
            if (node.matches && node.matches('.reveal, .reveal-left, .reveal-right, .reveal-scale')) {
              newReveals.push(node);
            }
            // Buscar también dentro del subtree (por si se inyecta HTML completo)
            if (node.querySelectorAll) {
              node.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
                newReveals.push(el);
              });
            }
          });
        });
        if (newReveals.length) observeRevealTargets(newReveals);
      });
      mo.observe(document.body, { childList: true, subtree: true });
    }
  }

  // ---------- Contadores animados ----------
  function animateCounter(el) {
    const target = parseFloat(el.dataset.counter || '0');
    const duration = 1800;
    const startTime = performance.now();
    const startVal = 0;
    const isFloat = target % 1 !== 0;

    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      const current = startVal + (target - startVal) * eased;
      el.textContent = isFloat ? current.toFixed(1) : Math.floor(current).toLocaleString('es-CL');
      if (progress < 1) requestAnimationFrame(update);
      else el.textContent = isFloat ? target.toFixed(1) : target.toLocaleString('es-CL');
    }
    requestAnimationFrame(update);
  }

  function initCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    if (!counters.length || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    counters.forEach(c => observer.observe(c));

    // MutationObserver para counters añadidos dinámicamente
    if ('MutationObserver' in window) {
      const mo = new MutationObserver((mutations) => {
        const newCounters = [];
        mutations.forEach(m => {
          m.addedNodes.forEach(node => {
            if (node.nodeType !== 1) return;
            if (node.matches && node.matches('[data-counter]')) newCounters.push(node);
            if (node.querySelectorAll) {
              node.querySelectorAll('[data-counter]').forEach(el => newCounters.push(el));
            }
          });
        });
        newCounters.forEach(c => observer.observe(c));
      });
      mo.observe(document.body, { childList: true, subtree: true });
    }
  }

  // ---------- Smooth scroll a anchors ----------
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', (e) => {
        const href = a.getAttribute('href');
        if (href === '#' || href.length < 2) return;
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const nav = document.getElementById('navbar');
          const offset = nav ? nav.offsetHeight + 16 : 80;
          const y = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      });
    });
  }

  // ---------- Filtros de galería ----------
  function initGalleryFilters() {
    const buttons = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.gallery-item');
    if (!buttons.length) return;

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        items.forEach(item => {
          const cat = item.dataset.category;
          if (filter === 'all' || cat === filter) {
            item.style.display = '';
            item.style.opacity = '0';
            requestAnimationFrame(() => {
              item.style.transition = 'opacity 0.4s ease';
              item.style.opacity = '1';
            });
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  // ---------- Lightbox de galería ----------
  function initLightbox() {
    const dlg = document.getElementById('lightbox');
    if (!dlg) return;
    const img = dlg.querySelector('img');
    const caption = dlg.querySelector('.lightbox-caption');
    const closeBtn = dlg.querySelector('.lightbox-close');

    document.querySelectorAll('.gallery-item').forEach(item => {
      item.addEventListener('click', () => {
        const src = item.querySelector('img').src.replace(/w=\d+/, 'w=1600');
        const cap = item.querySelector('.overlay span')?.textContent || '';
        img.src = src;
        img.alt = item.querySelector('img').alt;
        if (caption) caption.textContent = cap;
        dlg.showModal();
      });
    });

    closeBtn?.addEventListener('click', () => dlg.close());
    dlg.addEventListener('click', (e) => {
      if (e.target === dlg) dlg.close();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && dlg.open) dlg.close();
    });
  }

  // ---------- FAQ accordion ----------
  function initFaq() {
    document.querySelectorAll('.faq-item').forEach(item => {
      const btn = item.querySelector('.faq-toggle');
      if (!btn) return;
      btn.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
        if (!isOpen) item.classList.add('open');
      });
    });
  }

  // ---------- Toast notification ----------
  window.showToast = function (message, type = 'success') {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();
    const t = document.createElement('div');
    t.className = `toast ${type === 'error' ? '!border-red-500' : ''}`;
    t.innerHTML = `
      <div class="flex items-start gap-3">
        <div class="flex-shrink-0 w-6 h-6 rounded-full ${type === 'error' ? 'bg-red-100 text-red-600' : 'bg-emerald-100 text-emerald-600'} flex items-center justify-center">
          ${type === 'error' ? '✕' : '✓'}
        </div>
        <p class="text-sm text-slate-700">${message}</p>
      </div>`;
    document.body.appendChild(t);
    requestAnimationFrame(() => t.classList.add('show'));
    setTimeout(() => {
      t.classList.remove('show');
      setTimeout(() => t.remove(), 400);
    }, 4000);
  };

  // ---------- Init ----------
  document.addEventListener('DOMContentLoaded', () => {
    initReveal();
    initCounters();
    initSmoothScroll();
    initGalleryFilters();
    initLightbox();
    initFaq();
  });
})();
