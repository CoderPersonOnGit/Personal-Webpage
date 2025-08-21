const buttons = document.querySelectorAll('.skill-btn')
const infoBox = document.getElementById('skill-info')

const skillDetails = {
    Java: {
        description:"Used for FTC programming.",
        icon: '<i class="devicon-java-plain colored" style="font-size: 48px;"></i>'
    }, 
    Python: {
        description: "Used for simple UI's for web interfaces.",
        icon: '<i class="devicon-python-plain colored" style="font-size: 48px;"></i>'
    },
    HTML5: {
        description: "Used for Web layout and framework.",
        icon: '<i class="devicon-html5-plain colored" style="font-size: 48px;"></i>'
    },
    CSS: {
        description: "Used for styling and creative properties of web development.",
        icon: '<i class="devicon-css3-plain colored" style="font-size: 48px;"></i>'
    }
};

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const skill = button.getAttribute('data-skill');
        const { description, icon } = skillDetails[skill];
        infoBox.innerHTML = `
            <div class="skill-display">
                ${icon}
                <p>${description}</p>
            </div>
        `;
        infoBox.style.display = 'block';
});
});