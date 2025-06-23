// utils.js

/**
 * Redondea un número a dos decimales.
 * @param {number} num
 * @returns {number}
 */
export function roundToTwoDecimals(num) {
  if (typeof num !== 'number') return 0;
  return Math.round(num * 100) / 100;
}
