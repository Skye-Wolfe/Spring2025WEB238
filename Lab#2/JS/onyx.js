$(document).ready(function () {
  $('main .parts:even').css('grid-template-columns','2fr 1fr');
  $('main .parts:even .parts-text').css('order','-1');
  
  $("#icon").click(function () {
    $("#myLinks").toggle();
  });
});
