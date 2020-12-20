function getAnimation() {
  $(".animate").each(function() {
    if( $(this).offset().top <= $(document).scrollTop() + $(window).height() ) {
      $(this).addClass("active");
    }
  });
}

function getSidebarPosition() {
  if( $("#formLeft").length > 0 && bodyWidth > 900 ) {
    var sidebarWrappTopCoord, sidebarWrappBottomCoord, windowtopCoord, windowBottomCoord;
    sidebarWrappTopCoord = $(".form_sect_wrapp").offset().top;
    sidebarWrappRightCoord = bodyWidth - $("#rightCoord").offset().left - $("#rightCoord").width();
    sidebarWrappBottomCoord = $(".bottom_coord").offset().top;
    windowTopCoord = $(document).scrollTop();
    windowBottomCoord = windowTopCoord + $(window).height();
    formWidth = $("#formWidth").width();
    if( windowTopCoord > sidebarWrappTopCoord ) {
      $("#formLeft").addClass("fixed");
      $("#formLeft").removeClass("absolute");
      if($("#formLeft").offset().top + $("#formLeft").outerHeight() >= sidebarWrappBottomCoord) {
        $("#formLeft").removeClass("fixed");
        $("#formLeft").addClass("absolute");
      }
      $("#formLeft").css({
        "right" : sidebarWrappRightCoord + "px",
        "max-width" : formWidth + "px"
      });
    } else {
      $("#formLeft").removeClass("fixed");
      $("#formLeft").removeClass("absolute");
      $("#formLeft").css({"right" : 0, "max-width":"770px"});
    }
  }
}

var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

$(window).load(function() {
  getAnimation();
});

$(window).resize(function() {
  bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
  getSidebarPosition();
  getAnimation();
});

$(document).scroll(function() {
  getSidebarPosition();
  getAnimation();
});

