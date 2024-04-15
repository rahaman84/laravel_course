document.getElementById('calculatorForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Retrieve user inputs
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    const operation = document.getElementById('operation').value;
  
    // Check for valid inputs
    if (isNaN(num1) || isNaN(num2)) {
      document.getElementById('result').innerHTML = 'Please enter valid numbers';
      return;
    }
  
    // Perform calculation based on selected operation
    let result;
    switch(operation) {
      case 'add':
        result = num1 + num2;
        break;
      case 'subtract':
        result = num1 - num2;
        break;
      case 'multiply':
        result = num1 * num2;
        break;
      case 'divide':
        if (num2 === 0) {
          document.getElementById('result').innerHTML = 'Cannot divide by zero';
          return;
        }
        result = num1 / num2;
        break;
      default:
        document.getElementById('result').innerHTML = 'Invalid operation';
        return;
    }
  
    // Display result
    document.getElementById('result').innerHTML = 'Result: ' + result;
  });
  