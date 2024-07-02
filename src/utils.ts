export function roundNumber(num: number, decimalPlaces: number) {
  const factorOfTen = Math.pow(10, decimalPlaces);
  return Math.round(num * factorOfTen) / factorOfTen;
}

export function displaySubMenu(
  menuList: {item: number; name: string}[],
  selectText: string
) {
  console.log(`\n${selectText}:`);
  menuList.forEach(menuItem => {
    console.log(`${menuItem.item}: ${menuItem.name}`);
  });
  console.log('Q. Return to main menu');
}
