document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
      hamburger.classList.toggle('active');
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
        // Remove alert and redirect to confirmation page
        // alert("Message sent successfully! Thank you for contacting us.");
        window.location.href = "../message-sent.html";
    })
    .catch(function(error) {
        console.error('EmailJS error:', error);
        alert("Failed to send message. Please try again later.");
    });
}