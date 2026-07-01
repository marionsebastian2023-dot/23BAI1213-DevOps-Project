document.addEventListener('DOMContentLoaded', function () {
  var statusEl = document.getElementById('status');
  if (statusEl) {
    statusEl.textContent = 'Website is live and running ';
  }

  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thank you! Your message has been received.');
      form.reset();
    });
  }
});