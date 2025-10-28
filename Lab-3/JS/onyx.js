$(document).ready(function () {
  $(window).resize(partsOrder);
  $("main .parts:even").css("grid-template-columns", "2fr 1fr");
  $("main .parts:even .parts-text").css("order", "-1");

  $("#icon").click(function () {
    $("#myLinks").slideToggle();
  });

  $("#topBtn").click(function (e) {
    $(window).scrollTop(0, "slow");
  });

  $(window).scroll(function () {
    var scrollDistance = $(window).scrollTop();

    if (scrollDistance > 20) {
      $("#topBtn").fadeIn();
    } else {
      $("#topBtn").fadeOut();
    }
  });
});

function partsOrder() {
  if ($("body").width() > 1070) {
    $("main .parts:even").css("grid-template-columns", "2fr 1fr");
    $("main .parts:even .parts-text").css("order", "-1");
  } else {
    $("main .parts:even").css("grid-template-columns", "1fr 2fr");
    $("main .parts:even .parts-text").css("order", "2");
  }
}
