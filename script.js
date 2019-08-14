$(document).ready(function(){
  var $hamburger = $(".hamburger");
  $hamburger.hover(function(e) {
    $hamburger.toggleClass("is-active");
    // Do something else, like open/close menu
  });
});
