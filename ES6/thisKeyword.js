const object1 = {
    title: 'a',
    tags: ['b', 'c', 'd'],
    play() {
      console.log(this); // This will have object1 reference.
    },
    loop() {
      this.tags.forEach(function(tag) {
        console.log(this.title, tag);
      }, this);

      const loop2 = () => {
        console.log(this);
      }

      loop2();
    },
}

object1.play();
object1.loop();

function object2() {
  console.log(this); // This will have reference of global object.
}

object2();

function Object3(title) {
  this.title = title;
  console.log(this); // This will have reference of global object.
}

const object3 = new Object3('c');
