// Exercice 1
class drawBar {
  constructor(sum, nbr) {
    this.sum = sum;
    this.nbr = nbr;
    this.run();
  }

  getRandomTimer() {
    return Math.random() * (2000 - 1000) + 1000;
  }

  getRandomHexa() {
    return `#${Math.floor(Math.random()*16777215).toString(16)}`;
  }

  render() {
    var i = 0;
    if (i == 0) {
      i = 1;
      var elem = document.getElementById("myBar");
      var width = this.nbr;
      var id = setInterval(frame, this.sum);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          i = 0;
        } else {
          width++;
          elem.style.width = width + "%";
        }
      }
    }
  }
  run() {
    this.render();
  }
}

const bar = new drawBar(50, 1);