let answerText = document.getElementById('answer');
let expression = '';

// Event listener for numeric and operator buttons
$('button').not('#eq, #clear').click(function () {
    expression += $(this).text();
    updateDisplay();
});

// Event listener for the equals button
$('#eq').click(function () {
    try {
        // evaluates the value of the expression string as a JavaScript expression or equation.
        expression = eval(expression);
        updateDisplay();
    } catch (error) {
        expression = '';
        updateDisplay();
        alert('Invalid expression!');
    }
});

// Event listener for the clear button
$('#clear').click(function () {
    expression = '';
    updateDisplay();
});

// Function to update the answer display
function updateDisplay() {
    answerText.innerText = expression;
}