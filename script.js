document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

const toggle = document.getElementById("darkModeToggle");
toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

const topBtn = document.getElementById("topBtn");
window.onscroll = function() {
    topBtn.style.display = window.scrollY > 300 ? "block" : "none";
};
topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

const text = "Hi, I’m Anna Rose Bijoy";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}
window.onload = typeWriter;