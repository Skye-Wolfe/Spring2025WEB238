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
  
  $(".content-img").hover(
    function () {
      if ($(window).width() > 1070) {
        if ($("div." + this.id).css("display") == "grid") {
          $(this).animate({ scale: "1.05" }, 100);
        } else {
          $(this).animate({ scale: ".95" }, 100);
        }
      }
    },
    function () {
      $(this).animate({ scale: "1" }, 100);
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
