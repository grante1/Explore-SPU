// Get nav bar anchors to scroll down when clicked on

$(document).ready(function(){
    $(".nav-link").click(function(){
        var name = $(this).attr("name");
        if(name === 'inseattle')
        {
            $('html, body').animate({
                scrollTop: $('#in-seattle').offset().top-90
            }, 1500);
        }
        else if(name === 'oncampus')
        {
            $('html, body').animate({
                scrollTop: $('#on-campus').offset().top-90
            }, 1500);
        }
  });

  $(".btn-circle").click(function(){
      var name = $(this).attr("name");
      if(name === 'learnMore')
      {
          $('html, body').animate({
              scrollTop: $('#in-seattle').offset().top-90
          }, 1500);
      }
});





});
