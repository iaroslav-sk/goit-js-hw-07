// Счетчик состоит из спана и кнопок,
// которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится
// текущее значение счетчика.
// Создай функции increment и decrement
// для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки,
// вызовы функций и обновление интерфейса

const decrementBtnRef = document.querySelector(
  'button[data-action="decrement"]',
);
const incrementBtnRef = document.querySelector(
  'button[data-action="increment"]',
);
const counterValueRef = document.querySelector('#value');

let counterValue = 0;

decrementBtnRef.addEventListener('click', onDecrementBtnRef);
incrementBtnRef.addEventListener('click', onIncrementBtnRef);

function onDecrementBtnRef() {
  counterValue -= 1;
  counterValueRef.textContent = counterValue;
}
function onIncrementBtnRef() {
  counterValue += 1;
  counterValueRef.textContent = counterValue;
}
