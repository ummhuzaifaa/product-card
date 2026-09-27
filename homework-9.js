//6 Сделайте константу экспортируемой, добавив перед «const» ключевое слово «экспорт».
import { postComments } from './comment.js';


console.log(postComments);

//7 Вывести в массив массива тех комментариев, почта пользователей которых содержит ".com"
const filteredComments =  postComments.filter(comment => comment.email.includes('.com'));

console.log(filteredComments);




//2 Создать массив чисел от 1 до 10. Отфильтровать его таким образом, чтобы мы получили массив чисел, начиная с 5.
const numbers =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]

const filteredNumbers = numbers.filter(num => num >= 5);

console.log(filteredNumbers);

//3 Создать массив строк и проверить есть в массиве какая то сущность.
const furniture = ['Шкаф', 'Диван', 'Кровать', 'Стол', 'Стул', 'Кресло'];

const itemToFind = 'Диван';

if (furniture.includes(itemToFind)) {
    console.log(`Да, объект "${itemToFind}" есть в массиве мебели!`);
} else {
    console.log(`Нет, объекта "${itemToFind}" в массиве не нашлось.`);
}

//4 Функция, которая аргументом будет принимать массив и изменять его порядок на противоположной
function reverseArray(arr) {
    return arr.reverse();
}
const firstArray = ['яблоко', 'банан', 'апельсин'];
const secondArray = [10, 20, 30, 40, 50];

const reversedFirst = reverseArray(firstArray);
const reversedSecond = reverseArray(secondArray);

console.log(reversedFirst);
console.log(reversedSecond);

//8 Изменение postId в зависимости от id
const updatedComments = postComments.map(comment => {
  if (comment.id <= 5) {
    return { ...comment, postId: 2 };
  } else {
    return { ...comment, postId: 1 };
  }
});

console.log('Задание 8:', updatedComments);


// 9 Перебрать массив, который бы состоял из объектов только из айди и имени
const shortComments = postComments.map(comment => {
  return {
    id: comment.id,
    name: comment.name
  };
});

console.log('Задание 9:', shortComments);


// 10 Проверка длины body и добавление свойства isInvalid
const validatedComments = postComments.map(comment => {
  if (comment.body.length > 180) {
    return { ...comment, isInvalid: true };
  } else {
    return { ...comment, isInvalid: false };
  }
});

console.log('Задание 10:', validatedComments);


// 11 Получение массива почт через .reduce() и .map()
const emailsWithReduce = postComments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);

console.log('Задание 11 (через reduce):', emailsWithReduce);


const emailsWithMap = postComments.map(comment => comment.email);

console.log('Задание 11 (через map):', emailsWithMap);


// 12 Приведение полученного массива почт к строке С помощью toString() и  join()
const stringViaToString = emailsWithMap.toString();
console.log('Задание 12 (через toString):\n', stringViaToString);


const stringViaJoin = emailsWithMap.join(', ');
console.log('Задание 12 (через join):\n', stringViaJoin);




