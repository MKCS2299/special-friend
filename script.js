document.addEventListener("DOMContentLoaded", function () {

    const startBtn = document.getElementById("startBtn");
    const intro = document.getElementById("intro");
    const audio = document.getElementById("bgMusic");

    startBtn.addEventListener("click", function () {

        if (audio) audio.play().catch(() => {});

        intro.style.display = "none";

        document.getElementById("s1").style.display = "flex";
        setTimeout(() => {
            document.getElementById("s2").style.display = "flex";
        }, 4000);
        setTimeout(() => {
            document.getElementById("s3").style.display = "flex";
        }, 8000);
        setTimeout(() => {
            document.getElementById("s4").style.display = "flex";
        }, 12000);
    });
});
