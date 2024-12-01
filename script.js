const nameDiv = document.getElementById('name');
const aboutDiv = document.getElementById('about');
const skillsDiv = document.getElementById('skills');
const projectDiv = document.getElementById('project');
const startButton = document.getElementById('startButton');

startButton.addEventListener("click", function () {
    nameDiv.innerHTML = "";
    const fragment = document.createDocumentFragment();

    const nameContainer = document.createElement("div");
    nameContainer.style.display = "flex"; 
    nameContainer.style.alignItems = "flex-start";
    nameContainer.style.justifyContent = "flex-start";

    const profileImage = document.createElement("img");
    profileImage.src = "images/profile1.jpg";
    profileImage.alt = "Profile Image";

    nameContainer.appendChild(profileImage);

    const nameParagraph = document.createElement("p");
    nameParagraph.textContent = "Hello, my name is";
    nameParagraph.style.fontSize = "42px";
    nameParagraph.style.color = "white";
    nameParagraph.style.fontFamily = "'Lexend', sans-serif";
    nameParagraph.style.marginTop = "60px";
    nameParagraph.style.marginLeft = "90px";

    const lineBreak = document.createElement("br");
    nameParagraph.appendChild(lineBreak);

    const nameText = document.createElement("span");
    nameText.textContent = "John Rainer Saludes";

    nameText.style.fontSize = "68px";
    nameText.style.fontWeight = "bold";
    nameText.style.color = "white";
    nameText.style.fontFamily = "'Lexend', sans-serif";
    nameText.style.letterSpacing = "1px";

    nameParagraph.appendChild(nameText);

    nameContainer.appendChild(nameParagraph);

    fragment.appendChild(nameContainer);

    const nextButton = document.createElement("button");
    nextButton.textContent = "About Me";
    nextButton.style.marginTop = "20px";
    nextButton.style.marginBottom = "20px";

    const buttonContainer = document.createElement("div");
    buttonContainer.style.display = "flex";
    buttonContainer.style.justifyContent = "flex-end";

    buttonContainer.appendChild(nextButton);

    fragment.appendChild(buttonContainer);

    nextButton.addEventListener("click", () => showAbout(nextButton));

    nameDiv.appendChild(fragment);

    nameDiv.style.display = "none";

    setTimeout(function () {
        nameDiv.style.display = "block";
        nextButton.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 500);

    startButton.style.display = "none";
});

function showAbout(button) {
    aboutDiv.innerHTML = ``;

    const aboutContainer = document.createElement("div");
    aboutContainer.style.display = "flex"; 
    aboutContainer.style.alignItems = "center"; 
    aboutContainer.style.justifyContent = "flex-start"; 
    aboutContainer.style.margin = "20px"; 

    const aboutText = document.createElement("div");
    aboutText.innerHTML = `
        <h2>About Me</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    `;
    aboutText.style.flex = "1"; 
    aboutText.style.marginRight = "20px";
    
    const h2Element = aboutText.querySelector("h2");
    h2Element.style.color = "#16013c";

    const aboutImage = document.createElement("img");
    aboutImage.src = "images/profile.png"; 
    aboutImage.alt = "Profile";

    aboutContainer.appendChild(aboutText);
    aboutContainer.appendChild(aboutImage);

    aboutDiv.appendChild(aboutContainer);

    aboutDiv.style.display = "block"; 

    const skillsButton = document.createElement('button');
    skillsButton.textContent = 'Skills';
    skillsButton.style.marginBottom = "20px"; 
    skillsButton.style.marginLeft = "60px"

    const buttonContainer = document.createElement("div");
    buttonContainer.style.display = "flex";
    buttonContainer.style.justifyContent = "flex-start"; 

    buttonContainer.appendChild(skillsButton);

    aboutDiv.appendChild(buttonContainer);

    skillsButton.addEventListener('click', () => showSkills(skillsButton));
    skillsButton.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function showSkills(button) {
    skillsDiv.innerHTML = ""; 

    const skillsContainer = document.createElement("div");
    skillsContainer.style.display = "flex";
    skillsContainer.style.justifyContent = "space-between"; 
    skillsContainer.style.flexWrap = "wrap"; 
    skillsContainer.style.marginTop = "20px"; 

    const skillsTitle = document.createElement("h2");
    skillsTitle.textContent = "Skills"; 
    skillsTitle.style.textTransform = "uppercase";
    skillsTitle.style.fontSize = "30px"; 
    skillsTitle.style.marginBottom = "50px"; 
    skillsTitle.style.textAlign = "center"; 

    skillsDiv.appendChild(skillsTitle);

    const skillsData = [
        {
            name: "HTML",
            image: "images/assets/html.png", 
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            name: "CSS",
            image: "images/assets/css.png", 
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            name: "JavaScript",
            image: "images/assets/js.png", 
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        }
    ];

    skillsData.forEach(skill => {
        const skillDiv = document.createElement("div");
        skillDiv.style.width = "22%"; 
        skillDiv.style.textAlign = "center"; 
        skillDiv.style.marginBottom = "30px"; 

        const skillImage = document.createElement("img");
        skillImage.src = skill.image; 
        skillImage.alt = skill.name; 
        skillImage.style.width = "80px"; 
        skillImage.style.height = "80px"; 
        skillImage.style.marginBottom = "10px"; 

        const skillName = document.createElement("h3");
        skillName.textContent = skill.name;

        const skillDescription = document.createElement("p");
        skillDescription.textContent = skill.description;

        skillDiv.appendChild(skillImage);
        skillDiv.appendChild(skillName);
        skillDiv.appendChild(skillDescription);

        skillsContainer.appendChild(skillDiv);
    });

    skillsDiv.appendChild(skillsContainer);

    const projectButton = document.createElement('button');
    projectButton.textContent = 'Projects';
    projectButton.style.marginTop = "20px"; 
    projectButton.addEventListener('click', () => showProjects(projectButton));
    skillsDiv.appendChild(projectButton);

    skillsDiv.style.display = "block"; 

    setTimeout(() => {
        projectButton.scrollIntoView({ behavior: 'smooth', block: 'center' }); 
        setTimeout(() => {
            projectDiv.scrollIntoView({ behavior: 'smooth', block: 'start' }); 
        }, 500); 
    }, 0); 
}

function showProjects(button) {
    projectDiv.innerHTML = ""; 

    const title = document.createElement("h2");
    title.textContent = "Projects";
    title.style.fontWeight = "bolder";
    title.style.color = "#16013c";
    title.style.textTransform = "uppercase";
    title.style.textAlign = "center"; 
    title.style.marginBottom = "20px"; 
    title.style.fontSize = "30px";
    projectDiv.appendChild(title);

    const projectContainer = document.createElement("div");
    projectContainer.style.display = "flex";
    projectContainer.style.flexWrap = "wrap"; 
    projectContainer.style.justifyContent = "center"; 
    projectContainer.style.gap = "30px"; 

    const projectImages = [
        "images/assets/project1.jpg",
        "images/assets/project2.jpg",
        "images/assets/project3.jpg",
        "images/assets/project4.jpg",
        "images/assets/project5.jpg",
        "images/assets/project6.jpg"
    ];

    projectImages.forEach((imgPath, index) => {
        const img = document.createElement("img");
        img.src = imgPath;
        img.alt = `Project ${index + 1}`;
        projectContainer.appendChild(img);
    });

    projectDiv.appendChild(projectContainer);
    projectDiv.style.display = "block";

    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
}