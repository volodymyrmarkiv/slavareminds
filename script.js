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

// Initialize input widths and colors on page load
document.querySelectorAll('input').forEach(input => {
    resizeInput(input);
    checkInput(input);
});
