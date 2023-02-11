export default function () {

    const content = document.querySelector('.content');


    const contentTitleJS = document.querySelector('#titleJS');
    const contentTitleJSTxt = 'Projekty JavaScript';

    let indexTextContentTitleJS = 0;

    const addLetterContentTitleJS = () => {
        contentTitleJS.textContent += contentTitleJSTxt[indexTextContentTitleJS];
        indexTextContentTitleJS++;

        if (indexTextContentTitleJS === contentTitleJSTxt.length) clearInterval(indexTypinContentTitleJS);
    };

    const indexTypinContentTitleJS = setInterval(addLetterContentTitleJS, 100);

}