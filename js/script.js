const closeButton = document.querySelector(".close-nav");
const openButton = document.querySelector(".bars");
const nav = document.querySelector(".nav");
const list = document.querySelectorAll(".list");

for (let i = 0; i < list.length; i++) {
    list[i].addEventListener("click", () => {
        nav.classList.remove("navigation-open");
    })
}

// close navigation button onclick
closeButton.addEventListener("click", () => {
    nav.classList.remove('navigation-open');
});

// open navigation button onclick
openButton.addEventListener("click", () => {
    nav.classList.add("navigation-open");
});