const buttonLeft = document.querySelectorAll('.slider__buttons--left');
const buttonRight = document.querySelectorAll('.slider__buttons--right');
const wrapper = document.querySelector('.slider__wrapper');
const progress = document.querySelectorAll('.slider__toplayer--progress-point');
const online = document.querySelectorAll('.slider__logo--right');
const topHeader = document.querySelectorAll('.slider__content--top-text');
const progressPoints = document.querySelectorAll('.slider__toplayer--progress-point');
const input = document.querySelectorAll('.feedback__right--input');
const modal = document.querySelector('.feedback__modal--helper');
const submit = document.querySelector('.feedback__right--submit');
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

topHeader[0].setAttribute('style','color:#0ED984;border-bottom: 3px solid #0ED984;');
topHeader[1].setAttribute('style','color:#3577F6;border-bottom: 3px solid #3577F6;');
topHeader[2].setAttribute('style','color:#D72DF3;border-bottom: 3px solid #D72DF3;');

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
        progress[0].innerHTML = '<img src="img/progress_1.svg" class="slider__controls--progress-point-image" alt="1"></img>';

        progress[1].classList.remove('progress-image');
        progress[1].setAttribute('style', 'border:1px solid #FFFFFF');
        progress[1].innerHTML = '';

        progress[2].classList.remove('progress-image');
        progress[2].setAttribute('style', 'border:1px solid #FFFFFF');
        progress[2].innerHTML = '';

        online[0].setAttribute('style', 'color:#0ED984')
        online[1].setAttribute('style', 'color:#0ED984')
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
        progress[1].innerHTML = '<img src="img/progress_2.svg" class="slider__controls--progress-point-image" alt="1"></img>'

        progress[2].classList.remove('progress-image');
        progress[2].setAttribute('style', 'border:1px solid #FFFFFF');
        progress[2].innerHTML = '';

        online[0].setAttribute('style', 'color:#3577F6')
        online[1].setAttribute('style', 'color:#3577F6')
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
        progress[2].innerHTML = '<img src="img/progress_3.svg" class="slider__controls--progress-point-image" alt="1"></img>'

        online[0].setAttribute('style', 'color:#D72DF3')
        online[1].setAttribute('style', 'color:#D72DF3')
    }

}

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
        return
    }
    if (counter === 2) {
        wrapper.style.transform = `translate(0vw)`
        counter = 1;
        changeStyle();
        return
    }
    if (counter === 3) {
        wrapper.style.transform = `translate(-100vw)`;
        counter = 2;
        changeStyle();
        return
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

buttonLeft[0].addEventListener('click', buttonPreviousSlide);
buttonLeft[1].addEventListener('click', buttonPreviousSlide);
buttonLeft[2].addEventListener('click', buttonPreviousSlide);
buttonRight[0].addEventListener('click', buttonNextSlide);
buttonRight[1].addEventListener('click', buttonNextSlide);
buttonRight[2].addEventListener('click', buttonNextSlide);

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

function hideMessage() {
    modal.setAttribute('style', 'height: 0%');
}

function showMessage() {
    modal.addEventListener('animationend', () => {
        hideMessage();
    });
    modal.setAttribute('style', 'height:100%; animation-duration: 3s; animation-name: appear');
    input[0].value = '';
    input[1].value = '';
}

function checkInputs() {
    if (input[0].value == '') {
            input[0].setAttribute('style', 'box-shadow: 0px 0px 8px 0px rgba(255, 10, 0, 0.95) inset;');
            input[0].focus();
            return false;
        } else {
            if (input[1].value == '') {
                    input[1].setAttribute('style', 'box-shadow: 0px 0px 8px 0px rgba(255, 10, 0, 0.95) inset;');
                    input[1].focus();
                    input[0].setAttribute('style', 'box-shadow: 0px 0px 0px 0px rgba(255, 0, 0, 0.0) inset;')
                    return false;
                } else {
                    input[1].setAttribute('style', 'box-shadow: 0px 0px 0px 0px rgba(255, 0, 0, 0.0) inset;')
                    showMessage();
                }
        }
    }

submit.addEventListener('click', () => {
    checkInputs()
});

changeStyle();
slideShow();