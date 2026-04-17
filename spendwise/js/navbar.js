/**
 * SpendWise — navbar.js
 * Mobile hamburger menu toggle + scroll shadow effect.
 * Include on every page: <script src="js/navbar.js"></script>
 */

(function () {
  'use strict';

  const nav       = document.getElementById('sw-nav');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  // ── Hamburger toggle ────────────────────────────────────────
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      this.classList.toggle('open');
      navLinks.classList.toggle('open');
    });

    // Close menu when a nav link is clicked
    navLinks.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });

    // Close menu on outside click
    document.addEventListener('click', function (e) {
      if (nav && !nav.contains(e.target)) {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
      }
    });
  }

  // ── Scroll shadow ────────────────────────────────────────────
  if (nav) {
    window.addEventListener('scroll', function () {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  // ── Highlight active page link ───────────────────────────────
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href && href === currentPage) {
      link.classList.add('active');
    }
  });

})();
