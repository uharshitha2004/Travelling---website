document.addEventListener("DOMContentLoaded", () => {
    console.log("Travel website loaded successfully!");

    // Smooth scrolling for navigation links
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            if (this.getAttribute("href").startsWith("#")) {
                event.preventDefault();
                const targetId = this.getAttribute("href").substring(1);
                document.getElementById(targetId).scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Placeholder for future interactive features (e.g., image sliders, chatbot, etc.)
});
