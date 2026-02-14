document.addEventListener("DOMContentLoaded", function () {

    const introOverlay = document.getElementById("netflixIntro");
    const startBtn = document.getElementById("startBtn");
    const bgMusic = document.getElementById("bgMusic");
    const clap = document.getElementById("clapSound");

    const sections = ["s1", "s2", "s3", "s4"];
    let current = 0;

    // Remove intro overlay after animation
    setTimeout(() => {
        introOverlay.style.display = "none";
    }, 3000);

    startBtn.addEventListener("click", function () {
        document.getElementById("intro").style.display = "none";

        if (bgMusic) {
            bgMusic.play().catch(() => {});
        }

        showSection(current);
    });

    document.querySelectorAll(".nextBtn").forEach(btn => {
        btn.addEventListener("click", function () {
            if (clap) clap.play();
            current++;
            if (current < sections.length) {
                showSection(current);
            }
        });
    });

    function showSection(index) {
        document.querySelectorAll("#s1, #s2, #s3, #s4").forEach(sec => {
            sec.style.display = "none";
        });

        const section = document.getElementById(sections[index]);
        section.style.display = "flex";
        section.scrollIntoView({ behavior: "smooth" });
    }

});
