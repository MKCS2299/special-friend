document.addEventListener("DOMContentLoaded", function () {

    const startBtn = document.getElementById("startBtn");
    const bgMusic = document.getElementById("bgMusic");
    const clap = document.getElementById("clapSound");

    const sections = ["s1", "s2", "s3", "s4"];
    let current = 0;

    startBtn.addEventListener("click", function () {
        bgMusic.play().catch(() => {});
        document.getElementById("intro").style.display = "none";
        showSection(current);
    });

    document.querySelectorAll(".nextBtn").forEach(btn => {
        btn.addEventListener("click", function () {
            clap.play();
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
