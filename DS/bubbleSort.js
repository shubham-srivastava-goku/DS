function bubbleSort(array) {
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array.length - i; j += 1) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
}

const array = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

bubbleSort(array);
console.log(array);
