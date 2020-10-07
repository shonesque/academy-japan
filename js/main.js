const Mouseenter = (e) => {
    // マウスが乗った時の処理
    $(e.currentTarget).css({
      'background-color': '#ff9999',
      'opacity': '0.8',
    });
  };
  
const Mouseleave = (e) => {
    // マウスが外れた時の処理
    $(e.currentTarget).css({
        'opacity': '1.0',
    });
};

$('.coursecard')
  .on('mouseenter', Mouseenter)
  .on('mouseleave', Mouseleave);


var mySwiper = new Swiper ('.swiper-container', {
  effect: "slide",
   loop: true,
  //  pagination: '.swiper-pagination',
   nextButton: '.swiper-button-next',
   prevButton: '.swiper-button-prev',
  })

// popupクラスを持つ要素にMagnific Popupを適用する
$('.popup').magnificPopup({
  type: 'image',
});

