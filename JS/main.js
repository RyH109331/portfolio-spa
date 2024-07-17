console.log("test")

/*トップロゴアニメーション*/
$(function() {
  setTimeout(function(){
    $('.start p').fadeIn(800);
  },250); 
  setTimeout(function(){
    $('.start').fadeOut(500);
  },2000); 
});

/*ヘッダー上からアニメーション*/
$(function() {
  $('.art-header').css({top: '-50px'}).fadeIn(500).animate({
    top: "0px"
  }, 1000, 'swing');
});

/*ヘッダー高さアニメーション */
$(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 10) {
      $('.art-header').addClass('small-header');
    } else {
      $('.art-header').removeClass('small-header');
    }
  });
});

/*ヘッダーラインアニメーション */
$(function() {
  var scrollTimer;
  $(window).scroll(function() {
    if (scrollTimer) {
      clearTimeout(scrollTimer);
    }
    $('.art-header').css('outline', '1px solid rgba(59, 48, 48, 0.1)');
    scrollTimer = setTimeout(function() {
      $('.art-header').css('outline', 'none');
    }, 300);
  });
});

/*ハンバーガーメニュー・sp-nav 右から出てくるアニメーション*/
$('.art-hamburger-icon').on('click', function(){
  if($(this).hasClass('active')){
    $(this).removeClass('active');
    $('main').removeClass('open');
    $('.art-header').removeClass('active');
    $('.art-nav-sp').removeClass('open');
    $('body').removeClass('no-scroll'); 
  } else {
    $(this).addClass('active');
    $('main').addClass('open');
    $('.art-header').addClass('active');
    $('.art-nav-sp').addClass('open');
    $('body').addClass('no-scroll');
  }
});

$('.art-hamburger').on('click', function(){
  if($(this).hasClass('open')){
    $(this).removeClass('open');
    $('.art-hamburger').removeClass('active');
    $('main').removeClass('open');
    $('.art-header').removeClass('active');
    $('.art-nav-sp').removeClass('open');
    $('body').removeClass('no-scroll');
  }
});



/*ふぁっと出現アニメーション*/
function BlurTextAnimeControl() {
	$('.content-box,.map-area,.map-text-box,.map-btn,.lead-box,.footer-icon').each(function(){ 
		var elemPos = $(this).offset().top-50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
    var offset = windowHeight / 2; 
		if (scroll >= elemPos - offset){
		$(this).addClass('blur');
    }
	});
}
$(window).scroll(function () {
  BlurTextAnimeControl();
});
$(window).on('load', function () {
  BlurTextAnimeControl();
});


/*リザーブ*/
$(function() {
  var $btn = $('.box-container');
  var $trigger = $('#box-container-trigger');
  var $footer = $('.footer-icon');
  var btnClicked = false;
  $btn.hide();
  function checkIfInView() {
    var windowHeight = $(window).height();
    var scrollPos = $(window).scrollTop();
    var triggerPos = $trigger.offset().top;
    var footerPos = $footer.offset().top;
    if (scrollPos + windowHeight > triggerPos && scrollPos < footerPos && !btnClicked) {
      $btn.fadeIn(200);
    } else {
      $btn.fadeOut(200);
    }
  }
  $(window).on('scroll resize', checkIfInView);
  $('.box-container-icon-btn').click(function() {
    $btn.fadeOut(400);
    btnClicked = true;
  });
});


