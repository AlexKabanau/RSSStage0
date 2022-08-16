const time = document.querySelector('.time');
const day = document.querySelector('.date');
const greeting = document.querySelector('.greeting');

const greetingTranslation = {
    En: ['Good morning', 'Good afternoon', 'Good evening', 'Good night'],
    Ru: ['Доброе утро', 'Добрый день', 'Добрый вечер', 'Доброй ночи'],
    Be: ['Добрай ранiцы', 'Добры дзень', 'Добры вечар', 'Дабранач'],
};

let lang = 'En'; /* язык преветствия ('En', 'Ru', 'Be') */
const search = 'Git';/*'Git', 'Flickr', 'Unsplash'*/

const name = document.querySelector('.name');
const body = document.querySelector('body');

// const bgNum  = String(getRandomNum()).padStart(2, "0");

const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');

//time.textContent = "Text";
const langEn = document.querySelector('.en');
const langRu = document.querySelector('.ru');
const langBe = document.querySelector('.be');
// console.log(langEn);
// console.log(langRu);
// console.log(langBe);

langEn.addEventListener('click', addActive);
langRu.addEventListener('click', addActive);
langBe.addEventListener('click', addActive);



function addActive(element) {
    console.log(element);
    langEn.classList.remove('active');
    langRu.classList.remove('active');
    langBe.classList.remove('active');
    // console.log(element);
    element.target.classList.add('active');
    lang = element.target.innerHTML
//     // console.log(event)
//     // if (langEn.classList.contains('active'))
//     // event.classList.toggle('active')
}

//console.log(currentTime);

function showTime() {
    const date = new Date();
    let currentTime;
    const options = {hour: 'numeric', minute: 'numeric', second: 'numeric', timeZone: 'Europe/Minsk'};
    if (lang=='Ru') {
        
        currentTime = date.toLocaleString('ru-Ru', options);
    } else if (lang=='Be') {
        currentTime = date.toLocaleString('be-Be', options);
    } else {
        currentTime = date.toLocaleString('en-Gb', options);
    };
    // console.log(currentTime);
    time.textContent = currentTime;

    function showDate () {
        const options = {weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'};
        let currentDate;
        if (lang=='Ru') {
            currentDate = date.toLocaleString('ru-Ru', options);
        } else if (lang=='Be') {
            currentDate = date.toLocaleString('be-BY', options);
        } else {
            currentDate = date.toLocaleString('en-Gb', options);
        };
        day.textContent = currentDate;
        //console.log(currentDate);
    };
    showDate();

    setTimeout(showTime, 1000);
};
showTime();

function showGreeting() {
    const date = new Date();
    const hours = date.getHours();
    // console.log(hours);

    function getTimeOfDay(hours){
        if (hours>6 && hours<=12) {
            // console.log('morning');
            return greetingTranslation[lang][0];
        }
        else if (hours>12 && hours<=18) {
            // console.log('afternoon');
            // console.log(hours);
            return greetingTranslation[lang][1];
        }
        else if (hours>18 && hours<=23) {
            // console.log('evening');
            // console.log(hours);
            return greetingTranslation[lang][2];
        } else {
            // console.log('night');
            return greetingTranslation[lang][3];
        }
    };

    const timeOfDay = getTimeOfDay(hours);
    const greetingText = `${timeOfDay},`;

    greeting.textContent = greetingText;

    /*form.addEventListener('submit', function(event){
        // alert('submit!');
        event.preventDefault();
        console.log('E-mail' + login.value);
        alert('E-mail: ' + login.value);
        console.log('password' + password.value);
        alert('password: ' + password.value);
    });*/
    
    setTimeout(showGreeting, 1000);
};
showGreeting();

function getRandomNum() {
    return Math.floor(Math.random() * (20 - 1) + 1);
};

let randomNum = getRandomNum();

function setBg(x) {
    
    const date = new Date();
    const hours = date.getHours();

    function getTimeOfDay(hours){
        if (hours>6 && hours<=12) {
            // console.log('morning');
            return 'morning';
        }
        else if (hours>12 && hours<=18) {
            // console.log('afternoon');
            // console.log(hours);
            return 'afternoon';
        }
        else if (hours>18 && hours<=23) {
            // console.log('evening');
            // console.log(hours);
            return 'evening';
        } else {
            // console.log('night');
            return 'night';
        }
    };

    const timeOfDay = getTimeOfDay(hours);
    const bgNum  = String(x).padStart(2, "0");

    const img = new Image();
    // img.src = getLinkToImage();
    img.src = 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/'+timeOfDay+'/'+bgNum+'.jpg';
    
    img.onload = () => {
        // console.log('done')      
        body.style.backgroundImage = "url('"+img.src+"')";// здесь тоже ваш код
      };
      setTimeout(setBg, 3600000);
    // body.style.backgroundImage = "url('"+str+"')";

    // console.log(bgNum);

    // console.log(timeOfDay);

    // console.log(img.src);
    // console.log(url);

};
// async function getLinkToImage() {
//     const url = 'https://api.unsplash.com/photos/random?orientation=landscape&query=barcelone&client_id=Xu--LAsXa7QzwmNq_m-XqvSc9x_YPT1Gi5F3YW03sSY';
//     const res = await fetch(url);
//     const data = await res.json();
//     console.log(data.urls.regular);
//     // return data.urls.regular
//     // body.style.backgroundImage = "url('"+data.urls.regular+"')";
// }
// const x = getLinkToImage();
// console.log(x);
// body.style.backgroundImage = x;

function getLinkToImage() {
    const url = 'https://api.unsplash.com/photos/random?orientation=landscape&query=belarus&client_id=Xu--LAsXa7QzwmNq_m-XqvSc9x_YPT1Gi5F3YW03sSY';
    fetch(url)
      .then(res => res.json())
      .then(data => {
        // console.log(data.urls.regular);
        body.style.backgroundImage = "url('"+data.urls.regular+"')";
      });
      
    
//     //   return data.urls.regular;
setTimeout(getLinkToImage, 3600000);
}
function getFlickrLinkToImage(randomNum) {
    const url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=6111c6b5ff2145ab8871ef967b9e0d99&tags=belarus&extras=url_l&format=json&nojsoncallback=1';
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data.photos.photo[randomNum].url_l);
        body.style.backgroundImage = "url('"+data.photos.photo[randomNum].url_l+"')";
    });

     
    
