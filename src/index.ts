/* eslint-disable prettier/prettier */
// TypeScript Code to Present a Menu of Options to the User

// Importing necessary libraries for input
import promptSync from 'prompt-sync';
import {exit} from 'process';
import { displaySubMenu } from './utils';

import * as rectangle from './rectangle';
import * as circle from './circle';
import * as cone from './cone';
import * as cylinder from './cylinder';
import * as sphere from './sphere';


const menuList: { item: number, name: string }[] = [
  { 'item': 1, 'name': 'Rectangular' },
  { 'item': 2, 'name': 'Circle' },
  { 'item': 3, 'name': 'Cone' },
  { 'item': 3, 'name': 'Cylinder' },
  { 'item': 3, 'name': 'Sphere' },
];

// Function to display the menu and handle user input
function displayMenu() {
  const prompt = promptSync();
  let choice = '';

  while (choice !== 'Q' && choice !== 'q') {

    displaySubMenu(menuList, 'Please select a shape');

    choice = prompt('Input you choice: ');
    // Waiting for user input
    switch (choice) {
      case '1':
        console.log('\nYou selected Rectangle.');
        rectangle.displayRectangleMenu();
        break;
      case '2':
        console.log('\nYou selected Circle');
        circle.displayCircleMenu();
        break;
      case '3':
        console.log('\nYou selected Cone');
        cone.displayConeMenu();
        break;
      case '4':
        console.log('\nYou selected Cylinder');
        cylinder.displayCylinderMenu();
        break;
      case '5':
        console.log('\nYou selected Sphere');
        sphere.displaySphereMenu();
        break;
      case 'Q':
      case 'q':
        console.log('\nExiting program');
        exit(undefined); // Exit the menu
        break;
      default:
        console.log('\nInvalid selection');
        break;
    }
  }
}

// Calling the function to display the menu
displayMenu();
