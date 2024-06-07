document.addEventListener("DOMContentLoaded", function() {
    const galleryItems = document.querySelectorAll('.gallery-img');

    galleryItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            // Apply color and blur adjustments on mouseover
            updateColorEffect(item, 0, 1, 0.8, '5px');
        });

        item.addEventListener('mouseout', () => {
            // Reset color and blur adjustments on mouseout
            updateColorEffect(item, 0, 1, 1, '0px');
        });
    });

    // Function to update the color and blur effect
    function updateColorEffect(target, hueRotation, saturationFactor, brightnessFactor, blurAmount) {
        target.style.filter = `
            hue-rotate(${hueRotation}deg)
            saturate(${saturationFactor})
            brightness(${brightnessFactor})
            blur(${blurAmount})
        `;
    }
});
