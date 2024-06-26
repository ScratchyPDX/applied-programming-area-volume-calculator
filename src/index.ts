// TypeScript Code to Present a Menu of Options to the User

// Importing necessary libraries for input
import promptSync from 'prompt-sync';
import {exit} from 'process';

import * as rectangle from './rectangle';

// Function to display the menu and handle user input
function displayMenu() {
  console.log('Please select a shape to calculate its area:');
  console.log('1. Rectangle');
  console.log('2. Circle');
  console.log('3. Cone');
  console.log('4. Cylinder');
  console.log('5. Exit');

  const prompt = promptSync();
  const choice = prompt('Input you choice: ');
  // Waiting for user input
  switch (choice) {
    case '1':
      console.log('You selected Rectangle.');
      // Call rectangle area calculation function here
      rectangle.displayCalculationMenu();
      break;
    case '2':
      console.log('You selected Circle.');
      // Call circle area calculation function here
      displayMenu();
      break;
    case '3':
      console.log('You selected Cone.');
      // Call cone area calculation function here
      break;
    case '4':
      console.log('You selected Cylinder.');
      // Call cylinder area calculation function here
      break;
    case '5':
      console.log('Exiting the program.');
      exit(undefined); // Exit the menu
      break;
    default:
      console.log('Invalid selection. Please select a number between 1 and 5.');
      displayMenu(); // Display the menu again for a valid choice
      break;
  }
}

// Calling the function to display the menu
displayMenu();
