import Build from "./components/Build.js";
import CertificatesPage from "./components/Certificates/CertificatesPage.js";
import CVPage from "./components/HomePage/CVPage.js";
import HomePage from "./components/HomePage/HomePage.js";
import SkillsPage from "./components/HomePage/SkillsPage.js";
import CSSPage from "./components/ProjectPage/CSSPage.js";
import JavascriptPage from "./components/ProjectPage/JavascriptPage.js";
// import CSSPage from "./components/ProjectPage/CSSPage.js";
// import JavascriptPage from "./components/ProjectPage/JavascriptPage.js";
import ProjectPage from "./components/ProjectPage/ProjectPage.js";
import ReactPage from "./components/ProjectPage/ReactPage.js";

const content = document.querySelector('.content');


// SkillsPage();
// CertificatesPage();
HomePage();
// JavascriptPage();
// ReactPage();
// CSSPage();
// CVPage();

const homeButton = document.getElementById('homeButton');
homeButton.addEventListener('click', () => {
    content.style.display = 'flex';
    HomePage();
    homeButton.style.color = 'crimson';
    console.log('renderuje HomePage');
})

const projectButton = document.getElementById('projectButton');
projectButton.addEventListener('click', () => {
    ProjectPage();
    projectButton.style.color = 'crimson';
    console.log('renderuje ProjectPage');
});



const light = document.querySelector('.light');
light.addEventListener('click', () => {
    const link = document.querySelector('link');
    link.href = "css/style.css";
    console.log('light');
});

const dark = document.querySelector('.dark');
dark.addEventListener('click', () => {
    const link = document.querySelector('link');
    link.href = 'css/DarkStyle.css';
    console.log('dark');
});

