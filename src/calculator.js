


// calculator.js
// Node.js CLI Calculator
// Supports: addition, subtraction, multiplication, division

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed.');
  }
  return a / b;
}

if (require.main === module) {
  const [,, operation, ...args] = process.argv;

  if (!operation || args.length < 2) {
    console.log('Usage: node calculator.js <operation> <num1> <num2>');
    console.log('Operations: add, subtract, multiply, divide');
    process.exit(1);
  }

  const num1 = parseFloat(args[0]);
  const num2 = parseFloat(args[1]);

  try {
    let result;
    switch (operation) {
      case 'add':
        result = add(num1, num2);
        break;
      case 'subtract':
        result = subtract(num1, num2);
        break;
      case 'multiply':
        result = multiply(num1, num2);
        break;
      case 'divide':
        result = divide(num1, num2);
        break;
      default:
        console.log('Unsupported operation. Use add, subtract, multiply, divide.');
        process.exit(1);
    }
    console.log(`Result: ${result}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

module.exports = { add, subtract, multiply, divide };
