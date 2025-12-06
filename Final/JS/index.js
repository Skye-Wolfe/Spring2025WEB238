$(document).ready(function () {
  let highlight = "intro";

  $("div.content").hide();
  $("div." + highlight).show();

  $(window).on("resize", function () {
    if ($(window).width() <= 1070) {
      $("div.anvilArrow").css("display", "unset");
      $("div.aegisFirebird").css("display", "unset");
      $("div.esperiaProwler").css("display", "unset");
      $("div.anvilPaladin").css("display", "unset");
      $("div.content").hide();
      $("div." + highlight).show();
      $("#myLinks").hide();
    } else {
      $("div.anvilArrow").css("display", "grid");
      $("div.aegisFirebird").css("display", "grid");
      $("div.esperiaProwler").css("display", "grid");
      $("div.anvilPaladin").css("display", "grid");
      $("div.content").hide();
      $("div." + highlight).show();
      $("#myLinks").show();
    }
  });

  $("#icon").click(function () {
    $("#myLinks").slideToggle();
  });

  $("#myLinks")
    .children()
    .click(function () {
      if (this.className !== highlight) {
        $("div." + highlight).slideToggle();
        $("a." + highlight).removeClass("active");
        $("div." + this.className).slideToggle();
        highlight = this.className;
        $("a." + this.className).addClass("active");
        $("a." + this.className).addClass("active");
      }
      $(this).animate({ scale: ".8" }, 100);
      $(this).animate({ scale: "1" }, 100);
    });

  $(".content-img").click(function () {
    if ($(window).width() > 1070) {
      if ($("div." + this.id).css("display") == "grid") {
        $("div." + this.id).css("display", "unset");
        $(this).animate({ scale: "1" }, 100);
      } else {
        $("div." + this.id).css("display", "grid");
      }
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

