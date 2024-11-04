// Primer swiper con el efecto coverflow
const swiper = new Swiper(".swiper-slider", {
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 50,         // Ángulo de rotación de las imágenes
        stretch: 0,         // Estiramiento entre las imágenes
        depth: 100,         // Profundidad de las imágenes en 3D
        modifier: 1,        // Modificador de la intensidad del efecto
        slideShadows: true, // Sombras en los slides
    },
    centeredSlides: true,
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    autoplay: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",  // Botón compartido
      prevEl: ".swiper-button-prev"   // Botón compartido
    },
    breakpoints: {
      640: {
        slidesPerView: 1.25,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    }
});

