const lightbox = document.querySelector(".lightbox");
const closeBtn = document.getElementById("close-btn");
const lightboxImg = document.getElementById("lightbox-image");
const thumbnails = document.querySelectorAll(".gallery-item");

// For each thumbnail, add the click event
thumbnails.forEach((item) => {
    item.addEventListener("click", () => {
        // 1. Show the lightbox
        lightbox.style.display = "flex";
        
        // 2. Change thumb URL to full-size URL
        const fullSizeSrc = item.src.replace("-thumbnail", "");
        lightboxImg.src = fullSizeSrc;
    });
});

closeBtn.addEventListener("click", () => lightbox.style.display = "none")

lightbox.addEventListener("click", () => lightbox.style.display = "none")