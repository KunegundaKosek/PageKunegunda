import button from "./button.js";
import JavascriptPage from "./JavascriptPage.js";

export default function () {



    const content = document.querySelector('.content');
    content.innerHTML = '';
    content.style.display = 'block';


    const homeButton = document.getElementById('homeButton');
    homeButton.style.color = 'white';

    const h1 = document.createElement('h1');
    h1.className = 'content__title';
    h1.textContent = 'Projekty';
    content.appendChild(h1);

    //javascript
    const titleJavaScript = document.createElement('p');
    titleJavaScript.className = 'content__project content__js';
    titleJavaScript.id = 'javascript';
    titleJavaScript.textContent = 'Projekty JavaScript';
    content.appendChild(titleJavaScript);

    //TypeScript
    const titleTypeScript = document.createElement('p');
    titleTypeScript.className = 'content__project content__ts';
    titleTypeScript.id = 'typescript';
    titleTypeScript.textContent = 'Projekty TypeScript';
    content.appendChild(titleTypeScript);

    // CSS
    const titleCSS = document.createElement('p');
    titleCSS.className = 'content__project content__css';
    titleCSS.id = 'css';
    titleCSS.textContent = 'Projekty CSS/SCSS';
    content.appendChild(titleCSS);

    //REACT
    const titleReact = document.createElement('p');
    titleReact.className = 'content__project content__react';
    titleReact.id = 'react';
    titleReact.textContent = 'Projekty React';
    content.appendChild(titleReact);

    // jQuery
    const titlejQuery = document.createElement('p');
    titlejQuery.className = 'content__project content__jquery';
    titlejQuery.id = 'jquery';
    titlejQuery.textContent = 'Projekty jQuery';
    content.appendChild(titlejQuery);

    button();

}