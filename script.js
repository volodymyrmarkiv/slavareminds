function resizeInput(input) {
    const span = document.createElement('span');
    span.style.visibility = 'hidden';
    span.style.position = 'absolute';
    span.style.whiteSpace = 'pre';
    span.style.font = getComputedStyle(input).font;
    span.textContent = input.value || input.placeholder;
    document.body.appendChild(span);
    input.style.width = `${span.offsetWidth + 2}px`;
    document.body.removeChild(span);
}

function checkInput(input) {
    if (input.value) {
        input.style.color = '#0f1419';
    } else {
        input.style.color = 'grey';
    }
}

function formatDate(date) {
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('uk-UA', options);
}

function formatTime(date) {
    return date.toLocaleTimeString('uk-UA', { hour: '2-digit', minute: '2-digit' });
}

function getRandomViews() {
    const min = 10.1;
    const max = 256.9;
    const random = (Math.random() * (max - min) + min).toFixed(1);
    return random.replace('.', ',');
}

function toggleSpoiler() {
    const spoilerContent = document.querySelector('.spoiler-content');
    if (spoilerContent.style.display === 'none' || spoilerContent.style.display === '') {
        spoilerContent.style.display = 'block';
    } else {
        spoilerContent.style.display = 'none';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Select all input elements and reset their values
    var inputs = document.querySelectorAll('input[type="text"]');
    inputs.forEach(function(input) {
        input.value = ''; // Reset value to default (empty)
        resizeInput(input);
        checkInput(input);
    });

    document.querySelector('.follow-button').addEventListener('click', function() {
        window.open("donate.html", '_self');
    });

    // Set current date and time in tweet-time element
    const now = new Date();
    const formattedDate = formatDate(now);
    const formattedTime = formatTime(now);
    const randomViews = getRandomViews();
    document.querySelector('.tweet-time').textContent = `${formattedTime} · ${formattedDate} · ${randomViews} тис. переглядів`;
});