const projectFilters = document.querySelectorAll(".project-filter");
const projectCards = document.querySelectorAll(
    ".projects-page-grid .project-card"
);

projectFilters.forEach(button => {
    button.addEventListener("click", () => {
        const selectedCategory = button.dataset.filter;

        projectFilters.forEach(filter => {
            const isActive = filter === button;

            filter.classList.toggle("is-active", isActive);
            filter.setAttribute("aria-pressed", String(isActive));
        });

        projectCards.forEach(card => {
            const matchesCategory =
                selectedCategory === "all" ||
                card.dataset.category === selectedCategory;

            card.hidden = !matchesCategory;
        });
    });
});