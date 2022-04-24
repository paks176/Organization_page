const buttonLeft = document.querySelector('.slider__controls--buttons-left');
const buttonRight = document.querySelector('.slider__controls--buttons-right');
const wrapper = document.querySelector('.slider__wrapper');
const progress = document.querySelectorAll('.slider__controls--progress-point');
const online = document.querySelectorAll('.slider__logo--right');
const topHeader = document.querySelectorAll('.slider__content--top-text');
const progressPoints = document.querySelectorAll('.slider__controls--progress-point');
const inputs = document.querySelectorAll('.feedback__right--input');
let counter = 1;

// Переключение на нужный слайд кнопками внизу

progressPoints[0].addEventListener('click', () => {
    if (counter == 1) {
        counter = 1
        changeStyle();
        clearInterval(myInterval)
    }
    if (counter == 2) {
        counter = 1
        changeStyle();
        wrapper.style.transform = `translate(0vw)`
        clearInterval(myInterval)
    }
    if (counter == 3) {
        counter = 1
        changeStyle();
        wrapper.style.transform = `translate(0vw)`
        clearInterval(myInterval)
    }
});

progressPoints[1].addEventListener('click', () => {
    if (counter == 1) {
        counter = 2
        changeStyle();
        wrapper.style.transform = `translate(-100vw)`
        clearInterval(myInterval)
    }
    if (counter == 2) {
        counter = 2
        changeStyle();
        clearInterval(myInterval)
    }
    if (counter == 3) {
        counter = 2
        changeStyle();
        wrapper.style.transform = `translate(-100vw)`
        clearInterval(myInterval)
    }
});

progressPoints[2].addEventListener('click', () => {
    if (counter == 1) {
        counter = 3
        changeStyle();
        wrapper.style.transform = `translate(-200vw)`
        clearInterval(myInterval)
    }
    if (counter == 2) {
        counter = 3
        changeStyle();
        wrapper.style.transform = `translate(-200vw)`
        clearInterval(myInterval)
    }
    if (counter == 3) {
        counter = 3
        changeStyle();
        clearInterval(myInterval)
    }
});

online[0].setAttribute('style','color:#0ED984');
online[1].setAttribute('style','color:#3577F6');
online[2].setAttribute('style','color:#D72DF3');

topHeader[0].setAttribute('style','color:#0ED984;border-bottom: 3px solid #0ED984;');
topHeader[1].setAttribute('style','color:#3577F6;border-bottom: 3px solid #3577F6;');
topHeader[2].setAttribute('style','color:#D72DF3;border-bottom: 3px solid #D72DF3;');

// hover-эффекты для кнопок перелистывания

buttonLeft.addEventListener('mouseover', () => {
    buttonLeft.style.backgroundImage = 'url(img/button_left_hover.png)';
    buttonLeft.style.opacity = '1'
});

buttonLeft.addEventListener('mouseleave', () => {
    buttonLeft.style.backgroundImage = 'url(img/button_left.png)'
    buttonLeft.style.opacity = '0.5'

});

buttonRight.addEventListener('mouseover', () => {
    buttonRight.style.backgroundImage = 'url(img/button_right_hover.png)'
    buttonRight.style.opacity = '1'
});

buttonRight.addEventListener('mouseleave', () => {
    buttonRight.style.backgroundImage = 'url(img/button_right.png)'
    buttonRight.style.opacity = '0.5'
});

// Функция смены стилей элементов в зависимости от слайда

