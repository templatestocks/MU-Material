/**
	* Template Name: MU Material
	* Version: 1.1
	* Template Scripts
	* Author: TemplateStocks
	* Author URI: https://www.TemplateStocks.com/

	Custom JS

	1. MOBILE MENU
	2. EXPERIENCE SLIDER ( Owl Carousel )
	3. EDUCATION SLIDER ( Owl Carousel )
	4. LIGHTBOX ( FOR PORTFOLIO POPUP VIEW )
	5. COUNTER
	6. TESTIMONIAL SLIDER ( Owl Carousel )
	7. MENU SMOOTH SCROLLING
	8. PRELOADER
	9. CALL TO ABOUT
	10. BOTTOM TO UP
	11. PARALLAX HEADER
	12. HIRE ME SCROLL


**/

(function( $ ){


	/* ----------------------------------------------------------- */
	/*  1. Mobile MENU
	/* ----------------------------------------------------------- */

    $(".button-collapse").sideNav();


	/* ----------------------------------------------------------- */
	/*  2. Experience SLider(Owl Carousel)
	/* ----------------------------------------------------------- */

	var owl = $("#owl-carousel");
     owl.owlCarousel({
        items : 4, //4 items above 1024px browser width
        itemsDesktop : [1024,3], //3 items between 1024px and 901px
        itemsDesktopSmall : [900,2], // betweem 900px and 601px
        itemsTablet: [600,1], //1 items between 600 and 0
        itemsMobile : 1 // itemsMobile disabled - inherit from itemsTablet option
     });
     // Slide Navigation
      jQuery(".next").click(function() {
        owl.trigger('owl.next');
      })
      jQuery(".prev").click(function() {
        owl.trigger('owl.prev');
      })


    /* ----------------------------------------------------------- */
	/*  3. EDUCATION SLIDER (Owl Carousel)
	/* ----------------------------------------------------------- */

	var owl1 = $("#owl-carousel1");
     owl1.owlCarousel({
        items : 4, //4 items above 1024px browser width
        itemsDesktop : [1024,3], //3 items between 1024px and 901px
        itemsDesktopSmall : [900,2], // betweem 900px and 601px
        itemsTablet: [600,1], //1 items between 600 and 0
        itemsMobile : 1 // itemsMobile disabled - inherit from itemsTablet option
     });
     // Slide Navigation
      jQuery(".next1").click(function() {
        owl1.trigger('owl.next');
      })
      jQuery(".prev1").click(function() {
        owl1.trigger('owl.prev');
      })

    /* ----------------------------------------------------------- */
	/*  4. LIGHTBOX ( FOR PORTFOLIO POPUP VIEW )
	/* ----------------------------------------------------------- */

	$('body').append("<div id='portfolio-popup'><div class='portfolio-popup-area'><div class='portfolio-popup-inner'></div></div></div>");

	// WHEN CLICK PLAY BUTTON

    $('.portfolio-thumbnill').on('click', function(event) {
      event.preventDefault();
      $('#portfolio-popup').addClass("portfolio-popup-show");
      $('#portfolio-popup').animate({
	      "opacity": 1
      },500);
      var portfolio_detailscontent = $(this).parent(".mix").find(".portfolio-detail").html();
	  $(".portfolio-popup-inner").html(portfolio_detailscontent);

    });

    // WHEN CLICK CLOSE BUTTON

    $(document).on('click','.modal-close-btn', function(event) {
	    event.preventDefault();
		$('#portfolio-popup').removeClass("portfolio-popup-show");
		$('#portfolio-popup').animate({
		      "opacity": 0
	    },500);

    });



	/* ----------------------------------------------------------- */
	/*  5. COUNTER
	/* ----------------------------------------------------------- */

	$('.counter').counterUp({
        delay: 10,
        time: 1000
    });

	/* ----------------------------------------------------------- */
	/*  6. TESTIMONIAL SLIDER (Owl Carousel)
	/* ----------------------------------------------------------- */

	var owl2 = $("#owl-carousel2");

     owl2.owlCarousel({
        items : 2, //4 items above 1024px browser width
        itemsDesktop : [1024,2], //3 items between 1024px and 901px
        itemsDesktopSmall : [900,2], // betweem 900px and 601px
        itemsTablet: [600,1], //1 items between 600 and 0
        itemsMobile : 1 // itemsMobile disabled - inherit from itemsTablet option
     });

     // Slide Navigation
      $(".next2").click(function() {
        owl2.trigger('owl.next');
      });

      $(".prev2").click(function() {
        owl2.trigger('owl.prev');
      });


	/* ----------------------------------------------------------- */
	/*  7. MENU SMOOTH SCROLLING
	/* ----------------------------------------------------------- */

	//MENU SCROLLING WITH ACTIVE ITEM SELECTED

	// Cache selectors
	var lastId,
	topMenu = $(".menu-scroll"),
	topMenuHeight = topMenu.outerHeight()+13,
	// All list items
	menuItems = topMenu.find('a[href^=\\#]'),
	// Anchors corresponding to menu items
	scrollItems = menuItems.map(function() {
	  var item = $($(this).attr("href"));
	  if (item.length) { return item; }
	});

	// Bind click handler to menu items
	// so we can get a fancy scroll animation
	menuItems.click(function(e) {
	  var href = $(this).attr("href"),
	      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+15;
	  jQuery('html, body').stop().animate({
	      scrollTop: offsetTop
	  }, 900);
	  e.preventDefault();
	});

	// Bind to scroll
	$(window).scroll(function() {
	   // Get container scroll position
	   var fromTop = $(this).scrollTop()+topMenuHeight;

	   // Get id of current scroll item
	   var cur = scrollItems.map(function() {
	     if ($(this).offset().top < fromTop)
	       return this;
	   });
	   // Get the id of the current element
	   cur = cur[cur.length-1];
	   var id = cur && cur.length ? cur[0].id : "";

	   if (lastId !== id) {
	       lastId = id;
	       // Set/remove active class
	       menuItems
	         .parent().removeClass("active")
	         .end().filter("[href=\\#"+id+"]").parent().addClass("active");
	   }
	})

	// 	Active drowpdown menu

	$(".dropdown-button").dropdown();


	/* ----------------------------------------------------------- */
	/*  8. PRELOADER
	/* ----------------------------------------------------------- */

		 $(window).load(function() { // makes sure the whole site is loaded
	      $('.progress').fadeOut(); // will first fade out the loading animation
	      $('#preloader').delay(100).fadeOut('slow'); // will fade out the white DIV that covers the website.
	      $('body').delay(100).css({'overflow':'visible'});
	    })

	/* ----------------------------------------------------------- */
	/* 9. CALL TO ABOUT
	/* ----------------------------------------------------------- */

		$(".call-to-about").click(function() {
	    $('html,body').animate({
	        scrollTop: $("#about").offset().top},
	        'slow');
		});

	/* ----------------------------------------------------------- */
	/* 10. BOTTOM TO UP
	/* ----------------------------------------------------------- */

		$(".up-btn").click(function() {
	    $('html,body').animate({
	        scrollTop: $("#header").offset().top},
	        'slow');
		});

	/* ----------------------------------------------------------- */
	/* 11. PARALLAX HEADER
	/* ----------------------------------------------------------- */

		$('.parallax').parallax();

	/* ----------------------------------------------------------- */
	/* 12. HIRE ME SCROLL
	/* ----------------------------------------------------------- */

		$(".hire-me-btn").click(function(e) {
			e.preventDefault();
	    $('html,body').animate({
	        scrollTop: $("#footer").offset().top},
	        'slow');
		});


})( jQuery );
