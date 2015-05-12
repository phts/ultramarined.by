$(function() {
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

