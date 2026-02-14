document.addEventListener("DOMContentLoaded", function () {

    const introOverlay = document.getElementById("netflixIntro");
    const startBtn = document.getElementById("startBtn");
    const bgMusic = document.getElementById("bgMusic");

    const sections = ["s1", "s2", "s3", "s4"];
    let current = 0;

    // Remove intro overlay fully after animation
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
            current++;
            if (current < sections.length) {
                showSection(current);
            }
        });
    });

    function showSection(index) {
        document.querySelectorAll(".section").forEach(sec => {
            sec.style.display = "none";
        });
        document.getElementById(sections[index]).style.display = "flex";
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

});
