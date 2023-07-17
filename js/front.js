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
		  spaceBetween: 20,
		  slidesOffsetBefore: 10
		},
		400: {
          slidesPerView: 2.7,
		  slidesPerGroup: 1,
		  spaceBetween: 20,
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
indexSliderParams.navigation.nextEl = '.index-actions-swiper-button-next';
indexSliderParams.navigation.prevEl = '.index-actions-swiper-button-prev';
new Swiper(".index-actions-swiper", indexSliderParams);

//Заменяем параметры для слайдера со специалистами на главной и инициализируем слайдер
indexSliderParams.breakpoints[300].slidesPerView = 2.5;
indexSliderParams.breakpoints[400].slidesPerView = 1.8;
indexSliderParams.breakpoints[576].slidesPerView = 3.3;
indexSliderParams.breakpoints[768].slidesPerView = 3;
indexSliderParams.breakpoints[992].slidesPerView = 3;
indexSliderParams.breakpoints[1200].slidesPerView = 3;
indexSliderParams.breakpoints[1400].slidesPerView = 3.2;
indexSliderParams.breakpoints[1700].slidesPerView = 3.5;
indexSliderParams.breakpoints[1921].slidesPerView = 3.6;
indexSliderParams.navigation.nextEl = '.index-staff-swiper-button-next';
indexSliderParams.navigation.prevEl = '.index-staff-swiper-button-prev';
new Swiper(".index-staff-swiper", indexSliderParams);

//Заменяем параметры для слайдера со статьями на главной и инициализируем слайдер
indexSliderParams.navigation.nextEl = '.index-articles-swiper-button-next';
indexSliderParams.navigation.prevEl = '.index-articles-swiper-button-prev';
new Swiper(".index-articles-swiper", indexSliderParams);

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