// Get nav bar anchors to scroll down when clicked on

$(document).ready(function(){
    $(".nav-link").click(function(){
        console.log(10);
    $('#card-section').animate({
        scrollTop: ($('#' + $(this).attr("name")).offset().top - 10)
    }, 2000);
  });
});