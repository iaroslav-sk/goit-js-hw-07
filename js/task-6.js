// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте,
// указывается в его атрибуте data - length.
// Если введено подходящее количество,
// то border инпута становится зеленым, если неправильное - красным.

const inputRef = document.querySelector('#validation-input');
const inputDataRef = document.querySelector('[data-length="6"]');

inputRef.addEventListener('blur', doValidateInputRef);

function doValidateInputRef(event) {
  const lengthInput = event.target.value;
  if (Number(lengthInput.length) === Number(inputDataRef.dataset.length)) {
    inputRef.classList.replace('invalid', 'valid');
  } else {
    inputRef.classList.add('invalid');
  }
}
