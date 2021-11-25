$('.menu-toggle').on('click', function() {

	$('.menu').toggleClass('open')
    $('body').toggleClass('open')

  return false

 })

 $(document).ready(function() {

    $('a[href=#top]').click(function(){
        $('html, body').animate({scrollTop:0}, 'slow');
        return false;
    });

});
