// Morpion
class MorpionXO {
  constructor() {
    this.el = document.querySelector('#app');
    this.currentPlayer = "X";
    this.run();
  }

  render() {
    const table = document.createElement('table');


    for (let i = 0; i < 3; i += 1) {
      const tr = document.createElement('tr');

      for (let j = 0; j < 3; j += 1) {
        const td = document.createElement('td');

        td.id = `${i}${j}`;
        td.textContent ="Y"
        td.style.padding = "20px";      
        
        td.addEventListener('click', (e) => {
          if (e.currentTarget.textContent != "O" && e.currentTarget.textContent != "X"){
            e.currentTarget.textContent = this.currentPlayer;
          }
          if (this.currentPlayer === "X") {
            this.currentPlayer = "O";

            return;
          }

          this.currentPlayer = "X";
        });

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

const morpionXO = new MorpionXO();