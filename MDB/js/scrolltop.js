// Get nav bar anchors to scroll down when clicked on

$(document).ready(function(){
    $(".nav-link").click(function(){
        console.log($(this).attr("name"));
        var name = $(this).attr("name");
        console.log($('#in-seattle').offset());
        if(name === 'inseattle')
        {
            $('html, body').animate({
                scrollTop: $('#in-seattle').offset().top-90
            }, 1000);
        }
        
        if(name === 'inseattle')
        {
            $('html, body').animate({
                scrollTop: $('#in-seattle').offset().top-90
            }, 1000);
        }
  });
});