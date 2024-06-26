// TypeScript Code to Present a Menu of Options for Calculations

import promptSync from 'prompt-sync';

export async function displayCalculationMenu() {
  console.log('Select the type of calculation:');
  console.log('1. Perimeter');
  console.log('2. Area');
  console.log('3. Volume');
  console.log('4. Surface Area');
  console.log('5. Exit');

  const prompt = promptSync();
  let choice = '';

  while (choice !== '5') {
    choice = prompt('Input you choice: ');
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
      case '5':
        console.log('Exiting the program.');
        return; // Exit the program
      default:
        console.log('Invalid choice. Please enter a number between 1 and 4.');
        displayCalculationMenu(); // Re-display menu for valid input
        break;
    }
  }
}
