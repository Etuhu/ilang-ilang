//Вызываем активацию табов при наведении вместо клика
$(document).ready(function () {
	$(".news-list > .news-list-item").hover(function () {
		$(this).tab("show");
	});
});

//Слайдеры
const promoSwiper = new Swiper(".promo-swiper", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    speed: 1000,
    simulateTouch: false,
    // autoplay: {
    //     delay: 5000,
    // },
    spaceBetween: 0,
    watchOverflow: true,
    navigation: {
        nextEl: ".promo-swiper-button-next",
        prevEl: ".promo-swiper-button-prev",
    },
    pagination: {
      el: '.promo-swiper-pagination',
      clickable: 'true',
    },
});


//Параметры для типового слайдера на главной
let indexSliderParams = {
	slidesPerView: 4.2,
	slidesPerGroup: 1,
	speed: 500,
	grabCursor: false,
	simulateTouch: true,
	spaceBetween: 60,
    slidesOffsetBefore: 900,
	watchOverflow: true,
	touchReleaseOnEdges: true,
	freeMode: {
		enabled: true,
		sticky: true,
	},
	navigation: {},
	pagination: {},
	breakpoints: {
		300: {
          slidesPerView: 1.5,
		  slidesPerGroup: 1,
		  spaceBetween: 10,
		  slidesOffsetBefore: 10
		},
		450: {
          slidesPerView: 2.4,
		  slidesPerGroup: 1,
		  spaceBetween: 10,
		  slidesOffsetBefore: 10
		},
		576: {
			slidesPerView: 3.3,
			spaceBetween: 15,
			slidesOffsetBefore: 200
		},
		768: {
		  slidesPerView: 3.5,
		  spaceBetween: 15,
		  slidesOffsetBefore: 250
		},
		992: {
		  slidesPerView: 3.6,
		  spaceBetween: 15,
		  slidesOffsetBefore: 300
		},
		1200: {
          slidesPerView: 3.7,
		  slidesPerGroup: 1,
		  spaceBetween: 30,
		  slidesOffsetBefore: 300
		},
		1400: {
		  slidesPerView: 4,
		  slidesPerGroup: 1,
		  spaceBetween: 40,
		  slidesOffsetBefore: 400
		},
		1700: {
		  slidesPerView: 4,
		  slidesPerGroup: 1,
		  spaceBetween: 40,
		  slidesOffsetBefore: 600
		},
		1921: {
		  slidesPerView: 4.2,
		  slidesPerGroup: 1,
		  spaceBetween: 60,
		  slidesOffsetBefore: 900
		}
	}
};

//Заменяем параметры для слайдера с акциями на главной и инициализируем слайдер
indexSliderParams.navigation.nextEl = '.actions-swiper-button-next';
indexSliderParams.navigation.prevEl = '.actions-swiper-button-prev';
new Swiper(".actions-swiper", indexSliderParams);

//Заменяем параметры для слайдера со специалистами на главной и инициализируем слайдер
indexSliderParams.breakpoints[300].slidesPerView = 1.3;
indexSliderParams.breakpoints[450].slidesPerView = 1.8;
indexSliderParams.breakpoints[576].slidesPerView = 2.5;
indexSliderParams.breakpoints[768].slidesPerView = 3;
indexSliderParams.breakpoints[992].slidesPerView = 3;
indexSliderParams.breakpoints[1200].slidesPerView = 3;
indexSliderParams.breakpoints[1400].slidesPerView = 3.2;
indexSliderParams.breakpoints[1700].slidesPerView = 3.5;
indexSliderParams.breakpoints[1921].slidesPerView = 3.6;
indexSliderParams.navigation.nextEl = '.staff-swiper-button-next';
indexSliderParams.navigation.prevEl = '.staff-swiper-button-prev';
new Swiper(".staff-swiper", indexSliderParams);

//Заменяем параметры для слайдера со статьями на главной и инициализируем слайдер
indexSliderParams.navigation.nextEl = '.index-articles-swiper-button-next';
indexSliderParams.navigation.prevEl = '.index-articles-swiper-button-prev';
new Swiper(".index-articles-swiper", indexSliderParams);

//Заменяем параметры для слайдера с работами на странице специалиста
indexSliderParams.navigation.nextEl = '.works-swiper-button-next';
indexSliderParams.navigation.prevEl = '.works-swiper-button-prev';
new Swiper(".works-swiper", indexSliderParams);

