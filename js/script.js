// Toggle the visibility of the menu
$('#menubar').on('click', function() {
    // if ($('#navbar').hasClass('open')) {
    //     $('#navbar').removeClass('open')
    // }else{
    //     $('#navbar').addClass('open')
    // }

    // $('#navbar').toggleClass('open'); //Does not requires the checks (if statement above)

    $('#navbar').toggle(); // This does not requires the open class
});

// // Sub Menu Toggler
// $('.subMenuToggler').on('click', function(){
//     $(this).siblings('ul').toggle();
// })
