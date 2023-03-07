/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/burger */ "./src/js/components/burger.js");
/* harmony import */ var _components_headerFixed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/headerFixed */ "./src/js/components/headerFixed.js");
/* harmony import */ var _modules_getHeightBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/getHeightBlock */ "./src/js/modules/getHeightBlock.js");
/* harmony import */ var _functions_fix_fullheight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/fix-fullheight */ "./src/js/functions/fix-fullheight.js");





// ==================================================================

window.addEventListener('DOMContentLoaded', () => {
  (0,_components_burger__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_components_headerFixed__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_modules_getHeightBlock__WEBPACK_IMPORTED_MODULE_2__["default"])('.header', '--header-height', true);
});

/***/ }),

/***/ "./src/js/_functions.js":
/*!******************************!*\
  !*** ./src/js/_functions.js ***!
  \******************************/
/***/ (() => {


// ========================================================================================

// Модальное окно
// import popup from './functions/popup'
// const call = new popup();

// ========================================================================================

// Табы
// import tabs from "./functions/tabs";
// tabs();

// ========================================================================================

// Файл со слайдерами
// import "./functions/sliders";

// ========================================================================================

// import validateForms from './functions/validate-forms';
// const rules1 = [...];

// const afterForm = () => {
//   console.log('Произошла отправка');
// };

// validateForms('.form-1', rules1, afterForm);

// ========================================================================================

// Спойлеры
// import spollers from "./functions/spollers";
// spollers();

// ========================================================================================

// Звёздный рейтинг 
// import formRating from "./functions/rating";
// formRating();

// ========================================================================================

// quantity
// import quantity from './functions/quantity'
// quantity();

// ========================================================================================

// Динамический адаптив
// import "./functions/dynamic-adapt";

// ========================================================================================

/***/ }),

/***/ "./src/js/_vendor.js":
/*!***************************!*\
  !*** ./src/js/_vendor.js ***!
  \***************************/
/***/ (() => {

// ========================================================================================

// Плагин кастом-скролла
// import 'simplebar';

// ========================================================================================

// Анимации по скроллу
// import AOS from 'aos';
// AOS.init();

// ========================================================================================

// Галерея

// Документация: https://www.lightgalleryjs.com/docs/
// Сниппет(HTML): gallery

// Подключение базового набора функционала
// import lightGallery from 'lightgallery';

// Плагины
// lgZoom, lgAutoplay, lgComment, lgFullscreen, lgHash, lgPager, lgRotate, 
// lgShare, lgThumbnail, lgVideo, lgMediumZoom
// import lgFullscreen from 'lightgallery/plugins/fullscreen/lg-fullscreen.min.js';

// Запуск
// const galleries = document.querySelectorAll('#galleryID');
// galleries.forEach(gallery => {
//     lightGallery(gallery, {
//         // plugins: [lgFullscreen],
//         licenseKey: '7EC452A9-0CFD441C-BD984C7C-17C8456E',
//         speed: 500,
//     });
// });

// ========================================================================================

/***/ }),

/***/ "./src/js/components/burger.js":
/*!*************************************!*\
  !*** ./src/js/components/burger.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modules_disableScroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/disableScroll */ "./src/js/modules/disableScroll.js");
/* harmony import */ var _modules_enableScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/enableScroll */ "./src/js/modules/enableScroll.js");


const burgerMenu = () => {
  const burger = document.querySelector('[data-burger]');
  const menu = document.querySelector('[data-menu]');
  const menuItems = document.querySelectorAll('[data-menu-item]');
  const overlay = document.querySelector('[data-menu-overlay]');
  if (burger && menu) {
    burger.addEventListener('click', () => {
      !menu.classList.contains('menu--active') ? openMenu() : closeMenu();
    });
  }
  if (overlay) {
    overlay.addEventListener('click', () => {
      closeMenu();
    });
  }
  if (menuItems.length) {
    menuItems.forEach(el => {
      el.addEventListener('click', () => {
        closeMenu();
      });
    });
  }
  function openMenu() {
    burger.classList.add('burger--active');
    menu.classList.add('menu--active');
    burger.setAttribute('aria-expanded', 'true');
    burger.setAttribute('aria-label', 'Закрыть меню');
    (0,_modules_disableScroll__WEBPACK_IMPORTED_MODULE_0__["default"])();
  }
  function closeMenu() {
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Открыть меню');
    burger.classList.remove('burger--active');
    menu.classList.remove('menu--active');
    (0,_modules_enableScroll__WEBPACK_IMPORTED_MODULE_1__["default"])();
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burgerMenu);

/***/ }),