//     //   return data.urls.regular;
setTimeout(getFlickrLinkToImage, 3600000);
}
// getFlickrLinkToImage();

// getLinkToImage();
// function setBgUnsplash () {
//     const img = new Image();
//     img.src = getLinkToImage();
//     img.onload = () => {      
//         body.style.backgroundImage = "url('"+img.src+"')";// здесь тоже ваш код
//       };
// };
// setBgUnsplash();
// setBg();

function getSlideNext() {
    // console.log('next');
    randomNum++;
    if (lang=="En") {
        if (randomNum>20) {randomNum = 1};

        // getLinkToImage();//подключен unsplash
        // getFlickrLinkToImage(randomNum);//подключен flickr
        setBg(randomNum);
    } else if (lang=="Ru") {
        getLinkToImage();//подключен unsplash
    } else {
         getFlickrLinkToImage(randomNum);//подключен flickr
    }

};
function getSlidePrev() {
    // console.log('prev');
    randomNum--;
    if (lang=="En") {
        if (randomNum<1) {randomNum = 20};

        // getLinkToImage();//подключен unsplash
        // getFlickrLinkToImage(randomNum);//подключен flickr
        setBg(randomNum);
    } else if (lang=="Ru") {
        getLinkToImage();//подключен unsplash
    } else {
         getFlickrLinkToImage(randomNum);//подключен flickr
    }

    // if (randomNum<1) {randomNum = 20};

    // getLinkToImage();//подключен unsplash
    // getFlickrLinkToImage(randomNum);//подключен flickr

    // setBg(randomNum);
};

slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);

/*---------------------------------------*/

function setLocalStorage() {
    localStorage.setItem('name', name.value);
    localStorage.setItem('city', city.value);
  }
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
    if(localStorage.getItem('name')) {
      name.value = localStorage.getItem('name');
    }
    if(localStorage.getItem('city')) {
        city.value = localStorage.getItem('city');
      }
  }
window.addEventListener('load', getLocalStorage);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!WEATHER
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.wind-speed');
const city = document.querySelector('.city');
if (!city.value) {city.value = 'Минск'}

