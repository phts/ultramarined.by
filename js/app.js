function detectBrowsers($body) {
  if (!!/Opera Mini/i.test(navigator.userAgent)) {
    $body.addClass("opera-mini");
  }
}

$(function() {
  var $body = $("body");
  detectBrowsers($body);

  var $startSlide = $("#start-slide");
  var $infoSlide = $("#info-slide");
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

  $("#arrow-hint").on('click', function() {
    $('html, body').animate({
      scrollTop: $infoSlide.offset().top
    }, 500);
    return false;
  });

});
