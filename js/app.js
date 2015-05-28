$(function() {
  var $body = $("body");
  var $startSlide = $("#start-slide");
  var $contactsSlide = $("#contacts-slide");

  var watchScroll = function() {
    var scroll = $(window).scrollTop();
    var startSlideHideAt = $startSlide.height();
    if (scroll > $contactsSlide.position().top-($contactsSlide.height()/7)) {
      $body.addClass("contacts-slide-shown");
    } else {
      $body.removeClass("contacts-slide-shown");
    }
  }
  watchScroll();
  $(window).on('scroll', watchScroll);

});
