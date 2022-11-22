// var globalVariable = 'test';

// function func1() {
//   var localVariable = 'local variable';
//   console.log(globalVariable, localVariable);
// };

// func1();
// console.log(localVariable); // It will throw error because it was part of functional execution stack and it is destroyed after function call;

// const closure1 = (() => {
//   let globalVariable = 'second';
//   console.log('1', globalVariable, this);
// })();

// const closure2 = (function () {
//   let globalVariable = 'second';
//   console.log('2', globalVariable, this);
// })();

function add(val1) {
  let sum = val1;
  const resultFunc = (val2) => {
    sum += val2;

    return resultFunc;
  };

  resultFunc.valueOf = () => {
    return sum;
  }

  return resultFunc;
}

// console.log(add(1)(2).valueOf());

var a = 10;

const fun = (() => {
	let a = 3;
  let counter = 0;
	const closure = {};
  closure.increaseCounter = () => {
    console.log(a);
    counter += 1;
  };
  closure.print = () => {
    console.log(counter);
  }

  return closure;
})();

fun.increaseCounter();
fun.increaseCounter();
fun.print();

