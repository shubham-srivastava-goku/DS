const map = new Map();

const func = () => {
  console.log(1);
};

const object = {
  'key 1': 'value1',
}

map.set(1, 'val1');
map.set('2', 'val2');
map.set(func, 'val3');
map.set(object, 'val4');

console.log(map.entries());
console.log(map.get(func));
console.log(map.size);

for (let [key, value] of map) {
  console.log(key + " = " + value);
}
