//Покраска первой карточки

const containerCard = document.querySelector ('.catalog__item ');
const buttonCard = document.querySelector ('#button-color-card');
const pinkColorHash ='#FFC0CB';

buttonCard.addEventListener('click', () => {
  containerCard.style.backgroundColor = pinkColorHash;
});


//Покраска всех карточек

const containerCards = document.querySelectorAll ('.catalog__item');
const buttonCardsColor = document.querySelectorAll ('#button-color-cards')
const lavanderColorHash = '#DCD0FF';

buttonCardsColor.forEach(buttonCardsColor => {
  buttonCardsColor.addEventListener ('click', () => {
     containerCards.forEach(card => {
            card.style.backgroundColor = lavanderColorHash;
  })
})
});

//Открыть Google

const buttonGooglePage = document.querySelector('#open-google-page');

buttonGooglePage.addEventListener('click',openGoogle)

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть браузер?');

  if (answer === true) {
    window.open('https://google.com')
  } else {
    return;
  }
}

//Вывод консоль лог

const consoleButton = document.querySelector ('#show-consol-log ');

consoleButton.addEventListener('click', () => handleConsoleLog('Выбери свой продукт'));


function handleConsoleLog(message) {
  alert (message);
  console.log(message);
}

//Наведение мыши на заголовок

const catalogTitle = document.querySelector('.catalog__title');

if (catalogTitle) {
  catalogTitle.addEventListener('mouseenter', () => {
    console.log('Наведение мыши на заголовок!');
    
  });
}

//Переключение цвета кнопки

const toggleColorButton = document.querySelector('#toggle-color-button');

if (toggleColorButton) {
  toggleColorButton.addEventListener('click', () => {
      toggleColorButton.classList.toggle('color-btn--active');
  });
}
