export default function () {
    const content = document.querySelector('.content');
    content.innerHTML = '';

    const h1 = document.createElement('h1');
    h1.textContent = 'STRONA W BUDOWIE';
    content.appendChild(h1);

}