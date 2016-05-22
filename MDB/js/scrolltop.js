// Get nav bar anchors to scroll down when clicked on

$(document).ready(function(){
    $(".nav-link").click(function(){
        console.log($(this).attr("name"));
        var name = $(this).attr("name");
        if(name === 'inseattle')
        {
            $('html, body').animate({
                scrollTop: 670
            }, 1000);
        }
  });
});