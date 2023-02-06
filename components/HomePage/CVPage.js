export default function () {
    const content = document.querySelector('.content');
    content.innerHTML = '';

    const homeButton = document.getElementById('homeButton');
    homeButton.style.color = 'white';

    const h1 = document.createElement('h1');
    h1.className = "content__title";
    h1.textContent = "Curriculum Vitae";
    content.appendChild(h1);

    const articleName = document.createElement('article');
    articleName.className = "content__article";
    content.appendChild(articleName);

    const name = document.createElement('h2');
    name.className = ('content__article-text');
    name.textContent = "Kunegunda Kosek";
    articleName.appendChild(name);

    const email = document.createElement('a');
    email.setAttribute("href", "mailto:kosekkunegunda@wp.pl");
    email.className = ('content__article-text');
    email.textContent = "Email: kosekkunegunda@wp.pl";
    articleName.appendChild(email);

    const phone = document.createElement('a');
    phone.setAttribute("href", "tel:kosekkunegunda@wp.pl");
    phone.className = ('content__article-text');
    phone.textContent = "Telefon: 514200605";
    articleName.appendChild(phone);

    const articleImage = document.createElement('article');
    articleImage.className = "content__article";
    content.appendChild(articleImage);

    const img = document.createElement('img');
    img.className = 'content__article-imgCV';
    img.setAttribute('src', "../../img/ja.jpg");
    img.setAttribute('alt', 'zdjęcie');
    articleImage.appendChild(img);

    const articleSkills = document.createElement('article');
    articleSkills.className = 'content__article';
    content.appendChild(articleSkills);

    const h3 = document.createElement('h3');
    h3.className = "content__article-title";
    h3.textContent = 'Umiejętności';
    articleSkills.appendChild(h3);

    const ul = document.createElement('ul');
    articleSkills.appendChild(ul);

    const skills = ['HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript', 'React', 'Bootstrap', 'Ajax', 'HTTP', 'Bazy danych SQL', 'Testowanie'];

    const showSkills = skills.map(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        li.className = 'content__article-liElement';
        ul.appendChild(li);
    })

    const articleIcons = document.createElement('article');
    articleIcons.className = 'content__article';
    content.appendChild(articleIcons);

    const icons = ['fa-brands fa-html5', 'fa-brands fa-css3-alt', 'fa-brands fa-square-js', 'fa-brands fa-sass', 'fa-brands fa-react', 'fa-brands fa-bootstrap', 'fa-solid fa-database', 'fa-solid fa-bug', ];

    icons.map(icon => {
        const i = document.createElement('i');
        i.className = `${icon} content__article-icons`;
        articleIcons.appendChild(i);
    })

    const articleCertificate = document.createElement('article');
    articleCertificate.className = "content__article-certificate";
    content.appendChild(articleCertificate);

    const h3Certificate = document.createElement('h3');
    h3Certificate.textContent = 'Certyfikaty';
    articleCertificate.appendChild(h3Certificate);

    const certicifates = [
        {
            name: 'JAVA od Podstaw',
            promoter: 'SDA Academy',
            url: 'https://app.diplomasafe.com/pl-PL/diploma/d5dc01bec913a5ab155e650f78adc56cd4c9eae65'
        },

        {
            name: 'Front-end zaawansowany w 15 dni',
            promoter: 'Samuraj Programowania',
            url: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-2e47c1ea-b4d8-4d36-bbb5-581cf654a8b6.pdf'
        },

        {
            name: 'Programowanie w JavaScript',
            promoter: 'Samuraj Programowania',
            url: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-b06e40fd-a9f4-4640-b89b-2becacda9950.pdf'
        },

        {
            name: 'Zaawansowane projekty w CSS i JavaScript',
            promoter: 'Samuraj Programowania',
            url: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-96e879d9-d8fb-4092-b702-3efe80342ea1.pdf'
        },

        {
            name: 'React od podstaw',
            promoter: 'Samuraj Programowania',
            url: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-b4287544-c4c7-40fc-9412-a6e142c95805.pdf'
        },
    ]


    certicifates.map(certicifate => {
        const div = document.createElement('div');
        articleCertificate.appendChild(div);

        const title = document.createElement('span');
        title.textContent = `Nazwa kursu: ${certicifate.name}`;
        div.appendChild(title);

        const promoter = document.createElement('span');
        promoter.textContent = `Organizator: ${certicifate.promoter}`;
        div.appendChild(promoter);

        const link = document.createElement('a');
        link.setAttribute('href', certicifate.url);
        link.setAttribute('target', '_blank');
        link.textContent = `Zobacz certyfikat`;
        div.appendChild(link);
    })







}