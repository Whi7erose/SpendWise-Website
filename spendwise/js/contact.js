/**
 * SpendWise — contact.js
 * EmailJS contact form + newsletter subscription logic.
 * Include only on contact.html.
 *
 * Requires EmailJS SDK loaded before this script:
 * <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
 */

(function () {
  'use strict';

  // ── Initialise EmailJS ───────────────────────────────────────
  emailjs.init("4S9qtuIqaBvjjHPGb");

  // ── CONTACT FORM ─────────────────────────────────────────────
  window.submitContact = function () {
    var btn       = document.getElementById('submitBtn');
    var userEmail = document.getElementById('cemail').value.trim();
    var firstName = document.getElementById('cfname').value.trim();
    var lastName  = document.getElementById('clname').value.trim();
    var message   = document.getElementById('cmsg').value.trim();
    var enquiry   = document.getElementById('cenquiry').value;
    var err       = document.getElementById('cemailError');

    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(userEmail)) {
      err.style.display = 'block';
      document.getElementById('cemail').style.borderColor = '#ff4d6d';
      return;
    }

    btn.innerHTML = "Sending...";
    btn.disabled  = true;

    var templateParams = {
      cfname       : firstName,
      email        : userEmail,
      clname       : lastName,
      enquiry_type : enquiry,
      message      : message
    };

    emailjs.send('service_0mdxn48', 'template_bynmh3c', templateParams)
      .then(function () {
        document.getElementById('contactFormUI').style.display = 'none';
        document.getElementById('contactSuccess').style.display = 'block';
      }, function (error) {
        alert("Failed to send message. Error: " + JSON.stringify(error));
        btn.innerHTML = "Send Message →";
        btn.disabled  = false;
        console.error('EmailJS Error:', error);
      });
  };

  // ── NEWSLETTER SUBSCRIPTION ───────────────────────────────────
  window.submitNewsletter = function () {
    var btn       = document.getElementById('nlSubmitBtn');
    var userEmail = document.getElementById('nlEmail').value.trim();
    var err       = document.getElementById('nlEmailError');

    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(userEmail)) {
      err.style.display = 'block';
      document.getElementById('nlEmail').style.borderColor = '#ff4d6d';
      return;
    }

    btn.innerHTML = "Subscribing...";
    btn.disabled  = true;

    emailjs.send('service_0mdxn48', 'template_vp1qfvs', { email: userEmail })
      .then(function () {
        document.getElementById('nlFormUI').style.display  = 'none';
        document.getElementById('nlSuccess').style.display = 'block';
      }, function (error) {
        alert("Failed to subscribe. Please try again.");
        btn.innerHTML = "📬 Subscribe to Free Newsletter →";
        btn.disabled  = false;
        console.error('EmailJS Error:', error);
      });
  };

  // ── CLEAR ERROR ON TYPING ─────────────────────────────────────
  var cemailEl = document.getElementById('cemail');
  if (cemailEl) {
    cemailEl.addEventListener('input', function () {
      this.style.borderColor = '';
      document.getElementById('cemailError').style.display = 'none';
    });
  }

  var nlEmailEl = document.getElementById('nlEmail');
  if (nlEmailEl) {
    nlEmailEl.addEventListener('input', function () {
      this.style.borderColor = '';
      document.getElementById('nlEmailError').style.display = 'none';
    });
  }

})();
