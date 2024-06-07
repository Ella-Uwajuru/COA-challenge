document.addEventListener("DOMContentLoaded", function() {
    const galleryItems = document.querySelectorAll('.gallery-img');

    galleryItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            updateColorEffect(item, 0, 1.5, 0.4, '5px');
        });

        item.addEventListener('mouseout', () => {
            updateColorEffect(item, 0, 1, 1, '0px');
        });
    });

    function updateColorEffect(target, hueRotation, saturationFactor, brightnessFactor, blurAmount) {
        target.style.filter = `
            hue-rotate(${hueRotation}deg)
            saturate(${saturationFactor})
            brightness(${brightnessFactor})
            blur(${blurAmount})
        `;
    }
});
