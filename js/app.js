var isMobile = !!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

if (isMobile) {
  $('head').append("<meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'>");
}

$(function() {
  var $body = $("body");
  if (isMobile) {
    $body.addClass("mobile");
  }

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
