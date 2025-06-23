import { describe, it, expect } from 'vitest';
import { calculateBAC } from '../bacCalculator.js';

describe('calculateBAC', () => {
  it('debería calcular un BAC válido para un hombre', () => {
    const result = calculateBAC(70, 4, 1, 'male');
    expect(result).toBeGreaterThan(0);
  });

  it('debería devolver 0 si han pasado muchas horas', () => {
    const result = calculateBAC(80, 2, 20, 'male');
    expect(result).toBe(0);
  });
});
