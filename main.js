var typed = new Typed(".text", {
strings: [
        "BIM Student",
        "Web Developer",
        "Frontend Developer",
        "Programmer"
    ],

    typeSpeed: 100,
    backSpeed: 70,
    backDelay: 1000,
    loop: true

});
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menuIcon.onclick = () => {
navbar.classList.toggle("active");
};
navbar.querySelectorAll("a").forEach(link => {
link.onclick = () => {
 navbar.classList.remove("active");
 };

});
window.onscroll = () => {
 navbar.classList.remove("active");
};
let darkModeIcon = document.querySelector("#darkMode-icon");

darkModeIcon.onclick = () => {

    darkModeIcon.classList.toggle("bx-sun");

    document.body.classList.toggle("light-mode");

};
