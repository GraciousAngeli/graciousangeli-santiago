document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
      hamburger.classList.toggle('active');
    });
  }

  // Attach SendMail to the contact form if present
  const contactForm = document.querySelector('.contacts-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      SendMail();
    });
  }
});

function SendMail() {
    if (typeof emailjs === 'undefined') {
        console.error('EmailJS SDK not loaded.');
        alert("EmailJS SDK not loaded. Please check your internet connection and try again.");
        return;
    }

    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_5koq38i", "template_uc9hdxs", params)
    .then(function(response) {
        console.log('EmailJS response:', response);
        window.location.href = "../message-sent.html";
    })
    .catch(function(error) {
        console.error('EmailJS error:', error);
        alert("Failed to send message. Please try again later.");
    });
}