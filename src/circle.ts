/* eslint-disable prettier/prettier */
import promptSync from 'prompt-sync';
import {roundNumber, displaySubMenu} from './utils';

const menuList: { item: number, name: string }[] = [
  { 'item': 1, 'name': 'Diameter' },
  { 'item': 2, 'name': 'Circumference' },
  { 'item': 3, 'name': 'Area' }
];

export async function displayCircleMenu() {
  const prompt = promptSync();
  let choice = '';

  while (choice !== 'Q' && choice !== 'q') {
    displaySubMenu(menuList);
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
  console.log(`The diameter of the circle is: ${roundNumber(result, 2)}`);
}

function circumference() {
  console.log('\nCalculating the circumference of a circle');
  const prompt = promptSync();
  const radius = parseFloat(prompt('Enter the radius of the circle: '));
  const result = 2 * Math.PI * radius;
  console.log(`The circumference of the circle is: ${roundNumber(result, 2)}`);
}

function area() {
  console.log('\nCalculating the area of a circle');
  const prompt = promptSync();
  const radius = parseFloat(prompt('Enter the radius of the circle: '));
  const result = Math.PI * radius * radius;
  console.log(`The area of the circle is: ${roundNumber(result, 2)}`);
}
