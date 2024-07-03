import promptSync from 'prompt-sync';
import {roundNumber, displaySubMenu} from './utils';

const menuList: {item: number; name: string}[] = [
  {item: 1, name: 'Surface Area'},
  {item: 2, name: 'Volume'},
];

export async function displaySphereMenu() {
  const prompt = promptSync();
  let choice = '';
  let radius = 0.0;
  let result = 0.0;

  while (choice !== 'Q' && choice !== 'q') {
    displaySubMenu(menuList, 'Select the type of calculation');

    choice = prompt('Input you choice: ');
    switch (choice) {
      case '1':
        console.log('\nCalculating the surface area of a cone');
        radius = parseFloat(prompt('Enter the radius of the cone: '));
        result = surfaceArea(radius);
        console.log(
          `The surface area of the cone is: ${roundNumber(result, 2)}`
        );
        break;
      case '2':
        console.log('\nCalculating the volume of a cone');
        radius = parseFloat(prompt('Enter the radius of the cone: '));
        result = volume(radius);
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

function surfaceArea(radius: number): number {
  return 4 * Math.PI * Math.pow(radius, 2);
}

function volume(radius: number): number {
  return (4 / 3) * Math.PI * Math.pow(radius, 3);
}
