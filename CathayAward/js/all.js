// menu背景濾鏡
$('.menuToggle input').click(function(){
  if($('.menuToggle input').prop('checked')){
    $('.wrapper').addClass('blur')
    $('html').addClass('noscroll')
  }else{
    $('.wrapper').removeClass('blur')
    $('html').removeClass('noscroll')
  }
})

//totop
$('.totop').click(function(){
  $('html, body').animate({scrollTop:0}, 500);
})
function scrollFunction() {
  var y = window.scrollY
  if (y > 100){
    $('.totop').addClass('show')
  }else{
    $('.totop').removeClass('show')
  }
}
window.addEventListener('scroll',function() {scrollFunction()});

//menu size
var height = $(window).height();
var sidemenu = $('.sidemenu');
if(height<600){
  sidemenu.addClass('sidemenu_xs')
}else if(height<800){
  sidemenu.addClass('sidemenu_m')
}else{
  sidemenu.removeClass('sidemenu_m')
}

// IE
if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0) {
  // MSIE
  $('.green_mask').addClass('openGreen')
  $('.browserBox').show()
}

$('.yesIEBtn').on('click', function(){
  $('.green_mask').fadeOut(250)
})

// video
var vids = $("video"); 
$.each(vids, function(){
      this.controls = false; 
}); 

//wow.js
new WOW().init();