async function getWeather() {  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${lang}&appid=f25234012c7015a725d289d0b3a7d92c&units=metric`;
  const res = await fetch(url);
  const data = await res.json(); 

  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${Math.round(data.main.temp)}°C`;
  weatherDescription.textContent = data.weather[0].description;
  humidity.textContent = `${Math.round(data.main.humidity)}%`;
  windSpeed.textContent = `${Math.round(data.wind.speed)} m/s`;

//   console.log(data.weather[0].id, data.weather[0].description, data.main.temp);
};
getWeather();
city.addEventListener('change', getWeather);
// getWeather();


// !!!!!!!!!!!!!!!!!!quote

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');

async function getQuotes() {  
    const quotes = 'data.json';
    const res = await fetch(quotes);
    const data = await res.json(); 

    function getRandomNum() {
        return Math.floor(Math.random() * 3);
    };

    const x = getRandomNum();

    quote.textContent = data[x].text;
    author.textContent = data[x].author;

//     console.log(quote);
//     console.log(author);
//     console.log(x);
//     console.log(data[x].text);
};
getQuotes();
changeQuote.addEventListener('click',getQuotes);
// getQuotes();

// !!!!!!!!!!!!!!!!!!!!!audio

const audio = new Audio();
const play = document.querySelector('.play');
const play_next = document.querySelector('.play-next');
const play_prev = document.querySelector('.play-prev');
// const button = document.querySelector('.play');
const play_list = document.querySelector('.play-list');
const volume_icon = document.querySelector('.volume-icon');

volume_icon.addEventListener('click', muteToggle);

function muteToggle () {
    volume_icon.classList.toggle('mute');
    audio.muted = !audio.muted;
    // if (audio.muted) {
    //     audio.volume = 1;
    // } else {audio.volume = 0}
};

let isPlay = false;
import playList from './playList.js';
    // console.log(playList);

let playNum = 0;

for(let i = 0; i < playList.length; i++) {
    const li = document.createElement('li');

    li.classList.add('play-item');
    li.textContent = playList[i].title;
    play_list.append(li);// здесь ваш код// здесь ваш код
}

// playList.forEach(el => {
//     const li = document.createElement('li');

//     li.classList.add('play-item');
//     li.textContent = playList[0].title;
//     play_list.append(li);
// })



function playNext () {
    playNum++;
    if (playNum>=playList.length) {playNum=0;}
    playAudio();
};
function playPrev () {
    playNum--;
    if (playNum<0) {playNum=playList.length-1;}
    playAudio();
};
function toggleBtn() {
        console.log('click');
        // play.classList.toggle('play');
        play.classList.toggle('pause');
    }
function playAudio() {
    
    audio.src = playList[playNum].src;
    audio.currentTime = 0;
    console.log(playNum)
    
    play.addEventListener('click', toggleBtn);

    if(!isPlay) {
        isPlay = true;
        audio.play();
        // play.addEventListener('click', toggleBtn);
    } else {
        isPlay = false
        audio.pause();
        // play.addEventListener('click', toggleBtn);
    };

    const timeline = document.querySelector(".timeline");
    timeline.addEventListener("click", e => {
    const timelineWidth = window.getComputedStyle(timeline).width;
    const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
    audio.currentTime = timeToSeek;
    }, false);

    setInterval(() => {
        const progressBar = document.querySelector(".progress");
        progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";
        // document.querySelector(".time .current").textContent = getTimeCodeFromNum(
        //   audio.currentTime
        // );
      }, 500);
}
// function pauseAudio() {
    
// }
play.addEventListener('click', playAudio);
play_next.addEventListener('click', playNext);
play_prev.addEventListener('click', playPrev);



