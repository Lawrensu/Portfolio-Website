// Dark mode toggle

// Export function to toggle dark mode
const darkMode = () => {
    // Get all theme toggle buttons
    const themeToggleBtns = document.querySelectorAll('#theme-toggle');

    // State variables but can't be mutated
    // Get the theme from local storage
    const theme = localStorage.getItem('theme');

    // If the theme is in local storage, set the body class to the theme
    theme && document.body.classList.add(theme);

    // Handlers
    const handleThemeToggle = () => {
        document.body.classList.toggle('light-mode');

            if (document.body.classList.contains('light-mode')) {
                // First parameter is the key, second parameter is the value
                // If the body has the class 'light-mode', set the theme to 'light-mode' in localStorage
                localStorage.setItem('theme', 'light-mode');
            } else {
                localStorage.removeItem('theme');
                document.body.removeAttribute('class');
            }
    };

    // Event listeners
    // Loop through the themeToggleBtns array and add an event listener to each button
    // Don't need curly braces because it's a single line of code
    // Curly braces only needed if there are multiple lines of code
    themeToggleBtns.forEach(btn => 
        btn.addEventListener('click', handleThemeToggle)
    );
};

export default darkMode;