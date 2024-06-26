// TypeScript Code to Present a Menu of Options for Calculations

import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export function displayCalculationMenu() {
  console.log('Select the type of calculation:');
  console.log('1. Perimeter');
  console.log('2. Area');
  console.log('3. Volume');
  console.log('4. Surface Area');
  console.log('Enter the number of your choice:');

  rl.question('', choice => {
    switch (choice) {
      case '1':
        console.log('You selected Perimeter.');
        // Implement perimeter calculation here
        break;
      case '2':
        console.log('You selected Area.');
        // Implement area calculation here
        break;
      case '3':
        console.log('You selected Volume.');
        // Implement volume calculation here
        break;
      case '4':
        console.log('You selected Surface Area.');
        // Implement surface area calculation here
        break;
      default:
        console.log('Invalid choice. Please enter a number between 1 and 4.');
        displayCalculationMenu(); // Re-display menu for valid input
        break;
    }
    rl.close();
  });
}
