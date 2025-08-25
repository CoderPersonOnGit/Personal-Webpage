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

function toggleProjects() {
    const list = document.getElementById("projectList");
    const button = document.querySelector("#Projects button");

      if (list.style.display === "none") {
        list.style.display = "block";
        button.textContent = "Hide My Work";
      } else {
        list.style.display = "none";
        button.textContent = "Show My Work";
      }
    }

const experienceButtons = document.querySelectorAll('.experience-btn');
const experienceInfoBox = document.getElementById('experience-info');

const experienceDetails = {
  higher_learning_oppertunities: {
    description: "Visited BARC, co-founder of FTC team 26251 Instantbot, 1st place in science fair, progressed to Thermo Fisher JIC",
  },
  freelance: {
    description: "Built custom websites and apps for local problems and worked problem solving through code.",
  },
  volunteering: {
    description: "Volunteered through gurukul non-profit organization for fostering indian culture. Furthermore, mentored FTC teams.",
  }
};

experienceButtons.forEach(button => {
  button.addEventListener('click', () => {
    const experience = button.getAttribute('data-experience');
    const { description } = experienceDetails[experience];
    experienceInfoBox.innerHTML = `<p>${description}</p>`;
    experienceInfoBox.style.display = 'block';
  });
});

emailjs.init("1ZQhku9K-mU6NYX5Q"); 

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault(); 

  emailjs.sendForm("service_9uxnplj", "template_4gajjdr", this)
    .then(() => {
      alert("Message sent successfully!");
    }, (error) => {
      alert("Oops! Something went wrong.");
      console.error(error);
    });
});


