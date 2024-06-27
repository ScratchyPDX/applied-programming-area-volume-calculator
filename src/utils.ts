export function roundNumber(num: number, decimalPlaces: number) {
  const factorOfTen = Math.pow(10, decimalPlaces);
  return Math.round(num * factorOfTen) / factorOfTen;
}
