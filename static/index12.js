document.addEventListener('DOMContentLoaded', function() {

    // Language Selection Form
    const languageForm = document.getElementById('languageForm');
    const languageSelect = document.getElementById('languageSelect');
    const languageInfo = document.getElementById('languageInfo');

    languageForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const selectedLanguages = Array.from(languageSelect.selectedOptions)
                                      .map(option => option.text);
        languageInfo.innerHTML = `<p>You have selected: ${selectedLanguages.join(', ')}</p>`;
    });

    // Contact Form
    const contactForm = document.getElementById('contactForm');
    const contactResult = document.getElementById('contactResult');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Here you would typically send the form data to the server using fetch or AJAX
        contactResult.innerHTML = `<p>Thank you, ${name}. Your message has been sent!</p>`;
    });

    // WhatsApp Group Join Link
    const whatsappSection = document.getElementById('whatsappSection');
    const whatsappLink = whatsappSection.querySelector('a');

    whatsappLink.addEventListener('click', function() {
        // Optionally, you could track clicks or confirm before redirecting
        alert('You are being redirected to join the WhatsApp group.');
    });

});
