// TypeScript Code to Present a Menu of Options for Calculations

import promptSync from 'prompt-sync';

export async function displayCircleMenu() {
  const prompt = promptSync();
  let choice = '';

  while (choice !== 'Q' && choice !== 'q') {
    console.log('\nSelect the type of calculation:');
    console.log('1. Diameter');
    console.log('2. Circumference');
    console.log('3. Area');
    console.log('Q. Return to main menu');
    choice = prompt('Input you choice: ');
    switch (choice) {
      case '1':
        diameter();
        break;
      case '2':
        circumference();
        break;
      case '3':
        area();
        break;
      case 'Q':
      case 'q':
        console.log('\nReturning to main menu');
        return;
      default:
        console.log('\nInvalid choice. Please try again');
        break;
    }
  }
}

function diameter() {
  console.log('\nCalculating the diameter of a circle');
  const prompt = promptSync();
  const radius = parseFloat(prompt('Enter the radius of the circle: '));
  const result = 2 * radius;
  console.log(`The diameter of the circle is: ${result}`);
}

function circumference() {
  console.log('\nCalculating the circumference of a circle');
  const prompt = promptSync();
  const radius = parseFloat(prompt('Enter the radius of the circle: '));
  const result = 2 * Math.PI * radius;
  console.log(`The circumference of the circle is: ${result}`);
}

function area() {
  console.log('\nCalculating the area of a circle');
  const prompt = promptSync();
  const radius = parseFloat(prompt('Enter the radius of the circle: '));
  const result = Math.PI * radius * radius;
  console.log(`The area of the circle is: ${result}`);
}
