import { describe, it, expect } from 'vitest';
import { roundToTwoDecimals } from '../utils.js'; // ✅ nombre corregido

describe('roundToTwoDecimals', () => {
  it('debería redondear a dos decimales', () => {
    expect(roundToTwoDecimals(2.555)).toBe(2.56);
    expect(roundToTwoDecimals(3.14159)).toBe(3.14);
    expect(roundToTwoDecimals(0)).toBe(0);
  });

  it('debería devolver 0 si no es un número', () => {
    expect(roundToTwoDecimals("hola")).toBe(0);
    expect(roundToTwoDecimals(null)).toBe(0);
    expect(roundToTwoDecimals(undefined)).toBe(0);
  });
});
