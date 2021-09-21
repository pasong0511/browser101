const btn = document.querySelector(".game-btn");
const carota = document.querySelector(".game-img_carota");
const rabbit = document.querySelector(".game-img_rabbit");

btn.addEventListener("click", () => {
    rabbit.scrollIntoView();
}); 
