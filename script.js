const targetTime = new Date('2026-12-01T09:00:00Z');

const daysElement = document.querySelector('#days');
const hoursElement = document.querySelector('#hours');
const minutesElement = document.querySelector('#minutes');
const secondsElement = document.querySelector('#seconds');
const statusElement = document.querySelector('#countdown-status');

function updateCountdown() {
    const now = new Date();
    const remainingTime = targetTime.getTime() - now.getTime();

    if (remainingTime <= 0) {
        daysElement.textContent = '00';
        hoursElement.textContent = '00';
        minutesElement.textContent = '00';
        secondsElement.textContent = '00';

        statusElement.textContent = 'The event has started.';
        return;
    }

    const totalSeconds = Math.floor(remainingTime / 1000);

    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    daysElement.textContent = String(days).padStart(2, '0');
    hoursElement.textContent = String(hours).padStart(2, '0');
    minutesElement.textContent = String(minutes).padStart(2, '0');
    secondsElement.textContent = String(seconds).padStart(2, '0');

    statusElement.textContent = 'Countdown is running.';
}

updateCountdown();

setInterval(updateCountdown, 1000);
const registrationForm = document.querySelector('#registration-form');
const formStatus = document.querySelector('#form-status');
const submitButton = registrationForm.querySelector('button[type="submit"]');
const registrationMessage = document.querySelector('#registration-message');

let formState = 'idle';

function setFormState(state) {
    formState = state;

    if (state === 'idle') {
        formStatus.textContent = 'Ready to submit.';
        submitButton.disabled = false;
    }

    if (state === 'submitting') {
        formStatus.textContent = 'Submitting registration...';
         submitButton.disabled = true;
    }

    if (state === 'success') {
    const name = document.querySelector('#name').value;

    formStatus.textContent = 'Registration successful.';
    registrationMessage.textContent = `Thank you, ${name}!`;
    submitButton.disabled = false;
}
    if (state === 'error') {
        formStatus.textContent = 'Registration failed. Please try again.';
         submitButton.disabled = false;
    }
}

registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.querySelector('#email').value;

    setFormState('submitting');

    setTimeout(() => {
        if (email === 'error@example.com') {
            setFormState('error');
        } else {
            setFormState('success');
        }
    }, 1500);
});

setFormState('idle');