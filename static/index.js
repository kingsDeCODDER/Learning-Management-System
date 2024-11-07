document.addEventListener('DOMContentLoaded', function() {

    // Language Selection Form
    const languageForm = document.getElementById('languageForm');
    const languageSelect = document.getElementById('languageSelect');

    languageForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const selectedOption = languageSelect.options[languageSelect.selectedIndex];
        const selectedLanguage = selectedOption.value;
        const selectedUrl = selectedOption.getAttribute('data-url');

        // Redirect to the selected language page
        if (selectedUrl) {
            window.location.href = selectedUrl;
        } else {
            alert('Please select a valid programming language.');
        }
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
        alert('joini the WhatsApp group ? ');
    });

});