
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
    projectImg.src = projects[counter].image;
    projectName.textContent = projects[counter].name;
    projectDescription.textContent = projects[counter].description;
});

prevBtn.addEventListener('click', () => {
    counter--;
    if (counter < 0){
        counter = projects.length - 1;
    }
    projectImg.src = projects[counter].image;
    projectName.textContent = projects[counter].name;
    projectDescription.textContent = projects[counter].description;
});

// Projects object

const projects = [
    {
        name: 'Calculator',
        description: 'This is a calculator',
        languages: 'HTML - CSS - JavaScript',
        image: './img/Projects/calculator app.png',
        sitelink: '',
        gitlink: ''
    },
    {
        name: 'Weather App',
        description: 'This is a weather app',
        languages: 'HTML - CSS - JavaScript',
        image: './img/Projects/Weather API app.png',
        sitelink: '',
        gitlink: ''
    },
    {
        name: 'To-Do list',
        description: 'This is a to-do list',
        languages: 'HTML - CSS - JavaScript',
        image: './img/Projects/To do list.png',
        sitelink: '',
        gitlink: ''
    }
];

