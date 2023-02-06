export default function () {

    const content = document.querySelector('.content');

    // Witam na stronie!
    const h1 = document.getElementById('h1');
    const txt = 'Witam na stronie!';

    let indexText = 0;
    const addLetter = () => {
        
        h1.textContent += txt[indexText];
        indexText++;

        if (indexText === txt.length) clearInterval(indexTyping);
    };

    const indexTyping = setInterval(addLetter, 100);

    // Zobacz również
    const h2 = document.getElementById('h2');
    const txtH2 = 'Zobacz również';

    let indexTextH2 = 0;

    const addLetterH2 = () => {
        h2.textContent += txtH2[indexTextH2];
        indexTextH2++;

        if (indexTextH2 === txtH2.length) clearInterval(indexTypingH2);
        
    }

    const indexTypingH2 = setInterval(addLetterH2, 100);

    // Projekty


};