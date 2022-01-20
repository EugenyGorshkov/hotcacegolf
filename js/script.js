const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener('click', function(e) {
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
}

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

