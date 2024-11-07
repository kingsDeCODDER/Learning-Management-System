document.addEventListener('DOMContentLoaded', () => {
  const languageForm = document.getElementById('languageForm');
  const languageInfo = document.getElementById('languageInfo');
  const contactForm = document.getElementById('contactForm');
  const contactResult = document.getElementById('contactResult');
  const authForm = document.getElementById('authForm');
  const authResult = document.getElementById('authResult');
  const signOutBtn = document.getElementById('signOutBtn');

  // Language selection
  languageForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const language = document.getElementById('languageSelect').value;
      languageInfo.innerHTML = <div class="alert alert-info">You have selected <strong>${language}</strong>!</div>;
  });

  // Contact form submission
  contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      // Simulate sending the form data
      setTimeout(() => {
          contactResult.innerHTML = <div class="alert alert-success">Thank you, ${name}! Your message has been sent.</div>;
          contactForm.reset();
      }, 1000);
  });

  // Authentication form submission
  authForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      // Simulate a real authentication process
      if (username === "user" && password === "password") {
          authResult.innerHTML = <div class="alert alert-success">Welcome, ${username}!</div>;
          authForm.reset();
      } else {
          authResult.innerHTML = <div class="alert alert-danger">Invalid username or password.</div>;
      }
  });

  // Sign Out functionality
  signOutBtn.addEventListener('click', () => {
      authResult.innerHTML = <div class="alert alert-info">You have successfully signed out.</div>;
  });
});