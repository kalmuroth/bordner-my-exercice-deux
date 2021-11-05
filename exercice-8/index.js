class BatailleNavale {
    constructor() {
         this.matrice = [[0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],[0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 4, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
         this.el = document.querySelector("#app");
         this.run();
    }

    render() {
        const table = document.createElement('table');
        for (let i = 0; i < this.matrice.length; i += 1) {
          const tr = document.createElement('tr');
    
          for (let j = 0; j < this.matrice.length; j += 1) {
            const td = document.createElement('td');
            td.style.padding = "20px";
            td.style.border = "12px solid black";
            td.style.background = "grey";
            td.dataset.id = this.matrice[i][j]
            td.textContent = this.matrice[i][j]
            tr.appendChild(td);
            td.addEventListener("click", (e) => {
                if (e.currentTarget.getAttribute('data-id') === '1'){
                    e.currentTarget.style.background = "red";
                }
                else {
                    e.currentTarget.style.background = "blue";
                }
            });
          }
          table.appendChild(tr);
        }
    
        this.el.appendChild(table);
      }

    run() {
        this.render();
    }
}

const bataille = new BatailleNavale();