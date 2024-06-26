document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.getElementById('input');
    const numberButtons = document.querySelectorAll('.num');
    const operatorButtons = document.querySelectorAll('.sign');
    const removeButton = document.getElementById('remove');
    const acButton = document.getElementById('ac');

    let currentInput = '';
    let previousInput = '';
    let operator = '';

    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.value === '=') {
                calculateResult();
            } else {
                currentInput += button.value;
                inputField.value = currentInput;
            }
        });
    });

    operatorButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (currentInput === '') return;
            if (previousInput !== '') {
                calculateResult();
            }
            operator = button.value;
            previousInput = currentInput;
            currentInput = '';
        });
    });

    removeButton.addEventListener('click', () => {
        currentInput = currentInput.slice(0, -1);
        inputField.value = currentInput;
    });

    acButton.addEventListener('click', () => {
        currentInput = '';
        previousInput = '';
        operator = '';
        inputField.value = '';
    });

    function calculateResult() {
        if (previousInput === '' || currentInput === '' || operator === '') return;
        let result;
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);

        switch (operator) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                result = prev / current;
                break;
            default:
                return;
        }

        currentInput = result.toString();
        inputField.value = currentInput;
        previousInput = '';
        operator = '';
    }
});
