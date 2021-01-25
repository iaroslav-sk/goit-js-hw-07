// В HTML есть пустой список ul#ingredients.
// В JS есть массив строк.

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// Напиши скрипт, который для каждого элемента массива ingredients
// создаст отдельный li, после чего вставит все
// li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

const ulRef = document.querySelector('#ingredients');

const onceIngredients = ingredients.forEach(doOnceIngredients);

function doOnceIngredients(elem) {
  const createLi = document.createElement('li');
  createLi.textContent = elem;
  ulRef.appendChild(createLi);
}
