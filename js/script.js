const swiper = new Swiper('.channel-slider', {
	// Optional parameters
	loop: true,
	slidesPerView: 1,
	spaceBetween: 20,
	breakpoints: {
		2200: {
			slidesPerView: 6,
		},
		1900: {
			slidesPerView: 5.75,
		},
		1600: {
			slidesPerView: 5,
		},
		1300: {
			slidesPerView: 4,
		},
		1124: {
			slidesPerView: 3,
		},
		800: {
			slidesPerView: 2,
		},
	},
	// Navigation arrows
	navigation: {
		nextEl: '.channel-button-next',
		prevEl: '.channel-button-prev',
	},

});
const swiperr = new Swiper('.recommended-slider', {
	// Optional parameters
	loop: true,
	slidesPerView: 1,
	spaceBetween: 20,
	// Navigation arrows
	navigation: {
		nextEl: '.recommended-button-next',
		prevEl: '.recommended-button-prev',
	},
	breakpoints: {
		2200: {
			slidesPerView: 4,
		},
		1900: {
			slidesPerView: 2.95,
		},
		1600: {
			slidesPerView: 3,
		},
		1000: {
			slidesPerView: 2,
		},
	},

});
const swiperrr = new Swiper('.food-and-drink-slider', {
	// Optional parameters
	loop: true,
	slidesPerView: 1,
	spaceBetween: 20,
	// Navigation arrows
	navigation: {
		nextEl: '.food-and-drink-button-next',
		prevEl: '.food-and-drink-button-prev',
	},
	breakpoints: {
		2200: {
			slidesPerView: 6,
		},
		1900: {
			slidesPerView: 5.75,
		},
		1600: {
			slidesPerView: 5,
		},
		1300: {
			slidesPerView: 4,
		},
		1124: {
			slidesPerView: 3,
		},
		800: {
			slidesPerView: 2,
		},
	},
});

const moblieSearch = document.querySelector('.moblie-search');
const menuInput = document.querySelector('.menu__input')
moblieSearch.addEventListener('click', () => {
	menuInput.classList.toggle('open-input');
});


if (document.documentElement.scrollWidth <= 640) {
	swiper.destroy();
	swiperr.destroy();
	swiperrr.destroy();
}