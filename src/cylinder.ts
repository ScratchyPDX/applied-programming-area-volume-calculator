import promptSync from 'prompt-sync';
import {roundNumber, displaySubMenu} from './utils';

const menuList: {item: number; name: string}[] = [
  {item: 1, name: 'Lateral Surface Area (LSA)'},
  {item: 2, name: 'Surface Area'},
  {item: 3, name: 'Volume'},
];

export async function displayCylinderMenu() {
  const prompt = promptSync();
  let choice = '';
  let radius = 0.0;
  let height = 0.0;
  let result = 0.0;

  while (choice !== 'Q' && choice !== 'q') {
    displaySubMenu(menuList, 'Select the type of calculation');

    choice = prompt('Input you choice: ');
    switch (choice) {
      case '1':
        console.log('\nCalculating the lateral surface area of a cylinder');
        radius = parseFloat(prompt('Enter the radius of the cylinder: '));
        height = parseFloat(prompt('Enter the height of the cylinder: '));
        result = lateralSurfaceArea(radius, height);
        console.log(
          `The lateral surface area of the cylinder is: ${roundNumber(result, 2)}`
        );
        break;
      case '2':
        console.log('\nCalculating the surface area of a cylinder');
        radius = parseFloat(prompt('Enter the radius of the cylinder: '));
        height = parseFloat(prompt('Enter the height of the cylinder: '));
        result = surfaceArea(radius, height);
        console.log(
          `The surface area of the cylinder is: ${roundNumber(result, 2)}`
        );
        break;
      case '3':
        console.log('\nCalculating the volume of a cylinder');
        radius = parseFloat(prompt('Enter the radius of the cylinder: '));
        height = parseFloat(prompt('Enter the height of the cylinder: '));
        result = volume(radius, height);
        console.log(`The volume of the cylinder is: ${roundNumber(result, 2)}`);
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

function lateralSurfaceArea(radius: number, height: number): number {
  return 2 * Math.PI * radius * height;
}

function surfaceArea(radius: number, height: number): number {
  return 2 * Math.PI * radius * height + 2 * Math.PI * Math.pow(radius, 2);
}

function volume(radius: number, height: number): number {
  return Math.PI * Math.pow(radius, 2) * height;
}
