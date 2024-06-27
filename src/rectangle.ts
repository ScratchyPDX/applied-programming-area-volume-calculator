import promptSync from 'prompt-sync';
import {roundNumber} from './utils';

export async function displayRectangleMenu() {
  const prompt = promptSync();
  let choice = '';

  while (choice !== 'Q' && choice !== 'q') {
    console.log('\nSelect the type of calculation:');
    console.log('1. Perimeter');
    console.log('2. Area');
    console.log('3. Volume');
    console.log('4. Surface Area');
    console.log('Q. Return to main menu');
    choice = prompt('Input you choice: ');
    switch (choice) {
      case '1':
        perimeter();
        break;
      case '2':
        area();
        break;
      case '3':
        volume();
        break;
      case '4':
        surfaceArea();
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

function perimeter() {
  console.log('\nCalculating the perimeter of a rectangle');
  const prompt = promptSync();
  const length = parseFloat(prompt('Enter the length of the rectangle: '));
  const width = parseFloat(prompt('Enter the width of the rectangle: '));
  const result = 2 * (length + width);
  console.log(`The perimeter of the rectangle is: ${roundNumber(result, 2)}`);
}

function area() {
  console.log('\nCalculating the area of a rectangle');
  const prompt = promptSync();
  const length = parseFloat(prompt('Enter the length of the rectangle: '));
  const width = parseFloat(prompt('Enter the width of the rectangle: '));
  const result = length * width;
  console.log(`The area of the rectangle is: ${roundNumber(result, 2)}`);
}

function volume() {
  console.log('\nCalculating the volume of a rectangle');
  const prompt = promptSync();
  const length = parseFloat(prompt('Enter the length of the rectangle: '));
  const width = parseFloat(prompt('Enter the width of the rectangle: '));
  const height = parseFloat(prompt('Enter the height of the rectangle: '));
  const result = length * width * height;
  console.log(`The volume of the rectangle is: ${roundNumber(result, 2)}`);
}

function surfaceArea() {
  console.log('\nCalculating the surface are of a rectangle.');
  const prompt = promptSync();
  const length = parseFloat(prompt('Enter the length of the rectangle: '));
  const width = parseFloat(prompt('Enter the width of the rectangle: '));
  const height = parseFloat(prompt('Enter the height of the rectangle: '));
  const result = 2 * (length * width + width * height + height * length);
  console.log(`The surface area of the rectangle is: ${roundNumber(result, 2)}`);
}
