$(document).ready(function () {
  // gnb
  /*   $('.gnb>li').on('mouseenter', function() {
      $(this).find('.depth2').stop().slideDown(200);
  }).on('mouseleave', function() {
      $(this).find('.depth2').stop().hide();
  }); */

  // 메인슬라이더
  /*    var mainSliderWrap = $('.main_slider_wrap');

  $(window).resize(function() {
      var winH = $(window).height();
      mainSliderWrap.height(winH);
  }).trigger('resize'); */

  var mainSlider = new Swiper(".main_slider", {
    loop: true,
    effect: "fade",
    speed: 1000,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // var _body = $('body');
  var menuMoreUI = function () {
    var snbWrap = $(".gnb_wrap2");

    $("#header .menu_more").on("click", function () {
      snbWrap.toggleClass("on");
      // _body.addClass('on');
    });
  };
  menuMoreUI();

  var eventSlider = new Swiper(".event_slider", {
    slidesPerView: "auto",
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  $("#footer .btn_info").on("click", function () {
    $("#footer .m_info_txt").slideToggle();
  });
});
