export default function () {



    const certificates = [
    
        {
            name: 'Frontend od Podstaw',
            promoter: 'SDA Academy',
            url: 'https://app.diplomasafe.com/pl-PL/diploma/d5dc01bec913a5ab155e650f78adc56cd4c9eae65'
        },

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
    ];

    const content = document.querySelector('.content');
    content.textContent = '';

    const certificatesButton = document.getElementById('certificatesButton');
    certificatesButton.style.color = 'crimson';
    const projectButton = document.getElementById('projectButton');
    projectButton.style.color = 'white';
    
    const homeButton = document.getElementById('homeButton');
    homeButton.style.color = 'white';

    const h1 = document.createElement('h1');
    h1.className = 'content__title';
    h1.textContent = 'Certyfikaty';
    content.appendChild(h1);

    const ul = document.createElement('ul');
    content.appendChild(ul);

    certificates.forEach((certificate) => {
        const li = document.createElement('li');

        const h2 = document.createElement('h2');
        h2.textContent = `${certificate.name}`;
        li.appendChild(h2);

        const p = document.createElement('p');
        p.textContent = `${certificate.promoter}`;
        li.appendChild(p);

        const img = document.createElement('img');
        img.src = `img/certificates/${certificate.name}.png`;
        img.alt = `${certificate.name}`;
        li.appendChild(img);

        const button = document.createElement('a');
        button.className = 'LICertificateButton';
        button.href = certificate.url;
        button.textContent = 'ZOBACZ CERTYFIKAT';
        li.appendChild(button);

        const hr = document.createElement('hr');
        li.appendChild(hr);


        ul.appendChild(li);
    })

}