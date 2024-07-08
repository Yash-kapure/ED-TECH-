/* COPY INPUT VALUES TO CARD MOCKUP */
const bounds = document.querySelectorAll('[data-bound]');

for (let i = 0; i < bounds.length; i++) {
  const targetId = bounds[i].getAttribute('data-bound');
  const defValue = bounds[i].getAttribute('data-def');
  const targetEl = document.getElementById(targetId);
  bounds[i].addEventListener('keyup', () => targetEl.innerText = bounds[i].value || defValue);
}


/* TOGGLE CVC DISPLAY MODE */
const cvc_toggler = document.getElementById('cvc_toggler');

cvc_toggler.addEventListener('click', () => {
  const target = cvc_toggler.getAttribute('data-target');
  const el = document.getElementById(target);
  el.setAttribute('type', el.type === 'text' ? 'password' : 'text');
});


/* TIMER COUNTDOWN */
const timer = document.querySelector('[data-id=timer]');
let timeLeft = 5 * 60 + 1;

const tick = () => {
  if (timeLeft > 0) {
    timeLeft--;
    const date = new Date('2000-01-01 00:00:00');
    date.setSeconds(timeLeft);
    const str = date.toISOString();
    timer.children[0].innerText = str[14];
    timer.children[1].innerText = str[15];
    timer.children[3].innerText = str[17];
    timer.children[4].innerText = str[18];
  }
}

setInterval(() => { tick(); }, 1000);
tick();



// payment prosessing



const form = document.querySelector('form');
const cardNumber = document.querySelector('.card-number-field input');
const expiryMonth = document.querySelector('input[data-bound="mm_mock"]');
const expiryYear = document.querySelector('input[data-bound="yy_mock"]');
const cvcNumber = document.querySelector('#cvc');
const cardholderName = document.querySelector('#name');

// Get references to the success message and "Fill All Text Boxes" popup
const successMessage = document.querySelector('#successMessage');
const fillAllPopup = document.querySelector('#fillAllPopup');

// Add an event listener to the form's submit event
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the form from submitting

  // Check if all input fields are filled
  const allFieldsFilled = cardNumber.value !== '' &&
    expiryMonth.value !== '' &&
    expiryYear.value !== '' &&
    cvcNumber.value !== '' &&
    cardholderName.value !== '';

  if (allFieldsFilled) {
    // Show the success message
    successMessage.style.display = 'block';
  } else {
    // Show the "Fill All Text Boxes" popup
    fillAllPopup.style.display = 'block';
  }
});

// Add an event listener to close the "Fill All Text Boxes" popup when clicked outside
window.addEventListener('click', (event) => {
  if (event.target === fillAllPopup) {
    fillAllPopup.style.display = 'none';
  }
});

