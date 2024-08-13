window.addEventListener('scroll', e => {
	document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) // Update method
})
// gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
// ScrollSmoother.create({
// 	wrapper: '.wrapper',
// 	content: '.content'
// })


const scrollText = document.querySelector('.scroll-text');
	const container = document.querySelector('#text-scroll');
	const textWidth = scrollText.offsetWidth; // Ширина текста

	function handleScroll() {
		const containerRect = container.getBoundingClientRect();
		const viewportHeight = window.innerHeight;

		// Проверка, находится ли контейнер в видимой области
		if (containerRect.top < viewportHeight && containerRect.bottom > 0) {
			// Контейнер видим

			// Скорость перемещения текста
			const speed = 0.05; // Регулируйте скорость прокрутки текста

			// Получаем текущее значение прокрутки
			const scrollAmount = window.scrollY;

			// Расчет смещения текста
			const containerWidth = container.offsetWidth;
			const maxTranslation = textWidth - containerWidth;
			let translation = scrollAmount * speed;

			// Ограничение смещения текста
			translation = Math.min(translation, maxTranslation);
			scrollText.style.transform = `translateX(${translation}px)`;
		} else {
			// Контейнер не видим, сбрасываем смещение текста
			scrollText.style.transform = `translateX(0px)`;
		}
	}

	window.addEventListener('scroll', handleScroll);
	window.addEventListener('resize', handleScroll);

// Устанавливаем дату и время окончания обратного отсчета
const deadline = new Date(Date.now() + 312 * 24 * 60 * 60 * 1000 + 23 * 60 * 60 * 1000 + 42 * 60 * 1000 + 16 * 1000);

function updateCountdown() {
	const now = new Date();
	const remainingTime = deadline - now;

	const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
	const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

	// Обновляем текст внутри одного элемента
	document.getElementById("time").textContent = 
		`${days} дней ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

	// Обновляем каждую секунду
	setTimeout(updateCountdown, 1000);
}


	$(document).ready(function () {
		var mySwiper = new Swiper(".swiper", {
		  autoHeight: true,
		  autoplay: false,
		  speed: 500,
		  direction: "horizontal",
		  navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
		  },
		  pagination: {
			el: ".swiper-pagination",
			type: "progressbar"
		  },
		  loop: false,
		  effect: "slide",
		  spaceBetween: 30,
		  on: {
			init: function () {
			  $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
			  $(".swiper-pagination-custom .swiper-pagination-switch").eq(0).addClass("active");
			},
			slideChangeTransitionStart: function () {
			  $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
			  $(".swiper-pagination-custom .swiper-pagination-switch").eq(mySwiper.realIndex).addClass("active");
			}
		  }
		});
		$(".swiper-pagination-custom .swiper-pagination-switch").click(function () {
		  mySwiper.slideTo($(this).index());
		  $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
		  $(this).addClass("active");
		});
	  });
	  
	  