var JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJX
	LazyFunction: function () {
		// Для лэзи загрузки 

		document.addEventListener("DOMContentLoaded", function () {
			let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
			let active = false;

			const lazyLoad = function () {
				if (active === false) {
					active = true;

					setTimeout(function () {
						lazyImages.forEach(function (lazyImage) {
							if (((lazyImage.getBoundingClientRect().top - lazyImage.parentElement.clientHeight * 2) <= window.innerHeight && (lazyImage.getBoundingClientRect().bottom + lazyImage.parentElement.clientHeight * 2) >= 0) && getComputedStyle(lazyImage).display !== "none") {
								lazyImage.src = lazyImage.dataset.src;
								// lazyImage.srcset = lazyImage.dataset.srcset;
								lazyImage.classList.remove("lazy");

								lazyImages = lazyImages.filter(function (image) {
									return image !== lazyImage;
								});

								if (lazyImages.length === 0) {
									document.removeEventListener("scroll", lazyLoad);
									window.removeEventListener("resize", lazyLoad);
									window.removeEventListener("orientationchange", lazyLoad);
									window.addEventListener("DOMContentLoaded", lazyLoad);
								}
							}
						});

						active = false;
					}, 200);
				}
			};

			document.addEventListener("scroll", lazyLoad);
			window.addEventListener("resize", lazyLoad);
			window.addEventListener("orientationchange", lazyLoad);
			window.addEventListener("DOMContentLoaded", lazyLoad);
		});


		// лэзи 
		document.addEventListener("DOMContentLoaded", function () {
			let lazyImages = [].slice.call(document.querySelectorAll(".lazy-bg"));
			let active = false;

			const lazyLoad = function () {
				if (active === false) {
					active = true;

					setTimeout(function () {
						lazyImages.forEach(function (lazyImage) {
							if (((lazyImage.getBoundingClientRect().top - lazyImage.parentElement.clientHeight) <= window.innerHeight && (lazyImage.getBoundingClientRect().bottom + lazyImage.parentElement.clientHeight) >= 0) && getComputedStyle(lazyImage).display !== "none") {
								lazyImage.parentElement.style.backgroundImage = 'url(' + lazyImage.dataset.src + ')';
								lazyImage.src = lazyImage.dataset.src;
								// lazyImage.srcset = lazyImage.dataset.srcset;
								lazyImage.classList.remove("lazy");

								lazyImages = lazyImages.filter(function (image) {
									return image !== lazyImage;
								});

								if (lazyImages.length === 0) {
									document.removeEventListener("scroll", lazyLoad);
									window.removeEventListener("resize", lazyLoad);
									window.removeEventListener("orientationchange", lazyLoad);
									window.addEventListener("DOMContentLoaded", lazyLoad);
								}
							}
						});

						active = false;
					}, 200);
				}
			};

			document.addEventListener("scroll", lazyLoad);
			window.addEventListener("resize", lazyLoad);
			window.addEventListener("orientationchange", lazyLoad);
			window.addEventListener("DOMContentLoaded", lazyLoad);
		});

	},



	magnificPopupCall: function () {
		$('.popup-with-move-anim').magnificPopup({
			type: 'inline',

			fixedContentPos: true,
			fixedBgPos: true,

			overflowY: 'auto',

			closeBtnInside: true,
			preloader: false,

			midClick: true,
			removalDelay: 300,
			mainClass: 'my-mfp-zoom-in',
			tClose: 'Закрыть (Esc)',
		});

		// / modal window

		// modal галерея
		$(".gal").each(function () {

			$(this).find("a").magnificPopup({
				type: 'image',
				closeOnContentClick: false,
				closeBtnInside: false,
				mainClass: 'mfp-with-zoom mfp-img-mobile',
				tClose: 'Закрыть (Esc)',
				image: {
					verticalFit: true,
					// titleSrc: function(item) {
					//   return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
					// }
				},
				gallery: {
					enabled: true
				}
			});
		})
		// /modal галерея
	},




	inputMask: function () {
		// mask for input
		$('input[type="tel"]').attr("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+9(999)999-99-99");
	}

};

JSCCommon.LazyFunction();
/***/

