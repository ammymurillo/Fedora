
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* =======================================================
     0. BARRA DE PROGRESO DE LECTURA
     ======================================================= */
  (function progressBar() {
    var bar = document.createElement('div');
    bar.className = 'progress-bar';
    bar.innerHTML = '<div class="progress-bar__fill"></div>';
    document.body.appendChild(bar);
    var fill = bar.querySelector('.progress-bar__fill');

    function update() {
      var doc = document.documentElement;
      var scrollTop = window.scrollY || doc.scrollTop;
      var height = doc.scrollHeight - doc.clientHeight;
      var pct = height > 0 ? (scrollTop / height) * 100 : 0;
      fill.style.width = pct + '%';
    }
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
  })();

  /* =======================================================
     1. INTRO TIPO TERMINAL (solo si existe #bootOverlay)
     ======================================================= */
  (function bootSequence() {
    var overlay = document.getElementById('bootOverlay');
    if (!overlay) { revealHero(); return; }

    var lines = Array.prototype.slice.call(overlay.querySelectorAll('.boot-line'));
    if (!lines.length || reduceMotion) {
      finishBoot();
      return;
    }

    document.body.classList.add('is-booting');

    var CHAR_DELAY = 18;   // ms por carácter
    var LINE_PAUSE = 220;  // pausa entre líneas
    var i = 0;

    function typeLine(line, done) {
      var text = line.getAttribute('data-text') || '';
      var span = document.createElement('span');
      var cursor = document.createElement('span');
      cursor.className = 'boot-cursor';
      line.appendChild(span);
      line.appendChild(cursor);

      var c = 0;
      (function step() {
        span.textContent = text.slice(0, c);
        c++;
        if (c <= text.length) {
          setTimeout(step, CHAR_DELAY);
        } else {
          setTimeout(function () {
            cursor.remove();
            done();
          }, LINE_PAUSE);
        }
      })();
    }

    function next() {
      if (i >= lines.length) {
        setTimeout(finishBoot, 260);
        return;
      }
      var line = lines[i++];
      typeLine(line, next);
    }
    next();

    function finishBoot() {
      overlay.classList.add('is-done');
      document.body.classList.remove('is-booting');
      overlay.setAttribute('aria-hidden', 'true');
      revealHero();
      setTimeout(function () { overlay.remove(); }, 700);
    }
  })();

  function revealHero() {
    var hero = document.querySelector('.reveal-on-load');
    if (hero) {
      requestAnimationFrame(function () {
        hero.classList.add('is-revealed');
      });
    }
  }

  /* =======================================================
     2. NAV: sombra al hacer scroll + menú móvil
     ======================================================= */
  (function nav() {
    var topnav = document.querySelector('.topnav');
    if (topnav) {
      var onScroll = function () {
        topnav.classList.toggle('is-scrolled', window.scrollY > 8);
      };
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
    }

    var toggle = document.getElementById('navToggle');
    var links = document.querySelector('.topnav__links');
    if (toggle && links) {
      toggle.addEventListener('click', function () {
        var isOpen = links.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', String(isOpen));
      });
      links.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
          links.classList.remove('is-open');
          toggle.setAttribute('aria-expanded', 'false');
        });
      });
    }
  })();

  /* =======================================================
     3. TABS DE VERSIONES (solo index.html)
     ======================================================= */
  (function tabs() {
    var tabButtons = Array.prototype.slice.call(document.querySelectorAll('.tab[data-version]'));
    if (!tabButtons.length) return;

    var current = tabButtons.filter(function (t) { return t.classList.contains('is-active'); })[0];
    current = current ? current.getAttribute('data-version') : tabButtons[0].getAttribute('data-version');

    // asegura estado inicial correcto (primer panel visible y "entrado")
    var initialPanel = document.getElementById('panel-' + current);
    if (initialPanel) {
      initialPanel.hidden = false;
      initialPanel.classList.add('is-active');
      requestAnimationFrame(function () { initialPanel.classList.add('panel--entered'); });
    }

    tabButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var target = btn.getAttribute('data-version');
        if (target === current) return;
        activate(target);
      });
    });

    function activate(target) {
      var oldTab = document.getElementById('tab-' + current);
      var newTab = document.getElementById('tab-' + target);
      var oldPanel = document.getElementById('panel-' + current);
      var newPanel = document.getElementById('panel-' + target);
      if (!newTab || !newPanel) return;

      if (oldTab) { oldTab.classList.remove('is-active'); oldTab.setAttribute('aria-selected', 'false'); }
      newTab.classList.add('is-active');
      newTab.setAttribute('aria-selected', 'true');

      if (oldPanel && oldPanel !== newPanel) {
        oldPanel.classList.remove('panel--entered');
        oldPanel.classList.add('panel--leaving');
        var cleanup = function () {
          oldPanel.classList.remove('is-active', 'panel--leaving');
          oldPanel.hidden = true;
          oldPanel.removeEventListener('transitionend', cleanup);
        };
        if (reduceMotion) { cleanup(); } else {
          oldPanel.addEventListener('transitionend', cleanup);
          setTimeout(cleanup, 600); // salvavidas si transitionend no dispara
        }
      }

      newPanel.hidden = false;
      newPanel.classList.add('is-active');
      requestAnimationFrame(function () {
        requestAnimationFrame(function () { newPanel.classList.add('panel--entered'); });
      });

      // los elementos con scroll-reveal dentro del nuevo panel deben
      // volverse visibles de inmediato (ya están "en pantalla")
      newPanel.querySelectorAll('.reveal').forEach(function (el) {
        el.classList.add('is-visible');
      });

      current = target;
    }
  })();

  /* =======================================================
     4. SCROLL REVEAL genérico (index.html y fedora1.html)
     ======================================================= */
  (function scrollReveal() {
    var groups = [
      '.section__head',
      '.card',
      '.f1-card',
      '.app',
      '.f1-app',
      '.table-wrap',
      '.chip-list',
      '.f1-limit',
      '.f1-closer',
      '.closer__box',
      '.tabs'
    ];

    groups.forEach(function (selector) {
      var els = Array.prototype.slice.call(document.querySelectorAll(selector));
      els.forEach(function (el, idx) {
        if (el.closest('.panel') && !el.closest('.panel.is-active')) {
          // los paneles inactivos se revelan al abrirse, no aquí
        }
        el.classList.add('reveal');
        el.style.setProperty('--reveal-delay', Math.min(idx * 70, 280) + 'ms');
      });
    });

    if (reduceMotion || !('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });

    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  })();

  /* =======================================================
     5. LÍNEA DE TIEMPO — línea que se dibuja + nodo activo + acordeón
     ======================================================= */
  (function timeline() {
    var timelineEl = document.getElementById('timeline');
    if (!timelineEl) return;

    var fill = document.getElementById('timelineFill');
    var items = Array.prototype.slice.call(timelineEl.querySelectorAll('.tl-item'));

    // -- envuelve el contenido "extra" de cada tarjeta en un acordeón --
    items.forEach(function (item, idx) {
      var card = item.querySelector('.tl-card');
      var node = item.querySelector('.tl-node');
      if (!card || !node) return;

      var heading = card.querySelector('h3');
      var rest = Array.prototype.slice.call(card.children).filter(function (c) { return c !== heading; });
      if (!rest.length) return;

      var body = document.createElement('div');
      body.className = 'tl-body';
      rest.forEach(function (el) { body.appendChild(el); });
      card.appendChild(body);

      var toggle = document.createElement('button');
      toggle.className = 'tl-toggle';
      toggle.type = 'button';
      toggle.innerHTML = '<span class="tl-toggle__label">Ver detalle</span><span class="tl-toggle__icon" aria-hidden="true">&#9660;</span>';
      card.insertBefore(toggle, body);

      function setOpen(open) {
        item.classList.toggle('is-open', open);
        node.setAttribute('aria-expanded', String(open));
        toggle.querySelector('.tl-toggle__label').textContent = open ? 'Ocultar detalle' : 'Ver detalle';
      }

      // la primera entrada (más antigua) inicia abierta a modo de invitación
      setOpen(idx === 0);

      function toggleOpen() { setOpen(!item.classList.contains('is-open')); }
      toggle.addEventListener('click', toggleOpen);
      node.addEventListener('click', function () {
        toggleOpen();
        item.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
      });
    });

    // -- nodo activo + línea que se dibuja al hacer scroll --
    function updateFill() {
      if (!fill) return;
      var rect = timelineEl.getBoundingClientRect();
      var vh = window.innerHeight;
      var total = rect.height;
      var visibleTop = Math.min(Math.max(vh * 0.5 - rect.top, 0), total);
      var progress = total > 0 ? visibleTop / total : 0;
      fill.style.transform = 'scaleY(' + progress + ')';
    }
    updateFill();
    window.addEventListener('scroll', updateFill, { passive: true });
    window.addEventListener('resize', updateFill);

    if ('IntersectionObserver' in window) {
      var activeIO = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          entry.target.classList.toggle('is-active', entry.isIntersecting);
        });
      }, { threshold: 0.5 });
      items.forEach(function (item) { activeIO.observe(item); });
    }
  })();

  /* =======================================================
     6. ACORDEÓN DE LIMITACIONES (solo fedora1.html)
     ======================================================= */
  (function limitsAccordion() {
    var buttons = document.querySelectorAll('.f1-limit__q');
    if (!buttons.length) return;

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var item = btn.closest('.f1-limit');
        var isOpen = item.classList.contains('is-open');
        document.querySelectorAll('.f1-limit.is-open').forEach(function (o) {
          if (o !== item) {
            o.classList.remove('is-open');
            o.querySelector('.f1-limit__q').setAttribute('aria-expanded', 'false');
          }
        });
        item.classList.toggle('is-open', !isOpen);
        btn.setAttribute('aria-expanded', String(!isOpen));
      });
    });
  })();

})();
