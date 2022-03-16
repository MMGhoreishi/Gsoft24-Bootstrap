new WOW().init();
var n=0;
jQuery(document).ready(function () {

	$('.loading').addClass('d-none');
	SmoothScroll();
	SliderEtc("false");
	AnimationHeader();
	ClickShowVideoPortfolio1();
	OpenCloseNavbar();
});

function OpenCloseNavbar() {
	$("#OpenMainNBtn").on('click', function (event) {
		if(n==0){
			$('.navbar').addClass('bg-info2');
			n++;
		}
		else{
			if(n == 1){
				$('.navbar').removeClass('bg-info2');
				n=0;
			}
		}

	});
}

function ClickShowVideoPortfolio1() {
	$("#btn-Portfolio1").on('click', function (event) {
		$('.text-Portfolio h3').text('Doctor Web Pages');
		$('.text-Portfolio p').text('This video is about doctor web pages');
		$("#myVideoTag > source").attr("src", "videos/1.mp4");
		$("#myVideoTag")[0].load();
	});
	$("#btn-Portfolio2").on('click', function (event) {
		$('.text-Portfolio h3').text('Teacher Web Pages');
		$('.text-Portfolio p').text('This video is about teacher web pages');
		$("#myVideoTag > source").attr("src", "videos/2.mp4");
		$("#myVideoTag")[0].load();
	});
	$("#btn-Portfolio3").on('click', function (event) {
		$('.text-Portfolio h3').text('Cms web pages');
		$('.text-Portfolio p').text('This video is about cms web pages');
		$("#myVideoTag > source").attr("src", "videos/3.mp4");
		$("#myVideoTag")[0].load();
	});
}

function SmoothScroll() {
	$("a").on('click', function (event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function () {
				window.location.hash = hash;
			});
		}
	});
	let mainNavLinks = document.querySelectorAll("nav ul li a");
	let lastId;
	let cur = [];
	window.addEventListener("scroll", event => {
		let fromTop = window.scrollY + 130;
		mainNavLinks.forEach(link => {
			let section = document.querySelector(link.hash);
			if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
				link.classList.add("active");
			} else {
				link.classList.remove("active");
			}
		});
	});
}
$(window).bind('scroll', function () {
	if ($(window).scrollTop() > 50) {
		$('.navbar').addClass('fixed');
	} else {
		$('.navbar').removeClass('fixed');
	}
});

function AnimationHeader() {
	var quotes = $(".quotes");
	var quoteIndex = -1;

	function showNextQuote() {
		++quoteIndex;
		quotes.eq(quoteIndex % quotes.length).fadeIn(2000).delay(2000).fadeOut(2000, showNextQuote);
	}
	showNextQuote();
	var quotes2 = $(".quotes2");
	var quoteIndex2 = -1;

	function showNextQuote2() {
		++quoteIndex2;
		quotes2.eq(quoteIndex2 % quotes2.length).fadeIn(2000).delay(2000).fadeOut(2000, showNextQuote2);
	}
	showNextQuote2();
}
$(window).on('resize', function () {
	SliderEtc("true");
});

function SliderEtc(s) {
	if ($(".Pinformation").is(":visible")) {
		var height = $('.Portfolio img').height();
		var width = $('.Portfolio img').width();
		$(".Pinformation").css("height", height);
		$(".Pinformation").css("width", width);
	}
}