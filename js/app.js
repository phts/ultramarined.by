var isMobile = !!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

if (isMobile) {
  $('head').append("<meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'>");
}

$(function() {
  var $body = $("body");
  if (isMobile) {
    $body.addClass("mobile");
  }

  var $startPage = $("#start-page");
  var $overlay = $("#overlay");

  function watchOverlay() {
    var scroll = $(window).scrollTop();
    var removeOverlayAt = 2 * $startPage.height() / 3;
    if (scroll > removeOverlayAt) {
      $body.removeClass("with-overlay");
    } else {
      $body.addClass("with-overlay");
    }
  }

  watchOverlay();
  $(window).on('scroll', watchOverlay);
});
