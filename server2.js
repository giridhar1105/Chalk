import chalk from 'chalk';

const createMessage = (text, style) => {
  switch(style) {
    case 'warning':
      return chalk.red.bold(text);
    case 'success':
      return chalk.green.italic(text);
    case 'info':
      return chalk.blue(text);
    case 'error':
      return chalk.bgRed.white.bold(text);
    case 'debug':
      return chalk.yellow.underline(text);
    default:
      return chalk.white(text);
  }
};

const displayMessage = (message, style) => {
  console.log(createMessage(message, style));
};

const validateInput = (input) => {
  if (input === "") {
    throw new Error('Input cannot be empty');
  } else if (input.length < 3) {
    throw new Error('Input must be at least 3 characters long');
  } else {
    return true;
  }
};

const userInteraction = () => {
  const userMessages = [
    { message: "Welcome to the system!", style: 'success' },
    { message: "Please enter your name:", style: 'info' },
    { message: "Invalid input detected!", style: 'error' },
    { message: "Debugging system...", style: 'debug' },
    { message: "Proceeding with operation...", style: 'warning' }
  ];

  userMessages.forEach(msg => displayMessage(msg.message, msg.style));

  const userInput = "Jo";

  try {
    validateInput(userInput);
    displayMessage(`Input "${userInput}" is valid.`, 'success');
  } catch (error) {
    displayMessage(error.message, 'error');
  }

  const operationResult = simulateOperation();
  displayMessage(operationResult, operationResult.includes("success") ? 'success' : 'error');
};

const simulateOperation = () => {
  const success = Math.random() > 0.5;
  if (success) {
    return "Operation completed successfully!";
  } else {
    return "Operation failed. Please try again.";
  }
};

userInteraction();
