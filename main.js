const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");
const darkModeIcon = document.getElementById("darkMode-icon");

menuIcon.addEventListener("click", function () {
    navbar.classList.toggle("active");
});

navbar.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navbar.classList.remove("active");
    });
});

darkModeIcon.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        darkModeIcon.classList.remove("bx-moon");
        darkModeIcon.classList.add("bx-sun");
    } else {
        darkModeIcon.classList.remove("bx-sun");
        darkModeIcon.classList.add("bx-moon");
    }
});

document.addEventListener("click", function (event) {
    if (
        !navbar.contains(event.target) &&
        !menuIcon.contains(event.target)
    ) {
        navbar.classList.remove("active");
    }
});

window.addEventListener("scroll", function () {
    navbar.classList.remove("active");
});
