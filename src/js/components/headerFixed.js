const headerFixed = () => {
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > (header.clientHeight / 1.5)) {
            header.classList.add('header-scroll');
        } else {
            header.classList.remove('header-scroll');
        }
    });
};

export default headerFixed;