jQuery(document).ready(function ($) {

	// для свг
	svg4everybody({});
	// Custom JS

	// вызов magnificPopupCall
	JSCCommon.magnificPopupCall();

	JSCCommon.inputMask();

 

	// / закрыть меню при горизонтальном свайпе
	// /закрыть/открыть мобильное меню

	function heightses() {

		var w = $(window).width();

		// $(".main-wrapper").css("margin-bottom", $('footer').height())
		// $(".otz__item .text-wrap ").height('auto').equalHeights();
		//


		// скрывает моб меню

		var topH = $(".header-block").innerHeight();

		function fixedMenu() {
			if ($(this).scrollTop() > (topH / 4)) {
				setTimeout(function () {
					$('.top-nav--js  ').addClass('fixed-ready');

				}, .6);
				$('.top-nav--js  ').addClass('fixed-top');
			} else {
				if (!$('.top-nav--js  ').hasClass('fixed')) {

					setTimeout(function () {
						$('.top-nav--js  ').removeClass('fixed-top');

					}, .6);
				}
				$('.top-nav--js  ').removeClass('fixed-ready');
			}


			if ($(this).scrollTop() > (topH * .8)) {
				$('.top-nav--js  ').addClass('fixed');
			} else {
				$('.top-nav--js  ').removeClass('fixed');
			}

		}
		fixedMenu();
		$(window).scroll(function () {


			fixedMenu();
		});
	}

	if (window.matchMedia("(min-width: 992px)").matches) {

		$(".toggle-menu-mobile--js").removeClass("on");
		// $("body").removeClass("fixed");
		$(".menu-mobile--js").removeClass("active");
		$("body").removeClass("fixed");
	}


	$(window).resize(function () {
		heightses();

	});
	$(window).on("load", function () {
		heightses();

	})

	heightses();



	// листалка по стр
	$(" .top-nav__link").click(function () {
	       var elementClick = $(this).attr("href");
	       var destination = $(elementClick).offset().top;

	           $('html, body').animate({ scrollTop: destination }, 1100);

	       return false;
	   });







	// slider
	$('.header').each(function () {
		var a = window.location.hash;
		var swiper4 = new Swiper($(this).find('.header-block__slider--js'), {
			// slidesPerView: 5,
			slidesPerView: 1,
			watchOverflow: true,
			spaceBetween: 0,
			watchOverflow: true,
			touchStartForcePreventDefault: true,
			// autoplay: {
			// 	delay: 3000,
			// },

			pagination: {
				el: $(this).find('.swiper-pagination'),
				clickable: true,
			},

			hashNavigation: {
        watchState: true,
			},
			 

		});
	})
	$('.section').each(function () {
		
		var swiper5 = new Swiper($(this).find('.s-client__slider--js'), {
			// slidesPerView: 5,
			slidesPerView: 4,
			slidesPerGroup: 2,
			slidesPerColumn: 2, 
			watchOverflow: true,
			spaceBetween: 30,
			
			navigation: {
				nextEl: $(this).find('.swiper-button-next'),
				prevEl: $(this).find('.swiper-button-prev'),
			},
			pagination: {
				el: $(this).find('.swiper-pagination'),
				clickable: true,
			},
			breakpoints: {
				// when window width is <= 320px
				440: {
					slidesPerView: 1,
					spaceBetween: 10
				},
				// when window width is <= 480px
				575: {
					slidesPerView: 2,
					spaceBetween: 20
				},
				// when window width is <= 640px
				767: {
					slidesPerView: 3,
					spaceBetween: 30
				}
			},
		
		});
		
		// swiper5.slideTo(a, 0, false);

	});



	var mySwiper = new Swiper('.tabs__slider--js', {
		// slidesPerView: 5,
		// init: false,
		slidesPerView: 'auto',
		// spaceBetween: 30,
		watchOverflow: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},

	});

	$('.s-cards').each(function () {
		var swiper5 = new Swiper($(this).find('.s-cards__slider--js'), {
			// slidesPerView: 5,
			slidesPerView: 'auto',
			spaceBetween: 0,
			pagination: {
				el: $(this).find('.swiper-pagination'),
				clickable: true,
			},

		});
	});

	$('.s-projects').each(function () {
		var sw6 = new Swiper('.s-projects__slider--js', {

			lazy: {
				loadPrevNext: true,
			},
			navigation: {
				nextEl: $(this).find('.swiper-button-next'),
				prevEl: $(this).find('.swiper-button-prev'),
			},
			pagination: {
				el: $(this).find('.swiper-pagination'),
				clickable: true,
			},
			// loop: true,
			on: {
				slideChange: function () {
					/* do something */
					$(".count-block__current").text(sw6.activeIndex + 1);
					$(".count-block__total").text(sw6.slides.length);
				},
			}
		});

		$(".count-block__current").text(sw6.activeIndex + 1);
		$(".count-block__total").text(sw6.slides.length);
	});



	$('.section').each(function () {

		var swiper5 = new Swiper($(this).find('.s-docs__slider--js'), {
			// slidesPerView: 5,
			slidesPerView: 4,
			watchOverflow: true,
			spaceBetween: 30,
			loop: true,
			pagination: {
				el: $(this).find('.swiper-pagination'),
				clickable: true,
			},
			breakpoints: {
				// when window width is <= 320px
				440: {
					slidesPerView: 1,
					spaceBetween: 10
				},
				// when window width is <= 480px
				575: {
					slidesPerView: 2,
					spaceBetween: 20
				},
				// when window width is <= 640px
				767: {
					slidesPerView: 3,
					spaceBetween: 30
				}
			}
		});
	});

	function tabscostume(tab) {

		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
				.eq($(this).index()).fadeIn(function () {
					var mySwiper = new Swiper($(this).find('.tabs__slider--js'), {
						// slidesPerView: 5,
						// init: false,
						slidesPerView: 'auto',
						watchOverflow: true,
						spaceBetween: 0,
						watchOverflow: true,
						// centeredSlides: true,
						// loop: true,
						// loopFillGroupWithBlank: true,
						// touchRatio: 0.2,
						// slideToClickedSlide: true, 

						pagination: {
							el: '.swiper-pagination',
							clickable: true,
						},

					});
				}).addClass('active');
			// swiper6.destroy();

		});
	}


	tabscostume('tabs');
	// mySwiper.init()

	// modal window

	$('.popup-with-move-anim').click(function () {
		var th = $(this);
		if (th.is(".tabs__link")) {

			 
			$(th.attr('href')).find(".order").val(th.data('order'));
		} else if (th.is(".s-why__btn")) {
			$(th.attr('href')).find(".form-wrap__title--js").html(th.data('title'));
			$(th.attr('href')).find(".order").val(th.data('btn') + ' ' + th.parent().find('.s-why__title').text());

		}
		else if(th.is('.header-block__btn')){
			
			$(th.attr('href')).find(".order")
			.val(th.data('btn')+"  " + th.parents(".header-block__inner").find(".h1").text());
		} 
		else {
			$(th.attr('href')).find(".form-wrap__title--js").html(th.data('title'));
			$(th.attr('href')).find(".order").val(th.data('btn'));

		}

		$(th.attr('href')).find(".form-wrap__title-sub--js").text('Заполните форму, и мы свяжемся с Вами в течение дня для уточнения деталей');
		$(th.attr('href')).find(".form-wrap__btn").val(th.data('btn'));
		$(th.attr('href')).find(".btn-name").text(th.data('btn'));
	})



	// form
	$("form").submit(function () { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: 'action.php', //Change
			data: th.serialize()
		}).success(function () {
			$.magnificPopup.close();
			$.magnificPopup.open({
				items: {
					src: '#thanks', // can be a HTML string, jQuery object, or CSS selector
					type: 'inline'
				}
			})
			// window.location.replace("/thanks.html");
			setTimeout(function () {
				// Done Functions
				th.trigger("reset");
				// $.magnificPopup.close();
			}, 4000);
			ym(53383120, 'reachGoal', 'zakaz');
		});
		return false;
	});
	// /form



	// / mask for input





	// кастомный инпут файл


	// или
	// $(".dropzone").dropzone({
	//  url: "/file/post",
	//  addRemoveLinks: true,
	//      acceptedFiles: 'image/*',
	//      uploadMultiple: true,
	//   });




	// $(".wow-wrap").each(function () {
	// var wowAnim = $(this).find(".s-dop__col," +
	//                 ".s-pick__col," +
	//                 ".s-condition__col");
	// wowAnim.each(function(i){

	// wowAnim.eq(i).attr("data-wow-delay", i*.1*2 + "s");

	//    var wow = new WOW({ mobile: false });
	//         wow.init();

	// });
	// });
	
	// листалка по стр
	$(" .top-nav__link").click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;

				$('html, body').animate({ scrollTop: destination }, 1100);

		return false;
});



$(".header-block__bot").click(function(){
	
	var elementClick = $(".s-servises");
	var destination = $(elementClick).offset().top;
	
	$('html, body').animate({ scrollTop: destination }, 1100);
	
	return false;
});
	
	var date = new Date();
	$('.year-js ').text(date.getFullYear());



 
});