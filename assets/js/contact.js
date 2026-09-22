/* ============================================
   CONTACT - Validación y envío del formulario
   MOCK: simula envío, sin backend
   ============================================ */

(function () {
  'use strict';

  // ---------- Pre-llenar servicio si viene en URL ----------
  function preselectService() {
    const params = new URLSearchParams(window.location.search);
    const servicio = params.get('servicio');
    if (servicio) {
      const select = document.querySelector('select[name="servicio"]');
      if (select) select.value = servicio;
    }
    const clase = params.get('clase');
    if (clase) {
      const msg = document.querySelector('textarea[name="mensaje"]');
      if (msg) msg.value = `Deseo reservar la clase: ${clase}\n\n`;
    }
  }

  // ---------- Validación ----------
  function validateField(field) {
    const value = field.value.trim();
    const name = field.name;
    let valid = true;
    let message = '';

    if (field.required && !value) {
      valid = false;
      message = 'Este campo es obligatorio';
    } else if (name === 'email' && value) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!re.test(value)) { valid = false; message = 'Email no válido'; }
    } else if (name === 'telefono' && value) {
      const re = /^[\d\s+\-()]{6,}$/;
      if (!re.test(value)) { valid = false; message = 'Teléfono no válido'; }
    } else if (name === 'nombre' && value && value.length < 2) {
      valid = false; message = 'Nombre demasiado corto';
    }

    setFieldError(field, valid, message);
    return valid;
  }

  function setFieldError(field, valid, message) {
    const errorEl = field.parentElement.querySelector('.field-error');
    if (!valid) {
      field.classList.add('error');
      if (errorEl) {
        errorEl.textContent = message;
        errorEl.classList.remove('hidden');
      }
    } else {
      field.classList.remove('error');
      if (errorEl) errorEl.classList.add('hidden');
    }
  }

  function validateForm(form) {
    const fields = form.querySelectorAll('input, select, textarea');
    let allValid = true;
    fields.forEach(field => {
      if (!validateField(field)) allValid = false;
    });
    return allValid;
  }

  // ---------- Envío (mock) ----------
  function submitForm(form) {
    return new Promise((resolve) => {
      const btn = form.querySelector('button[type="submit"]');
      const btnText = btn.querySelector('.btn-text');
      const btnSpinner = btn.querySelector('.btn-spinner');
      btn.disabled = true;
      btnText.classList.add('hidden');
      btnSpinner.classList.remove('hidden');

      // Simulación de envío
      setTimeout(() => {
        btn.disabled = false;
        btnText.classList.remove('hidden');
        btnSpinner.classList.add('hidden');
        resolve({
          ok: true,
          data: Object.fromEntries(new FormData(form))
        });
      }, 1500);
    });
  }

  function showSuccess(form, data) {
    const successMsg = `
      <div class="text-center py-10 reveal-scale is-visible">
        <div class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-50 mb-6">
          <svg viewBox="0 0 52 52" class="w-12 h-12">
            <circle class="checkmark-circle" cx="26" cy="26" r="25"/>
            <path class="checkmark-check" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
          </svg>
        </div>
        <h3 class="font-display text-2xl font-bold text-slate-800 mb-2">¡Mensaje enviado!</h3>
        <p class="text-slate-600 mb-6 max-w-md mx-auto">
          Gracias <strong>${data.nombre || ''}</strong>. Hemos recibido tu solicitud y te contactaremos en menos de 24 horas.
        </p>
        <button type="button" class="reset-form inline-flex items-center gap-2 px-6 py-2.5 bg-sky-500 text-white rounded-full font-semibold hover:bg-sky-600 transition-colors">
          Enviar otro mensaje
        </button>
      </div>`;
    form.innerHTML = successMsg;
    form.querySelector('.reset-form').addEventListener('click', () => window.location.reload());
  }

  // ---------- Init ----------
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    if (!form) return;

    preselectService();

    // Validación on blur
    form.querySelectorAll('input, select, textarea').forEach(field => {
      field.addEventListener('blur', () => validateField(field));
      field.addEventListener('input', () => {
        if (field.classList.contains('error')) validateField(field);
      });
    });

    // Submit
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!validateForm(form)) {
        window.showToast('Por favor corrige los errores del formulario', 'error');
        const firstError = form.querySelector('.error');
        if (firstError) firstError.focus();
        return;
      }
      const result = await submitForm(form);
      if (result.ok) {
        showSuccess(form, result.data);
        window.showToast('¡Mensaje enviado correctamente!');
      }
    });
  });
})();
