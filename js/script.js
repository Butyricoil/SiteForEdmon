// Инициализация Swiper с параметрами
const swiper = new Swiper('.swiper-container', {
  loop: true, // Зацикливаем слайдер
  autoplay: {
    delay: 5000, // Интервал между слайдами (5 секунд)
  },
  navigation: {
    nextEl: '.swiper-button-next', // Кнопка для перехода к следующему слайду
    prevEl: '.swiper-button-prev', // Кнопка для перехода к предыдущему слайду
  },
  pagination: {
    el: '.swiper-pagination', // Пагинация
    clickable: true, // Возможность кликать по пагинации
  },
  effect: 'fade', // Плавный эффект перехода между слайдами
});

$(document).ready(function () {
  if (window.innerWidth > 768) {
    $('.parallax-window').parallax();
  }
});
const carouselElement = document.querySelector('#tmGallery');
const carousel = new bootstrap.Carousel(carouselElement);

let startX = 0;
carouselElement.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

carouselElement.addEventListener('touchmove', (e) => {
  if (!startX) return;

  const endX = e.touches[0].clientX;
  const diffX = startX - endX;

  if (Math.abs(diffX) > 50) {
    if (diffX > 0) {
      carousel.next();
    } else {
      carousel.prev();
    }
    startX = 0; // сбросить начальную точку
  }
});
