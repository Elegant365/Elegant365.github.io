
var $window = $(window);
var $videoWrap = $('.video-wrap');
var $video = $('.video');
var videoHeight = $video.outerHeight();


$window.on('scroll',  function() {
  var windowScrollTop = $window.scrollTop();
  var videoBottom = videoHeight + $videoWrap.offset().top;
  
  if (windowScrollTop > videoBottom) {
    $videoWrap.height(videoHeight);
    $video.addClass('stuck');
  } else {
    $videoWrap.height('auto');
    $video.removeClass('stuck');
  }
});



