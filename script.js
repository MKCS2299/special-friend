window.onload = function () {

    const startBtn = document.getElementById("startBtn");
    const intro = document.getElementById("intro");
    const bgMusic = document.getElementById("bgMusic");
    const clap = document.getElementById("clapSound");

    const sections = ["s1", "s2", "s3", "s4"];
    let current = 0;

    // Remove Netflix intro after 3 seconds
    setTimeout(function () {
        const introOverlay = document.getElementById("netflixIntro");
        if (introOverlay) introOverlay.style.display = "none";
    }, 3000);

    // PLAY BUTTON
    startBtn.onclick = function () {

        intro.style.display = "none";

        if (bgMusic) {
            bgMusic.play().catch(function(){});
        }

        showSection(0);
    };

    // NEXT EPISODE BUTTONS
    const nextButtons = document.getElementsByClassName("nextBtn");

    for (let i = 0; i < nextButtons.length; i++) {
        nextButtons[i].onclick = function () {
            if (clap) clap.play();
            current++;
            if (current < sections.length) {
                showSection(current);
            }
        };
    }

    function showSection(index) {
        for (let i = 0; i < sections.length; i++) {
            const sec = document.getElementById(sections[i]);
            if (sec) sec.style.display = "none";
        }

        const active = document.getElementById(sections[index]);
        if (active) {
            active.style.display = "flex";
            active.scrollIntoView({ behavior: "smooth" });
        }
    }

};