console.log('Ваша оценка - 112 балла \nОтзыв по пунктам ТЗ:\nНе выполненные/не засчитанные пункты:\n1) выводится уведомление об ошибке при вводе некорректных значений, для которых API не возвращает погоду (пустая строка или бессмысленный набор символов) \n2) треки пролистываются по кругу - после последнего идёт первый (клик по кнопке Play-next), перед первым - последний (клик по кнопке Play-prev) \n3) трек, который в данный момент проигрывается, в блоке Play-list выделяется стилем \n4) после окончания проигрывания первого трека, автоматически запускается проигрывание следующего. Треки проигрываются по кругу: после последнего снова проигрывается первый. \n5) над прогресс-баром отображается название трека \n6) отображается текущее и общее время воспроизведения трека \n7) добавлен регулятор громкости, при перемещении ползунка регулятора громкости меняется громкость проигрывания звука \n8) можно запустить и остановить проигрывания трека кликом по кнопке Play/Pause рядом с ним в плейлисте \n9) переводится прогноз погоды в т.ч описание погоды и город по умолчанию \n10) переводится цитата дня т.е цитата отображается на текущем языке приложения. Сама цитата может быть другая \n11) если источником получения фото указан API, в настройках приложения можно указать тег/теги, для которых API будет присылает фото \n12) в настройках приложения можно скрыть/отобразить любой из блоков, которые находятся на странице: время, дата, приветствие, цитата дня, прогноз погоды, аудиоплеер, список дел/список ссылок/ваш собственный дополнительный функционал \n13) ToDo List - список дел (как в оригинальном приложении) или Список ссылок (как в оригинальном приложении) или Свой собственный дополнительный функционал, по сложности аналогичный предложенным \nВыполненные пункты:\n1) время выводится в 24-часовом формате, например: 21:01:00 \n2) время обновляется каждую секунду - часы идут. Когда меняется одна из цифр, остальные при этом не меняют своё положение на странице (время не дёргается) \n3) выводится день недели, число, месяц, например: "Воскресенье, 16 мая" / "Sunday, May 16" / "Нядзеля, 16 траўня" \n4) текст приветствия меняется в зависимости от времени суток (утро, день, вечер, ночь). Проверяется соответствие приветствия текущему времени суток \n5) пользователь может ввести своё имя. При перезагрузке страницы приложения имя пользователя сохраняется \n6) ссылка на фоновое изображение формируется с учётом времени суток и случайного номера изображения (от 01 до 20). Проверяем, что при перезагрузке страницы фоновое изображение изменилось. Если не изменилось, перезагружаем страницу ещё раз \n7) изображения можно перелистывать кликами по стрелкам, расположенным по бокам экрана.Изображения перелистываются последовательно - после 18 изображения идёт 19 (клик по правой стрелке), перед 18 изображением идёт 17 (клик по левой стрелке) \n8) изображения перелистываются по кругу: после двадцатого изображения идёт первое (клик по правой стрелке), перед 1 изображением идёт 20 (клик по левой стрелке) \n9) при смене слайдов важно обеспечить плавную смену фоновых изображений. Не должно быть состояний, когда пользователь видит частично загрузившееся изображение или страницу без фонового изображения. Плавную смену фоновых изображений не проверяем: 1) при загрузке и перезагрузке страницы 2) при открытой консоли браузера 3) при слишком частых кликах по стрелкам для смены изображения \n10) при перезагрузке страницы приложения указанный пользователем город сохраняется, данные о нём хранятся в local storage \n11) для указанного пользователем населённого пункта выводятся данные о погоде, если их возвращает API. Данные о погоде включают в себя: иконку погоды, описание погоды, температуру в °C, скорость ветра в м/с, относительную влажность воздуха в %. Числовые параметры погоды округляются до целых чисел \n12) при загрузке страницы приложения отображается рандомная цитата и её автор \n13) при перезагрузке страницы цитата обновляется (заменяется на другую). Есть кнопка, при клике по которой цитата обновляется (заменяется на другую) \n14) при клике по кнопке Play/Pause проигрывается первый трек из блока play-list, иконка кнопки меняется на Pause \n15) при клике по кнопке Play/Pause во время проигрывания трека, останавливается проигрывание трека, иконка кнопки меняется на Play \n16) добавлен прогресс-бар в котором отображается прогресс проигрывания \n17) при перемещении ползунка прогресс-бара меняется текущее время воспроизведения трека \n18) есть кнопка звука при клике по которой можно включить/отключить звук \n19) переводится язык и меняется формат отображения даты \n20) переводится приветствие и placeholder \n21) переводятся настройки приложения, при переключении языка приложения в настройках, язык настроек тоже меняется \n22) в качестве источника изображений может использоваться Unsplash API \n23) в качестве источника изображений может использоваться Flickr API \n24) в настройках приложения можно указать язык приложения (en/ru или en/be)  \n25) в настройках приложения можно указать источник получения фото для фонового изображения: коллекция изображений GitHub, Unsplash API, Flickr API \n26) Скрытие и отображение блоков происходит плавно, не влияя на другие элементы, которые находятся на странице, или плавно смещая их \n27) настройки приложения сохраняются при перезагрузке страницы ');

