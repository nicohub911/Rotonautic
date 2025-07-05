//nav
const btnDropdownNav = document.getElementById("btnDropdownNav");
const navOptions = document.getElementById("navOptions");
//home (index) slider
const homeSlider = document.getElementById("homeSlider");
let homeActualSlide = 0;
//products sliders
const gallerySlider = document.getElementById("gallerySlider");
const product_leftBtn = document.getElementById("product_leftBtn");
const product_rightBtn = document.getElementById("product_rightBtn");
let actualSlide = 0;
//
if (homeSlider) {
    setInterval(() => {
        switch (homeActualSlide) {
            case 0:
                homeSlider.style.transition = "0.3s";
                homeActualSlide = homeActualSlide + 1;
                break;
            case 1:
                homeSlider.style.transform = "translateX(-20%)";
                homeActualSlide = homeActualSlide + 1;
                break;
            case 2:
                homeSlider.style.transform = "translateX(-40%)";
                homeActualSlide = homeActualSlide + 1;
                break;
            case 3:
                homeSlider.style.transform = "translateX(-60%)";
                
                homeActualSlide = homeActualSlide + 1;
                break;
            case 4:
                homeSlider.style.transform = "translateX(-80%)";
                homeActualSlide = 0;

                let resetSlider = setTimeout(() => {
                    homeSlider.style.transition  = "none";
                    homeSlider.style.transform = "translateX(0%)";
                }, 300);
                break;
            default:
                console.error("Error with the home slider index");
                break;
        }
    }, 4000);
}
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
function productsMovementSlider(nSlides, direction) {
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
if (product_leftBtn && product_rightBtn) {
    product_leftBtn.addEventListener("click", () => {
        productsMovementSlider(parseInt(product_leftBtn.dataset.kayak), "L");
    });
    product_rightBtn.addEventListener("click", () => {
        productsMovementSlider(parseInt(product_rightBtn.dataset.kayak), "R");
    });   
}