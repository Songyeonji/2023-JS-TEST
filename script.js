document.addEventListener("DOMContentLoaded", () => {
    const itemInput = document.getElementById("itemInput");
    const addBtn = document.getElementById("addBtn");
    const itemList = document.getElementById("itemList");

    addBtn.addEventListener("click", addItem);

    function addItem() {
        const itemName = itemInput.value.trim();
        if (itemName === "") return;

        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${itemName}</span>
            <button class="delete-btn">Delete</button>
        `;

        itemList.appendChild(listItem);
        itemInput.value = "";

        const deleteBtn = listItem.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", () => {
            itemList.removeChild(listItem);
        });
    }
});

