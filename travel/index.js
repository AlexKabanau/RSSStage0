// console.log("Вёрстка валидная +10\n Вёрстка семантическая +20\n Вёрстка соответствует макету +48\n Требования к css + 12\n Интерактивность, реализуемая через css +20\n \n Итого - 110");
// console.log("Ваша оценка - 83 балла \nОтзыв по пунктам ТЗ:\nЧастично выполненные пункты:\n1) при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, также скрытие меню происходит если сделать клик вне данного окна \nОтзыв: не реализован пункт 'вне'\nВыполненные пункты:\n1) Блок header\n2) Секция preview \n3) Секция steps \n4) Секция destinations \n5) Секция stories \n6) Блок footer \n7) нет полосы прокрутки при ширине страницы от 1440рх до 390px \n8) нет полосы прокрутки при ширине страницы от 390px до 320рх \n9) при ширине страницы 390рх панель навигации скрывается, появляется бургер-иконка \n10) при нажатии на бургер-иконку плавно появляется адаптивное меню \n11) адаптивное меню соответствует макету \n12) при нажатии на крестик адаптивное меню плавно скрывается уезжая за экран \n13) ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям (все, кроме Account, она пока просто закрывает меню) \n");
console.log("Ваша оценка - 105 баллов \nОтзыв по пунктам ТЗ:\nЧастично выполненные пункты:\n1) на десктоп варианте при клике на урезанную картинку слева или справа изображение меняется по принципу карусели(например если нажать правую картинку та что была в центре на уезжает налево, а та что была видна наполовину оказывается справа) \nОтзыв: картинка не переезжает\n2) Три точки внизу отображают 'номер слайда', то есть каждому слайду соответствует свой кружочек, который становится активным при нахождении соответствующего ему слайда в центре. На мобильном варианте картинка одна, но поверх нее появляются стрелочки навигации (можно сделать как карусель или же затемнять кнопку если слайдер достиг края)\nОтзыв: центральная картинка проскакивается\nВыполненные пункты:\n1) Анимации плавного перемещения для слайдера \n2) логин попап соответствует верстке его закрытие происходит при клике вне попапа \n3) логин попап имеет 2 инпута (логин и пароль) при нажатии на кнопку Sign In показывается браузерный алерт с введенными данными (для реализации можно использовать тег) \n4) Нажатие на кнопку Register на Login попапе меняет разметку попапа на разметку Sign Up попапа согласно макету (То есть нажатие не закрывает модал а просто меняет его наполнение) \n");

