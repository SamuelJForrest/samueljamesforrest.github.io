
// define and add event listener to display socials bar (big resolutions only)
const socialSlider = document.querySelector('.social-slider');
const socials = document.querySelector('.socials');
const arrowSlider = document.querySelector('.arrow');

socialSlider.addEventListener('click', () => {
    socials.classList.toggle('slide-up');
    arrowSlider.classList.toggle('arrow-rotate');
});

// Define navbar elements to make responsive
const burgerButton = document.querySelector('.burger-button');
const topLinks = document.querySelector('.links');
const lineOne = document.querySelector('.line-one');
const lineTwo = document.querySelector('.line-two');
const lineThree = document.querySelector('.line-three');
const homeLink = document.querySelector('.home-link');
const projectLink = document.querySelector('.project-link');
const contactLink = document.querySelector('.contact-link');

const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const projectImg = document.querySelector('.project-img');
const projectName = document.querySelector('.project-name');
const projectDescription = document.querySelector('.project-description');
const projectTech = document.querySelector('.project-tech');
const gitLink = document.querySelector('.git-link');
const siteLink = document.querySelector('.site-link');

const mobileContainer = document.querySelector('.mobile-projects');

// Event listener to reveal navbar links

burgerButton.addEventListener('click', () => {
    topLinks.classList.toggle('show-nav');
    lineOne.classList.toggle('line-one-rotate');
    lineTwo.classList.toggle('line-two-remove');
    lineThree.classList.toggle('line-three-rotate');
});


let counter = 0;

nextBtn.addEventListener('click', () => {
    counter++;
    if (counter > projects.length - 1){
        counter = 0;
    }
    projectTech.textContent = '';
    projectImg.src = projects[counter].image;
    projectName.textContent = projects[counter].name;
    projectDescription.textContent = projects[counter].description;
    gitLink.href = projects[counter].gitlink;
    siteLink.href = projects[counter].sitelink;

        if (projects[counter].languages.includes('HTML')){
            let htmlLogo = document.createElement('img');
            htmlLogo.src = './img/html5.svg';
            projectTech.append(htmlLogo);
        }

        if (projects[counter].languages.includes('CSS')){
            let cssLogo = document.createElement('img');
            cssLogo.src = './img/css3.svg';
            projectTech.append(cssLogo);
        }

        if (projects[counter].languages.includes('SCSS')){
            let sassLogo = document.createElement('img');
            sassLogo.src = './img/sass.svg';
            projectTech.append(sassLogo);
        }

        if (projects[counter].languages.includes('JS')){
            let jsLogo = document.createElement('img');
            jsLogo.src = './img/javascript.svg';
            projectTech.append(jsLogo);
        }

        
});

prevBtn.addEventListener('click', () => {
    counter--;
    if (counter < 0){
        counter = projects.length - 1;
    }
    projectTech.textContent = '';
    projectImg.src = projects[counter].image;
    projectName.textContent = projects[counter].name;
    projectDescription.textContent = projects[counter].description;
    gitLink.href = projects[counter].gitlink;
    siteLink.href = projects[counter].sitelink;

    if (projects[counter].languages.includes('HTML')){
        let htmlLogo = document.createElement('img');
        htmlLogo.src = './img/html5.svg';
        projectTech.append(htmlLogo);
    }

    if (projects[counter].languages.includes('CSS')){
        let cssLogo = document.createElement('img');
        cssLogo.src = './img/css3.svg';
        projectTech.append(cssLogo);
    }

    if (projects[counter].languages.includes('SCSS')){
        let sassLogo = document.createElement('img');
        sassLogo.src = './img/sass.svg';
        projectTech.append(sassLogo);
    }

    if (projects[counter].languages.includes('JS')){
        let jsLogo = document.createElement('img');
        jsLogo.src = './img/javascript.svg';
        projectTech.append(jsLogo);
    }
});

// Projects object

const projects = [
    {
        name: 'Calculator',
        description: 'A sleek calculator that displays the calculation process step by step. This app also takes a range of key inputs for quick calculations.',
        languages: ['HTML', 'SCSS', 'JS'],
        image: './img/Projects/calculator app.png',
        sitelink: 'https://trusting-hypatia-918c3a.netlify.app/',
        gitlink: 'https://github.com/SamuelJForrest/Calculator'
    },
    {
        name: 'Weather App',
        description: 'A minimalist weather app that takes user input and returns information from OpenWeatherMap API or a simple error message.',
        languages: ['HTML', 'CSS', 'JS'],
        image: './img/Projects/Weather API app.png',
        sitelink: 'https://loving-galileo-ea6a7c.netlify.app/',
        gitlink: 'https://github.com/SamuelJForrest/weather-app'
    },
    {
        name: 'To-Do list',
        description: 'A to-do list that allows you to filter items based on their completion status. This app also saves to-dos to local storage to revisit them later.',
        languages: ['HTML', 'SCSS', 'JS'],
        image: './img/Projects/To do list.png',
        sitelink: 'https://silly-murdock-31fb98.netlify.app/',
        gitlink: 'https://github.com/SamuelJForrest/to-do-list-v2'
    }
];

// Initialise project information on mobile projects

for (let i = 0; i < projects.length; i++){
    // Create a mobile project container (and it's elements), and assign class
    let mobileProject = document.createElement('div');
    mobileProject.classList.add('project');

    let mobileTitle = document.createElement('h3');
    mobileTitle.classList.add('mobile-title');
    mobileTitle.textContent = projects[i].name;

    let mobilePicture = document.createElement('img');
    mobilePicture.classList.add('mobile-picture');
    mobilePicture.src = projects[i].image;

    let mobileDescription = document.createElement('p');
    mobileDescription.classList.add('mobile-description');
    mobileDescription.textContent = projects[i].description;

    let mobileButtonLive = document.createElement('button');
    mobileButtonLive.classList.add('mobile-button');
    mobileButtonLive.innerHTML = `<a href="${projects[i].sitelink}" target="_blank" class="mobile-view-live">View Site</a>`;

    let mobileButtonGit = document.createElement('button');
    mobileButtonGit.classList.add('mobile-button');
    mobileButtonGit.innerHTML = `<a href="${projects[i].gitlink}" target="_blank" class="mobile-view-git">View Code</a>`
    

    let liveBtnLink = document.createElement('a');
    liveBtnLink.classList.add('mobile-view-live');
    liveBtnLink.href = projects[i].sitelink;
    liveBtnLink.target = '_blank';

    let gitBtnLink = document.createElement('a');
    gitBtnLink.classList.add('mobile-view-git');
    gitBtnLink.href = projects[i].gitlink;
    gitBtnLink.target = '_blank';


    mobileButtonLive.append(liveBtnLink);
    mobileButtonGit.append(gitBtnLink);
    mobileProject.append(mobileTitle, mobilePicture, mobileDescription, mobileButtonLive, mobileButtonGit);
    mobileContainer.append(mobileProject);


}