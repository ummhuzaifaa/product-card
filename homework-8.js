//1 Создание объектов на основе данных

const myPerson = {
name:"Сумайя",
surname:"Айдабулова",
age:27,
city:"Махачкала",
region:"Дагестан",
address:"улица Профсоюзная",
email:"aydabulovasumaya@mail.com"}

console.log (myPerson)

//2 Создание объекта данных автомобиля

const ramTrx = {
brand: "Ram",
model: "1500 TRX",
year: 2024,
color:"black",
transmission: "automatic",
owner:myPerson
};

console.log (ramTrx)


//3 Функция, аргумент которой принимает объект,описанный в предыдущем задании

function checkMaxSpeed(carObject){
   if ('maxSpeed' in carObject) {
    return;
}
carObject.maxSpeed = 190;
}
checkMaxSpeed(ramTrx);

console.log(ramTrx);


//4 Функция получающая первый аргумент — объект, второй аргумент — свойство объекта

function showVehicleData(targetObject, targetKey) {
    const value = targetObject[targetKey];

    console.log(`Значение свойства "${targetKey}": ${value}`);
}
showVehicleData(ramTrx, "brand");
showVehicleData(ramTrx, "transmission");
showVehicleData(ramTrx, "maxSpeed");

//5 Создать массив, содержащий названия продуктов 
const products = ["Хлеб", "сыр", "молоко", "яблоки", "арбуз"];
  console.log (products);


  //6 Массив, состоящий из объектов, где объект представляет собой книгу 

  const bookTitles = [
    {
    title:"Мартин Иден",
    author:"Джек Лондон",
    year:1908,
    coverColor: "blue",
    genre:"roman"
    },
    
    {
    title:"Скорбь Сатаны",
    author:"Мария Корелли",
    year:1895,
    coverColor: "black",
    genre:"mystic"
    },

    {
    title: "Цветы для Элджорнона",
    author: "Дэниел Киз",
    year: 1966,
    coverColor: "orange",
    genre: "fantasy"
    }
  ]

  bookTitles.push({
    title: "Шерлок Холмс",
    author: "Артур Конан Дойл",
    year: 1892,
    coverColor: "blue",
    genre: "detective"
});
      console.log(bookTitles)


      //7 Массив, состоящий из тех же книг, но относящийся к управлению вселенной
    const filmMarvel = [
  {
    title: "Мстители. Начало",
    author: "Стэн Ли",
    year: 1963,
    coverColor: "purple",
    genre: "comics"
  },
  {
    title: "Звёздные Войны. Новая надежда",
    author: "Джордж Лукас",
    year: 1977,
    coverColor: "dark-blue",
    genre: "sci-fi"
  }
    ];
    const allUniversesCombined = [...bookTitles, ...filmMarvel];

    console.log(allUniversesCombined);


    //8 Функция, которая принимает массив сущностей с предыдущего задания

    function markRareBooks(booksArray){
      const updateList = booksArray.map(function(book) {
        const bookCopy = {...book};
        if (bookCopy.year > 2000){
          bookCopy.isRare = true;
        } else {
          bookCopy.isRare = false;
        }
        return bookCopy;
      });
      return updateList;
    }
    const libraryResult = markRareBooks(allUniversesCombined);

    console.log(libraryResult);
