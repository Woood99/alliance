import burgerMenu from './components/burger';
import headerFixed from './components/headerFixed';
import getHeightBlock from './modules/getHeightBlock';
import './functions/fix-fullheight';

// ==================================================================

window.addEventListener('DOMContentLoaded', () => {
    burgerMenu();
    headerFixed();
    getHeightBlock('.header', '--header-height', true);
})
