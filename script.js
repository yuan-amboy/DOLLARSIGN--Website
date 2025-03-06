document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menuSection = document.querySelector(".menu-section");
    const menuIcon = menuToggle.querySelector("img"); // Get the menu button image

    // Store icon paths
    const openIcon = "images/menu-icon.png"; // Replace with actual path
    const closeIcon = "images/close-icon.png"; // Replace with actual path

    menuToggle.addEventListener("click", function () {
        menuSection.classList.toggle("active");

        // Toggle between menu and close icon
        if (menuSection.classList.contains("active")) {
            menuIcon.src = closeIcon;
        } else {
            menuIcon.src = openIcon;
        }
    });

    // Clothing item hover effect to switch images
    const clothingItems = document.querySelectorAll(".clothing-item");

    clothingItems.forEach(item => {
        const frontImage = item.querySelector("img.front");
        const backImage = item.querySelector("img.back");

        item.addEventListener("mouseenter", () => {
            frontImage.style.opacity = "0";
            backImage.style.opacity = "1";
        });

        item.addEventListener("mouseleave", () => {
            frontImage.style.opacity = "1";
            backImage.style.opacity = "0"; 
        });
    });
});
