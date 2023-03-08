function removeAllControls(map) {
    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
}
if (document.querySelector('#yamap')) {
    let boolean = true;
    window.addEventListener('scroll', () => {
        if (boolean === true) {
            getMapsApi();
            setTimeout(() => {
                maps();
            }, 500);
            boolean = false;
        }
    })
    
    function getMapsApi() {
        let script = document.createElement('script');
        script.src = 'https://api-maps.yandex.ru/2.1/?apikey=ваш API-ключ&lang=ru_RU';
        script.type = "text/javascript";
        document.getElementById('yamap').replaceWith(script);
    }

    function maps() {
        let map = new ymaps.Map('map', {
            center: [48.70315181851585, 44.498699276790624],
            zoom: 18
        })
        removeAllControls(map);

        let placemark1 = new ymaps.Placemark([48.70315181851585, 44.498699276790624], {}, {
            iconLayout: "default#image",
            iconImageHref: "./img/location.svg",
            iconImageSize: [40, 40],
            iconImageOffset: [-17, -27]
        });
        map.geoObjects.add(placemark1);
        ymaps.ready(map);
        document.querySelector('.map__img').remove();
    }
}
