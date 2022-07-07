console.log("Вёрстка валидная +10\n Вёрстка семантическая +20\n Вёрстка соответствует макету +48\n Требования к css + 12\n Интерактивность, реализуемая через css +20\n \n Итого - 110");

(function () {
    const burger_menu = document.querySelector('.burger-menu');
    window.onscroll = () => {
        if (window.pageXOffset > 50) {
            burger_menu.classList.add('burger-menu-active');
        } else {
            burger_menu.classList.remove('burger-menu-active');
        }
    }

    const burger = document.querySelector('.burger');
    burger.addEventListener('click', () => {
        console.log('клик по иконке бургера');
        burger_menu.classList.add('burger-menu-active');
    });

    const burger_nav_close = document.querySelector('.burger-nav-close');
    burger_nav_close.addEventListener('click', () => {
        burger_menu.classList.remove('burger-menu-active');
    });
    // window.addEventListener('click', () => {
    //     burger_menu.classList.toggle('burger-menu-active');
    // })
    // header.addEventListener('click', () => {
    //     header.classList.toggle('burger-active');
    // });
} ());