// Напиши скрипт который, при наборе текста в инпуте
// input#name - input
// (событие input), подставляет его текущее значение в
// span#name - output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', doInputRef);

function doInputRef(event) {
  if (event.target.value === '') {
    outputRef.textContent = 'незнакомец';
  } else {
    outputRef.textContent = event.target.value;
  }
}