(function () { /*скрытие при скроле*/ 

    const burger_menu = document.querySelector('.burger-menu');
    window.onscroll = () => {
        if (window.pageXOffset > 50) {
            burger_menu.classList.add('burger-menu-active');
        } else {
            burger_menu.classList.remove('burger-menu-active');
            backgroundHidden.classList.add('background-hidden');
        }
    }

    const burger = document.querySelector('.burger');
    const backgroundHidden  = document.querySelector('.background-hidden');

    burger.addEventListener('click', () => { /*открытие бургер меню*/
        // console.log('клик по иконке бургера');
        burger_menu.classList.add('burger-menu-active');
        backgroundHidden.classList.remove('background-hidden');
    });

    backgroundHidden.addEventListener('click', (event) => { /*закрытие бургем меню по клику вне поля*/
        // console.log(event);
        if (event.target.classList.contains('background-black')) {
            // console.log('yes');
            burger_menu.classList.remove('burger-menu-active');
            backgroundHidden.classList.add('background-hidden');
            popup.classList.remove('modal-show');/*закрытие попап*/
        }
    })

    const burger_nav_close = document.querySelector('.burger-nav-close'); /*закрытие бургер меню по снопке*/
    burger_nav_close.addEventListener('click', () => {
        burger_menu.classList.remove('burger-menu-active');
        backgroundHidden.classList.add('background-hidden');
    });

    const loginButton = document.querySelector('.login-button');/*открытие попап*/
    const popup = document.querySelector('.modal-login');
    loginButton.addEventListener('click', () => {
        // console.log('клик по ryjgrt kjuby');
        popup.classList.add('modal-show');
        backgroundHidden.classList.remove('background-hidden');
    });

    const loginLink = document.querySelector('.login-link'); /*открытие попап в мобильной версии*/
    loginLink.addEventListener('click', () => {
        // console.log('клик по ryjgrt kjuby');
        popup.classList.add('modal-show');
        backgroundHidden.classList.remove('background-hidden');
        burger_menu.classList.remove('burger-menu-active');
    });

    const registerAdvText = document.querySelector('.register-adv-text');/*перестройка формы*/
    const loginAdvText = document.querySelector('.login-adv-text');
    // console.log(registerAdvText);
    const loginTitle = document.querySelector('.login-title');
    const signupTitle = document.querySelector('.signup-title'); 
    const socialButtons = document.querySelector('.social-buttons'); 
    const imageOr = document.querySelector('.imageOr');
    const buttonSubmitLoginForm = document.querySelector('.button-submit-login-form');
    const buttonSubmitSignupForm = document.querySelector('.button-submit-signup-form');
    // console.log(buttonSubmitLoginForm);
    // console.log(buttonSubmitSignupForm);
    const loginHelp = document.querySelector('.login-help');
    const registerAdv = document.querySelector('.register-adv');
    const loginAdv = document.querySelector('.login-adv');



    registerAdvText.addEventListener('click', () => { /*сама перестройка*/
        // console.log('клик по ryjgrt kjuby');
        signupTitle.classList.remove('visually-hidden');
        loginTitle.classList.add('visually-hidden');
        socialButtons.classList.add('visually-hidden');
        imageOr.classList.add('visually-hidden');
        buttonSubmitLoginForm.classList.add('visually-hidden');
        // console.log(buttonSubmitLoginForm);
        buttonSubmitSignupForm.classList.remove('visually-hidden');
        loginHelp.classList.add('visually-hidden');
        registerAdv.classList.add('visually-hidden');
        loginAdv.classList.remove('visually-hidden');
    });

    loginAdvText.addEventListener('click', () => {/*перестройка ответная часть*/
        // console.log('клик по ryjgrt kjuby');
        signupTitle.classList.add('visually-hidden');
        loginTitle.classList.remove('visually-hidden');
        socialButtons.classList.remove('visually-hidden');
        imageOr.classList.remove('visually-hidden');
        buttonSubmitLoginForm.classList.remove('visually-hidden');
        // console.log(buttonSubmitLoginForm);
        buttonSubmitSignupForm.classList.add('visually-hidden');
        loginHelp.classList.remove('visually-hidden');
        registerAdv.classList.remove('visually-hidden');
        loginAdv.classList.add('visually-hidden');
    });

    const login = popup.querySelector("[name = email]");
    const password = popup.querySelector("[name = password]");
    const form = popup.querySelector("form");

    form.addEventListener('submit', function(event){
        // alert('submit!');
        event.preventDefault();
        console.log('E-mail' + login.value);
        alert('E-mail: ' + login.value);
        console.log('password' + password.value);
        alert('password: ' + password.value);
    });

    // form.addEventListener("submit", function (event) {
    //     if (!login.value || !passwort.value) {
    //     //   event.preventDefault();
    //       console.log("Введите значение");
    //     //   popup.classList.add("modal-error");
    //     }
      
    //     // console.log("Отправить форму");
    //     // console.log(login.value);
    //     // console.log(passwort.value);
    //   });




    window.addEventListener("keydown", (event) => { /*закрытие попам по кнопке ESC*/
        // console.log(event);

        if (event.keyCode === 27) {
        if (popup.classList.contains("modal-show")) {
                popup.classList.remove("modal-show");
                backgroundHidden.classList.add('background-hidden');
            }
        }
      });

} ());


