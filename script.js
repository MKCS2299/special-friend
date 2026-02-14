document.addEventListener("DOMContentLoaded", function () {

    const startBtn = document.getElementById("startBtn");
    const intro = document.getElementById("intro");
    const audio = document.getElementById("bgMusic");

    startBtn.addEventListener("click", function () {

        audio.play().catch(() => {});

        intro.style.display = "none";

        showSection("s1", 500);
        showSection("s2", 5000);
        showSection("s3", 9000);
        showSection("s4", 13000);
    });

});

function showSection(id, delay) {
    setTimeout(() => {
        document.getElementById(id).style.display = "flex";
    }, delay);
}

function secretMessage() {
    alert("You always looked cutest when you laughed at the same jokes twice.");
}
