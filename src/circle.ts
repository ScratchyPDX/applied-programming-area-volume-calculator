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
    let radius = 0.0;
    let result = 0.0;

    displaySubMenu(menuList, 'Select the type of calculation');

    choice = prompt('Input you choice: ');
    switch (choice) {
      case '1':
        console.log('\nCalculating the diameter of a circle');
        radius = parseFloat(prompt('Enter the radius of the circle: '));
        result = diameter(radius);
        console.log(`The diameter of the circle is: ${roundNumber(result, 2)}`);
        break;
      case '2':
        console.log('\nCalculating the circumference of a circle');
        radius = parseFloat(prompt('Enter the radius of the circle: '));
        result = circumference(radius);
        console.log(`The circumference of the circle is: ${roundNumber(result, 2)}`);
        break;
      case '3':
        console.log('\nCalculating the area of a circle');
        radius = parseFloat(prompt('Enter the radius of the circle: '));
        result = area(radius);
        console.log(`The area of the circle is: ${roundNumber(result, 2)}`);
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

function diameter(radius: number): number {
  return 2 * radius;
}

function circumference(radius: number): number {
  return 2 * Math.PI * radius;
}

function area(radius: number): number {
  return Math.PI * radius * radius;
}
