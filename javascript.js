const projectsContainer = document.querySelector(".projects-container");
const fadeTop = document.querySelector(".fade-top");
const fadeBottom = document.querySelector(".fade-bottom");

window.onload = checkFade;
projectsContainer.addEventListener("scroll", checkFade);
window.addEventListener("resize", checkFade);
window.addEventListener("scroll", checkFade);

function checkFade() {
    if (projectsContainer.scrollTop > 0) {
        fadeTop.style.cssText = `
            display: block;
            position: fixed;
            top: ${projectsContainer.offsetTop}px;
            left: ${projectsContainer.offsetLeft}px;
            width: ${projectsContainer.offsetWidth}px;
            `;
    } else {
        fadeTop.style.display = "none";
    }
    if (projectsContainer.scrollTop < (projectsContainer.scrollHeight - projectsContainer.clientHeight)) {
        fadeBottom.style.cssText = `
            display: block;
            position: fixed;
            top: ${projectsContainer.offsetTop + projectsContainer.offsetHeight - 30}px;
            left: ${projectsContainer.offsetLeft}px;
            width: ${projectsContainer.offsetWidth}px;
            `;
    } else {
        fadeBottom.style.display = "none";
    }
}