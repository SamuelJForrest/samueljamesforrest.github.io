const socialSlider = document.querySelector('.social-slider');
const socials = document.querySelector('.socials');
const arrowSlider = document.querySelector('.arrow');

socialSlider.addEventListener('click', () => {
    socials.classList.toggle('slide-up');
    arrowSlider.classList.toggle('arrow-rotate');
});