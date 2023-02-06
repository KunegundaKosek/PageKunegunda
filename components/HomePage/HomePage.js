import Build from "../Build.js";
import ProjectPage from "../ProjectPage/ProjectPage.js";
import CVPage from "./CVPage.js";
import SkillsPage from "./SkillsPage.js";


export default function () {

    const content = document.querySelector('.content');
    content.innerHTML = '';

    const title = document.querySelector('title');
    title.innerHTML = "Strona Główna";


    //kolor przycisków
    // const projectButton = document.getElementById('projectButton');
    // projectButton.style.color = 'white';
    // const homeButton = document.getElementById('homeButton');
    // homeButton.style.color = 'crimson';

    const h1 = document.createElement('h1');
    h1.className = 'content__title';
    h1.textContent = 'Witam na stronie';
    content.appendChild(h1);

    // Artykuł 1 po lewo {ludzik}
    const article1 = document.createElement('article');
    article1.className = 'content__article';
    content.appendChild(article1);

    const foto1 = document.createElement('img');
    foto1.setAttribute('src', 'img/foto1.jpg');
    foto1.setAttribute('alt', 'ludzik z teczką');
    foto1.setAttribute('class', 'content__article-img');
    article1.appendChild(foto1);

    const title1 = document.createElement('h3');
    title1.className = 'content__article-title';
    title1.textContent = 'CV';
    article1.appendChild(title1);

    const description1 = document.createElement('p');
    description1.className = 'content__article-description';
    description1.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum exercitationem soluta dolorem error cumque odit praesentium ullam eos eligendi, enim voluptate assumenda delectus omnis itaque ut dolor quae. Mollitia, omnis.';
    article1.appendChild(description1);

    const button1 = document.createElement('a');
    button1.setAttribute('href', '../../cv.pdf');
    button1.setAttribute('target', '_blank');
    button1.className = 'content__article-button';
    button1.id = 'cv';
    button1.textContent = 'Zobacz CV';
    article1.appendChild(button1);

    // Artykuł 2 po prawo {}
    const article2 = document.createElement('article');
    article2.className = 'content__article';
    content.appendChild(article2);

    const foto2 = document.createElement('img');
    foto2.setAttribute('src', 'img/foto2.jpg');
    foto2.setAttribute('alt', 'zdjecie misia');
    foto2.setAttribute('class', 'content__article-imgSkills');
    article2.appendChild(foto2);

    const title2 = document.createElement('h3');
    title2.className = 'content__article-title';
    title2.textContent = 'UMIEJĘTNOŚCI';
    article2.appendChild(title2);

    const description2 = document.createElement('p');
    description2.className = 'content__article-description';
    description2.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum exercitationem soluta dolorem error cumque odit praesentium ullam eos eligendi, enim voluptate assumenda delectus omnis itaque ut dolor quae. Mollitia, omnis.';
    article2.appendChild(description2);

    const button2 = document.createElement('button');
    button2.className = 'content__article-button';
    button2.id = 'skills';
    button2.textContent = 'Czytaj dalej';
    article2.appendChild(button2);

    const h2 = document.createElement('h2');
    h2.textContent = "Zobacz również";
    h2.className = "content__title";
    content.appendChild(h2);

    //artykuł 3

    const article3 = document.createElement('article');
    article3.className = 'content__article';
    content.appendChild(article3);

    const foto3 = document.createElement('img');
    foto3.setAttribute('src', 'https://cdn.pixabay.com/photo/2016/08/14/14/58/pokemon-1593048__480.jpg');
    foto3.setAttribute('alt', 'pokedex');
    foto3.setAttribute('class', 'content__article-img');
    article3.appendChild(foto3);

    const title3 = document.createElement('h3');
    title3.className = 'content__article-title';
    title3.textContent = 'POKEDEX';
    article3.appendChild(title3);

    const description3 = document.createElement('p');
    description3.className = 'content__article-description';
    description3.textContent = 'Aplikacja zbudowana w bibliotece React. ';
    article3.appendChild(description3);

    const button3 = document.createElement('a');
    button3.setAttribute('href', "https://kunegundakosek.github.io/ReactPokedex/");
    button3.setAttribute('target', '_blank');
    button3.className = 'content__article-button';
    button3.id = 'pokedex';
    button3.textContent = 'Zobacz';
    article3.appendChild(button3);

    const buttonPokedex = document.createElement('a');
    buttonPokedex.setAttribute('href', "https://kunegundakosek.github.io/ReactPokedex/");
    button3.appendChild(buttonPokedex);

    // //artykuł 4

    // const article4 = document.createElement('article');
    // article4.className = 'content__article-more';
    // content.appendChild(article4);

    // const foto4 = document.createElement('img');
    // foto4.setAttribute('src', '../../img/shop.jpg');
    // foto4.setAttribute('alt', 'zdjecie misia');
    // foto4.setAttribute('class', 'content__article-img');
    // article4.appendChild(foto4);

    // const title4 = document.createElement('h3');
    // title4.className = 'content__article-title';
    // title4.textContent = 'Sklep z ubraniami';
    // article4.appendChild(title4);

    // const description4 = document.createElement('p');
    // description4.className = 'content__article-description';
    // description4.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum exercitationem soluta dolorem error cumque odit praesentium ullam eos eligendi, enim voluptate assumenda delectus omnis itaque ut dolor quae. Mollitia, omnis.';
    // article4.appendChild(description4);

    // const button4 = document.createElement('button');
    // button4.className = 'content__article-button';
    // button4.id = 'shop';
    // button4.textContent = 'Czytaj dalej';
    // article4.appendChild(button4);


    // ---------------------


    const projectButton = document.getElementById('projectButton');
    projectButton.style.color = "white";
    projectButton.addEventListener('click', () => {
        ProjectPage();
        projectButton.style.color = 'crimson';
        console.log('renderuje ProjectPage');
    })

    // const cv = document.getElementById('cv');
    // cv.addEventListener('click', () => {
    //     CVPage();
    // })

    const skillsButton = document.getElementById('skills');
    skillsButton.addEventListener('click', () => {
        SkillsPage();
    })

    // const shop = document.getElementById('shop');
    // shop.addEventListener('click', () => {
    //     Build();
    // })

}