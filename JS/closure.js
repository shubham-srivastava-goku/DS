function runLoop() {
  for (var i = 0; i < 5; i += 1) {
    // setTimeout(() => {
    //   console.log(i);
    // }, i * 100);
    (function (i) {
      setTimeout(() => {
        console.log(i);
      }, i * 100);
    })(i);
  }
}

runLoop();
