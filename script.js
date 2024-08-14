const increaseButtonEl = document.querySelector('.counter__button--increase');
const decreaseButtonEl = document.querySelector('.counter__button--decrease');
const counterValueEl = document.querySelector('.counter__value');
const resetButtonEl = document.querySelector('.counter__reset-button');
const titleEl = document.querySelector('.counter__title');
const counterEl = document.querySelector('.counter');

const MAX_FREE_COUNT_VALUE = 7;

const increaseValue = () => {
    increaseButtonEl.blur();
    if (+counterValueEl.textContent === MAX_FREE_COUNT_VALUE) {
        counterEl.classList.add('counter--limit');
        titleEl.innerHTML = `Limit! Buy <b>Pro</b> for > ${MAX_FREE_COUNT_VALUE}`;
        increaseButtonEl.disabled = true;
        decreaseButtonEl.disabled = true;
    } else {
        counterValueEl.textContent = +counterValueEl.textContent + 1;
    }
}

const decreaseValue = () => {
    decreaseButtonEl.blur();
    if (+counterValueEl.textContent > 0) counterValueEl.textContent = +counterValueEl.textContent - 1
}

const resetValue = () => {
    counterValueEl.textContent = 0;
    titleEl.textContent = 'Fancy Counter';
    counterEl.classList.remove('counter--limit');
    increaseButtonEl.disabled = false;
    decreaseButtonEl.disabled = false;
    /* using blur to unfocus from last selected element in html */
    resetButtonEl.blur();
    increaseButtonEl.blur();
    decreaseButtonEl.blur();
}

increaseButtonEl.addEventListener('click', increaseValue);

decreaseButtonEl.addEventListener('click', decreaseValue);

resetButtonEl.addEventListener('click', resetValue);

document.addEventListener('keydown', increaseValue)