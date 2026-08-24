//Задание 1
function showTemp(city, temperature){
  console.log (`Сейчас в городе ${city} температура ${temperature} градусов по Цельсию`);
}
showTemp("Махачкала", 25);
showTemp("Москва", 21);

//Задание 2
const speedOfLight = 299792458;


function checkSpeed(speed){
  if (speed > speedOfLight) {
    console.log ("Сверхсветовая скорость");
  } else if (speed < speedOfLight) {
    console.log ("Субсветовая скорость");
  } else {
  console.log ("Скорость света");
  }
}
checkSpeed(1000);
checkSpeed(299792458);
checkSpeed(500000000);


//Задание 3
const productName ="Книга";
const productPrice = 300;
const value = "$";

 function buyTheProduct (userBudget){
  if (userBudget >= productPrice){
    console.log (`"${productName}" приобретена. Спасибо за покупку!`);
  } else {
    const deficiencyMoney = productPrice - userBudget;
    console.log (`Вам не хватает ${deficiencyMoney} ${value}, пополните баланс.`)
  }
 }
 buyTheProduct(500);
 buyTheProduct(200);


//Задание 4
let userAge = 30;
let userName = "Халим";
let userSigned = true;

function checkAccess(age, name, isSigned){
  if(userSigned && userAge >= 18){
    return `Доступ разрешен для пользователя ${userName}.`;}
    else {
        return `Доступ ограничен.`;
    }
  }
console.log(checkAccess(30, "Халим", true));