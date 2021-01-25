// Напиши скрипт, который реагирует на изменение значения
// input#font - size - control(событие input) и изменяет
// инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться
// размер текста.

const inputSizeRef = document.querySelector('#font-size-control');
const textSpanRef = document.querySelector('#text');

inputSizeRef.addEventListener('input', doinputSizeRef);

function doinputSizeRef(event) {
  textSpanRef.style.fontSize = event.target.value + 'px';
}
