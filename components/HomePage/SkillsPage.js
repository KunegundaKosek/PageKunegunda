export default function () {

    const content = document.querySelector('.content');
    content.textContent = '';

    const homeButton = document.getElementById('homeButton');
    homeButton.style.color = 'white';

    const h1 = document.createElement('h1');
    h1.className = 'content__title';
    h1.textContent = 'Moje umięjętności';
    content.appendChild(h1);

    const span1 = document.createElement('span');
    span1.className = 'content__titleSkills';
    span1.textContent = 'HTML, CSS, SCSS';
    content.appendChild(span1);

    const img1 = document.createElement('img');
    img1.setAttribute('class', 'content__image');
    img1.setAttribute('src', '/');
    img1.setAttribute('alt', 'html')


}