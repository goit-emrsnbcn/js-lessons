let nav = document.getElementById("nav");

window.onscroll = () => {
    if (window.scrollY >= 100) {
    } else {
        nav.style.background = "blue";
    }
};
