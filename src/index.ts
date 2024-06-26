// TypeScript Code to Present a Menu of Options to the User

// Importing necessary libraries for input
import * as readline from 'readline';
import * as rectangle from './rectangle';

// Creating readline interface for input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to display the menu and handle user input
function displayMenu() {
  console.log('Please select a shape to calculate its area:');
  console.log('1. Rectangle');
  console.log('2. Circle');
  console.log('3. Cone');
  console.log('4. Cylinder');
  console.log('Enter the number corresponding to your choice:');

  // Waiting for user input
  rl.question('', (answer) => {
    switch (answer) {
      case '1':
        console.log('You selected Rectangle.');
        // Call rectangle area calculation function here
        rectangle.displayCalculationMenu();
        break;
      case '2':
        console.log('You selected Circle.');
        // Call circle area calculation function here
        break;
      case '3':
        console.log('You selected Cone.');
        // Call cone area calculation function here
        break;
      case '4':
        console.log('You selected Cylinder.');
        // Call cylinder area calculation function here
        break;
      default:
        console.log('Invalid selection. Please select a number between 1 and 4.');
        displayMenu(); // Display the menu again for a valid choice
        break;
    }
    rl.close(); // Close the readline interface
  });
}

// Calling the function to display the menu
displayMenu();
