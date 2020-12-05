var positionSlide = 0;
var cptSlide = 1;
var imgWidth = $('.product-preview.small').width();
bool_video = false;
label_play = $('.video-circle-play p').attr('data-Play');
label_pause = $('.video-circle-play p').attr('data-Pause');

function menu() {
  $(document).ready(function() {
    $('.container-menu').toggle();

    $('.burger-menu-container').click(function() {
      $('.container-menu').toggle(230);
      $('.burger-menu-container').toggleClass('is-opened');
    })
  })
}
menu();

function video() {
  $(document).ready(function() {
    $('.video-circle-play').click(function() {
      if (bool_video == false) {
        $('video')[0].play();
        bool_video = true;
        $('.video-circle-play p').text(label_pause);
      }
      else {
        $('video')[0].pause();
        bool_video = false;
        $('.video-circle-play p').text(label_play);
      }
    })
  })
}
video();

function getImageWidthAndReset() {
  $(document).ready(function() {
    $(window).on('resize', function() {
      cptSlide = 1;
      positionSlide = 0;
      imgWidth = $('.product-preview.small').width();
      $('.image-container').css('left', '0');
      $('#fleche-droite').removeClass('disabled');
      $('#fleche-gauche').addClass('disabled');
    })
  })
}
getImageWidthAndReset();


//---------------------
// SLIDER FAIT MAISON
//---------------------
function slider() {
  $(document).ready(function() {
    $('#fleche-gauche').addClass('disabled');

    $('#fleche-droite').click(function() {

      if (cptSlide !== 4) {
        $('#fleche-gauche').removeClass('disabled');
        $('.product-preview.small.hidden').css('opacity', '1');
        $('.image-container').animate({left: positionSlide - (imgWidth + 38)});
        positionSlide = positionSlide - (imgWidth + 38);
        cptSlide = cptSlide + 1;
      }
      if (cptSlide == 4) {
        $('#fleche-droite').addClass('disabled');
      }

    })

    $('#fleche-gauche').click(function() {
      if (cptSlide !== 1) {
        $('#fleche-droite').removeClass('disabled');
        $('.image-container').animate({left: positionSlide + (imgWidth + 38)});
        positionSlide = positionSlide + (imgWidth + 38);
        cptSlide = cptSlide - 1;
      }
      if (cptSlide == 1) {
        $('#fleche-gauche').addClass('disabled');
        $('.product-preview.small.hidden').css('opacity', '0');
      }
    })
  })
}
slider();

function arrowScroll() {
  $(document).ready(function() {
    $('header svg').click(function() {
      $('html, body').animate({ scrollTop: $('.wrap.container-template').offset().top }, 750, 'swing');
    })
  })
}
arrowScroll();
