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
	slidesPerView: 2.7,
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
		320: {
          slidesPerView: 1.5,
		  slidesPerGroup: 1,
		  spaceBetween: 10
		},
		400: {
          slidesPerView: 1.8,
		  spaceBetween: 10
		},
		576: {
		  slidesPerView: 2,
		  spaceBetween: 10
		},
		768: {
		  slidesPerView: 2,
		  spaceBetween: 15
		},
		992: {
          slidesPerView: 3,
		  slidesPerGroup: 1,
		  spaceBetween: 20
		},
		1600: {
		  slidesPerView: 4.2,
		  slidesPerGroup: 1,
		  spaceBetween: 60,
		}
	}
};

//Заменяем параметры для слайдера с акциями на главной и инициализируем слайдер
indexSliderParams.navigation.nextEl = '.index-actions-swiper-button-next';
indexSliderParams.navigation.prevEl = '.index-actions-swiper-button-prev';
new Swiper(".index-actions-swiper", indexSliderParams);

//Заменяем параметры для слайдера со специалистами на главной и инициализируем слайдер
indexSliderParams.breakpoints[1600].slidesPerView = 3.5;
indexSliderParams.navigation.nextEl = '.index-staff-swiper-button-next';
indexSliderParams.navigation.prevEl = '.index-staff-swiper-button-prev';
new Swiper(".index-staff-swiper", indexSliderParams);

//Заменяем параметры для слайдера со статьями на главной и инициализируем слайдер
new Swiper(".index-articles-swiper", indexSliderParams);

//Карта 2GIS на главной
let map = document.getElementById("map");

if (map) {
    DG.then(function () {
        map = DG.map("map", {
            center: [55.342880, 86.094094],
            zoom: 17,
        });
        mapicon = DG.icon({
            iconUrl: "img/pin.svg" /* Иконка маркера */,
            iconAnchor: [19, 60],
            popupAnchor: [0, 20],
            className: "map-icon",
            iconSize: [38, 60] /* Размер иконки */,
        });
        DG.marker([55.342880, 86.094094], { icon: mapicon }).addTo(map); /* Координаты маркера */
    });
}