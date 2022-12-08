import CVPage from "./components/HomePage/CVPage.js";
import HomePage from "./components/HomePage/HomePage.js";
import SkillsPage from "./components/HomePage/SkillsPage.js";
import JavascriptPage from "./components/ProjectPage/JavascriptPage.js";
import ProjectPage from "./components/ProjectPage/ProjectPage.js";

const content = document.querySelector('.content');

// HomePage();
// SkillsPage();
JavascriptPage();

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
})

// const cv = document.getElementById('cv');
// cv.addEventListener('click', () => {
//     CVPage();
// })

// const skillsButton = document.getElementById('skills');
// skillsButton.addEventListener('click', () => {
//     SkillsPage();
// })
