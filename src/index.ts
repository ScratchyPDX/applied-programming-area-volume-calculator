// TypeScript Code to Present a Menu of Options to the User

// Importing necessary libraries for input
import promptSync from 'prompt-sync';
import {exit} from 'process';

import * as rectangle from './rectangle';
import * as circle from './circle';

// Function to display the menu and handle user input
function displayMenu() {
  const prompt = promptSync();
  let choice = '';

  while (choice !== 'Q' && choice !== 'q') {
    console.log('\nPlease select a shape:');
    console.log('1. Rectangle');
    console.log('2. Circle');
    console.log('3. Cone');
    console.log('4. Cylinder');
    console.log('5. Sphere');
    console.log('Q. Exit');
    choice = prompt('Input you choice: ');
    // Waiting for user input
    switch (choice) {
      case '1':
        console.log('\nYou selected Rectangle.');
        // Call rectangle area calculation function here
        rectangle.displayRectangleMenu();
        break;
      case '2':
        console.log('\nYou selected Circle');
        // Call circle area calculation function here
        circle.displayCircleMenu();
        break;
      case '3':
        console.log('\nYou selected Cone');
        // Call cone area calculation function here
        break;
      case '4':
        console.log('\nYou selected Cylinder');
        // Call cylinder area calculation function here
        break;
      case '5':
        console.log('\nYou selected Sphere');
        // Call cylinder area calculation function here
        break;
      case 'Q':
      case 'q':
        console.log('\nExiting program');
        exit(undefined); // Exit the menu
        break;
      default:
        console.log('\nInvalid selection');
        break;
    }
  }
}

// Calling the function to display the menu
displayMenu();
