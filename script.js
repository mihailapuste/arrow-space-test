// Main script functionality
document.addEventListener('DOMContentLoaded', () => {
    // Initialize topbar event listeners
    const loginTriggerButton = document.getElementById('loginTriggerButton');
    if (loginTriggerButton) {
        loginTriggerButton.addEventListener('click', () => {
            // Logic to show the login modal will go here
            console.log('Login button clicked!'); 
            // For now, let's just log. We'll add modal logic later.
        });
    }

    // Existing button functionality
    const messageElement = document.getElementById('message');
    const changeButton = document.getElementById('changeButton');
    const infoTextElement = document.getElementById('infoText');

    if (changeButton && messageElement) {
        changeButton.addEventListener('click', () => {
            messageElement.textContent = 'You clicked the button!';
        });
    }

    // Example interaction with infoText
    if (infoTextElement) {
        // You could add interactions here if needed
    }
});
