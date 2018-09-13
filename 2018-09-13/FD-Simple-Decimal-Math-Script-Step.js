// Simple decimal math script step
(function execute(inputs, outputs) {
  var operator = inputs.operator.toString();
  var num1 = parseFloat(inputs.number1);
  var num2 = parseFloat(inputs.number2);
  var answer = 0.0;

  switch (operator) {
    case 'add':
      answer = num1 + num2;
      break;
    case 'subtract':
      answer = num1 - num2;
      break;
    case 'multiply':
      answer = num1 * num2;
      break;
    case 'divide':
      answer = num1 / num2;
      break;
    case 'modulo':
      answer = num1 % num2;
      break;
  }
  
  outputs.answer = answer;
  
})(inputs, outputs);
