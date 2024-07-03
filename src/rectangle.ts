import promptSync from 'prompt-sync';
import {roundNumber, displaySubMenu} from './utils';

const menuList: {item: number; name: string}[] = [
  {item: 1, name: 'Perimeter'},
  {item: 2, name: 'Area'},
  {item: 3, name: 'Volume'},
  {item: 3, name: 'Surface Area'},
];

export async function displayRectangleMenu() {
  const prompt = promptSync();
  let choice = '';
  let length = 0.0;
  let width = 0.0;
  let height = 0.0;
  let result = 0.0;

  while (choice !== 'Q' && choice !== 'q') {
    displaySubMenu(menuList, 'Select the type of calculation');

    choice = prompt('Input you choice: ');
    switch (choice) {
      case '1':
        console.log('\nCalculating the perimeter of a rectangle');
        length = parseFloat(prompt('Enter the length of the rectangle: '));
        width = parseFloat(prompt('Enter the width of the rectangle: '));
        result = perimeter(length, width);
        console.log(
          `The perimeter of the rectangle is: ${roundNumber(result, 2)}`
        );
        break;
      case '2':
        console.log('\nCalculating the area of a rectangle');
        length = parseFloat(prompt('Enter the length of the rectangle: '));
        width = parseFloat(prompt('Enter the width of the rectangle: '));
        result = area(length, width);
        console.log(`The area of the rectangle is: ${roundNumber(result, 2)}`);
        break;
      case '3':
        console.log('\nCalculating the volume of a rectangle');
        length = parseFloat(prompt('Enter the length of the rectangle: '));
        width = parseFloat(prompt('Enter the width of the rectangle: '));
        height = parseFloat(prompt('Enter the height of the rectangle: '));
        result = volume(length, width, height);
        console.log(
          `The volume of the rectangle is: ${roundNumber(result, 2)}`
        );
        break;
      case '4':
        console.log('\nCalculating the surface are of a rectangle.');
        length = parseFloat(prompt('Enter the length of the rectangle: '));
        width = parseFloat(prompt('Enter the width of the rectangle: '));
        height = parseFloat(prompt('Enter the height of the rectangle: '));
        result = surfaceArea(length, width, height);
        console.log(
          `The surface area of the rectangle is: ${roundNumber(result, 2)}`
        );
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

export function perimeter(length: number, width: number): number {
  return 2 * (length + width);
}

export function area(length: number, width: number): number {
  return length * width;
}

export function volume(length: number, width: number, height: number): number {
  return length * width * height;
}

// eslint-disable-next-line prettier/prettier
export function surfaceArea(length: number, width: number, height: number): number {
  return 2 * (length * width + width * height + height * length);
}
