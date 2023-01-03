function func(val1) {
  let sum = val1;

  function add(val2) {
    sum += val2;

    return add;
  }

  add.valueOf = function() {
    return sum;
  }

  return add;
}

const res = func(1)(2)(3).valueOf();

console.log(res);