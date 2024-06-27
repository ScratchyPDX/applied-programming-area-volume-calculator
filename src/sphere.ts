import promptSync from 'prompt-sync';

export async function displaySphereMenu() {
  const prompt = promptSync();
  let choice = '';

  while (choice !== 'Q' && choice !== 'q') {
    console.log('\nSelect the type of calculation:');
    console.log('1. Surface Area');
    console.log('2. Volume');
    console.log('Q. Return to main menu');
    choice = prompt('Input you choice: ');
    switch (choice) {
      case '1':
        surfaceArea();
        break;
      case '2':
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

function surfaceArea() {
  console.log('\nCalculating the surface area of a cone');
  const prompt = promptSync();
  const radius = parseFloat(prompt('Enter the radius of the cone: '));
  const result = 4 * Math.PI * Math.pow(radius, 2);
  console.log(`The surface area of the cone is: ${result}`);
}

function volume() {
  console.log('\nCalculating the volume of a cone');
  const prompt = promptSync();
  const radius = parseFloat(prompt('Enter the radius of the cone: '));
  const result = (4 / 3) * Math.PI * Math.pow(radius, 3);
  console.log(`The volume of the cone is: ${result}`);
}
