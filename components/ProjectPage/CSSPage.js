import button from "./button.js";
import ProjectPage from "./ProjectPage.js";

export default function () {

    const content = document.querySelector('.content');
    content.innerHTML = '';

    const projectButton = document.getElementById('projectButton');
    projectButton.style.color = 'crimson';

    document.title = "Projekty CSS";

    ProjectPage();

    const jquery = document.querySelector('.content__jquery');
    jquery.style.marginBottom = "0px";

    const css = document.getElementById('css');
    css.style.paddingLeft = "5px";
    css.style.borderLeft = '10px solid orange';
    css.style.fontWeight = 'bold';

    const title = document.querySelector('.content__title');
    title.remove();

    const h1 = document.createElement('h1');
    h1.className = 'content__title';
    h1.textContent = 'Projekty CSS';
    content.appendChild(h1);

    // Projekt 1;

    const article1 = document.createElement('article');
    article1.className = 'content__box';
    content.appendChild(article1);

    const title1 = document.createElement('span');
    title1.className = 'content__box-titleProject';
    title1.textContent = 'Japoński obrazek';
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
    a1.setAttribute('href', 'https://kunegundakosek.github.io/HTML-CSSProject/Project1/project1.html');
    a1.className = 'content__box-btn';
    article1.appendChild(a1);

    // Projekt 2;

    const article2 = document.createElement('article');
    article2.className = 'content__box';
    content.appendChild(article2);

    const title2 = document.createElement('span');
    title2.className = 'content__box-titleProject';
    title2.textContent = 'Szachownica';
    article2.appendChild(title2);

    const img2 = document.createElement('img');
    img2.setAttribute('src', 'img/CSSProject/img2.png');
    img2.setAttribute('alt', 'projekt 1');
    img2.className = 'content__box-image';
    article2.appendChild(img2);

    const description2 = document.createElement('p');
    description2.className = 'content__box-description';
    description2.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum exercitationem soluta dolorem error cumque odit praesentium ullam eos eligendi, enim voluptate assumenda delectus omnis itaque ut dolor quae. Mollitia, omnis.';
    article2.appendChild(description2);

    const a2 = document.createElement('a');
    a2.textContent = 'Zobacz projekt';
    a2.setAttribute('target', '_blank');
    a2.setAttribute('href', 'https://kunegundakosek.github.io/HTML-CSSProject/Project2/project2.html');
    a2.className = 'content__box-btn';
    article2.appendChild(a2);

    // Projekt 3;

    const article3 = document.createElement('article');
    article3.className = 'content__box';
    content.appendChild(article3);

    const title3 = document.createElement('span');
    title3.className = 'content__box-titleProject';
    title3.textContent = 'Zmiana koloru tła i wyświetlanie tekstu po najechaniu na przycisk';
    article3.appendChild(title3);

    const img3 = document.createElement('img');
    img3.setAttribute('src', 'img/GIF/gif16.gif');
    img3.setAttribute('alt', 'projekt 1');
    img3.className = 'content__box-image';
    article3.appendChild(img3);

    const description3 = document.createElement('p');
    description3.className = 'content__box-description';
    description3.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum exercitationem soluta dolorem error cumque odit praesentium ullam eos eligendi, enim voluptate assumenda delectus omnis itaque ut dolor quae. Mollitia, omnis.';
    article3.appendChild(description3);

    const a3 = document.createElement('a');
    a3.textContent = 'Zobacz projekt';
    a3.setAttribute('target', '_blank');
    a3.setAttribute('href', 'https://kunegundakosek.github.io/HTML-CSSProject/Project4/project4.html');
    a3.className = 'content__box-btn';
    article3.appendChild(a3);

    // Projekt 4;

    const article4 = document.createElement('article');
    article4.className = 'content__box';
    content.appendChild(article4);

    const title4 = document.createElement('span');
    title4.className = 'content__box-titleProject';
    title4.textContent = 'Kwadrat zmieniający rozmiar i pozycję po najechaniu na przycisk';
    article4.appendChild(title4);

    const img4 = document.createElement('img');
    img4.setAttribute('src', 'img/GIF/gif23.gif');
    img4.setAttribute('alt', 'projekt');
    img4.className = 'content__box-image';
    article4.appendChild(img4);

    const description4 = document.createElement('p');
    description4.className = 'content__box-description';
    description4.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum exercitationem soluta dolorem error cumque odit praesentium ullam eos eligendi, enim voluptate assumenda delectus omnis itaque ut dolor quae. Mollitia, omnis.';
    article4.appendChild(description4);

    const a4 = document.createElement('a');
    a4.textContent = 'Zobacz projekt';
    a4.setAttribute('target', '_blank');
    a4.setAttribute('href', 'https://kunegundakosek.github.io/HTML-CSSProject/Project5/project5.html');
    a4.className = 'content__box-btn';
    article4.appendChild(a4);

    // Projekt 5;

    const article5 = document.createElement('article');
    article4.className = 'content__box';
    content.appendChild(article5);

    const title5 = document.createElement('span');
    title5.className = 'content__box-titleProject';
    title5.textContent = ' Domek pojawiający się po najechaniu na przycisk';
    article5.appendChild(title5);

    const img5 = document.createElement('img');
    img5.setAttribute('src', 'img/GIF/gif18.gif');
    img5.setAttribute('alt', 'projekt 1');
    img5.className = 'content__box-image';
    article5.appendChild(img5);

    const description5 = document.createElement('p');
    description5.className = 'content__box-description';
    description5.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum exercitationem soluta dolorem error cumque odit praesentium ullam eos eligendi, enim voluptate assumenda delectus omnis itaque ut dolor quae. Mollitia, omnis.';
    article5.appendChild(description5);

    const a5 = document.createElement('a');
    a5.textContent = 'Zobacz projekt';
    a5.setAttribute('target', '_blank');
    a5.setAttribute('href', 'https://kunegundakosek.github.io/HTML-CSSProject/Project7/project7.html');
    a5.className = 'content__box-btn';
    article5.appendChild(a5);


    // Projekt 6;

    const article6 = document.createElement('article');
    article6.className = 'content__box';
    content.appendChild(article6);

    const title6 = document.createElement('span');
    title6.className = 'content__box-titleProject';
    title6.textContent = 'Zegar';
    article6.appendChild(title6);

    const img6 = document.createElement('img');
    img6.setAttribute('src', 'img/GIF/gif19.gif');
    img6.setAttribute('alt', 'projekt 1');
    img6.className = 'content__box-image';
    article6.appendChild(img6);

    const description6 = document.createElement('p');
    description6.className = 'content__box-description';
    description6.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum exercitationem soluta dolorem error cumque odit praesentium ullam eos eligendi, enim voluptate assumenda delectus omnis itaque ut dolor quae. Mollitia, omnis.';
    article6.appendChild(description6);

    const a6 = document.createElement('a');
    a6.textContent = 'Zobacz projekt';
    a6.setAttribute('target', '_blank');
    a6.setAttribute('href', 'https://kunegundakosek.github.io/HTML-CSSProject/Project8/project8.html');
    a6.className = 'content__box-btn';
    article6.appendChild(a6);

    // Projekt 7;

    const article7 = document.createElement('article');
    article7.className = 'content__box';
    content.appendChild(article7);

    const title7 = document.createElement('span');
    title7.className = 'content__box-titleProject';
    title7.textContent = 'Przycisk z animacją';
    article7.appendChild(title7);

    const img7 = document.createElement('img');
    img7.setAttribute('src', 'img/GIF/gif20.gif');
    img7.setAttribute('alt', 'projekt 1');
    img7.className = 'content__box-image';
    article7.appendChild(img7);

    const description7 = document.createElement('p');
    description7.className = 'content__box-description';
    description7.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum exercitationem soluta dolorem error cumque odit praesentium ullam eos eligendi, enim voluptate assumenda delectus omnis itaque ut dolor quae. Mollitia, omnis.';
    article7.appendChild(description7);

    const a7 = document.createElement('a');
    a7.textContent = 'Zobacz projekt';
    a7.setAttribute('target', '_blank');
    a7.setAttribute('href', 'https://kunegundakosek.github.io/HTML-CSSProject/Project9/project9.html');
    a7.className = 'content__box-btn';
    article7.appendChild(a7);

    // Projekt 8;

    const article8 = document.createElement('article');
    article8.className = 'content__box';
    content.appendChild(article8);

    const title8 = document.createElement('span');
    title8.className = 'content__box-titleProject';
    title8.textContent = 'Zmiana rozmiaru tekstu i dodawanie bordera po najechaniu na przycisk';
    article8.appendChild(title8);

    const img8 = document.createElement('img');
    img8.setAttribute('src', 'img/GIF/gif21.gif');
    img8.setAttribute('alt', 'projekt 1');
    img8.className = 'content__box-image';
    article8.appendChild(img8);

    const description8 = document.createElement('p');
    description8.className = 'content__box-description';
    description8.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum exercitationem soluta dolorem error cumque odit praesentium ullam eos eligendi, enim voluptate assumenda delectus omnis itaque ut dolor quae. Mollitia, omnis.';
    article8.appendChild(description8);

    const a8 = document.createElement('a');
    a8.textContent = 'Zobacz projekt';
    a8.setAttribute('target', '_blank');
    a8.setAttribute('href', 'https://kunegundakosek.github.io/HTML-CSSProject/Project10/project10.html');
    a8.className = 'content__box-btn';
    article8.appendChild(a8);

    // Projekt 9;

    const article9 = document.createElement('article');
    article9.className = 'content__box';
    content.appendChild(article9);

    const title9 = document.createElement('span');
    title9.className = 'content__box-titleProject';
    title9.textContent = 'Wschodzące i zachodzące słońce';
    article9.appendChild(title9);

    const img9 = document.createElement('img');
    img9.setAttribute('src', 'img/GIF/gif22.gif');
    img9.setAttribute('alt', 'projekt 1');
    img9.className = 'content__box-image';
    article9.appendChild(img9);

    const description9 = document.createElement('p');
    description9.className = 'content__box-description';
    description9.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum exercitationem soluta dolorem error cumque odit praesentium ullam eos eligendi, enim voluptate assumenda delectus omnis itaque ut dolor quae. Mollitia, omnis.';
    article9.appendChild(description9);

    const a9 = document.createElement('a');
    a9.textContent = 'Zobacz projekt';
    a9.setAttribute('target', '_blank');
    a9.setAttribute('href', 'https://kunegundakosek.github.io/HTML-CSSProject/Project11/project11.html');
    a9.className = 'content__box-btn';
    article9.appendChild(a9);

    // Projekt 10;

    const article10 = document.createElement('article');
    article10.className = 'content__box';
    content.appendChild(article10);

    const title10 = document.createElement('span');
    title10.className = 'content__box-titleProject';
    title10.textContent = 'Kwadrat zmieniający pozycję i kolor';
    article10.appendChild(title10);

    const img10 = document.createElement('img');
    img10.setAttribute('src', 'img/GIF/gif23.gif');
    img10.setAttribute('alt', 'projekt 1');
    img10.className = 'content__box-image';
    article10.appendChild(img10);

    const description10 = document.createElement('p');
    description10.className = 'content__box-description';
    description10.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum exercitationem soluta dolorem error cumque odit praesentium ullam eos eligendi, enim voluptate assumenda delectus omnis itaque ut dolor quae. Mollitia, omnis.';
    article10.appendChild(description10);

    const a10 = document.createElement('a');
    a10.textContent = 'Zobacz projekt';
    a10.setAttribute('target', '_blank');
    a10.setAttribute('href', 'https://kunegundakosek.github.io/HTML-CSSProject/Project12/project12.html');
    a10.className = 'content__box-btn';
    article10.appendChild(a10);

    // Projekt 11;

    const article11 = document.createElement('article');
    article11.className = 'content__box';
    content.appendChild(article11);

    const title11 = document.createElement('span');
    title11.className = 'content__box-titleProject';
    title11.textContent = 'Disco';
    article11.appendChild(title11);

    const img11 = document.createElement('img');
    img11.setAttribute('src', 'img/GIF/gif24.gif');
    img11.setAttribute('alt', 'projekt 1');
    img11.className = 'content__box-image';
    article11.appendChild(img11);

    const description11 = document.createElement('p');
    description11.className = 'content__box-description';
    description11.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum exercitationem soluta dolorem error cumque odit praesentium ullam eos eligendi, enim voluptate assumenda delectus omnis itaque ut dolor quae. Mollitia, omnis.';
    article11.appendChild(description11);

    const a11 = document.createElement('a');
    a11.textContent = 'Zobacz projekt';
    a11.setAttribute('target', '_blank');
    a11.setAttribute('href', 'https://kunegundakosek.github.io/HTML-CSSProject/Project14/project14.html');
    a11.className = 'content__box-btn';
    article11.appendChild(a11);

    // Projekt 12;

    const article12 = document.createElement('article');
    article12.className = 'content__box';
    content.appendChild(article12);

    const title12 = document.createElement('span');
    title12.className = 'content__box-titleProject';
    title12.textContent = 'Animowane kropki';
    article12.appendChild(title12);

    const img12 = document.createElement('img');
    img12.setAttribute('src', 'img/GIF/gif25.gif');
    img12.setAttribute('alt', 'projekt 1');
    img12.className = 'content__box-image';
    article12.appendChild(img12);

    const description12 = document.createElement('p');
    description12.className = 'content__box-description';
    description12.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum exercitationem soluta dolorem error cumque odit praesentium ullam eos eligendi, enim voluptate assumenda delectus omnis itaque ut dolor quae. Mollitia, omnis.';
    article12.appendChild(description12);

    const a12 = document.createElement('a');
    a12.textContent = 'Zobacz projekt';
    a12.setAttribute('target', '_blank');
    a12.setAttribute('href', 'https://kunegundakosek.github.io/HTML-CSSProject/Project14/project14.html');
    a12.className = 'content__box-btn';
    article12.appendChild(a12);







    button();

}