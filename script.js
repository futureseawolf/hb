document.addEventListener('DOMContentLoaded', function () {
    let clickCount = 0;

    document.querySelectorAll('.photo-grid img').forEach(img => {
        img.addEventListener('click', function () {
            clickCount++;
            if (clickCount >= 5) {
                showPopup();
                clickCount = 0;
            } else {
                shuffleImages();
            }
        });
    });

    function shuffleImages() {
        const images = document.querySelectorAll('.photo-grid img');
        for (let i = images.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [images[i].src, images[j].src] = [images[j].src, images[i].src];
        }
    }

    function showPopup() {
        document.querySelector('.popup-overlay').style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    document.querySelector('.close-popup').addEventListener('click', function () {
        document.querySelector('.popup-overlay').style.display = 'none';
        document.body.style.overflow = ''; // Re-enable scrolling
    });
});
