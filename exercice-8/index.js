class BatailleNavale {
    constructor() {
         this.matrice = [[0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],[0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 4, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
         this.el = document.querySelector("#app");
         this.porteAvion = 0;
         this.cuirassier = 0;
         this.croiseur = 0;
         this.contreTorpilleurs = 0;
         this.torpilleur = 0;
         this.boom = 0;
         this.column = ['A','B','C','D','E','F','G','H','I','J','K','L'];
         this.alpha = ['' ,' 1 ',' 2 ',' 3 ',' 4 ',' 5 ',6,7,8,9,10,11,12];
         this.matrice.unshift(this.column)
         for (let i = 0; i < this.matrice.length; i++) {
            this.matrice[i].unshift(this.alpha[i]);
         }
         console.log(this.matrice)
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

            if (
                this.matrice[i][j] == '0' || this.matrice[i][j] == '1' || this.matrice[i][j] == '2' || this.matrice[i][j] == '3' || this.matrice[i][j] == '4' || this.matrice[i][j] == '5'
           ) {
                td.dataset.id = this.matrice[i][j]
           } else {
                td.textContent = this.matrice[i][j]
           }


            tr.appendChild(td);
            td.addEventListener("click", (e) => {
                if (e.currentTarget.getAttribute('data-id') == '1' || e.currentTarget.getAttribute('data-id') == '2' || e.currentTarget.getAttribute('data-id') == '3' || e.currentTarget.getAttribute('data-id') == '4' || e.currentTarget.getAttribute('data-id') == '5'){
                    if (e.currentTarget.getAttribute('data-id') == '1'){
                        this.torpilleur++
                        if (this.torpilleur == 2){
                            const torpilleur = document.createElement('div');
                            torpilleur.textContent = "Torpilleur"
                            this.el.appendChild(torpilleur);
                            this.boom++
                        }
                    }
                    if (e.currentTarget.getAttribute('data-id') == '2'){
                        this.contreTorpilleurs++
                        if (this.contreTorpilleurs == 3){
                            const contreTorpilleurs = document.createElement('div');
                            contreTorpilleurs.textContent = "Contre-Torpilleurs"
                            this.el.appendChild(contreTorpilleurs);
                            this.boom++
                        }
                    }
                    if (e.currentTarget.getAttribute('data-id') == '3'){
                        this.croiseur++
                        if (this.croiseur == 4){
                            const croiseur = document.createElement('div');
                            croiseur.textContent = "Croiseur"
                            this.el.appendChild(croiseur);
                            this.boom++
                        }
                    }
                    if (e.currentTarget.getAttribute('data-id') == '4'){
                        this.cuirassier++
                        if (this.cuirassier == 5){
                            const cuirassier = document.createElement('div');
                            cuirassier.textContent = "Cuirassier"
                            this.el.appendChild(cuirassier);
                            this.boom++
                        }
                    }
                    if (e.currentTarget.getAttribute('data-id') == '5'){
                        this.porteAvion++
                        if (this.porteAvion == 5){
                            const porteAvion = document.createElement('div');
                            porteAvion.textContent = "Porte-Avion"
                            this.el.appendChild(porteAvion);
                            this.boom++
                        }
                    }
                    e.currentTarget.style.background = "red";
                    if (this.boom == 5){
                        setTimeout(() => {
                            if (alert(`Bravo, vous avez gagnez !`)) {
                            } 
                       }, 500);
                    }
                }
                else if (e.currentTarget.getAttribute('data-id') == '0') {
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