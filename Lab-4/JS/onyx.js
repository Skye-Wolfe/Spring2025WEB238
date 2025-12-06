$(document).ready(function () {
  let currentImage = "";
  $(window).resize(partsOrder);
  $("main .parts:even").css("grid-template-columns", "2fr 1fr");
  $("main .parts:even .parts-text").css("order", "-1");
  $(".alt").hide();

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
  
  $("img").hover(
  function () {
    currentImage = $(this).attr("src");
    $(this).attr("src", currentImage.substring(0, currentImage.indexOf(".")) + "_Alt" + currentImage.substring(currentImage.indexOf("."), currentImage.length));

  },
  function () {
    $(this).attr("src", currentImage);
  }
  );
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