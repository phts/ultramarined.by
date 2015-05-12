var isMobile = !!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

if (isMobile) {
  $('head').append("<meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'>");
}

$(function() {
  if (isMobile) {
    $("html").addClass("mobile");
  }

  var $startPage = $("#start-page");
  var $overlay = $("#overlay");
  var $header = $("#header");

  $(window).on('scroll', function() {
    var scroll = $(window).scrollTop();
    var startChange = 2 * $startPage.height() / 3;
    if (scroll > startChange) {
      $overlay.addClass("hidden");
      $header.show();
    } else {
      $overlay.removeClass("hidden");
      $header.hide();
    }
  });
});
