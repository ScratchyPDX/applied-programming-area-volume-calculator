/* eslint-disable prettier/prettier */
/* eslint-disable no-case-declarations */
import promptSync from 'prompt-sync';
import {roundNumber, displaySubMenu} from './utils';

const menuList: { item: number, name: string }[] = [
  { 'item': 1, 'name': 'Lateral Surface Area (LSA)' },
  { 'item': 2, 'name': 'Surface Area' },
  { 'item': 3, 'name': 'Volume' }
];

export async function displayConeMenu() {
  const prompt = promptSync();
  let choice = '';

  while (choice !== 'Q' && choice !== 'q') {
    let radius = 0.0;
    let slantHeight = 0.0;
    let result = 0.0;
    let height = 0.0;

    displaySubMenu(menuList);

    choice = prompt('Input you choice: ');
    switch (choice) {
      case '1':
        console.log('\nCalculating the lateral surface area of a cone');
        radius = parseFloat(prompt('Enter the radius of the cone: '));
        slantHeight = parseFloat(prompt('Enter the slant height of the cone: '));
        result = lateralSurfaceArea(radius, slantHeight);
        console.log(`The lateral surface area of the cone is: ${roundNumber(result, 2)}`);
        break;

      case '2':
        console.log('\nCalculating the surface area of a cone');
        radius = parseFloat(prompt('Enter the radius of the cone: '));
        slantHeight = parseFloat(prompt('Enter the slant height of the cone: '));
        result = surfaceArea(radius, slantHeight);
        console.log(`The surface area of the cone is: ${roundNumber(result, 2)}`);
        break;
      case '3':
        console.log('\nCalculating the volume of a cone');
        radius = parseFloat(prompt('Enter the radius of the cone: '));
        height = parseFloat(prompt('Enter the height of the cone: '));
        result = volume(radius, height);
        console.log(`The volume of the cone is: ${roundNumber(result, 2)}`);
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

function lateralSurfaceArea(radius: number, slantHeight: number): number {
  return Math.PI * radius * slantHeight;
}

function surfaceArea(radius: number, slantHeight: number): number {
  return Math.PI * radius * (radius + slantHeight);
}

function volume(radius: number, height: number): number {
  return (1 / 3) * Math.PI * radius * radius * height;
}
