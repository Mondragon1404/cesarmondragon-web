/* Comportamiento comun de las landings por sector.
   La home tiene su propio script inline con mas piezas (menu movil, casos de
   estudio, parallax); aqui solo va lo que estas paginas necesitan. */
(function () {
    'use strict';

    // ─── CURSOR ───────────────────────────────────────────────────────────────
    // La hoja de estilos pone cursor:none en todo el sitio, asi que cada pagina
    // necesita dibujar el suyo o el raton queda invisible. Usa mix-blend-mode:
    // difference, por eso funciona igual sobre fondo claro que oscuro.
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        var cursor = document.getElementById('cursor');
        var ring = document.getElementById('cursorRing');
        if (cursor && ring) {
            var rx = 0, ry = 0, mx = 0, my = 0;

            document.addEventListener('mousemove', function (e) {
                mx = e.clientX; my = e.clientY;
                cursor.style.left = mx + 'px';
                cursor.style.top = my + 'px';
            });

            (function animateRing() {
                rx += (mx - rx) * 0.12;
                ry += (my - ry) * 0.12;
                ring.style.left = rx + 'px';
                ring.style.top = ry + 'px';
                requestAnimationFrame(animateRing);
            })();

            var interactivos = document.querySelectorAll('a, button, .lp-stat, .para-quien-card, .proceso-step');
            Array.prototype.forEach.call(interactivos, function (el) {
                el.addEventListener('mouseenter', function () {
                    cursor.style.width = '14px';
                    cursor.style.height = '14px';
                    ring.style.opacity = '0';
                });
                el.addEventListener('mouseleave', function () {
                    cursor.style.width = '8px';
                    cursor.style.height = '8px';
                    ring.style.opacity = '1';
                });
            });
        }
    }

    // ─── NAV AL HACER SCROLL ──────────────────────────────────────────────────
    var nav = document.getElementById('nav');
    if (nav) {
        var alScroll = function () {
            nav.classList.toggle('scrolled', window.scrollY > 40);
        };
        alScroll();
        window.addEventListener('scroll', alScroll, { passive: true });
    }

    // ─── ANIMACIONES AL ENTRAR EN PANTALLA ────────────────────────────────────
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                observer.unobserve(e.target);
            }
        });
    }, { threshold: 0.12 });

    var animables = document.querySelectorAll('.reveal, .para-quien-card, .proceso-step');
    Array.prototype.forEach.call(animables, function (el) { observer.observe(el); });

    // ─── BANNER DE COOKIES ────────────────────────────────────────────────────
    var banner = document.getElementById('cookieBanner');
    if (banner) {
        var guardado = null;
        try { guardado = localStorage.getItem('cookieConsent'); } catch (e) { /* modo privado */ }
        if (!guardado) {
            setTimeout(function () { banner.classList.add('show'); }, 900);
        }
        var cerrar = function (valor) {
            try { localStorage.setItem('cookieConsent', valor); } catch (e) { /* modo privado */ }
            banner.classList.remove('show');
        };
        var aceptar = document.getElementById('cookieAccept');
        var rechazar = document.getElementById('cookieReject');
        if (aceptar) aceptar.addEventListener('click', function () { cerrar('all'); });
        if (rechazar) rechazar.addEventListener('click', function () { cerrar('essential'); });
    }
})();
