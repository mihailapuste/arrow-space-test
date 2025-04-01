const messageElement = document.getElementById('message');
const changeButton = document.getElementById('changeButton');

changeButton.addEventListener('click', () => {
    messageElement.textContent = 'You clicked the button!';
});
