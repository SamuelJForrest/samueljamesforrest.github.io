
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

// Event listener to reveal navbar links

burgerButton.addEventListener('click', () => {
    topLinks.classList.toggle('show-nav');
    lineOne.classList.toggle('line-one-rotate');
    lineTwo.classList.toggle('line-two-remove');
    lineThree.classList.toggle('line-three-rotate');
});

