export default function () {

    const articles = document.querySelector('.articles');
    
    const h1 = document.createElement('h1');
    h1.className = 'articles__title';
    h1.textContent = 'Witam na stronie';
    articles.appendChild(h1);
    
    // Artykuł 1 po prawo {brązowy miś}
    const article1 = document.createElement('article');
    article1.className = 'articles__article';

    const foto1 = document.createElement('img');
    foto1.setAttribute('src', '../../img/foto1.jpg');
    foto1.setAttribute('alt', 'zdjecie misia');
    articles.appendChild(article1);
    article1.appendChild(foto1);

    const article1H3 = document.createElement('h3');
    article1H3.className = 'article__title';
    article1H3.textContent = 'ZOBACZ MOJE UMIEJĘTNOŚCI';
    article1.appendChild(article1H3);

    const article1Description = document.createElement('p');
    article1Description.className = 'article__description';
    article1Description.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo quibusdam dolores minima voluptates qui odit reiciendis deleniti mollitia vel, distinctio consequatur eum praesentium laboriosam, vitae adipisci veritatis quos iure obcaecati!';
    article1.appendChild(article1Description);

    // Artykuł 1 po prawo {niebieski miś}
    const article2 = document.createElement('article');
    article1.className = 'articles__article';
    articles.appendChild(article2);

    const foto2 = document.createElement('img');
    foto2.setAttribute('src', '../../img/foto2.jpg');
    foto2.setAttribute('alt', 'zdjecie misia');
    foto2.setAttribute('class', '')
    article2.appendChild(foto2);

}