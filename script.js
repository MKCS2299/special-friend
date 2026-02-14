document.addEventListener("DOMContentLoaded", function () {

    const startBtn = document.getElementById("startBtn");
    const intro = document.getElementById("intro");
    const audio = document.getElementById("bgMusic");

    const sections = ["s1", "s2", "s3", "s4"];

    startBtn.addEventListener("click", function () {

        // Play audio safely
        if (audio) {
            audio.play().catch(() => {});
        }

        // Hide intro
        intro.classList.add("hidden");

        let delay = 500;

        sections.forEach((id) => {
            setTimeout(() => {
                const section = document.getElementById(id);
                section.classList.remove("hidden");
                section.classList.add("visible");
            }, delay);
            delay += 5000;
        });

    });

});
