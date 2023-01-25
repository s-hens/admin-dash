// Scroll Effect

const projectsContainer = document.querySelector(".projects-container");
const projectsDiv = document.querySelector(".projects");
const fadeTop = document.querySelector(".fade-top");
const fadeBottom = document.querySelector(".fade-bottom");

window.onload = checkFade;
projectsContainer.addEventListener("scroll", checkFade);
window.addEventListener("resize", checkFade);
window.addEventListener("scroll", checkFade);

function checkFade() {
    fadeTop.style.cssText = `
        display: block;
        position: fixed;
        top: ${projectsContainer.offsetTop}px;
        left: ${projectsContainer.offsetLeft}px;
        width: ${projectsContainer.offsetWidth}px;`;
    fadeBottom.style.cssText = `
        display: block;
        position: fixed;
        top: ${projectsContainer.offsetTop + projectsContainer.offsetHeight - 50}px;
        left: ${projectsContainer.offsetLeft}px;
        width: ${projectsContainer.offsetWidth}px;`;

    let topOpacity;
    let bottomOpacity;

    if ((projectsContainer.scrollHeight - projectsContainer.clientHeight) != 0) {
        topOpacity = projectsContainer.scrollTop / (projectsContainer.scrollHeight - projectsContainer.clientHeight);
        bottomOpacity = 1 - topOpacity;
    } else {
        topOpacity = 0;
        bottomOpacity = 0;
    }

    if (projectsContainer.scrollTop == (projectsContainer.scrollHeight - projectsContainer.clientHeight)) {
        projectsDiv.style.margin = "25px 0 0 25px";
    } else {
        projectsDiv.style.margin = "25px 0 25px 25px";
    }

    fadeTop.style.opacity = topOpacity;
    fadeBottom.style.opacity = bottomOpacity;

    fadeTop.style["z-index"] = topOpacity - 1;
    fadeBottom.style["z-index"] = bottomOpacity - 1;
}

// Heart icons

let hearts = document.querySelectorAll(".fav");

hearts.forEach(heart => heart.addEventListener("click", toggleFav));

function toggleFav() {
    this.classList.toggle("faved");
}