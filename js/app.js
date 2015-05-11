$(function() {
  var startPage = $("#start-page");

  $(window).on('scroll', function() {
    var scroll = $(window).scrollTop();
    var startChange = startPage.height()/3
    var stopChange = 2*startChange;
    if (scroll > startChange) {
      var value = (scroll - startChange) / (stopChange - startChange);
      value = value>1 ? 0 : 1-value;
      $('#overlay').css('opacity', value);
    } else {
      $('#overlay').css('opacity', 1);
    }
    if (scroll > stopChange) {
      $('#header').show();
    } else {
      $('#header').hide();;
    }
  });
});

