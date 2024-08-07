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

document.addEventListener("DOMContentLoaded", function() {
    // Select all input elements
    var inputs = document.querySelectorAll('input[type="text"]');

    // Iterate over each input element to reset and resize
    inputs.forEach(function(input) {
        // Set the value to the default value from data-default attribute
        input.value = input.getAttribute('data-default');
        resizeInput(input);
        checkInput(input);
    });

    document.querySelector('.follow-button').addEventListener('click', function() {
        alert('Follow button clicked!');
    });
});
