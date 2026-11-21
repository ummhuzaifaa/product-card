// 1. Находим форму подписки и поле ввода email по их классам
const subscriptionForm = document.getElementById('subscriptionForm')

subscriptionForm.addEventListener('submit', function (event){

   event.preventDefault();

    const emailValue = subscriptionForm.elements.email.value;

     const formData = {
    email: emailValue
  };

    console.log(formData);

     subscriptionForm.reset();
});

 let user = null;

const openRegBtn = document.getElementById('openRegistrationBtn');
const closeRegBtn = document.getElementById('closeRegistrationBtn');
const overlay = document.getElementById('overlay');
const registrationModal = document.getElementById('registrationModal');
const registrationForm = document.getElementById('registrationForm');


openRegBtn.addEventListener('click', function () {
  registrationModal.classList.add('modal-showed');
  overlay.classList.add('modal-showed');
});


function closeModal() {
  registrationModal.classList.remove('modal-showed');
  overlay.classList.remove('modal-showed');
}

closeRegBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

registrationForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const password = registrationForm.elements.password.value;
  const confirmPassword = registrationForm.elements.confirmPassword.value;

  if (!registrationForm.checkValidity() || password !== confirmPassword) {
    alert('Регистрация отклонена: проверьте правильность полей и совпадение паролей');
    return;
  }

    const userData = {
    name: registrationForm.elements.name.value,
    surname: registrationForm.elements.surname.value,
    birthDate: registrationForm.elements.birthDate.value,
    login: registrationForm.elements.login.value,
    password: password,
    createdOn: new Date()
  };

  user = userData;
  console.log(user);

  registrationForm.reset();
  closeModal();
});
