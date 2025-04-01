
document.addEventListener('DOMContentLoaded', () => {
    initializeToggleButton();
});

function initializeToggleButton() {
    const toggleButton = document.getElementById('toggleButton');
    const secondRowCards = document.querySelectorAll('.second-row');
    const toggleIcon = document.querySelector('.toggle-icon');
    const toggleText = document.querySelector('.toggle-text');

    if (toggleButton) {
        toggleButton.addEventListener('click', function() {
            const isHidden = secondRowCards[0].style.display === 'none' || secondRowCards[0].style.display === '';

            secondRowCards.forEach(card => {
                card.style.display = isHidden ? 'flex' : 'none';
            });

            toggleText.textContent = isHidden ? 'View less' : 'View more';

            if (isHidden) {
                toggleIcon.classList.remove('down-icon');
                toggleIcon.classList.add('up-icon');

                return;
            } 

            toggleIcon.classList.remove('up-icon');
            toggleIcon.classList.add('down-icon');
        });
    }
}
