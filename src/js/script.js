//nav
const btnDropdownNav = document.getElementById("btnDropdownNav");
const navOptions = document.getElementById("navOptions");
//products sliders
const gallerySlider = document.getElementById("gallerySlider");
const product_leftBtn = document.getElementById("product_leftBtn");
const product_rightBtn = document.getElementById("product_rightBtn");
let actualSlide = 0;
// depend of the situation modified the type of nav
if (window.innerWidth < 600) {
    navOptions.style.height = "0px";
    navOptions.style.opacity = "0";
}
window.addEventListener("resize", () => {
    if (window.innerWidth < 600) {
        navOptions.style.height = "0px";
        navOptions.style.opacity = "0";
    } else {
        navOptions.style.height = "auto";
        navOptions.style.opacity = "1";
    }
});
btnDropdownNav.addEventListener("click", () => {
    if (navOptions.style.height == "0px") {
        navOptions.style.height = "calc(100vh - 40px)";
        navOptions.style.opacity = "1";
    } else {
        navOptions.style.height = "0px";
        navOptions.style.opacity = "0";
    }
});
// function of the gallery kayaks slider (manage the slider movement)
function movementSlider(nSlides, direction) {
    let slideStep = 100 / nSlides;

    if (direction === "L" && actualSlide !== 0) {
        actualSlide = actualSlide + slideStep;
        gallerySlider.style.transform = `translateX(${actualSlide}%)`;
    } else if (direction === "R" && actualSlide !== (-100 + slideStep)) {
        actualSlide = actualSlide - slideStep;
        gallerySlider.style.transform = `translateX(${actualSlide}%)`;
    }
}
// listeners for the buttons of gallery kayaks.
product_leftBtn.addEventListener("click", () => {
    movementSlider(parseInt(product_leftBtn.dataset.kayak), "L");
});
product_rightBtn.addEventListener("click", () => {
    movementSlider(parseInt(product_rightBtn.dataset.kayak), "R");
});