window.addEventListener('scroll', e => {
	document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) // Update method
})



document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.scroll-container');

    let isScrollingEnabled = false;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                isScrollingEnabled = true;
                container.addEventListener('wheel', handleScroll);
            } else {
                isScrollingEnabled = false;
                container.removeEventListener('wheel', handleScroll);
            }
        });
    }, { threshold: 0 });

    observer.observe(container);

    function handleScroll(event) {
        if (isScrollingEnabled) {
            const maxScrollLeft = container.scrollWidth - container.clientWidth;
            const scrollLeft = container.scrollLeft;

            // Проверка, чтобы не прокручивать за пределы контейнера
            if (event.deltaY > 0 && scrollLeft < maxScrollLeft) {
                container.scrollLeft += event.deltaY;
                event.preventDefault();
            } else if (event.deltaY < 0 && scrollLeft > 0) {
                container.scrollLeft += event.deltaY;
                event.preventDefault();
            }

            // Переключение на вертикальную прокрутку, если достигли конца горизонтальной прокрутки
            if (container.scrollLeft <= 0 || container.scrollLeft >= maxScrollLeft) {
                container.style.overflowY = 'auto'; // Включаем вертикальную прокрутку
            } else {
                container.style.overflowY = 'hidden'; // Отключаем вертикальную прокрутку
            }
        }
    }
});




	
 const deadline = new Date('2025-06-01T00:00:00Z'); // Используем формат ISO 8601

function updateCountdown() {
	const now = new Date();
	const remainingTime = deadline - now;

	if (remainingTime <= 0) {
		document.getElementById("time").textContent = "Время истекло";
		return;
	}

	const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
	const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

	document.getElementById("time").textContent = 
		`${days} дней ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

	setTimeout(updateCountdown, 1000);
}
updateCountdown();


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
	
	
	
	
	
document.addEventListener("DOMContentLoaded", function() {
		const block = document.querySelector('.col3-grid'); 
		let animationStarted = false; 
	
		const options = {
			root: null,
			threshold: 0.1 
		};
	
		const observer = new IntersectionObserver(function(entries) {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					if (!animationStarted) {
						startCounting();
						animationStarted = true; 
						observer.disconnect(); 
					}
				}
			});
		}, options);
	
		observer.observe(block);
	
		const startCounting = () => {
			document.querySelectorAll('.count-number-value').forEach(counter => {
				const target = +counter.getAttribute('data-target');
				const duration = 10000; // Длительность анимации в миллисекундах (10 секунд)
				const stepTime = 50; // Интервал времени между обновлениями
				const steps = duration / stepTime; // Количество шагов для достижения целевого значения
				const increment = target / steps; // Шаг увеличения на каждом интервале
	
				let current = 0; // Начальное значение
	
				const updateCount = () => {
					if (current < target) {
						current += increment;
						// Устанавливаем значение, не превышающее целевое
						counter.innerText = Math.min(Math.ceil(current), target);
						setTimeout(updateCount, stepTime); // Обновляем значение через указанный интервал времени
					} else {
						// Устанавливаем окончательное значение
						counter.innerText = target;
					}
				};
	
				updateCount();
			});
		};
	});
	
	window.addEventListener('load', () => {
		const preloader = document.getElementById('preloader');
		const content = document.getElementById('content');
	
		// Проверяем, был ли прелоадер уже показан
		if (!localStorage.getItem('preloaderShown')) {
			// Если прелоадер не был показан ранее
			preloader.style.opacity = 1;
			preloader.style.visibility = 'visible';
	
			// После загрузки страницы скрываем прелоадер
			setTimeout(() => {
				preloader.style.opacity = 0;
				preloader.style.visibility = 'hidden';
				content.style.display = 'block';
				// Устанавливаем флаг в локальном хранилище
				localStorage.setItem('preloaderShown', 'true');
			}, 500); // Задержка перед скрытием прелоадера
		} else {
			// Если прелоадер уже был показан, сразу показываем основной контент
			preloader.style.display = 'none';
			content.style.display = 'block';
		}
	});
	