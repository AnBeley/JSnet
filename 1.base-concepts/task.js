"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = Math.pow(b, 2) - 4 * a * c;

  if (discriminant === 0) {
    arr.push(-b / (2 * a));
  } else if (discriminant > 0) {
    arr.push((-b + Math.sqrt(discriminant)) / (2 * a));
    arr.push((-b - Math.sqrt(discriminant)) / (2 * a));
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let per = parseInt(percent) / 100 / 12;
  let con = parseInt(contribution);
  let am = parseInt(amount);
  let cm = parseInt(countMonths);

  if (isNaN(per) || per < 0) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  } else if (isNaN(con) || con < 0) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  } else if (isNaN(am) || am < 0) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  } else {
    if (isNaN(cm) || cm < 0) {
      return `Параметр "срок ипотеки" содержит неправильное значение ${countMonths}`;
    }
    let s = am - con;
    let pay = s * (per + per / ((1 + per) ** cm - 1));
    let totalAmount = (pay * cm).toFixed(2);
    console.log(totalAmount);
    return +totalAmount;
  }
}
