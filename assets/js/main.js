/* ============================================
   MAIN - Inicialización general
   Funciones compartidas por todas las páginas
   ============================================ */

(function () {
  'use strict';

  // ---------- Renderizado dinámico de datos mockeados ----------
  function renderFeatures(container) {
    if (!container) return;
    container.innerHTML = window.MOCK.features.map((f, i) => `
      <div class="reveal" data-delay="${(i % 5) + 1}">
        <div class="card-hover bg-white rounded-2xl p-6 shadow-sm border border-slate-100 h-full">
          <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-100 to-cyan-100 text-sky-600 flex items-center justify-center mb-4">
            ${window.icon(f.icon)}
          </div>
          <h3 class="font-display text-lg font-semibold text-slate-800 mb-2">${f.title}</h3>
          <p class="text-sm text-slate-600 leading-relaxed">${f.description}</p>
        </div>
      </div>
    `).join('');
  }

  function renderStats(container) {
    if (!container) return;
    container.innerHTML = window.MOCK.stats.map((s, i) => `
      <div class="reveal" data-delay="${i + 1}">
        <div class="text-center">
          <div class="font-display text-5xl md:text-6xl font-bold bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-transparent">
            <span class="counter-num" data-counter="${s.value}">0</span><span>${s.suffix}</span>
          </div>
          <p class="mt-2 text-sm md:text-base text-slate-600 uppercase tracking-wider">${s.label}</p>
        </div>
      </div>
    `).join('');
  }

  function renderServices(container, opts = {}) {
    if (!container) return;
    const { limit = null, detail = false } = opts;
    const list = limit ? window.MOCK.services.slice(0, limit) : window.MOCK.services;
    container.innerHTML = list.map((s, i) => `
      <article id="${s.id}" class="reveal" data-delay="${(i % 5) + 1}">
        <div class="card-hover bg-white rounded-2xl p-6 shadow-sm border border-slate-100 h-full flex flex-col">
          <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 text-white flex items-center justify-center mb-4 shadow-lg shadow-sky-500/20">
            ${window.icon(s.icon)}
          </div>
          <h3 class="font-display text-xl font-semibold text-slate-800 mb-2">${s.title}</h3>
          <p class="text-slate-600 text-sm leading-relaxed flex-grow">${s.description}</p>
          ${detail ? `
            <div class="mt-5 pt-5 border-t border-slate-100 flex items-center justify-between text-sm">
              <span class="flex items-center gap-1.5 text-slate-500">
                ${window.icon('clock')}
                ${s.duration}
              </span>
              <span class="font-semibold text-sky-600">
                ${s.priceFrom === 0 ? 'Gratis' : 'Desde $' + s.priceFrom}
              </span>
            </div>
            <a href="contacto.html?servicio=${s.id}"
               class="mt-4 inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-sky-50 text-sky-700 hover:bg-sky-100 rounded-lg text-sm font-medium transition-colors">
              Reservar ${window.icon('arrowRight')}
            </a>
          ` : ''}
        </div>
      </article>
    `).join('');
  }

  function renderTestimonials(container) {
    if (!container) return;
    container.innerHTML = window.MOCK.testimonials.map((t, i) => `
      <div class="reveal" data-delay="${i + 1}">
        <figure class="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 h-full flex flex-col">
          <div class="flex items-center gap-1 mb-3 text-amber-400">
            ${'★'.repeat(t.rating)}${'☆'.repeat(5 - t.rating)}
          </div>
          <blockquote class="text-slate-700 italic flex-grow leading-relaxed">
            "${t.text}"
          </blockquote>
          <figcaption class="mt-5 flex items-center gap-3 pt-4 border-t border-slate-100">
            <img src="${t.photo}" alt="${t.name}"
                 class="w-11 h-11 rounded-full object-cover ring-2 ring-sky-100" loading="lazy">
            <div>
              <p class="font-semibold text-slate-800 text-sm">${t.name}</p>
              <p class="text-xs text-slate-500">Paciente verificado</p>
            </div>
          </figcaption>
        </figure>
      </div>
    `).join('');
  }

  function renderGallery(container, withFilters = true) {
    if (!container) return;

    if (withFilters) {
      const categories = ['all', ...new Set(window.MOCK.gallery.map(g => g.category))];
      const filterContainer = document.getElementById('gallery-filters');
      if (filterContainer) {
        const labels = {
          all: 'Todas',
          instalaciones: 'Instalaciones',
          monturas: 'Monturas',
          equipo: 'Equipo'
        };
        filterContainer.innerHTML = categories.map((c, i) => `
          <button class="filter-btn px-4 py-2 rounded-full text-sm font-medium border transition-colors
                         ${i === 0 ? 'active' : 'border-slate-200 text-slate-600 hover:bg-slate-50'}"
                  data-filter="${c}">
            ${labels[c] || c}
          </button>
        `).join('');
      }
    }

    container.innerHTML = window.MOCK.gallery.map((g, i) => `
      <div class="gallery-item reveal cursor-pointer" data-category="${g.category}" data-delay="${(i % 5) + 1}">
        <img src="${g.url}" alt="${g.alt}" loading="lazy">
        <div class="overlay">
          <div>
            <p class="font-semibold">${g.caption}</p>
            <p class="text-xs opacity-80 capitalize">${g.category}</p>
          </div>
        </div>
      </div>
    `).join('');
  }

  function renderPricingTiers(container) {
    if (!container) return;
    container.innerHTML = window.MOCK.pricing.tiers.map((t, i) => `
      <div class="reveal" data-delay="${i + 1}">
        <div class="card-hover relative rounded-3xl p-8 h-full flex flex-col
                    ${t.highlight
                      ? 'bg-gradient-to-br from-sky-500 to-cyan-500 text-white shadow-2xl shadow-sky-500/40 scale-105 border-4 border-white'
                      : 'bg-white border border-slate-100 shadow-sm'}">
          ${t.badge ? `<span class="absolute -top-3 left-1/2 -translate-x-1/2 badge-pulse px-4 py-1 bg-amber-400 text-amber-900 text-xs font-bold rounded-full">${t.badge}</span>` : ''}
          <div class="text-center">
            <h3 class="font-display text-2xl font-bold ${t.highlight ? 'text-white' : 'text-slate-800'}">${t.name}</h3>
            <p class="mt-2 text-sm ${t.highlight ? 'text-sky-50' : 'text-slate-500'}">${t.description}</p>
            <div class="mt-6">
              <span class="text-sm ${t.highlight ? 'text-sky-100' : 'text-slate-500'}">${t.period}</span>
              <div class="font-display text-5xl font-bold mt-1">$${t.price}</div>
            </div>
          </div>
          <ul class="mt-8 space-y-3 flex-grow">
            ${t.features.map(f => `
              <li class="flex items-start gap-2 text-sm ${t.highlight ? 'text-sky-50' : 'text-slate-600'}">
                <span class="flex-shrink-0 w-5 h-5 rounded-full ${t.highlight ? 'bg-white/20' : 'bg-sky-100 text-sky-600'} flex items-center justify-center mt-0.5">
                  ${window.icon('check')}
                </span>
                <span>${f}</span>
              </li>
            `).join('')}
          </ul>
          <a href="contacto.html"
             class="mt-8 inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full font-semibold transition-all
                    ${t.highlight
                      ? 'bg-white text-sky-600 hover:bg-slate-50 hover:scale-105 shadow-lg'
                      : 'bg-sky-500 text-white hover:bg-sky-600 hover:scale-105'}">
            ${t.cta} ${window.icon('arrowRight')}
          </a>
        </div>
      </div>
    `).join('');
  }

  function renderPricingExtras(container) {
    if (!container) return;
    container.innerHTML = `
      <div class="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <table class="w-full">
          <thead class="bg-slate-50">
            <tr>
              <th class="text-left px-6 py-4 text-sm font-semibold text-slate-700">Servicio</th>
              <th class="text-right px-6 py-4 text-sm font-semibold text-slate-700">Precio</th>
            </tr>
          </thead>
          <tbody>
            ${window.MOCK.pricing.extras.map((e, i) => `
              <tr class="${i % 2 ? 'bg-slate-50/50' : ''} hover:bg-sky-50/50 transition-colors">
                <td class="px-6 py-4 text-slate-700">${e.service}</td>
                <td class="px-6 py-4 text-right font-semibold text-sky-600">${e.price}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>`;
  }

  function renderTeam(container) {
    if (!container) return;
    container.innerHTML = window.MOCK.team.map((m, i) => `
      <div class="reveal" data-delay="${i + 1}">
        <div class="card-hover bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 h-full">
          <div class="aspect-[4/5] overflow-hidden bg-slate-100">
            <img src="${m.photo}" alt="${m.name}"
                 class="w-full h-full object-cover" loading="lazy">
          </div>
          <div class="p-5">
            <h3 class="font-display text-lg font-semibold text-slate-800">${m.name}</h3>
            <p class="text-sm text-sky-600 font-medium">${m.role}</p>
            <p class="mt-3 text-sm text-slate-600 leading-relaxed">${m.bio}</p>
          </div>
        </div>
      </div>
    `).join('');
  }

  function renderSchedule(container) {
    if (!container) return;
    container.innerHTML = window.MOCK.schedule.classes.map((day, i) => `
      <div class="reveal" data-delay="${i + 1}">
        <div class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div class="bg-gradient-to-r from-sky-500 to-cyan-500 text-white px-6 py-4">
            <h3 class="font-display text-xl font-semibold">${day.day}</h3>
          </div>
          <div class="divide-y divide-slate-100">
            ${day.slots.map(slot => `
              <div class="p-5 hover:bg-slate-50/50 transition-colors">
                <div class="flex flex-wrap items-start justify-between gap-3">
                  <div class="flex-1 min-w-0">
                    <p class="font-semibold text-slate-800">${slot.class}</p>
                    <div class="mt-1 flex flex-wrap items-center gap-3 text-xs text-slate-500">
                      <span class="flex items-center gap-1">${window.icon('clock')}${slot.time}</span>
                      <span class="inline-flex items-center gap-1 px-2 py-0.5 bg-sky-50 text-sky-700 rounded-full">
                        ${slot.level}
                      </span>
                    </div>
                  </div>
                  <div class="flex flex-col items-end gap-2">
                    <span class="text-xs ${slot.spots <= 2 ? 'text-red-600' : 'text-emerald-600'} font-semibold">
                      ${slot.spots <= 2 ? '⚠ ' : ''}${slot.spots} ${slot.spots === 1 ? 'cupo' : 'cupos'}
                    </span>
                    <a href="contacto.html"
                       class="px-4 py-1.5 text-xs font-semibold bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-colors">
                      Reservar
                    </a>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `).join('');
  }

  function renderBrands(container) {
    if (!container) return;
    const allBrands = [...window.MOCK.brands, ...window.MOCK.brands];
    container.innerHTML = `
      <div class="marquee">
        <div class="marquee-track">
          ${allBrands.map(b => `
            <div class="flex-shrink-0 px-8 py-4 text-xl md:text-2xl font-display font-bold text-slate-400 hover:text-sky-600 transition-colors whitespace-nowrap">
              ${b}
            </div>
          `).join('')}
        </div>
      </div>`;
  }

  function renderHistory(container) {
    if (!container) return;
    container.innerHTML = `
      <div class="relative">
        <div class="timeline-line hidden md:block"></div>
        ${window.MOCK.history.map((h, i) => `
          <div class="reveal relative md:grid md:grid-cols-2 md:gap-12 mb-12" data-delay="${(i % 5) + 1}">
            <div class="md:text-right md:pr-12 ${i % 2 ? 'md:order-2 md:text-left md:pl-12 md:pr-0' : ''}">
              <div class="font-display text-4xl font-bold text-sky-500">${h.year}</div>
              <p class="mt-2 text-slate-700 text-lg">${h.event}</p>
            </div>
            <div class="hidden md:block md:order-1 ${i % 2 ? 'md:order-1' : 'md:order-2'}"></div>
            <div class="hidden md:block absolute left-1/2 top-3 -translate-x-1/2 w-4 h-4 rounded-full bg-sky-500 ring-4 ring-white shadow"></div>
          </div>
        `).join('')}
      </div>`;
  }

  function renderValues(container) {
    if (!container) return;
    container.innerHTML = window.MOCK.values.map((v, i) => `
      <div class="reveal" data-delay="${i + 1}">
        <div class="card-hover bg-white rounded-2xl p-6 shadow-sm border border-slate-100 h-full">
          <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-100 to-cyan-100 text-sky-600 flex items-center justify-center mb-4">
            ${window.icon(v.icon)}
          </div>
          <h3 class="font-display text-xl font-semibold text-slate-800 mb-2">${v.title}</h3>
          <p class="text-slate-600 text-sm leading-relaxed">${v.description}</p>
        </div>
      </div>
    `).join('');
  }

  function renderFaq(container) {
    if (!container) return;
    container.innerHTML = window.MOCK.faq.map((f, i) => `
      <div class="faq-item reveal border border-slate-100 rounded-xl bg-white overflow-hidden" data-delay="${(i % 5) + 1}">
        <button class="faq-toggle w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-slate-50/50 transition-colors">
          <span class="font-semibold text-slate-800">${f.question}</span>
          <span class="faq-icon flex-shrink-0 w-6 h-6 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
          </span>
        </button>
        <div class="faq-answer grid grid-rows-[0fr] transition-all duration-300 ease-out">
          <div class="overflow-hidden">
            <p class="px-5 pb-5 text-slate-600 text-sm leading-relaxed">${f.answer}</p>
          </div>
        </div>
      </div>
    `).join('');

    // CSS dinámico para FAQ abierto
    const style = document.createElement('style');
    style.textContent = `
      .faq-item.open .faq-answer { grid-template-rows: 1fr; }
      .faq-item.open .faq-icon { transform: rotate(45deg); background: #0ea5e9; color: white; }
    `;
    document.head.appendChild(style);
  }

  // ---------- Init ----------
  document.addEventListener('DOMContentLoaded', () => {
    renderFeatures(document.getElementById('features-grid'));
    renderStats(document.getElementById('stats-grid'));
    renderServices(document.getElementById('services-grid'));
    renderServices(document.getElementById('services-preview'), { limit: 3 });
    renderServices(document.getElementById('services-detail'), { detail: true });
    renderTestimonials(document.getElementById('testimonials-grid'));
    renderGallery(document.getElementById('gallery-grid'));
    renderPricingTiers(document.getElementById('pricing-tiers'));
    renderPricingExtras(document.getElementById('pricing-extras'));
    renderTeam(document.getElementById('team-grid'));
    renderSchedule(document.getElementById('schedule-grid'));
    renderBrands(document.getElementById('brands-marquee'));
    renderHistory(document.getElementById('history-timeline'));
    renderValues(document.getElementById('values-grid'));
    renderFaq(document.getElementById('faq-list'));

    // Marcar año en cualquier elemento con [data-year]
    document.querySelectorAll('[data-year]').forEach(el => {
      el.textContent = new Date().getFullYear();
    });

    // Marcar fecha actual en [data-date]
    document.querySelectorAll('[data-date]').forEach(el => {
      el.textContent = new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
    });
  });
})();
