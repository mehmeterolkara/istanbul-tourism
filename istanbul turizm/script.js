// ================================
// NAVBAR SCROLL EFFECT
// ================================

const navbar = document.getElementById("mainNavbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 80) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


// ================================
// BACK TO TOP BUTTON
// ================================

const topButton = document.getElementById("topButton");

window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }

});

topButton.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ================================
// SURPRISE ME BUTTON
// ================================

const surpriseButton = document.getElementById("surpriseBtn");
const toast = document.getElementById("toast");

const suggestions = [

    "🌅 Take a sunset ferry ride on the Bosphorus.",

    "☕ Walk from Galata to Karaköy and try a Turkish coffee.",

    "🏛️ Explore Sultanahmet early in the morning.",

    "🥐 Start your day with a traditional Turkish breakfast.",

    "🌉 Watch Istanbul's skyline from the Asian side.",

    "✨ Get lost in the colorful streets around Balat."

];


surpriseButton.addEventListener("click", function () {

    const randomIndex =
        Math.floor(Math.random() * suggestions.length);

    toast.textContent = suggestions[randomIndex];

    toast.classList.add("show");

    setTimeout(function () {

        toast.classList.remove("show");

    }, 3500);

});


// ================================
// NAVBAR MOBILE AUTO CLOSE
// ================================

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        const navbarMenu =
            document.getElementById("navbarNav");

        if (navbarMenu.classList.contains("show")) {

            const collapse =
                bootstrap.Collapse.getInstance(navbarMenu);

            if (collapse) {
                collapse.hide();
            }

        }

    });

});