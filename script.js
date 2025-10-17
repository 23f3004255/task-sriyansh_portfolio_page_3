// Contact Form: Simulate send and show message without backend
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const form = e.target;
  form.querySelectorAll('input, textarea, button').forEach(el => el.disabled = true);

  const status = document.getElementById('form-status');
  status.style.display = 'block';
  status.innerText = 'Message sent! I will get back to you soon.';
  form.reset();

  setTimeout(() => {
    form.querySelectorAll('input, textarea, button').forEach(el => el.disabled = false);
    status.style.display = 'none';
  }, 4000);
});