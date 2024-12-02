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
