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
const gallerySlider_slide = document.querySelectorAll(".sliderRail__slide");
let numOfSlide;
if (gallerySlider) {
    numOfSlide = parseInt(gallerySlider.dataset.step);
    // set the width styles values for the product slider
    gallerySlider.style.width = `${100 * numOfSlide}%`;
    for (const slide of gallerySlider_slide) {
        slide.style.width = `${100 / numOfSlide}%`;
    }
}
let indexSlide = 0;
// Auto-movement of "home" slider
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
function productsMovementSlider(direction) {
    let step = 100 / numOfSlide;

    if (direction == "L" && indexSlide != 0) {
        indexSlide = indexSlide + step;
        gallerySlider.style.transform = `translateX(${indexSlide}%)`;

    } else if(direction == "R" && indexSlide != -100 + step){
        indexSlide = indexSlide - step;
        gallerySlider.style.transform = `translateX(${indexSlide}%)`;

    }
}
// listeners for the buttons of gallery kayaks.
if (product_leftBtn && product_rightBtn) {
    product_leftBtn.addEventListener("click", () => {
        productsMovementSlider("L");
    });
    product_rightBtn.addEventListener("click", () => {
        productsMovementSlider("R");
    });   
}