export default function () {

    const content = document.querySelector('.content');
    content.textContent = '';

    const homeButton = document.getElementById('homeButton');
    homeButton.style.color = 'white';

    const h1 = document.createElement('h1');
    h1.className = 'content__title';
    h1.textContent = 'Moje umięjętności';
    content.appendChild(h1);



    // HTML CSS SCSS ;

    const article1 = document.createElement('article');
    article1.className = 'content__box';
    content.appendChild(article1);

    const title1 = document.createElement('span');
    title1.className = 'content__box-titleProject';
    title1.textContent = 'HTML, CSS, SCSS';
    article1.appendChild(title1);

    const img1 = document.createElement('img');
    img1.setAttribute('src', 'img/skills/htmlCssScss.png');
    img1.setAttribute('alt', 'projekt 1');
    img1.className = 'content__box-image';
    article1.appendChild(img1);

    // const description1 = document.createElement('p');
    // description1.className = 'content__box-description';
    // description1.textContent = 'Znam najnowsze znaczniki wprowadzone w HTML5.';
    // article1.appendChild(description1);

    //JS TS

    const article2 = document.createElement('article');
    article2.className = 'content__box';
    content.appendChild(article2);

    const title2 = document.createElement('span');
    title2.className = 'content__box-titleProject';
    title2.textContent = 'JavaScript, TypeScript';
    article2.appendChild(title2);

    const img2 = document.createElement('img');
    img2.setAttribute('src', 'img/skills/js-ts.jpg');
    img2.setAttribute('alt', 'projekt 1');
    img2.className = 'content__box-image';
    article2.appendChild(img2);

    // const description2 = document.createElement('p');
    // description2.className = 'content__box-description';
    // description2.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum exercitationem soluta dolorem error cumque odit praesentium ullam eos eligendi, enim voluptate assumenda delectus omnis itaque ut dolor quae. Mollitia, omnis.';
    // article2.appendChild(description2);

    // React
    const article3 = document.createElement('article');
    article3.className = 'content__box';
    content.appendChild(article3);

    const title3 = document.createElement('span');
    title3.className = 'content__box-titleProject';
    title3.textContent = 'React';
    article3.appendChild(title3);

    const img3 = document.createElement('img');
    img3.setAttribute('src', 'img/skills/react.png');
    img3.setAttribute('alt', 'projekt 1');
    img3.className = 'content__box-image content__box-image-react';
    article3.appendChild(img3);

    // const description3 = document.createElement('p');
    // description3.className = 'content__box-description';
    // description3.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum exercitationem soluta dolorem error cumque odit praesentium ullam eos eligendi, enim voluptate assumenda delectus omnis itaque ut dolor quae. Mollitia, omnis.';
    // article3.appendChild(description3);

    // Git
    const article4 = document.createElement('article');
    article4.className = 'content__box';
    content.appendChild(article4);

    const title4 = document.createElement('span');
    title4.className = 'content__box-titleProject';
    title4.textContent = 'GIT';
    article4.appendChild(title4);

    const img4 = document.createElement('img');
    img4.setAttribute('src', 'img/skills/git.png');
    img4.setAttribute('alt', 'projekt 1');
    img4.className = 'content__box-image';
    article4.appendChild(img4);

    // const description4 = document.createElement('p');
    // description4.className = 'content__box-description';
    // description4.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum exercitationem soluta dolorem error cumque odit praesentium ullam eos eligendi, enim voluptate assumenda delectus omnis itaque ut dolor quae. Mollitia, omnis.';
    // article4.appendChild(description4);

    // AJAX
    const article5 = document.createElement('article');
    article5.className = 'content__box';
    content.appendChild(article5);

    const title5 = document.createElement('span');
    title5.className = 'content__box-titleProject';
    title5.textContent = 'AJAX';
    article5.appendChild(title5);

    const img5 = document.createElement('img');
    img5.setAttribute('src', 'img/skills/ajax.jpg');
    img5.setAttribute('alt', 'projekt 1');
    img5.className = 'content__box-image';
    article5.appendChild(img5);

    // const description5 = document.createElement('p');
    // description5.className = 'content__box-description';
    // description5.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum exercitationem soluta dolorem error cumque odit praesentium ullam eos eligendi, enim voluptate assumenda delectus omnis itaque ut dolor quae. Mollitia, omnis.';
    // article5.appendChild(description5);

    // Bootstrap
    const article6 = document.createElement('article');
    article6.className = 'content__box';
    content.appendChild(article6);

    const title6 = document.createElement('span');
    title6.className = 'content__box-titleProject';
    title6.textContent = 'Bootstrap';
    article6.appendChild(title6);

    const img6 = document.createElement('img');
    img6.setAttribute('src', 'img/skills/bootstrap.png');
    img6.setAttribute('alt', 'projekt 1');
    img6.className = 'content__box-image';
    article6.appendChild(img6);

    // const description6 = document.createElement('p');
    // description6.className = 'content__box-description';
    // description6.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum exercitationem soluta dolorem error cumque odit praesentium ullam eos eligendi, enim voluptate assumenda delectus omnis itaque ut dolor quae. Mollitia, omnis.';
    // article6.appendChild(description6);

    // SQL
    const article7 = document.createElement('article');
    article7.className = 'content__box';
    content.appendChild(article7);

    const title7 = document.createElement('span');
    title7.className = 'content__box-titleProject';
    title7.textContent = 'Bazy danych SQL';
    article7.appendChild(title7);

    const img7 = document.createElement('img');
    img7.setAttribute('src', 'img/skills/db.jpg');
    img7.setAttribute('alt', 'projekt 1');
    img7.className = 'content__box-image';
    article7.appendChild(img7);

    // const description7 = document.createElement('p');
    // description7.className = 'content__box-description';
    // description7.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum exercitationem soluta dolorem error cumque odit praesentium ullam eos eligendi, enim voluptate assumenda delectus omnis itaque ut dolor quae. Mollitia, omnis.';
    // article7.appendChild(description7);

    // SQL
    const article8 = document.createElement('article');
    article8.className = 'content__box';
    content.appendChild(article8);

    const title8 = document.createElement('span');
    title8.className = 'content__box-titleProject';
    title8.textContent = 'HTTP';
    article8.appendChild(title8);

    const img8 = document.createElement('img');
    img8.setAttribute('src', 'img/skills/http.png');
    img8.setAttribute('alt', 'projekt 1');
    img8.className = 'content__box-image';
    article8.appendChild(img8);

    // const description8 = document.createElement('p');
    // description8.className = 'content__box-description';
    // description8.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum exercitationem soluta dolorem error cumque odit praesentium ullam eos eligendi, enim voluptate assumenda delectus omnis itaque ut dolor quae. Mollitia, omnis.';
    // article8.appendChild(description8);

    //jquery
    const article9 = document.createElement('article');
    article9.className = 'content__box';
    content.appendChild(article9);

    const title9 = document.createElement('span');
    title9.className = 'content__box-titleProject';
    title9.textContent = 'jQuery';
    article9.appendChild(title9);

    const img9 = document.createElement('img');
    img9.setAttribute('src', 'img/skills/jquery.png');
    img9.setAttribute('alt', 'projekt 1');
    img9.className = 'content__box-image';
    article9.appendChild(img9);


}