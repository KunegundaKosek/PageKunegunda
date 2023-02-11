import button from "./button.js";
import ProjectPage from "./ProjectPage.js";

export default function () {



    const content = document.querySelector('.content');
    content.innerHTML = '';
    ProjectPage();

    const projectButton = document.getElementById('projectButton');
    projectButton.style.color = 'crimson';

    document.title = "Projekty React";

    const title = document.querySelector('.content__title');
    title.remove();

    const react = document.getElementById('react');
    react.style.paddingLeft = "5px";
    react.style.borderLeft = '10px solid rgb(222, 189, 222)';
    react.style.fontWeight = 'bold';

    const h1 = document.createElement('h1');
    h1.className = 'content__title';
    h1.id = 'titleReact';
    content.appendChild(h1);

    const jquery = document.querySelector('.content__jquery');
    jquery.style.marginBottom = "0px";


    // animacja

    const contentTitleReact = document.querySelector('#titleReact');
    const contentTitleReactTxt = 'Projekty React';

    let indexTextContentTitleReact = 0;

    const addLetterContentTitleJS = () => {
        contentTitleReact.textContent += contentTitleReactTxt[indexTextContentTitleReact];
        indexTextContentTitleReact++;

        if (indexTextContentTitleReact === contentTitleReactTxt.length) clearInterval(indexTypinContentTitleReact);
    };

    const indexTypinContentTitleReact = setInterval(addLetterContentTitleJS, 100);

    // koniec animacji 

    // Project Pokedex

    const article1 = document.createElement('article');
    article1.className = 'content__box';
    content.appendChild(article1);

    const title1 = document.createElement('span');
    title1.className = 'content__box-titleProject';
    title1.textContent = 'Pokedex';
    article1.appendChild(title1);

    const img1 = document.createElement('img');
    img1.setAttribute('src', 'img/CSSProject/img1.png');
    img1.setAttribute('alt', 'projekt 1');
    img1.className = 'content__box-image';
    article1.appendChild(img1);

    const description1 = document.createElement('p');
    description1.className = 'content__box-description';
    description1.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum exercitationem soluta dolorem error cumque odit praesentium ullam eos eligendi, enim voluptate assumenda delectus omnis itaque ut dolor quae. Mollitia, omnis.';
    article1.appendChild(description1);

    const a1 = document.createElement('a');
    a1.textContent = 'Zobacz projekt';
    a1.setAttribute('target', '_blank');
    a1.setAttribute('href', 'https://kunegundakosek.github.io/ReactPokedex/');
    a1.className = 'content__box-btn';
    article1.appendChild(a1);






    button();
}