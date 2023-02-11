export default function () {

    const contentTitleCSS = document.querySelector('#titleCSS');
    const contentTitleCSSTxt = 'Projekty JavaScript';

    let indexTextContentTitleCSS = 0;

    const addLetterContentTitleCSS = () => {
        contentTitleCSS.textContent += contentTitleCSSTxt[indexTextContentTitleCSS];
        indexTextContentTitleCSS++;

        if (indexTextContentTitleCSS === contentTitleCSSTxt.length) clearInterval(indexTypinContentTitleCSS);
    };

    const indexTypinContentTitleCSS = setInterval(addLetterContentTitleCSS, 100);

}