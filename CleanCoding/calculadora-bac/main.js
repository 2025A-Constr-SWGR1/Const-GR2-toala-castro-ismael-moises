// main.js

import { calculateBAC } from './bacCalculator.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('bac-form');
  const result = document.getElementById('result');

  function showResult(message, isError = false) {
    result.textContent = message;
    result.classList.toggle('text-danger', isError);
    result.classList.toggle('text-info', !isError);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const weight = parseFloat(form.weight.value);
    const drinks = parseInt(form.drinks.value, 10);
    const hours = parseFloat(form.hours.value);
    const gender = form.gender.value;

    if (
      isNaN(weight) || weight <= 0 ||
      isNaN(drinks) || drinks < 0 ||
      isNaN(hours) || hours < 0
    ) {
      showResult('Por favor, ingresa valores válidos en todos los campos.', true);
      return;
    }

    const bac = calculateBAC(weight, drinks, hours, gender);
    showResult(`Tu nivel estimado de alcohol en sangre es: ${bac} g/dL`);
  });
});
