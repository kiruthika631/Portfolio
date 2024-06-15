
// Scroll handling script

// Select all control buttons
const controls = document.querySelectorAll('.controlls .control');

// Add click event listeners to each control button
controls.forEach(control => {
    control.addEventListener('click', () => {
        // Get the target section ID from the data-id attribute
        const targetId = control.getAttribute('data-id');
        // Scroll to the target section
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });

        // Highlight the clicked control button and remove the highlight from others
        controls.forEach(ctrl => {
            ctrl.classList.remove('active-btn');
        });
        control.classList.add('active-btn');
    });
});

// Listen for scroll events to update the active section in the navigation
document.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    // Check which section is currently in view and update the active button
    controls.forEach(control => {
        const targetId = control.getAttribute('data-id');
        const targetSection = document.getElementById(targetId);
        const sectionTop = targetSection.offsetTop - 50; // Adjusted for better visibility

        if (scrollPosition >= sectionTop) {
            controls.forEach(ctrl => {
                ctrl.classList.remove('active-btn');
            });
            control.classList.add('active-btn');
        }
    });
});
