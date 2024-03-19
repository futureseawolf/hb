document.addEventListener('DOMContentLoaded', function () {
    let buttonClicked = false; // Flag to track if a popup button was clicked

    // Display the popup overlay after a specific time
    setTimeout(function () {
        document.querySelector('.popup-overlay').style.display = 'flex';
    }, 5000); // Show popup after 1 second

    // Close popup and check if a button was clicked
    document.querySelector('.close-popup').addEventListener('click', function () {
        document.querySelector('.popup-overlay').style.display = 'none';
        if (!buttonClicked) {
            redirectToAllRedScreen();
        }
    });

    // Track popup button clicks
    document.querySelectorAll('.popup-button').forEach(button => {
        button.addEventListener('click', function () {
            buttonClicked = true;
        });
    });

    // Redirect to the all-red screen if no button was clicked
    function redirectToAllRedScreen() {
        window.location.href = 'all-red-screen.html'; // Ensure this matches the filename of your all-red screen HTML
    }
});
