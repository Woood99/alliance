import burgerMenu from './components/burger';
import headerFixed from './components/headerFixed';
import getHeightBlock from './modules/getHeightBlock';
import './functions/fix-fullheight';
import sliderBreakpoint from './modules/sliderBreakpoint';
import './components/validate';
import './components/map';

// ==================================================================

window.addEventListener('DOMContentLoaded', () => {
    burgerMenu();
    headerFixed();
    getHeightBlock('.header', '--header-height', true);
    sliderBreakpoint('.services__content', '.services', 1024, '.slider-pagination-primary');
})
