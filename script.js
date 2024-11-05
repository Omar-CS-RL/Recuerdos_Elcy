document.addEventListener("DOMContentLoaded", function () {
    const entries = document.querySelectorAll(".entry");
    entries.forEach((entry, index) => {
        setTimeout(() => {
            entry.style.opacity = 1;
            entry.style.transform = "translateY(0)";
        }, index * 300); // 300 ms
    });
});
