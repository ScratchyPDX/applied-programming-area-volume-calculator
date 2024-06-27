import promptSync from 'prompt-sync';

export async function displayCylinderMenu() {
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
  console.log('\nCalculating the lateral surface area of a cylinder');
  const prompt = promptSync();
  const radius = parseFloat(prompt('Enter the radius of the cylinder: '));
  const height = parseFloat(prompt('Enter the height of the cylinder: '));
  const result = 2 * Math.PI * radius * height;
  console.log(`The lateral surface area of the cylinder is: ${result}`);
}

function surfaceArea() {
  console.log('\nCalculating the surface area of a cylinder');
  const prompt = promptSync();
  const radius = parseFloat(prompt('Enter the radius of the cylinder: '));
  const height = parseFloat(prompt('Enter the height of the cylinder: '));
  const result = 2 * Math.PI * radius * height + 2 * Math.PI * Math.pow(radius, 2);
  console.log(`The surface area of the cylinder is: ${result}`);
}

function volume() {
  console.log('\nCalculating the volume of a cylinder');
  const prompt = promptSync();
  const radius = parseFloat(prompt('Enter the radius of the cylinder: '));
  const height = parseFloat(prompt('Enter the height of the cylinder: '));
  const result = Math.PI * Math.pow(radius, 2) * height;
  console.log(`The volume of the cylinder is: ${result}`);
}
