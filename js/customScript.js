// Скрипт появления фона Navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
	var currentScrollPos = window.pageYOffset;
	// проверка прокрутки
	if (prevScrollpos < 20) {
		document.getElementById("header").classList.remove('_active');
	} else {
		document.getElementById("header").classList.add('_active');
	}
	prevScrollpos = currentScrollPos;
}



// плавная прокрутка по якорям
$('a[href*=#]:not([href=#])').click(function () {
	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		headerHeight = $('#header').height();
		if (target.length) {
			$('html,body').animate({
				scrollTop: target.offset().top - headerHeight
			}, 500, function () {
				target.focus();
			});
			return false;
		}
	}
});


// слайдер slick
$('.slider-lift').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	swipeToSlide: true,  // разрешить пролистывать свайпом более заданного slidesToScroll
	waitForAnimate: false,  // не ждать анимацию при принудительной прокрутке
	arrows: false,
	dots: true,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				arrows: true,
				dots: false
			}
		}
	]
});
// доп кнопка next в слайдере
$('.new-next').click(function () {
	$(".slider-lift").slick("slickNext");
});


// map Первый слайд
const mapDots = document.querySelectorAll(".info-dot");
const mapDotsSec = document.querySelectorAll(".info-dot-sec");
const mapDotsTree = document.querySelectorAll(".info-dot-three");
if (mapDots[0] != null) {
	function removeDot() {
		mapDots.forEach((dot) => {
			dot.classList.remove("info-dot--disabled");
		});
	}
	function addDot() {
		mapDots.forEach((dot) => {
			dot.classList.add("info-dot--disabled");
		});
	}

	mapDots.forEach((dot) => {
		dot.addEventListener("mouseover", () => {
			addDot();
		});
		dot.addEventListener("mouseleave", () => {
			removeDot();
		});
	});

	var i = 0;

	function myLoop() {
		setTimeout(function () {
			mapDots.forEach((dot) => {
				dot.classList.remove("info-dot--active");
			});
			mapDots[i].classList.add("info-dot--active");
			i++;
			if (i < mapDots.length) {
				myLoop();
			} else {
				i = 0;
				myLoop();
			}
		}, 4000);
	}

	myLoop();
}
// map второй слайд
if (mapDotsSec[0] != null) {
	function removeDotSec() {
		mapDotsSec.forEach((dotSec) => {
			dotSec.classList.remove("info-dot--disabled");
		});
	}
	function addDotSec() {
		mapDotsSec.forEach((dotSec) => {
			dotSec.classList.add("info-dot--disabled");
		});
	}

	mapDotsSec.forEach((dotSec) => {
		dotSec.addEventListener("mouseover", () => {
			addDotSec();
		});
		dotSec.addEventListener("mouseleave", () => {
			removeDotSec();
		});
	});

	var sec = 0;

	function myLoopSec() {
		setTimeout(function () {
			mapDotsSec.forEach((dotSec) => {
				dotSec.classList.remove("info-dot--active");
			});
			mapDotsSec[sec].classList.add("info-dot--active");
			sec++;
			if (sec < mapDotsSec.length) {
				myLoopSec();
			} else {
				sec = 0;
				myLoopSec();
			}
		}, 4000);
	}

	myLoopSec();
}
// map третий слайд
if (mapDotsTree[0] != null) {
	function removeDotTree() {
		mapDotsTree.forEach((dotTree) => {
			dotTree.classList.remove("info-dot--disabled");
		});
	}
	function addDotTree() {
		mapDotsTree.forEach((dotTree) => {
			dotTree.classList.add("info-dot--disabled");
		});
	}

	mapDotsTree.forEach((dotTree) => {
		dotTree.addEventListener("mouseover", () => {
			addDotTree();
		});
		dotTree.addEventListener("mouseleave", () => {
			removeDotTree();
		});
	});

	var three = 0;

	function myLoopTree() {
		setTimeout(function () {
			mapDotsTree.forEach((dotTree) => {
				dotTree.classList.remove("info-dot--active");
			});
			mapDotsTree[three].classList.add("info-dot--active");
			three++;
			if (three < mapDotsTree.length) {
				myLoopTree();
			} else {
				three = 0;
				myLoopTree();
			}
		}, 4000);
	}

	myLoopTree();
}

// isMobile для работы map
const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows()
		);
	},
};
if (isMobile.any()) {
	document.body.classList.add("touch");
} else {
	document.body.classList.add("mouse");
}


// маска на телефон
let selector = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(selector);
let selector2 = document.querySelector('input[type="tel"]');
selector2.addEventListener('input', function () {
	const re = /^\d*(\.\d+)?$/
});