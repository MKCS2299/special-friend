const startBtn = document.getElementById("startBtn");
const sections = document.querySelectorAll(".section");
const bgMusic = document.getElementById("bgMusic");

startBtn.addEventListener("click", () => {

    // Play her recording
    bgMusic.play();

    // Hide intro button
    document.querySelector(".intro").classList.add("hidden");

    let delay = 0;

    sections.forEach((section, index) => {
        if (!section.classList.contains("intro")) {
            setTimeout(() => {
                section.classList.remove("hidden");
                section.classList.add("visible");
            }, delay);
            delay += 4000;
        }
    });
});
