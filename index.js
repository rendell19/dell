document.addEventListener('DOMContentLoaded', function() {
    // JavaScript to handle form submission
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission
            document.getElementById('thank-you-message').style.display = 'block'; // Show the thank-you message
            this.reset(); // Reset the form after submission
        });
    }

    // JavaScript to add scroll effect to header
    window.addEventListener('scroll', function() {
        const headerTitle = document.querySelector('.header-title');
        if (headerTitle) {
            if (window.scrollY > 50) {
                headerTitle.classList.add('scrolled');
            } else {
                headerTitle.classList.remove('scrolled');
            }
        }
    });
});