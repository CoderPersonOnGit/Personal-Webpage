const buttons = document.querySelectorAll('.skill-btn')
const infoBox = document.getElementById('skill-info')

const skilDetails = {
    Java: "Used for FTC programming.",
    Python: "Used for simple UI's for web interfaces.",
    HTML5: "Used for Web layout and framework.",
    CSS: "Used for styling and creative properties of web development."
};

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const skill = button.getAttribute('data-skill');
        infoBox.textContent = skillDetails[skill];
        infoBox.style.display = 'block';
});
});