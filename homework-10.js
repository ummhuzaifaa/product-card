import { products } from './products.js';

function createProductCardTemplate(product) {

     const template = document.getElementById('card-template');

       const cardClone = template.content.cloneNode(true);

    cardClone.querySelector('.card__image').src = product.imageUrl;
    cardClone.querySelector('.card__image').alt = product.title;
    cardClone.querySelector('.card__badge').textContent = product.category;
    cardClone.querySelector('.card__title').textContent = product.title;
    cardClone.querySelector('.card__description').textContent = product.description;

    const ingredientsList = cardClone.querySelector('.card__ingredients__list');
    product.ingredients.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ingredientsList.appendChild(li);
    });

     return cardClone;
}

const productDescriptionsMap = products.reduce((acc, product) => {
    acc[product.title] = product.description;
    return acc;
}, {});
console.log("Результат работы .reduce():", productDescriptionsMap);

//5

function getCountOfCards() {
    while (true) {
        const input = prompt("Сколько карточек отобразить? От 1 до 5");
        if (input === null) return 0; 
        const count = parseInt(input.trim(), 10);
        if (!isNaN(count) && count >= 1 && count <= 5) return count;
        alert("Ошибка ввода! Пожалуйста, введите корректное число от 1 до 5.");
    }
}

function renderProducts(productsArray) {
    const container = document.querySelector('.catalog__list');
    if (!container) return;

      container.querySelectorAll('.catalog__item').forEach(item => item.remove());

        productsArray.forEach(product => {
        const cardElement = createProductCardTemplate(product);
        container.appendChild(cardElement); // Используем appendChild вместо innerHTML
    });
}

const countToDisplay = getCountOfCards();
if (countToDisplay > 0) {
    const productsToRender = products.slice(0, countToDisplay);
    renderProducts(productsToRender);
}