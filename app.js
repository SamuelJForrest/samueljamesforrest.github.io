
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
        description: 'This is a calculator',
        languages: ['HTML', 'SCSS', 'JS'],
        image: './img/Projects/calculator app.png',
        sitelink: 'https://trusting-hypatia-918c3a.netlify.app/',
        gitlink: 'https://github.com/SamuelJForrest/Calculator'
    },
    {
        name: 'Weather App',
        description: 'This is a weather app',
        languages: ['HTML', 'CSS', 'JS'],
        image: './img/Projects/Weather API app.png',
        sitelink: 'https://loving-galileo-ea6a7c.netlify.app/',
        gitlink: 'https://github.com/SamuelJForrest/weather-app'
    },
    {
        name: 'To-Do list',
        description: 'This is a to-do list',
        languages: ['HTML', 'SCSS', 'JS'],
        image: './img/Projects/To do list.png',
        sitelink: 'https://silly-murdock-31fb98.netlify.app/',
        gitlink: 'https://github.com/SamuelJForrest/to-do-list-v2'
    }
];

