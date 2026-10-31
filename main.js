const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");
const darkModeIcon = document.getElementById("darkMode-icon");

// 1. Page load huda purai saved theme check garne ra apply garne
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    darkModeIcon.classList.remove("bx-moon");
    darkModeIcon.classList.add("bx-sun");
} else {    
    document.body.classList.remove("light-mode");
    darkModeIcon.classList.remove("bx-sun");
    darkModeIcon.classList.add("bx-moon");
}

// 2. Mobile Menu Toggle
menuIcon.addEventListener("click", function () {
    navbar.classList.toggle("active");
});

// 3. Navbar link click garda menu close hune
navbar.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navbar.classList.remove("active");
    });
});

// 4. Dark/Light Mode Toggle with localStorage persistence
darkModeIcon.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        darkModeIcon.classList.remove("bx-moon");
        darkModeIcon.classList.add("bx-sun");
        localStorage.setItem("theme", "light"); // Theme save garne
    } else {
        darkModeIcon.classList.remove("bx-sun");
        darkModeIcon.classList.add("bx-moon");
        localStorage.setItem("theme", "dark"); // Theme save garne
    }
});

// 5. Navbar baata bahira click garda close hune
document.addEventListener("click", function (event) {
    if (
        !navbar.contains(event.target) &&
        !menuIcon.contains(event.target)
    ) {
        navbar.classList.remove("active");
    }
});

// 6. Scroll garda menu close hune
window.addEventListener("scroll", function () {
    navbar.classList.remove("active");
});
