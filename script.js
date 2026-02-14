function startExperience() {

    const audio = document.getElementById("bgMusic");
    audio.play().catch(() => {});

    const intro = document.getElementById("intro");
    intro.classList.add("hidden");

    const sections = ["s1", "s2", "s3", "s4"];

    let delay = 500;

    sections.forEach((id) => {
        setTimeout(() => {
            const section = document.getElementById(id);
            section.classList.remove("hidden");
            section.classList.add("visible");
        }, delay);
        delay += 5000;
    });
}
