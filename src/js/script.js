const btnDropdownNav = document.getElementById("btnDropdownNav");
const navOptions = document.getElementById("navOptions");
/*  calc(100vh - 40px)  */
if (window.innerWidth < 600) {
    navOptions.style.height = "0px";
    navOptions.style.opacity = "0";    
}
window.addEventListener("resize", ()=>{
    if (window.innerWidth < 600) {
        navOptions.style.height = "0px";
        navOptions.style.opacity = "0";
    } else {
        navOptions.style.height = "auto";
        navOptions.style.opacity = "1";
    }
});
btnDropdownNav.addEventListener("click", ()=>{
    if (navOptions.style.height == "0px") {
        navOptions.style.height = "calc(100vh - 40px)";
        navOptions.style.opacity = "1"; 
    } else {
        navOptions.style.height = "0px";
        navOptions.style.opacity = "0"; 
    }
});
