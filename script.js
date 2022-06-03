
// var swiper = new Swiper(".mySwiper", {
// slidesPerView: 1.5,
// spaceBetween: 20,
// slidesPerGroup: 1,
// loopFillGroupWithBlank: true,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   breakpoints: {
//     768: { 
//       slidesPerView: 3,
//       slidesPerGroup: 2
//     },

//     1024: { 
//       slidesPerView: 5,
//       slidesPerGroup: 4
//     }

//   }
// });
const swiper = new Swiper('.mySwiper', {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
})


const body = document.querySelector('.js-body');
const nav = document.querySelector('.js-nav');
const burger = document.querySelector('.js-burger');

burger.addEventListener('click', ()=>{  
  burger.classList.toggle('burger--active');
  nav.classList.toggle('header__nav--active');
  body.classList.toggle('body--lock');
});


$('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow');
    $(body).toggleClass('body--lock');
});
$('.modal__close').on('click', function() {
    $('.overlay, #consultation').fadeOut('slow');
    $(body).removeClass('body--lock');
});

// $('.form__button').each(function(i) {
//     $(this).on('click', function() {
//         $('#order .modal__subtitle').text($('.catalog-item__subtitle').eq(i).text());
//         $('.overlay, #order').fadeIn('slow');
//     })
// });