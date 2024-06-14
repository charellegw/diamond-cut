//      carousel

const carousel = document.querySelector('.carousel');
const carouselContainer = carousel.querySelector('.carousel-container');
const prevButton = carousel.querySelector('.prev');
const nextButton = carousel.querySelector('.next');
const cards = carouselContainer.children;
const cardWidth = cards[0].offsetWidth;
let currentIndex = 0;

const radio1 = document.querySelector('#radio-1');
const radio2 = document.querySelector('#radio-2');

radio1.addEventListener('click', () => {
  currentIndex = 0;
  carouselContainer.scrollLeft = currentIndex * cardWidth;
});

radio2.addEventListener('click', () => {
  currentIndex = 1;
  carouselContainer.scrollLeft = currentIndex * cardWidth + carouselContainer.offsetWidth;
});

prevButton.addEventListener('click', () => {
  currentIndex -= 1;
  if (currentIndex < 0) {
    currentIndex = 0;
  }
  carouselContainer.scrollLeft = currentIndex * cardWidth;
  document.querySelector('#radio-1').checked = true;
});

nextButton.addEventListener('click', () => {
  currentIndex += 1;
  if (currentIndex >= cards.length) {
    currentIndex = cards.length - 1;
  }
  carouselContainer.scrollLeft = currentIndex * cardWidth + carouselContainer.offsetWidth;
  document.querySelector('#radio-2').checked = true;
});

//      gallery
document.querySelectorAll('.gallery-container img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.gallery-popup').style.display = 'block';
        document.querySelector('.gallery-popup img').src = image.getAttribute('src');
    }
});

document.querySelector('.gallery-popup span').onclick = () => {
    document.querySelector('.gallery-popup').style.display = 'none';

}