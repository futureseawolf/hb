document.addEventListener('DOMContentLoaded', function () {
    const photoGrid = document.querySelector('.photo-grid');
    const images = Array.from(photoGrid.querySelectorAll('img'));

    images.forEach(img => {
        img.addEventListener('click', function () {
            shuffleImages(images);
        });
    });

    function shuffleImages(images) {
        for (let i = images.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [images[i], images[j]] = [images[j], images[i]];
        }
        images.forEach((img, index) => {
            setTimeout(() => {
                photoGrid.appendChild(img);
            }, index * 100);
        });
    }
});