$(document).ready(function() {

    getSidebarPosition();

    if( $(".promo_slider").length > 0 ) {
      $(".promo_slider").not(".slick-initialized").slick({
          dots: true,
          arrows: false,
          autoplay: true,
          // autoplaySpeed: 4000,
          speed: 1200,
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true
      });
    }

    if( $(".slider_2").length > 0 ) {
      $(".slider_2").not(".slick-initialized").slick({
          dots: false,
          arrows: true,
          autoplay: true,
          // autoplaySpeed: 4000,
          speed: 1200,
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
          appendArrows: ".slider_2_arrows"
      });
    }

    if( $(".slider_news").length > 0 ) {
      $(".slider_news").not(".slick-initialized").slick({
          dots: false,
          arrows: true,
          autoplay: true,
          // autoplaySpeed: 4000,
          speed: 1200,
          slidesToShow: 4,
          slidesToScroll: 1,
          appendArrows: ".slider_news_arrows",
          responsive: [
            {
              breakpoint: 1124,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1
              }
            }
          ]
      });
    }

    // ------------

    if($("#sl").length > 0) {
        var slider = document.getElementById('sl');
        noUiSlider.create(slider, {
            start: [20],
            connect: false,
            tooltips: true,
            format: wNumb({
                decimals: 0
            }),
            pips: {
                mode: 'steps',
                stepped: true,
                density: 100
            },
            range: {
                'min': 10,
                'max': 1000
            }
        });
    }

    // --------------

    $(".color_ch input").on("change", function(e) {
      e.preventDefault();
      var chName = $(this).attr("id");
      if($(this).is(":checked")) {
        $("[data-chcount = '"+chName+"']").addClass("active");
      } else {
        $("[data-chcount = '"+chName+"']").removeClass("active");
      }
    });

    // ------------

    $(".custom_select_title").on("click", function(e) {
      e.preventDefault();
      parentBlock = $(this).closest(".custom_select");
      dropdownBlock = parentBlock.find(".custom_select_dropdown");
      if(dropdownBlock.is(":hidden")) {
        dropdownBlock.slideDown(300);
        parentBlock.addClass("active");
      } else {
        dropdownBlock.slideUp(300);
        parentBlock.removeClass("active");
      }
    });

    $(this).keydown(function(eventObject){
      if (eventObject.which == 27) {
          $(".custom_select").each(function() {
            if($(this).hasClass("active")) {
              $(this).removeClass("active");
              $(this).find(".custom_select_dropdown").slideUp(300);
            }
          });
      }
    });

    $(document).mouseup(function (e){
        e.preventDefault();
        var hide_element = $('.custom_select_dropdown');        
        if (!hide_element.is(e.target)
                && hide_element.has(e.target).length === 0) {
                hide_element.closest(".custom_select").removeClass("active");
                hide_element.slideUp(300);
        }
    });

    $(".custom_select_dropdown p").on("click", function(e) {
      e.preventDefault();
      value = $(this).attr("data-value");
      parentBlock = $(this).closest(".custom_select");
      inputHidden = parentBlock.find("input[type='hidden']");
      inputHidden.val(value);
      selectTitle = parentBlock.find(".custom_select_title p");
      selectTitle.text(value);
      $(this).closest(".custom_select_dropdown").slideUp(300);
      parentBlock.removeClass("active");
    });

    // ----------------

    if( $(".big_slider").length > 0 ) {
      $(".big_slider").not(".slick-initialized").slick({
          dots: false,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 4000,
          speed: 1200,
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
          asNavFor: '.miniature_slider',
      });

      $('.miniature_slider').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          asNavFor: '.big_slider',
          dots: false,
          focusOnSelect: true,
          arrows: true,
          vertical: true,
          prevArrow: $("#topBtn"),
          nextArrow: $("#bottomBtn"),
          verticalSwiping: true,
          responsive: [
            {
              breakpoint: 600,
              settings: {
                vertical: false,
                slidesToShow: 4,
                verticalSwiping: false,
                variableWidth: true
              }
            }
          ]
      });
    }

    // -------------

    $(".count_box button").click(function(e) {
      e.preventDefault();
      parentBlock = $(this).closest(".count_box");
      countInput = parentBlock.find(".count_num input");
      countVal = countInput.val();
      if(countVal == "") {
          countVal = 1;
      }
      if( $(this).hasClass("minus_btn") && countVal > 1 ) {
          countVal--;
      } else if( $(this).hasClass("plus_btn")) {
          countVal++;
      }
      countInput.val(countVal);
    });

    if( $(".add_goods_slider").length > 0 ) {
      $(".add_goods_slider").not(".slick-initialized").slick({
          dots: false,
          arrows: false,
          // autoplay: true,
          autoplaySpeed: 4000,
          speed: 1200,
          slidesToShow: 7,
          slidesToScroll: 5,
          variableWidth: true
      });
    }

    // -------------

    if($("#map_1").length > 0) {
        ymaps.ready(function () {        
            var myMap = new ymaps.Map('map_1', {
                center: [55.755814, 37.617635],
                zoom: 14
            }, {
                searchControlProvider: 'yandex#search'
            });
            myPlacemark1 = new ymaps.Placemark([55.755814, 37.617635], {
                hintContent: ''
            }, {
                // iconLayout: 'default#imageWithContent',
                // iconImageHref: 'img/yellow_marker.png',
                // iconImageSize: [39, 35],
                // iconImageOffset: [19, -17]
            });
            myMap.geoObjects.add(myPlacemark1);        
        });
    }

    if($("#map_2").length > 0) {
        ymaps.ready(function () {        
            var myMap2 = new ymaps.Map('map_2', {
                center: [55.755814, 37.617635],
                zoom: 14
            }, {
                searchControlProvider: 'yandex#search'
            });
            myPlacemark2 = new ymaps.Placemark([55.755814, 37.617635], {
                hintContent: ''
            }, {
                // iconLayout: 'default#imageWithContent',
                // iconImageHref: 'img/yellow_marker.png',
                // iconImageSize: [39, 35],
                // iconImageOffset: [19, -17]
            });
            myMap2.geoObjects.add(myPlacemark2);
        });
    }

      if($("#map_3").length > 0) {
        ymaps.ready(function () {        
            var myMap = new ymaps.Map('map_3', {
                center: [55.755814, 37.617635],
                zoom: 14
            }, {
                searchControlProvider: 'yandex#search'
            });
            myPlacemark1 = new ymaps.Placemark([55.755814, 37.617635], {
                hintContent: ''
            }, {
                // iconLayout: 'default#imageWithContent',
                // iconImageHref: 'img/yellow_marker.png',
                // iconImageSize: [39, 35],
                // iconImageOffset: [19, -17]
            });
            myMap.geoObjects.add(myPlacemark1);        
        });
    }

    if($("#map_4").length > 0) {
        ymaps.ready(function () {        
            var myMap2 = new ymaps.Map('map_4', {
                center: [55.755814, 37.617635],
                zoom: 14
            }, {
                searchControlProvider: 'yandex#search'
            });
            myPlacemark2 = new ymaps.Placemark([55.755814, 37.617635], {
                hintContent: ''
            }, {
                // iconLayout: 'default#imageWithContent',
                // iconImageHref: 'img/yellow_marker.png',
                // iconImageSize: [39, 35],
                // iconImageOffset: [19, -17]
            });
            myMap2.geoObjects.add(myPlacemark2);
        });
    }

    // ------------

    $(".respmenubtn").click(function(e) {
        e.preventDefault();
        if( $("#resp_nav").is(":hidden") ) {
            $("#resp_nav").fadeIn(300);
            $(this).addClass("active");
        } else {
            $("#resp_nav").fadeOut(300);
            $(this).removeClass("active");
        }
    });
    
    $(this).keydown(function(eventObject){
        if (eventObject.which == 27 &&
            $("#resp_nav").is(":visible") &&
            bodyWidth <= 1024) {
                $("#resp_nav").fadeOut(300);
                $(".respmenubtn").removeClass("active");
        }
    });

    // ----------

    $(".main_nav li a .btn_down").on("click", function(e) {
      e.preventDefault();
      parentBlock = $(this).closest("li");
      dropdownCatalog = parentBlock.find(".catalog_wrapp");
      if(dropdownCatalog.is(":hidden")) {
        dropdownCatalog.slideDown(300);
        $(this).closest("a").addClass("active");
      } else {
        dropdownCatalog.slideUp(300);
        $(this).closest("a").removeClass("active");
      }
    });

    // --------------

    $("#filtersBtn").on("click", function(e) {
      if( $("#catalogSidebar").is(":hidden") ) {
        $("#catalogSidebar").slideDown(700);
      } else {
        $("#catalogSidebar").slideUp(700);
      }
    });

});