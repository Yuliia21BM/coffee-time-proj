const swiper = new Swiper('.swiper-catalog', {
  // Optional parameters
  direction: 'horizontal',
  spaceBetween: 100,
  loop: true,
  speed: 2500,
  autoplay: {
   delay: 10000,
 },

  pagination: {
      el: '.swiper-pagination-catalog',
      clickable: true,
  },
});