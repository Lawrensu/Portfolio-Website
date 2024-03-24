// Exporting a function that will be used in the main.js file to open the mobile navigation menu when the user clicks on the hamburger icon.
const mobileNav = () => {
    
    // Constant variables
    // Constants are used to store the references to the elements that will be used more than once and cannot change
    const headerBtn = document.querySelector('.header__bars');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav__link');
    
    // State variables
    // Use let instead of const because the value of the variable will change
    let isMobileNavOpen = false;

    
    // Callback function: when the user clicks on the hamburger icon
    headerBtn.addEventListener('click', () => {
        // ! Invert the value of isMobileNavOpen
        isMobileNavOpen = !isMobileNavOpen; 
        // If isMobileNavOpen is true, display the mobile navigation menu and disable the vertical scroll
        if (isMobileNavOpen) {
            // If isMobileNavOpen is true, display the mobile navigation menu and disable the vertical scroll
            mobileNav.style.display = 'flex';
            document.body.style.overflowY = 'hidden';
        } else {
            // If isMobileNavOpen is false, hide the mobile navigation menu and enable the vertical scroll
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        }
    });

    // To make sure the mobile navigation menu is hidden when the user clicks on a link
    // Loop through the mobileLinks array and add an event listener to each link
    mobileLinks.forEach(Link => {
        Link.addEventListener('click', () => {
            // Close the mobile navigation menu
            mobileNav.style.display = 'none';
            // Enable the vertical scroll
            document.body.style.overflowY = 'auto';
            // Invert the value of isMobileNavOpen
            isMobileNavOpen = !isMobileNavOpen;
        });
    });
};

export default mobileNav;