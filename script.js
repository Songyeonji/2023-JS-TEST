document.addEventListener("DOMContentLoaded", () => {
    const menuItems = [
        { name: "Pancakes", category: "breakfast", icon: "fas fa-coffee" },
        { name: "Burger", category: "lunch", icon: "fas fa-hamburger" },
        { name: "Pizza", category: "dinner", icon: "fas fa-pizza-slice" },
        // Add more menu items
    ];

    const menuList = document.querySelector(".menu-list");
    const filterButtons = document.querySelectorAll(".filter-btn");

    function displayMenuItems(menu) {
        menuList.innerHTML = "";
        menu.forEach(item => {
            const menuItem = document.createElement("div");
            menuItem.classList.add("menu-item");
            menuItem.textContent = item.name;
            menuList.appendChild(menuItem);
        });
    }

    function filterMenuItems(category) {
        if (category === "all") {
            displayMenuItems(menuItems);
        } else {
            const filteredItems = menuItems.filter(item => item.category === category);
            displayMenuItems(filteredItems);
        }
    }

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.dataset.category;
            filterMenuItems(category);
        });
    });

    displayMenuItems(menuItems);
});
