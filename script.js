// скрипт для bg

function ibg() {
    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}
    
ibg();

// работа с welcome page

const welcomePage = document.querySelector('.welcome-page');
const windowSize = window.screen.width;
 // ширина экрана для welcome page

let windowSizeCheck = function() {
    if(window.screen.width <= 555) {
        welcomePage.classList.add('disabled');
    }
    else {
        welcomePage.classList.remove('disabled');
    }
}

windowSizeCheck();
window.onresize = windowSizeCheck;


// скрипты хедера (подумать как лучше сделать)

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');

if (iconMenu) {
    iconMenu.addEventListener('click', function(e) {
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
}


const header = document.querySelector('.header');

let headerWindow = function () {
    if (window.screen.width > 768) {
        if (window.scrollY > 0) {
            // console.log(window.scrollY); // Value of scroll Y in px
            header.classList.add('scrolled');
        } 
        else {
            header.classList.remove('scrolled');
        } 
    }
    else {
        return false;
    }
}

window.onscroll = headerWindow;

// header search 

const headerSearch = document.querySelector('.menu__search');
let iconSearch = document.querySelector ('.menu__search-icon');
const menuLogo = document.querySelector ('.menu__logo');

if (iconSearch) {
    iconSearch.addEventListener('click', function(e) {
        iconSearch.classList.toggle('_active');
        headerSearch.classList.toggle('_active');
        menuLogo.classList.toggle('_active');
        if (iconSearch.classList.contains('_active')) {

            iconSearch.innerHTML = '<img class="search-icon"src="./img/cross.png" alt="">';
        }
        else {
            iconSearch.innerHTML = '<img class="search-icon"src="./img/Union.png" alt="">';
        }
    })
}

iconSearch.innerHTML = '<img class="search-icon"src="./img/Union.png" alt="">'




