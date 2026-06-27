const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const arrowUp = document.getElementById("arrow-up")

menuBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
});

// arrowUp.addEventListener("click", function () {
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth"
//     });
// });

// menuBtn.addEventListener("click", () => {
//     mobileMenu.classList.toggle("hidden");
// });


