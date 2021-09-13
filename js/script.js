$(document).ready(function(){ //시작
  
  // 해더 스크롤 시
  var offsetH = $("header").offset();
  $(window).scroll(function(){

    if($(document).scrollTop() > offsetH.top){
      $("header").addClass("fixed");
    }else{
      $("header").removeClass("fixed");
    }
  });

    // 슬라이드
      var swiper = new Swiper(".mySwiper", {
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        cssMode: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
        },
        mousewheel: true,
        keyboard: true,
        
        
        
      });

      // 무비차트
      var swiper = new Swiper(".mySwiper2", {
        slidesPerView: 4,
        spaceBetween: 20,
        freeMode: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      // 예고편
      var swiper = new Swiper(".mySwiper3", {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        // pagination: {
        //   el: ".swiper-pagination3",
        //   clickable: true,
        // },
        breakpoints: {
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          "@1.50": {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },
      });
      


}); //끝