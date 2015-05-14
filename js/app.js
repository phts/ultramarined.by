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
  var $overlay = $("#overlay");

  if (!isMobile) {
    var watchOverlay = function() {
      var scroll = $(window).scrollTop();
      var removeOverlayAt = 2 * $startSlide.height() / 3;
      if (scroll > removeOverlayAt) {
        $body.removeClass("with-overlay");
      } else {
        $body.addClass("with-overlay");
      }
    }
    watchOverlay();
    $(window).on('scroll', watchOverlay);
  } else {
    $body.removeClass("with-overlay");
  }

  $startSlide.on('click', function() {
    var red = Math.floor((Math.random() * 50) + 67);
    var green = Math.floor((Math.random() * 50) + 27);
    var blue = Math.floor((Math.random() * 50) + 186);
    if (!isMobile) {
      $overlay.css("background-color", "rgb("+red+", "+green+", "+blue+")");
    } else {
      $startSlide.css("background-color", "rgb("+red+", "+green+", "+blue+")");
    }
  });

});