(function () {/*карусель*/
    const slider = document.querySelector('.slider-list');
    const elements = slider.querySelectorAll('.slider-item');
    const buttonsSlider = document.querySelectorAll('.button-slider');
    const nextButton = document.querySelector('.button-prev');
    const prevButton = document.querySelector('.button-next');
    let countOfClick = 0;

    prevButton.addEventListener('click', () => {
        let countOfPrevClick = countOfClick;
        slider.style.transform = "translateX(" + (-234 + (-117 * countOfPrevClick)) + "%)";
        // console.log(slider.style.transform);
        countOfPrevClick++;
        // console.log(countOfPrevClick);
        buttonsSlider[1].classList.remove('current-button');
        buttonsSlider[0].classList.remove('current-button');
        buttonsSlider[2].classList.add('current-button');
    });

    
    nextButton.addEventListener('click', () => {
        let countOfNextClick = countOfClick;
        slider.style.transform = "translateX(" + (0 + (117 * countOfNextClick)) + "%)";
        // console.log(slider.style.transform);
        countOfNextClick++;
        // console.log(countOfNextClick);
        buttonsSlider[1].classList.remove('current-button');
        buttonsSlider[2].classList.remove('current-button');
        buttonsSlider[0].classList.add('current-button');
    });
    
    elements[0].onclick = OnclickLeftFunction;
    elements[1].onclick = OnclickFunction;
    elements[2].onclick = OnclickRightFunction;

    buttonsSlider[0].onclick = OnclickLeftFunction;
    buttonsSlider[1].onclick = OnclickFunction;
    buttonsSlider[2].onclick = OnclickRightFunction;

    // switchButton.forEach((element)=>{
    //     element.addEventListener('click', (event) => {
    //         console.log(event);
    //     })
    // })

    function OnclickLeftFunction(){
        if ((document.querySelector('.page').clientWidth <= 390) && (document.querySelector('.page').clientWidth >= 320)) {
            slider.style.transform = "translateX(0)";
        } else {
            slider.style.transform = "translateX(23%)";
        }

        buttonsSlider[1].classList.remove('current-button');
        buttonsSlider[2].classList.remove('current-button');
        buttonsSlider[0].classList.add('current-button');
    }
    function OnclickFunction(){
        if ((document.querySelector('.page').clientWidth <= 390) && (document.querySelector('.page').clientWidth >= 320)) {
            slider.style.transform = "translateX(-117%)";
        } else {
            slider.style.transform = "translateX(-36%)";
        }
        buttonsSlider[0].classList.remove('current-button');
        buttonsSlider[2].classList.remove('current-button');
        buttonsSlider[1].classList.add('current-button');
    }
    function OnclickRightFunction(){
        if ((document.querySelector('.page').clientWidth <= 390) && (document.querySelector('.page').clientWidth >= 320)) {
            slider.style.transform = "translateX(-234%)";
        } else {
            slider.style.transform = "translateX(-96%)";
        }
        buttonsSlider[1].classList.remove('current-button');
        buttonsSlider[0].classList.remove('current-button');
        buttonsSlider[2].classList.add('current-button');
    }
    
    // console.log(style);
    // style.transform = 'translateX(350px)';

    /*
    var elements = document.querySelectorAll('.item'),
    translate = 0;

    elements[0].onclick = OnclickLeftFunction;
    elements[2].onclick = OnclickRightFunction;
    function OnclickLeftFunction(){
        translate -= 47.5;
        elements[0].style.transform = "translateX(" + translate + "vw)";
        elements[1].style.transform = "translateX(" + translate + "vw)";
        elements[2].style.transform = "translateX(" + translate + "vw)";
    }
    function OnclickRightFunction(){
        translate += 47.5;
        elements[0].style.transform = "translateX(" + translate + "vw)";
        elements[1].style.transform = "translateX(" + translate + "vw)";
        elements[2].style.transform = "translateX(" + translate + "vw)";
    }
    */
} ());