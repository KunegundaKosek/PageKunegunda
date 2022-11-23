import ProjectPage from "./ProjectPage.js";

export default function () {

    const content = document.querySelector('.content');
    content.innerHTML = '';

    const projectButton = document.getElementById('projectButton');
    projectButton.style.color = 'crimson';

    ProjectPage();

    const title = document.querySelector('.content__title');
    title.remove();

    const h1 = document.createElement('h1');
    h1.className = 'content__title';
    h1.textContent = 'Projekty JavaScript';
    content.appendChild(h1);

    // Projekt 1;

    const article1 = document.createElement('article');
    article1.className = 'content__box';
    content.appendChild(article1);

    const title1 = document.createElement('span');
    title1.className = 'content__box-titleProject';
    title1.textContent = 'Wykrycie i wyświetlanie pozycji myszki';
    article1.appendChild(title1);

    const img1 = document.createElement('img');
    img1.setAttribute('src', '../img/foto3.jpg');
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
    a1.setAttribute('href', 'https://kunegundakosek.github.io/PorjectsJavaScript/project1.html');
    a1.className = 'content__box-btn';
    article1.appendChild(a1);

    //projekt 2
    const article2 = document.createElement('article');
    article2.className = 'content__box';
    content.appendChild(article2);

    const title2 = document.createElement('span');
    title2.className = 'content__box-titleProject';
    title2.textContent = 'Zmiana koloru tła przy kliknięciu zależnie od pozycji';
    article2.appendChild(title2);

    const img2 = document.createElement('img');
    img2.setAttribute('src', '../img/foto3.jpg');
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
    a2.setAttribute('href', 'https://kunegundakosek.github.io/PorjectsJavaScript/project2.html');
    a2.className = 'content__box-btn';
    article2.appendChild(a2);


    //projekt 3
    const article3 = document.createElement('article');
    article3.className = 'content__box';
    content.appendChild(article3);

    const title3 = document.createElement('span');
    title3.className = 'content__box-titleProject';
    title3.textContent = 'Łapanie i upuszczanie kwadratu ze zmianą jego koloru';
    article3.appendChild(title3);

    const img3 = document.createElement('img');
    img3.setAttribute('src', '../img/foto3.jpg');
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
    a3.setAttribute('href', 'https://kunegundakosek.github.io/PorjectsJavaScript/project3.html');
    a3.className = 'content__box-btn';
    article3.appendChild(a3);

    //projekt 4
    const article4 = document.createElement('article');
    article4.className = 'content__box';
    content.appendChild(article4);

    const title4 = document.createElement('span');
    title4.className = 'content__box-titleProject';
    title4.textContent = 'Rozjaśnianie i przyciemnianie tła przy pomocy klawiszy';
    article4.appendChild(title4);

    const img4 = document.createElement('img');
    img4.setAttribute('src', '../img/foto3.jpg');
    img4.setAttribute('alt', 'projekt 1');
    img4.className = 'content__box-image';
    article4.appendChild(img4);

    const description4 = document.createElement('p');
    description4.className = 'content__box-description';
    description4.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum exercitationem soluta dolorem error cumque odit praesentium ullam eos eligendi, enim voluptate assumenda delectus omnis itaque ut dolor quae. Mollitia, omnis.';
    article4.appendChild(description4);

    const a4 = document.createElement('a');
    a4.textContent = 'Zobacz projekt';
    a4.setAttribute('target', '_blank');
    a4.setAttribute('href', 'https://kunegundakosek.github.io/PorjectsJavaScript/project4.html');
    a4.className = 'content__box-btn';
    article4.appendChild(a4);

    //projekt 5
    const article5 = document.createElement('article');
    article5.className = 'content__box';
    content.appendChild(article5);

    const title5 = document.createElement('span');
    title5.className = 'content__box-titleProject';
    title5.textContent = 'Podaj hasło i odkryj wiadomość';
    article5.appendChild(title5);

    const img5 = document.createElement('img');
    img5.setAttribute('src', '../img/foto3.jpg');
    img5.setAttribute('alt', 'projekt 5');
    img5.className = 'content__box-image';
    article5.appendChild(img5);

    const description5 = document.createElement('p');
    description5.className = 'content__box-description';
    description5.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum exercitationem soluta dolorem error cumque odit praesentium ullam eos eligendi, enim voluptate assumenda delectus omnis itaque ut dolor quae. Mollitia, omnis.';
    article5.appendChild(description5);

    const a5 = document.createElement('a');
    a5.textContent = 'Zobacz projekt';
    a5.setAttribute('target', '_blank');
    a5.setAttribute('href', 'https://kunegundakosek.github.io/PorjectsJavaScript/project5.html');
    a5.className = 'content__box-btn';
    article5.appendChild(a5);

    //projekt 6
    const article6 = document.createElement('article');
    article6.className = 'content__box';
    content.appendChild(article6);

    const title6 = document.createElement('span');
    title6.className = 'content__box-titleProject';
    title6.textContent = 'Losowanie';
    article6.appendChild(title6);

    const img6 = document.createElement('img');
    img6.setAttribute('src', '../img/foto3.jpg');
    img6.setAttribute('alt', 'projekt 5');
    img6.className = 'content__box-image';
    article6.appendChild(img6);

    const description6 = document.createElement('p');
    description6.className = 'content__box-description';
    description6.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum exercitationem soluta dolorem error cumque odit praesentium ullam eos eligendi, enim voluptate assumenda delectus omnis itaque ut dolor quae. Mollitia, omnis.';
    article6.appendChild(description6);

    const a6 = document.createElement('a');
    a6.textContent = 'Zobacz projekt';
    a6.setAttribute('target', '_blank');
    a6.setAttribute('href', 'https://kunegundakosek.github.io/PorjectsJavaScript/project6.html');
    a6.className = 'content__box-btn';
    article6.appendChild(a6);

    //projekt 7
    const article7 = document.createElement('article');
    article7.className = 'content__box';
    content.appendChild(article7);

    const title7 = document.createElement('span');
    title7.className = 'content__box-titleProject';
    title7.textContent = 'Powiększ element';
    article7.appendChild(title7);

    const img7 = document.createElement('img');
    img7.setAttribute('src', '../img/foto3.jpg');
    img7.setAttribute('alt', 'projekt 5');
    img7.className = 'content__box-image';
    article7.appendChild(img7);

    const description7 = document.createElement('p');
    description7.className = 'content__box-description';
    description7.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum exercitationem soluta dolorem error cumque odit praesentium ullam eos eligendi, enim voluptate assumenda delectus omnis itaque ut dolor quae. Mollitia, omnis.';
    article7.appendChild(description7);

    const a7 = document.createElement('a');
    a7.textContent = 'Zobacz projekt';
    a7.setAttribute('target', '_blank');
    a7.setAttribute('href', 'https://kunegundakosek.github.io/PorjectsJavaScript/project7.html');
    a7.className = 'content__box-btn';
    article7.appendChild(a7);

    //projekt 8
    const article8 = document.createElement('article');
    article8.className = 'content__box';
    content.appendChild(article8);

    const title8 = document.createElement('span');
    title8.className = 'content__box-titleProject';
    title8.textContent = 'Dodawanie elementów po kliknięciu';
    article8.appendChild(title8);

    const img8 = document.createElement('img');
    img8.setAttribute('src', '../img/foto3.jpg');
    img8.setAttribute('alt', 'projekt 5');
    img8.className = 'content__box-image';
    article8.appendChild(img8);

    const description8 = document.createElement('p');
    description8.className = 'content__box-description';
    description8.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum exercitationem soluta dolorem error cumque odit praesentium ullam eos eligendi, enim voluptate assumenda delectus omnis itaque ut dolor quae. Mollitia, omnis.';
    article8.appendChild(description8);

    const a8 = document.createElement('a');
    a8.textContent = 'Zobacz projekt';
    a8.setAttribute('target', '_blank');
    a8.setAttribute('href', 'https://kunegundakosek.github.io/PorjectsJavaScript/project8.html');
    a8.className = 'content__box-btn';
    article8.appendChild(a8);

    //projekt 9
    const article9 = document.createElement('article');
    article9.className = 'content__box';
    content.appendChild(article9);

    const title9 = document.createElement('span');
    title9.className = 'content__box-titleProject';
    title9.textContent = 'Kwadrat zmieniający rozmiar przy scrolowaniu strony';
    article9.appendChild(title9);

    const img9 = document.createElement('img');
    img9.setAttribute('src', '../img/foto3.jpg');
    img9.setAttribute('alt', 'projekt 5');
    img9.className = 'content__box-image';
    article9.appendChild(img9);

    const description9 = document.createElement('p');
    description9.className = 'content__box-description';
    description9.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum exercitationem soluta dolorem error cumque odit praesentium ullam eos eligendi, enim voluptate assumenda delectus omnis itaque ut dolor quae. Mollitia, omnis.';
    article9.appendChild(description9);

    const a9 = document.createElement('a');
    a9.textContent = 'Zobacz projekt';
    a9.setAttribute('target', '_blank');
    a9.setAttribute('href', 'https://kunegundakosek.github.io/PorjectsJavaScript/project9.html');
    a9.className = 'content__box-btn';
    article9.appendChild(a9);

    //projekt 10
    const article10 = document.createElement('article');
    article10.className = 'content__box';
    content.appendChild(article10);

    const title10 = document.createElement('span');
    title10.className = 'content__box-titleProject';
    title10.textContent = 'Pasek zmieniający grubość i kolor przy scrolowaniu strony';
    article10.appendChild(title10);

    const img10 = document.createElement('img');
    img10.setAttribute('src', '../img/foto3.jpg');
    img10.setAttribute('alt', 'projekt 5');
    img10.className = 'content__box-image';
    article10.appendChild(img10);

    const description10 = document.createElement('p');
    description10.className = 'content__box-description';
    description10.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum exercitationem soluta dolorem error cumque odit praesentium ullam eos eligendi, enim voluptate assumenda delectus omnis itaque ut dolor quae. Mollitia, omnis.';
    article10.appendChild(description10);

    const a10 = document.createElement('a');
    a10.textContent = 'Zobacz projekt';
    a10.setAttribute('target', '_blank');
    a10.setAttribute('href', 'https://kunegundakosek.github.io/PorjectsJavaScript/project10.html');
    a10.className = 'content__box-btn';
    article10.appendChild(a10);

    //projekt 11
    const article11 = document.createElement('article');
    article11.className = 'content__box';
    content.appendChild(article11);

    const title11 = document.createElement('span');
    title11.className = 'content__box-titleProject';
    title11.textContent = 'Baner z automatycznie wymieniającymi się zdjęciami i tekstami';
    article11.appendChild(title11);

    const img11 = document.createElement('img');
    img11.setAttribute('src', '../img/foto3.jpg');
    img11.setAttribute('alt', 'projekt 5');
    img11.className = 'content__box-image';
    article11.appendChild(img11);

    const description11 = document.createElement('p');
    description11.className = 'content__box-description';
    description11.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum exercitationem soluta dolorem error cumque odit praesentium ullam eos eligendi, enim voluptate assumenda delectus omnis itaque ut dolor quae. Mollitia, omnis.';
    article11.appendChild(description11);

    const a11 = document.createElement('a');
    a11.textContent = 'Zobacz projekt';
    a11.setAttribute('target', '_blank');
    a11.setAttribute('href', 'https://kunegundakosek.github.io/PorjectsJavaScript/project11.html');
    a11.className = 'content__box-btn';
    article11.appendChild(a11);
}