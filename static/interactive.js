document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const sunIcon = document.getElementById('sunIcon');
    const moonIcon = document.getElementById('moonIcon');
    const htmlElement = document.documentElement;

    function setTheme(theme) {
        if (theme === 'light') {
            htmlElement.setAttribute('data-bs-theme', 'light');
            sunIcon.classList.add('d-none');
            moonIcon.classList.remove('d-none');
        } else {
            htmlElement.setAttribute('data-bs-theme', 'dark');
            sunIcon.classList.remove('d-none');
            moonIcon.classList.add('d-none');
        }
        localStorage.setItem('theme', theme); // Save preference
    }

    // Check for saved theme preference on load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        setTheme('dark');
    }

    // Toggle theme on button click
    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });
});