//Заменяем параметры для слайдера галереи на странице О клинике
indexSliderParams.breakpoints[300].slidesPerView = 2.5;
indexSliderParams.breakpoints[450].slidesPerView = 3.5;
indexSliderParams.breakpoints[576].slidesPerView = 3.5;
indexSliderParams.breakpoints[576].slidesOffsetBefore = 150;
indexSliderParams.breakpoints[768].slidesPerView = 4.5;
indexSliderParams.breakpoints[768].slidesOffsetBefore = 200;
indexSliderParams.breakpoints[992].slidesPerView = 3.8;
indexSliderParams.breakpoints[1200].slidesPerView = 4.2;
indexSliderParams.breakpoints[1200].spaceBetween = 25;
indexSliderParams.breakpoints[1400].slidesPerView = 3.8;
indexSliderParams.breakpoints[1400].slidesOffsetBefore = 600;
indexSliderParams.breakpoints[1921].spaceBetween = 45;
indexSliderParams.breakpoints[1921].slidesOffsetBefore = 980;
indexSliderParams.breakpoints[1921].slidesPerView = 4.4;
indexSliderParams.navigation.nextEl = '.gallery-swiper-button-next';
indexSliderParams.navigation.prevEl = '.gallery-swiper-button-prev';
new Swiper(".gallery-swiper", indexSliderParams);

//Параметры для слайдера с фотографиями зала
let yogaSliderParams = {
	slidesPerView: 1.7,
	slidesPerGroup: 1,
	speed: 500,
	grabCursor: false,
	simulateTouch: true,
	spaceBetween: 40,
    slidesOffsetBefore: 900,
	watchOverflow: true,
	touchReleaseOnEdges: true,
	freeMode: {
		enabled: true,
		sticky: true,
	},
	navigation: {
        nextEl: ".yoga-swiper-button-next",
        prevEl: ".yoga-swiper-button-prev",
	},
	pagination: {},
	breakpoints: {
		300: {
          slidesPerView: 1.3,
		  slidesPerGroup: 1,
		  spaceBetween: 10,
		  slidesOffsetBefore: 10
		},
		450: {
          slidesPerView: 1.5,
		  slidesPerGroup: 1,
		  spaceBetween: 10,
		  slidesOffsetBefore: 10
		},
		576: {
			slidesPerView: 1.8,
			spaceBetween: 15,
			slidesOffsetBefore: 200
		},
		768: {
		  slidesPerView: 2,
		  spaceBetween: 15,
		  slidesOffsetBefore: 250
		},
		992: {
		  slidesPerView: 2.1,
		  spaceBetween: 15,
		  slidesOffsetBefore: 300
		},
		1200: {
          slidesPerView: 2.3,
		  slidesPerGroup: 1,
		  spaceBetween: 30,
		  slidesOffsetBefore: 300
		},
		1400: {
		  slidesPerView: 2,
		  slidesPerGroup: 1,
		  spaceBetween: 30,
		  slidesOffsetBefore: 400
		},
		1700: {
		  slidesPerView: 2.2,
		  slidesPerGroup: 1,
		  spaceBetween: 40,
		  slidesOffsetBefore: 600
		},
		1921: {
		  slidesPerView: 2.5,
		  slidesPerGroup: 1,
		  spaceBetween: 40,
		  slidesOffsetBefore: 900,
		}
	}
};

//Заменяем параметры для слайдера с фотографиями зала
new Swiper(".yoga-swiper", yogaSliderParams);

//Карта 2GIS на главной
let map = document.getElementById("map");

if (map) {
    DG.then(function () {
        map = DG.map("map", {
            center: [55.342937, 86.094272],
            zoom: 17,
        });
        mapicon = DG.icon({
            iconUrl: "img/pin.svg" /* Иконка маркера */,
            iconAnchor: [19, 60],
            popupAnchor: [0, 20],
            className: "map-icon",
            iconSize: [38, 60] /* Размер иконки */,
        });
        DG.marker([55.342937, 86.094272], { icon: mapicon }).addTo(map); /* Координаты маркера */
    });
}

//Сворачиваем меню при клике на один из пунктов
let collapseMenu = document.querySelector("#sitemenu");
let navLinks = collapseMenu.querySelectorAll(".menu-item a");
navLinks.forEach(function(navLink){
	navLink.addEventListener("click", function () {
		bootstrap.Collapse.getInstance(collapseMenu).hide();
	});
});