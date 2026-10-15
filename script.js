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