$('.toAbout').click(function(){
  $('.menuToggle input').prop('checked', false);
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#about").offset().top - 100
    }, 800);
})
$('.toSpec').click(function(){
  $('.menuToggle input').prop('checked', false);
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#spec").offset().top - 100
    }, 800);
})
$('.toSolution').click(function(){
  $('.menuToggle input').prop('checked', false);
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#product").offset().top - 100
    }, 800);
})

//YT
var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player1,player2,player3;
function onYouTubeIframeAPIReady() {
  player1 = new YT.Player('player1', {
      events: {
        'onStateChange': onPlayerStateChange
      }
  });
  player2 = new YT.Player('player2', {
      events: {
        'onStateChange': onPlayerStateChange
      }
  });
  player3 = new YT.Player('player3', {
      events: {
        'onStateChange': onPlayerStateChange
      }
  });
} 
function onPlayerStateChange(event) {
  switch (event.data) {
    case YT.PlayerState.PLAYING:
      console.log('playing');
      gtag('event', 'index_playvideo',{'event_label' : '首頁_點擊播放影片按鈕'});
      break;
  }
}

// slide
$(document).ready(function(){
  $('.product_slick').slick({
    infinite: true,
    speed: 200,
    fade: true,
    cssEase: 'linear',
    prevArrow: '<div class="slick-prev slick_productBtn"><img src="images/svg/arrow_w_pre.svg"></div>',
    nextArrow: '<div class="slick-next slick_productBtn"><img src="images/svg/arrow_w_next.svg"></div>',
  });
});
var pageCount = $('.page_count .count')
$('.product_slick').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
  var i = (currentSlide ? currentSlide : 0) + 1;
  // pageCount.text(i + '/' + slick.slideCount);
  pageCount.text(i);
});

//map
window.onload = function() {
  var a = document.querySelector(".timeline_wrap");
  var scroll_width = 680; //滚动一下的距离
  // if(document.addEventListener){
  //     a.addEventListener('DOMMouseScroll', mousewheel_event, false); // FF
  // }
  // a.onmousewheel = mousewheel_event; // IE/Opera/Chrome
  // function mousewheel_event(e) {
  //     var e = e || window.event, v;
  //     e.wheelDelta ? v=e.wheelDelta : v=e.detail;
  //     if(v>3||-v>3) v=-v;
  //     // v>0 ? a.scrollLeft+=scroll_width : a.scrollLeft-=scroll_width;
  //     v>0 ? $('.timeline_wrap').animate({scrollLeft: '+=680'},200, "swing") : $('.timeline_wrap').animate({scrollLeft: '-=680'},200);
  //     // console.log(a.scrollLeft)
  //     if(10<a.scrollLeft&&a.scrollLeft<600){
  //       e.preventDefault(); //阻止浏览器的默认滚动
  //     }
  // }
  $('.timeline_btn-left').click(function(){
    $('.timeline_wrap').animate({scrollLeft: '-=680'}, 200)
  })
  $('.timeline_btn-right').click(function(){
    $('.timeline_wrap').animate({scrollLeft: '+=680'},200, "linear")
  })
};


new WOW().init();

AOS.init({
  once: true
});


//test
$('.test_standard .test_title').click(function(){
  if($(this).parent('.test_standard').hasClass('active')){
    $(this).parent('.test_standard').removeClass('active')
  }else{
    $(this).parent('.test_standard').addClass('active');
  }
})
$('.test_military .test_title').click(function(){
  if($(this).parent('.test_military').hasClass('active')){
    $(this).parent('.test_military').removeClass('active')
  }else{
    $(this).parent('.test_military').addClass('active');
  }
})

// plan
$('.reasons').click(function(){
  $(this).addClass('active');
  $(this).siblings().removeClass('active');
  var index = $(this).index();
  $('.solution_img').eq(index-1).addClass('active').siblings().removeClass('active')
})