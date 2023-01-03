const object1 = {
  title: 'title',
  description: 'description',
};

function func1(param1, param2) {
  console.log(this, param1, param2);
}

// func1('p', 'p0');
func1.call(object1, 'p1', 'p2');
func1.apply(object1, ['p3', 'p4']);

const func2 = func1.bind(object1);
func2('p5', 'p6');
