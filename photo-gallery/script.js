document.addEventListener('DOMContentLoaded', () => {
    // Select all the gallery images
    const galleryImages = document.querySelectorAll('.gallery-image');

    // Loop through each gallery image
    galleryImages.forEach(image => {
        // Create a new overlay div
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        image.appendChild(overlay);

        // Apply the filter when the user hovers over the image
        image.addEventListener('mouseenter', () => {
            // Set the same background image as the gallery image
            overlay.style.backgroundImage = image.style.backgroundImage;
            // Apply the desired filter styles
            overlay.style.filter = 'grayscale(0%) blur(0px) hue-rotate(0deg) saturate(100%) brightness(100%) contrast(100%)';
            overlay.style.transform = 'scale(1.05)';
        });

        // Remove the filter when the user stops hovering over the image
        image.addEventListener('mouseleave', () => {
            overlay.style.filter = 'none';
            overlay.style.transform = 'scale(1)';
        });

        // Select the "know more" link within the image
        const knowMoreLink = image.querySelector('.know-more');

        // Apply the filter when the user hovers over the "know more" link
        knowMoreLink.addEventListener('mouseenter', () => {
            overlay.style.filter = 'grayscale(0%) blur(0px) hue-rotate(0deg) saturate(100%) brightness(100%) contrast(100%)';
            overlay.style.transform = 'scale(1.05)';
        });

        // Remove the filter when the user stops hovering over the "know more" link
        knowMoreLink.addEventListener('mouseleave', () => {
            overlay.style.filter = 'none';
            overlay.style.transform = 'scale(1)';
        });
    });
});