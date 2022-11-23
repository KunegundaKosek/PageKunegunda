export default function () {
    const content = document.querySelector('.content');
    content.innerHTML = '';

    const homeButton = document.getElementById('homeButton');
    homeButton.style.color = 'white';

    content.textContent = 'Tutaj bedzie cv';
}