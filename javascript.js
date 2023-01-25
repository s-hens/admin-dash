// Heart icons

let hearts = document.querySelectorAll(".fav");

hearts.forEach(heart => heart.addEventListener("click", toggleFav));

function toggleFav() {
    this.classList.toggle("faved");
}