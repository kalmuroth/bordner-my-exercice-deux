// Exercice 1
class gridGenerator {
  constructor(xAxis, yAxis) {
    this.xAxis = xAxis;
    this.yAxis = yAxis;
    this.el = document.querySelector('#app');

    this.run();
  }

  getRandomTimer() {
    return Math.random() * (2000 - 1000) + 1000;
  }

  getRandomHexa() {
    return `#${Math.floor(Math.random()*16777215).toString(16)}`;
  }

  render() {
    const table = document.createElement('table');

    for (let i = 0; i < this.xAxis; i += 1) {
      const tr = document.createElement('tr');

      for (let j = 0; j < this.yAxis; j += 1) {
        const td = document.createElement('td');

        td.style.padding = "20px";
        td.style.border = "12px solid black";

        setInterval(() => {
          td.style.background = this.getRandomHexa();
        }, this.getRandomTimer());

        tr.appendChild(td);
      }

      table.appendChild(tr);
    }

    this.el.appendChild(table);
  }

  run() {
    this.render();
  }
}

const grid = new gridGenerator(10, 10);