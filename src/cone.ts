import promptSync from 'prompt-sync';
import {roundNumber} from './utils';

export async function displayConeMenu() {
  const prompt = promptSync();
  let choice = '';

  while (choice !== 'Q' && choice !== 'q') {
    console.log('\nSelect the type of calculation:');
    console.log('1. Lateral Surface Area (LSA)');
    console.log('2. Surface Area');
    console.log('3. Volume');
    console.log('Q. Return to main menu');
    choice = prompt('Input you choice: ');
    switch (choice) {
      case '1':
        lateralSurfaceArea();
        break;
      case '2':
        surfaceArea();
        break;
      case '3':
        volume();
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

function lateralSurfaceArea() {
  console.log('\nCalculating the lateral surface area of a cone');
  const prompt = promptSync();
  const radius = parseFloat(prompt('Enter the radius of the cone: '));
  const sh = prompt('Enter the slant height of the cone: ');
  const slantHeight = parseFloat(sh);
  const result = Math.PI * radius * slantHeight;
  console.log(`The lateral surface area of the cone is: ${roundNumber(result, 2)}`);
}

function surfaceArea() {
  console.log('\nCalculating the surface area of a cone');
  const prompt = promptSync();
  const radius = parseFloat(prompt('Enter the radius of the cone: '));
  const sh = prompt('Enter the slant height of the cone: ');
  const slantHeight = parseFloat(sh);
  const result = Math.PI * radius * (radius + slantHeight);
  console.log(`The surface area of the cone is: ${result}`);
}

function volume() {
  console.log('\nCalculating the volume of a cone');
  const prompt = promptSync();
  const radius = parseFloat(prompt('Enter the radius of the cone: '));
  const height = parseFloat(prompt('Enter the height of the cone: '));
  const result = (1 / 3) * Math.PI * radius * radius * height;
  console.log(`The volume of the cone is: ${roundNumber(result, 2)}`);
}
