import CSSPage from "./CSSPage.js";
import JavascriptPage from "./JavascriptPage.js";
import ReactPage from "./ReactPage.js";

export default function () {

    const javascript = document.getElementById('javascript').addEventListener('click', () => JavascriptPage());
    const typescript = document.getElementById('typescript').addEventListener('click', () => console.log('typescript'));
    const css = document.getElementById('css').addEventListener('click', () => CSSPage());
    const react = document.getElementById('react').addEventListener('click', () => ReactPage());
    const jquery = document.getElementById('jquery').addEventListener('click', () => console.log('jquery'));
}