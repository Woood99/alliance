import Swiper, {
    Navigation,
    Pagination
} from 'swiper';
Swiper.use([Navigation, Pagination]);


/**
 * @param {string} containerSelector container selector (where class swiper)
 * @param {string} sectionSelector slider section selector
 * @param {number} breakpoint screen resolution
 * @param {string} paginationSelector pagination selector
 */
const sliderBreakpoint = (containerSelector, sectionSelector, breakpoint, paginationSelector) => {
    if (document.querySelector(containerSelector)) {
        const container = document.querySelectorAll(containerSelector);
        container.forEach(el => {
            if (el && el.classList.contains('slider-mobile')) {
                const sectionEl = el.closest(sectionSelector);
                const paginationEl = sectionEl.querySelector(paginationSelector);
                let swiper;

                function breakpointSlider() {
                    if (window.innerWidth <= breakpoint && el.dataset.sliderBreakpoint === 'false') {
                        swiper = new Swiper(el, {
                            slidesPerView: 1,
                            spaceBetween: 16,
                            autoHeight: true,
                            observer: true,
                            observeParents: true,
                            speed: 600,
                            pagination: {
                                el: sectionEl.querySelector(paginationSelector),
                                clickable: true,
                            },
                            breakpoints: {
                                577: {
                                    slidesPerView: 2,
                                },
                            }
                        })
                        el.dataset.sliderBreakpoint = 'true';
                        paginationEl.classList.remove('hide');
                    }
                    if (window.innerWidth > breakpoint) {
                        el.dataset.sliderBreakpoint = 'false';
                        paginationEl.classList.add('hide');
                        if (el.classList.contains('swiper-initialized')) swiper.destroy();
                    }
                }
                breakpointSlider();
                window.addEventListener('resize', breakpointSlider);
            }
        })
    }
};
export default sliderBreakpoint;
