const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.carousel-prev-btn');
const nextBtn = document.querySelector('.carousel-next-btn');
let currentIndex = 0;

function showSlide(index) {
    carouselItems.forEach((item, i) => {
        item.classList.remove('active');
        item.style.transform = `translateX(${(i - index) * 100}%)`;
    });
    carouselItems[index].classList.add('active');
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    showSlide(currentIndex);
}

function initCarousel() {
    showSlide(currentIndex);

    // Event listeners for previous and next buttons
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
}

initCarousel();
function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let time = hours + ":" + minutes + ":" + seconds;

    document.getElementById("clock").textContent = time;

    setTimeout(updateClock, 1000); // Update every 1 second
}

updateClock(); // Start the clock

