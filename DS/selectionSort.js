function selectionSort(array) {
  for (let i = 0; i < array.length; i += 1) {
    let smallest = i;
    for (let j = i; j < array.length; j += 1) {
      if (array[smallest] > array[j]) {
        smallest = j
      }
    }

    const temp = array[i];
    array[i] = array[smallest];
    array[smallest] = temp;
  }
}

const array = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

selectionSort(array);
console.log(array);
