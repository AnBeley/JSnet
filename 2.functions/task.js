function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }
  return { min: min, max: max, avg: Number((sum / arr.length).toFixed(2)) };
}

function summElementsWorker(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += parseInt(arr[i]);
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let min = Infinity;
  let max = -Infinity;
  if (arr.length === 0) {
    return 0;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
      if (arr[i] < min) {
        min = arr[i];
      }
    }
  }
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  let summaEven = 0;
  let summaOdd = 0;
  if (arr.length === 0) {
    return 0;
  } else {
    for (let i = 0; i < arr.length; i++) {
      arr[i] % 1 == 0 && arr[i] % 2 != 0
        ? (summaOdd += arr[i])
        : (summaEven += arr[i]);
    }
  }
  return summaEven - summaOdd;
}

function averageEvenElementsWorker(...arr) {
  let summaEven = 0;
  let countEnen = 0;
  if (arr.length === 0) {
    return 0;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (!(arr[i] % 1 == 0 && arr[i] % 2 != 0)) {
        summaEven += arr[i];
        countEnen += 1;
      }
    }
  }
  return summaEven / countEnen;
}

function differenceMaxMinInArrWorker(...arr) {
  let min = Infinity;
  let max = -Infinity;
  if (arr.length === 0) {
    return 0;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
      if (arr[i] < min) {
        min = arr[i];
      }
    }
  }
  return Math.abs(max - min);
}

function makeWork(arrOfArr, func) {
  let sumMax = 0;
  let sum;
  for (let i = 0; i < arrOfArr.length; i++) {
    sum = func(...arrOfArr[i]);
    if (sum > sumMax) {
      sumMax = sum;
    }
  }
  return sumMax;
}