function changeStyle() {

    if (counter === 1) {
        progress.forEach(element => {
            element.addEventListener('mouseover', () => {
                element.style.borderColor = '#0ED984';
            })
            element.addEventListener('mouseleave', () => {
                element.style.borderColor = '#FFFFFF';
            })
        });
        progress[0].classList.add('progress-image');
        progress[0].style.borderStyle = 'none';
        progress[0].innerHTML = '<img src="img/progress_1.png" class="slider__controls--progress-point-image" alt="1"></img>';

        progress[1].classList.remove('progress-image');
        progress[1].setAttribute('style', 'border:1px solid #FFFFFF');
        progress[1].innerHTML = '';

        progress[2].classList.remove('progress-image');
        progress[2].setAttribute('style', 'border:1px solid #FFFFFF');
        progress[2].innerHTML = '';
    }

    if (counter === 2) {
        progress.forEach(element => {
            element.addEventListener('mouseover', () => {
                element.style.borderColor = '#3577F6';
            })
            element.addEventListener('mouseleave', () => {
                element.style.borderColor = '#FFFFFF';
            })
        });
        progress[0].classList.remove('progress-image');
        progress[0].setAttribute('style', 'border:1px solid #FFFFFF');
        progress[0].innerHTML = '';

        progress[1].classList.add('progress-image')
        progress[1].style.borderStyle = 'none';
        progress[1].innerHTML = '<img src="img/progress_2.png" class="slider__controls--progress-point-image" alt="1"></img>'

        progress[2].classList.remove('progress-image');
        progress[2].setAttribute('style', 'border:1px solid #FFFFFF');
        progress[2].innerHTML = '';
    }

    if (counter === 3) {
        progress.forEach(element => {
            element.addEventListener('mouseover', () => {
                element.style.borderColor = '#D72DF3';
            })
            element.addEventListener('mouseleave', () => {
                element.style.borderColor = '#FFFFFF';
            })
        });
        progress[0].classList.remove('progress-image');
        progress[0].setAttribute('style', 'border:1px solid #FFFFFF');
        progress[0].innerHTML = '';

        progress[1].classList.remove('progress-image');
        progress[1].setAttribute('style', 'border:1px solid #FFFFFF');
        progress[1].innerHTML = '';

        progress[2].classList.add('progress-image')
        progress[2].style.borderStyle = 'none';
        progress[2].innerHTML = '<img src="img/progress_3.png" class="slider__controls--progress-point-image" alt="1"></img>'
    }

}

changeStyle();


// Переключение слайдов кнопками

function nextSlide() {
    if (counter === 3) {
        wrapper.style.transform = `translate(0vw)`;
        counter = 1;
        changeStyle();
    } else {
        wrapper.style.transform = `translate(${-100 * counter}vw)`;
        counter = counter + 1;
        changeStyle();
    }
}

function previousSlide() {

    if (counter === 1) {
        wrapper.style.transform = `translate(-200vw)`;
        counter = 3;
        changeStyle();
    }
    if (counter === 2) {
        wrapper.style.transform = `translate(0vw)`
        counter = 1;
        changeStyle();
    }
    if (counter === 3) {
        wrapper.style.transform = `translate(-100vw)`;
        counter = 2;
        changeStyle();
    }
}

function buttonNextSlide() {
    clearInterval(myInterval)
    nextSlide()
}

function buttonPreviousSlide() {
    clearInterval(myInterval)
    previousSlide()
}

buttonLeft.addEventListener('click', buttonPreviousSlide);
buttonRight.addEventListener('click', buttonNextSlide)

// Маска телефона 

window.addEventListener("DOMContentLoaded", function() {
    function setCursorPosition(pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
      else if (elem.createTextRange) {
      let range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select()
    }
  }
  function mask(event) {
    let matrix = "+7 (___) ___ ____",
    i = 0,
    def = matrix.replace(/\D/g, ""),
    val = this.value.replace(/\D/g, "");
    if (def.length >= val.length) val = def;
    this.value = matrix.replace(/./g, function(a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
    });
    if (event.type == "blur") {
      if (this.value.length == 2) this.value = ""
    }     else setCursorPosition(this.value.length, this)
  }
  let input = document.querySelector('input[type="tel"]');
  input.addEventListener("input", mask, false);
  input.addEventListener("focus", mask, false);
  input.addEventListener("blur", mask, false);
});

// Переключение слайдера таймаутом

function slideShow() {
    window.myInterval = window.setInterval(nextSlide, 3000);
}

slideShow();