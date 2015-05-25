$(function() {
  var $body = $("body");
  var $startSlide = $("#start-slide");
  var $contactsSlide = $("#contacts-slide");

  var watchScroll = function() {
    var scroll = $(window).scrollTop();
    var startSlideHideAt = $startSlide.height();
    if (scroll > $contactsSlide.position().top-($contactsSlide.height()/4)) {
      $body.addClass("header-shown footer-shown");
    } else {
      $body.removeClass("header-shown footer-shown");
    }
  }
  watchScroll();
  $(window).on('scroll', watchScroll);

});
