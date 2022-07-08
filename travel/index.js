// console.log("Вёрстка валидная +10\n Вёрстка семантическая +20\n Вёрстка соответствует макету +48\n Требования к css + 12\n Интерактивность, реализуемая через css +20\n \n Итого - 110");
console.log("Ваша оценка - 83 балла \nОтзыв по пунктам ТЗ:\nЧастично выполненные пункты:\n1) при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, также скрытие меню происходит если сделать клик вне данного окна \nОтзыв: не реализован пункт 'вне'\nВыполненные пункты:\n1) Блок header\n2) Секция preview \n3) Секция steps \n4) Секция destinations \n5) Секция stories \n6) Блок footer \n7) нет полосы прокрутки при ширине страницы от 1440рх до 390px \n8) нет полосы прокрутки при ширине страницы от 390px до 320рх \n9) при ширине страницы 390рх панель навигации скрывается, появляется бургер-иконка \n10) при нажатии на бургер-иконку плавно появляется адаптивное меню \n11) адаптивное меню соответствует макету \n12) при нажатии на крестик адаптивное меню плавно скрывается уезжая за экран \n13) ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям (все, кроме Account, она пока просто закрывает меню) \n");

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

    // if (burger_menu.classList.contains('burger-menu-active')) {
    //     console.log(1);
    //     window.addEventListener('click', () => {
    //         burger_menu.classList.remove('burger-menu-active');
    //     })
    // }


    // const popup = document.querySelector(".pop-up");

    // document.onclick = function (element) {
    //     if (element.target.className != "burger-menu") {
    //         burger_menu.classList.remove('burger-menu-active');
    //     };
    // };


    const burger_nav_close = document.querySelector('.burger-nav-close');
    burger_nav_close.addEventListener('click', () => {
        burger_menu.classList.remove('burger-menu-active');
    });


    // window.addEventListener('click', () => {
    //     if (burger_menu.classList.contains('burger-menu-active')) {
    //         console.log(1);
    //         burger_menu.classList.remove('burger-menu-active');
    //              }
    //         // }
    //     // burger_menu.classList.toggle('burger-menu-active');
    // })
    // header.addEventListener('click', () => {
    //     header.classList.toggle('burger-active');
    // });
} ());

// (function () {
//     const burger_menu = document.querySelector('.burger-menu');
//     document.addEventListener('click', () => {
//         if (burger_menu.classList.contains('burger-menu-active')) {
//             console.log(1);
//             burger_menu.classList.remove('burger-menu-active');
//                  }
//             // }
//         // burger_menu.classList.toggle('burger-menu-active');
//     })
// });