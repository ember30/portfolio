function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', event => {
        event.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        form.reset();
    });
});
