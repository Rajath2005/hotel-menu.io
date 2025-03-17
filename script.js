document.addEventListener("DOMContentLoaded", function () {
    const categoryCards = document.querySelectorAll(".category-card");
    const homepage = document.getElementById("homepage");
    const categoryPage = document.getElementById("category-page");
    const categoryTitle = document.getElementById("category-title");
    const itemsList = document.querySelector(".items-list");
    const backButton = document.getElementById("back-button");

    // Function to show category page
    function showCategoryPage(category) {
        categoryTitle.textContent = category.replace("_", " "); // Format category name
        itemsList.innerHTML = ""; // Clear previous items

        // Load menu items
        if (menuData[category]) {
            menuData[category].forEach(item => {
                const itemDiv = document.createElement("div");
                itemDiv.classList.add("item-card");
                itemDiv.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <h4>${item.name}</h4>
                    <p>${item.price}</p>
                `;
                itemsList.appendChild(itemDiv);
            });
        }

        homepage.classList.remove("active");
        categoryPage.classList.add("active");
    }

    // Add event listener to each category card
    categoryCards.forEach(card => {
        card.addEventListener("click", function () {
            const category = this.getAttribute("data-category");
            if (category) {
                showCategoryPage(category);
            }
        });
    });

    // Back button functionality
    backButton.addEventListener("click", function () {
        categoryPage.classList.remove("active");
        homepage.classList.add("active");
    });
});
