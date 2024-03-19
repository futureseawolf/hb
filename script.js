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
            [images[i].src, images[j].src] = [images[j].src, images[i].src]; // ES6 destructuring assignment
        }
    }

    function showPopup() {
        const popupHTML = `
            <div class="popup-overlay" onclick="event.stopPropagation();">
                <div class="popup-content">
                    <span class="close-popup" onclick="event.stopPropagation(); document.querySelector('.popup-overlay').remove();">&times;</span>
                    <p>To all our readers in the U.S.,</p>
                    <p>Please don’t scroll past this. Today, for the 1st time recently, we interrupt your reading to humbly ask you to support Sparky’s independence. Only 2% of our readers give. Many think they’ll give later, but then forget. If you donate just $2, or whatever you can, Baby Spirit could keep thriving for years. We don't run ads, and we never have. We rely on our fans for support. We serve millions of people, but we run on a fraction of what other top sites spend. Baby Spirit is special. It is like a library or a public park where we can all go to learn. We ask you, humbly: please don’t scroll away. If Baby Spirit has given you $2 worth of knowledge this year, take a minute to donate. Show the world that access to Baby Spirit matters to you. Thank you.</p>
                    <div>
                        <a href="https://engage.alaska.edu/uaa/give-now" class="popup-button">$2</a>
                        <a href="https://engage.alaska.edu/uaa/give-now" class="popup-button">$50</a>
                        <a href="https://engage.alaska.edu/uaa/give-now" class="popup-button">$my 401(b) funds</a>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', popupHTML);
        document.querySelector('.popup-overlay').style.visibility = 'visible';

        // Prevent the popup from closing when clicking on its content
        document.querySelector('.popup-content').addEventListener('click', function (e) {
            e.stopPropagation();
        });

        // Close popup when clicking outside the content
        document.querySelector('.popup-overlay').addEventListener('click', function () {
            this.remove(); // Removes the popup from the document
        });
    }
});
