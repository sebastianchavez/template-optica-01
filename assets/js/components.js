/* ============================================
   COMPONENTES REUTILIZABLES
   Navbar y Footer inyectados en cada página
   ============================================ */

(function () {
  'use strict';

  // Detectar página actual
  const currentPage = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();

  // ---------- NAVBAR ----------
  function renderNavbar() {
    const brand = window.MOCK.brand;
    const navItems = window.MOCK.nav.map(item => {
      const isActive = currentPage === item.href.toLowerCase();
      return `
        <a href="${item.href}"
           class="relative px-3 py-2 text-sm font-medium transition-colors duration-200
                  ${isActive ? 'text-sky-600' : 'text-slate-700 hover:text-sky-600'}
                  group">
          ${item.label}
          <span class="absolute left-3 right-3 -bottom-0.5 h-0.5 bg-sky-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${isActive ? 'scale-x-100' : ''}"></span>
        </a>`;
    }).join('');

    return `
    <header id="navbar" class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md transition-all duration-300 py-4">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between" aria-label="Navegación principal">
        <a href="index.html" class="flex items-center gap-2 text-sky-700 hover:text-sky-600 transition-colors">
          ${window.icon('logo')}
          <span class="font-display text-xl font-bold">${brand.name}</span>
        </a>

        <div class="hidden lg:flex items-center gap-1">
          ${navItems}
        </div>

        <div class="hidden lg:flex items-center gap-3">
          <a href="contacto.html"
             class="btn-pulse inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-sky-500 to-cyan-500 text-white text-sm font-semibold rounded-full shadow-lg shadow-sky-500/30 hover:shadow-xl hover:shadow-sky-500/40 hover:scale-105 transition-all duration-300">
            Agendar cita
            ${window.icon('arrowRight')}
          </a>
        </div>

        <button id="menu-toggle"
                class="lg:hidden p-2 text-slate-700 hover:text-sky-600 transition-colors"
                aria-label="Abrir menú" aria-expanded="false" aria-controls="mobile-menu">
          ${window.icon('menu')}
        </button>
      </nav>

      <div id="mobile-menu"
           class="lg:hidden hidden bg-white border-t border-slate-100 shadow-xl">
        <div class="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
          ${window.MOCK.nav.map(item => {
            const isActive = currentPage === item.href.toLowerCase();
            return `<a href="${item.href}"
                       class="block px-4 py-3 rounded-lg text-sm font-medium transition-colors
                              ${isActive ? 'bg-sky-50 text-sky-600' : 'text-slate-700 hover:bg-slate-50'}">
                    ${item.label}</a>`;
          }).join('')}
          <a href="contacto.html"
             class="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-sky-500 to-cyan-500 text-white text-sm font-semibold rounded-full">
            Agendar cita
          </a>
        </div>
      </div>
    </header>`;
  }

  // ---------- FOOTER ----------
  function renderFooter() {
    const brand = window.MOCK.brand;
    const year = new Date().getFullYear();
    const c = window.MOCK.contact;

    return `
    <footer class="bg-slate-900 text-slate-300 mt-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <a href="index.html" class="flex items-center gap-2 text-white">
              ${window.icon('logo')}
              <span class="font-display text-xl font-bold">${brand.name}</span>
            </a>
            <p class="mt-4 text-sm text-slate-400 leading-relaxed">
              ${brand.description}
            </p>
            <div class="mt-6 flex gap-3">
              <a href="${c.social.facebook}" aria-label="Facebook"
                 class="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-sky-600 hover:text-white transition-all">${window.icon('facebook')}</a>
              <a href="${c.social.instagram}" aria-label="Instagram"
                 class="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-sky-600 hover:text-white transition-all">${window.icon('instagram')}</a>
              <a href="${c.social.twitter}" aria-label="Twitter"
                 class="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-sky-600 hover:text-white transition-all">${window.icon('twitter')}</a>
            </div>
          </div>

          <div>
            <h3 class="text-white font-semibold mb-4">Enlaces</h3>
            <ul class="space-y-2 text-sm">
              ${window.MOCK.nav.map(i =>
                `<li><a href="${i.href}" class="hover:text-sky-400 transition-colors link-underline">${i.label}</a></li>`
              ).join('')}
            </ul>
          </div>

          <div>
            <h3 class="text-white font-semibold mb-4">Servicios</h3>
            <ul class="space-y-2 text-sm">
              ${window.MOCK.services.slice(0, 6).map(s =>
                `<li><a href="servicios.html#${s.id}" class="hover:text-sky-400 transition-colors link-underline">${s.title}</a></li>`
              ).join('')}
            </ul>
          </div>

          <div>
            <h3 class="text-white font-semibold mb-4">Contacto</h3>
            <ul class="space-y-3 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-sky-400 mt-0.5">${window.icon('pin')}</span>
                <span>${c.address}</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-sky-400">${window.icon('phone')}</span>
                <a href="tel:${c.phone.replace(/\s/g, '')}" class="hover:text-sky-400">${c.phone}</a>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-sky-400">${window.icon('mail')}</span>
                <a href="mailto:${c.email}" class="hover:text-sky-400 break-all">${c.email}</a>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-sky-400">${window.icon('whatsapp')}</span>
                <a href="https://wa.me/${c.whatsapp.replace(/\D/g, '')}" class="hover:text-sky-400">${c.whatsapp}</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <p>&copy; ${year} ${brand.name}. Todos los derechos reservados.</p>
          <div class="flex gap-6">
            <a href="privacidad.html" class="hover:text-sky-400 transition-colors">Políticas de Privacidad</a>
            <a href="terminos.html" class="hover:text-sky-400 transition-colors">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>`;
  }

  // ---------- INYECCIÓN ----------
  function inject(target, html) {
    const el = document.querySelector(target);
    if (el) el.innerHTML = html;
  }

  document.addEventListener('DOMContentLoaded', () => {
    inject('#nav-container', renderNavbar());
    inject('#footer-container', renderFooter());

    document.querySelectorAll('[data-contact]').forEach(el => {
      const key = el.dataset.contact;
      const value = window.MOCK.contact[key];
      if (!value) return;
      if (key === 'mapEmbed') {
        el.src = value;
        return;
      }
      if (el.dataset.contactLabel !== 'false') el.textContent = value;
      if (key === 'phone') el.href = `tel:${value.replace(/\s/g, '')}`;
      if (key === 'whatsapp') el.href = `https://wa.me/${value.replace(/\D/g, '')}`;
      if (key === 'email') el.href = `mailto:${value}`;
    });

    // Toggle menú móvil
    const toggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('mobile-menu');
    if (toggle && menu) {
      function closeMenu() {
        menu.classList.add('hidden');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Abrir menú');
        toggle.innerHTML = window.icon('menu');
      }
      toggle.addEventListener('click', () => {
        const isOpen = !menu.classList.contains('hidden');
        menu.classList.toggle('hidden');
        toggle.setAttribute('aria-expanded', !isOpen);
        toggle.setAttribute('aria-label', isOpen ? 'Abrir menú' : 'Cerrar menú');
        toggle.innerHTML = isOpen ? window.icon('menu') : window.icon('close');
      });
      document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && !menu.classList.contains('hidden')) {
          closeMenu();
          toggle.focus();
        }
      });
      window.matchMedia('(min-width: 1024px)').addEventListener('change', closeMenu);
    }

    // Navbar shrink al hacer scroll
    const nav = document.getElementById('navbar');
    if (nav) {
      let last = 0;
      window.addEventListener('scroll', () => {
        const y = window.scrollY;
        if (y > 60 && !nav.classList.contains('nav-shrink')) {
          nav.classList.add('nav-shrink');
        } else if (y <= 60 && nav.classList.contains('nav-shrink')) {
          nav.classList.remove('nav-shrink');
        }
        last = y;
      }, { passive: true });
    }
  });
})();
