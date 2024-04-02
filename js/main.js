
const tabHeaders = document.querySelectorAll('[data-tab]');

const contentBoxes = document.querySelectorAll('[data-tab-content]');

tabHeaders.forEach(function (item) {
    item.addEventListener('click', function () {


        contentBoxes.forEach(function (item) {
            item.classList.add('hidden');
        });


        const contentBox = document.querySelector('#' + this.dataset.tab);
        contentBox.classList.remove('hidden');

    })
})



const form = document.querySelector('.subcribe__form');
const emailInput = form.querySelector('.subcribe__input');


function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


function showError(message) {
  const errorElem = document.createElement('div');
  errorElem.className = 'subcribe__error';
  errorElem.innerHTML = message;
  form.insertBefore(errorElem, emailInput);
}

// Функція для відправки форми
function submitForm(event) {

  event.preventDefault();


  const email = emailInput.value.trim();


  if (!isValidEmail(email)) {

    showError('Не правильний e-mail');
  } else {

    form.submit();
  }
}

// обробник події відправки форми
form.addEventListener('submit', submitForm);
