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
        const popupHTML = `
            <div class="popup-overlay">
                <div class="popup-content">
                    <span class="close-popup">&times;</span>
                    <p>To all our readers in the U.S.,</p>
                    <p>Please don’t scroll past this...</p>
                    <div>
                        <a href="https://engage.alaska.edu/uaa/give-now" class="popup-button">$2</a>
                        <a href="https://engage.alaska.edu/uaa/give-now" class="popup-button">$50</a>
                        <a href="https://engage.alaska.edu/uaa/give-now" class="popup-button">$my 401(b) funds</a>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', popupHTML);
        document.body.style.overflow = 'hidden'; // Prevent background scrolling

        // Close the popup and re-enable scrolling
        document.querySelector('.close-popup').addEventListener('click', function () {
            document.querySelector('.popup-overlay').remove();
            document.body.style.overflow = '';
        });

        // Prevent the popup from closing when clicking inside it
        document.querySelector('.popup-content').addEventListener('click', function (e) {
            e.stopPropagation();
        });

        // Optionally, close the popup when clicking outside of it
        document.querySelector('.popup-overlay').addEventListener('click', function () {
            this.remove();
            document.body.style.overflow = '';
        });
    }
});