/***/ "./src/js/components/headerFixed.js":
/*!******************************************!*\
  !*** ./src/js/components/headerFixed.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const headerFixed = () => {
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > header.clientHeight / 1.5) {
      header.classList.add('header-scroll');
    } else {
      header.classList.remove('header-scroll');
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerFixed);

/***/ }),

/***/ "./src/js/functions/fix-fullheight.js":
/*!********************************************!*\
  !*** ./src/js/functions/fix-fullheight.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _throttle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./throttle */ "./src/js/functions/throttle.js");

const fixFullheight = () => {
  let vh = window.innerHeight;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};
let fixHeight = (0,_throttle__WEBPACK_IMPORTED_MODULE_0__["default"])(fixFullheight);
fixHeight();
window.addEventListener('resize', fixHeight);

/***/ }),

/***/ "./src/js/functions/throttle.js":
/*!**************************************!*\
  !*** ./src/js/functions/throttle.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const throttle = function (func) {
  let delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 250;
  let isThrottled = false;
  let savedArgs = null;
  let savedThis = null;
  return function wrap() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (isThrottled) {
      savedArgs = args, savedThis = this;
      return;
    }
    func.apply(this, args);
    isThrottled = true;
    setTimeout(() => {
      isThrottled = false;
      if (savedThis) {
        wrap.apply(savedThis, savedArgs);
        savedThis = null;
        savedArgs = null;
      }
    }, delay);
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (throttle);

/***/ }),

/***/ "./src/js/modules/disableScroll.js":
/*!*****************************************!*\
  !*** ./src/js/modules/disableScroll.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const disableScroll = () => {
  const fixBlocks = document?.querySelectorAll('.fixed-block');
  const pagePosition = window.scrollY;
  const paddingOffset = `${window.innerWidth - document.body.offsetWidth}px`;
  document.documentElement.style.scrollBehavior = 'none';
  fixBlocks.forEach(el => {
    el.style.paddingRight = paddingOffset;
  });
  document.body.style.paddingRight = paddingOffset;
  document.body.classList.add('dis-scroll');
  document.body.dataset.position = pagePosition;
  document.body.style.top = `-${pagePosition}px`;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (disableScroll);

/***/ }),

/***/ "./src/js/modules/enableScroll.js":
/*!****************************************!*\
  !*** ./src/js/modules/enableScroll.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const enableScroll = () => {
  const fixBlocks = document?.querySelectorAll('.fixed-block');
  const body = document.body;
  const pagePosition = parseInt(document.body.dataset.position, 10);
  fixBlocks.forEach(el => {
    el.style.paddingRight = '0px';
  });
  document.body.style.paddingRight = '0px';
  document.body.style.top = 'auto';
  document.body.classList.remove('dis-scroll');
  window.scroll({
    top: pagePosition,
    left: 0
  });
  document.body.removeAttribute('data-position');
  document.documentElement.style.scrollBehavior = 'smooth';
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (enableScroll);

/***/ }),

/***/ "./src/js/modules/getHeightBlock.js":
/*!******************************************!*\
  !*** ./src/js/modules/getHeightBlock.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getHeightBlock = function (selector, nameVariable) {
  let resize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  const element = document.querySelector(selector);
  getHeight();
  if (resize) {
    window.addEventListener('resize', getHeight);
  }
  function getHeight() {
    if (element) {
      const elementHeight = element.offsetHeight;
      if (nameVariable) {
        document.querySelector(':root').style.setProperty(nameVariable, `${elementHeight}px`);
      }
      return elementHeight;
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getHeightBlock);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_vendor */ "./src/js/_vendor.js");
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_functions */ "./src/js/_functions.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_functions__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_components */ "./src/js/_components.js");



})();

/******/ })()
;
//# sourceMappingURL=main.js.map