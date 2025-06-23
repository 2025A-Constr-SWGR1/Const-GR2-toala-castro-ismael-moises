// bacCalculator.js

import { ALCOHOL_DISTRIBUTION_RATIO, GRAMS_OF_ALCOHOL_PER_DRINK } from './constants.js';
import { roundToTwoDecimals } from './utils.js';

/**
 * Calcula el nivel de alcohol en sangre (BAC)
 * @param {number} weight - Peso en kg
 * @param {number} drinks - Número de tragos consumidos
 * @param {number} hours - Horas desde el último trago
 * @param {'male'|'female'} gender - Género de la persona
 * @returns {number} BAC estimado (g/dL, mínimo 0)
 */
export function calculateBAC(weight, drinks, hours, gender = 'male') {
  if (
    typeof weight !== 'number' ||
    typeof drinks !== 'number' ||
    typeof hours !== 'number' ||
    !ALCOHOL_DISTRIBUTION_RATIO[gender]
  ) {
    return 0;
  }
  const bodyWaterConstant = ALCOHOL_DISTRIBUTION_RATIO[gender];
  const weightInGrams = weight * 1000;

  const alcoholConsumed = drinks * GRAMS_OF_ALCOHOL_PER_DRINK;
  const bac = ((alcoholConsumed * 100) / (weightInGrams * bodyWaterConstant)) - (0.015 * hours);

  return roundToTwoDecimals(Math.max(0, bac));
}
