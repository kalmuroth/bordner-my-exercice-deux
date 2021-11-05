class MyMorpionXO {
  constructor() {
       this.currentPlayer = "X";
       this.currentScore = {
            X: 0,
            O: 0,
       };
       this.app = document.querySelector("#app");
       this.run();
  }

  render() {

       this.title = document.createElement('h1');
       this.playerRound = document.createElement("h2");
       this.newDiv = document.createElement("div");
       const newGame = document.createElement("div");

       this.title.textContent = "Jeu du morpion";
       this.stopGame = false;
       this.newDiv.textContent = `X/${this.currentScore.X}  VS O/${this.currentScore.O} `;

       this.newDiv.classList.add("result");
       newGame.classList.add("game");

       this.app.appendChild(this.title);
       this.app.appendChild(newGame).appendChild(this.playerRound);
       newGame.appendChild(this.newDiv);

       for (let i = 0; i < 3; i++) {
            const div = document.createElement("div");
            newGame.appendChild(div);

            for (let j = 0; j < 3; j++) {
                 const buttonGen = document.createElement("button");
                 buttonGen.id = `${i}${j}`;

                 buttonGen.addEventListener("click", (e) => {
                      if (e.currentTarget.textContent || this.endGame) {
                           return;
                      }
                      e.currentTarget.textContent = this.currentPlayer;
                      if (this.combinationWin()) {
                           this.addWin(this.currentPlayer);

                      } else if (this.combinationWin() == false) {
                           setTimeout(() => {
                                if (confirm(`Match null, OK pour lancer le prochain round`)) {
                                     this.restart();

                                } else {
                                     this.reset();

                                }
                           }, 500);
                      }
                      if (this.currentPlayer === "X") {
                           this.currentPlayer = "O";

                      } else {
                           this.currentPlayer = "X";

                      }
                      this.playerRound.textContent = `Joueur ${this.currentPlayer}`;
                 });

                 div.appendChild(buttonGen);
            }
       }
  }

  addWin(currentPlayer) {
     this.currentScore[currentPlayer] += 1;
     this.newDiv.textContent = `X/${this.currentScore.X} VS O/${this.currentScore.O} `;

     setTimeout(() => {
          if (this.currentScore[currentPlayer] === 3) {
               if (confirm(`Bravo le joueur ${currentPlayer} à gagner le round, OK pour lancer la prochaine partie !`)) {
                    this.reset();

               }
          } else {
               if (confirm(`${currentPlayer} à gagner, OK pour lancer le prochain round !`)) {
                    this.restart();

               } else {
                    this.reset();

               }
          }
     }, 100);
  }

  combinationWin() {
       this.buttonCell = document.querySelectorAll("button");
       if (this.buttonCell[0].textContent == this.currentPlayer && this.buttonCell[1].textContent == this.currentPlayer && this.buttonCell[2].textContent == this.currentPlayer) {
            this.endGame = true;
            return true;

       } else if (this.buttonCell[3].textContent == this.currentPlayer && this.buttonCell[4].textContent == this.currentPlayer && this.buttonCell[5].textContent == this.currentPlayer) {
            this.endGame = true;
            return true;

       } else if (this.buttonCell[6].textContent == this.currentPlayer && this.buttonCell[7].textContent == this.currentPlayer && this.buttonCell[8].textContent == this.currentPlayer) {
            this.endGame = true;
            return true;

       } else if (this.buttonCell[0].textContent == this.currentPlayer && this.buttonCell[3].textContent == this.currentPlayer && this.buttonCell[6].textContent == this.currentPlayer) {
            this.endGame = true;
            return true;

       } else if (this.buttonCell[1].textContent == this.currentPlayer && this.buttonCell[4].textContent == this.currentPlayer && this.buttonCell[7].textContent == this.currentPlayer) {
            this.endGame = true;
            return true;

       } else if (this.buttonCell[2].textContent == this.currentPlayer && this.buttonCell[5].textContent == this.currentPlayer && this.buttonCell[8].textContent == this.currentPlayer) {
            this.endGame = true;
            return true;

       } else if (this.buttonCell[0].textContent == this.currentPlayer && this.buttonCell[4].textContent == this.currentPlayer && this.buttonCell[8].textContent == this.currentPlayer) {
            this.endGame = true;
            return true;

       } else if (this.buttonCell[2].textContent == this.currentPlayer && this.buttonCell[4].textContent == this.currentPlayer && this.buttonCell[6].textContent == this.currentPlayer) {
            this.endGame = true;
            return true;

       }
       if (this.buttonCell[0].textContent.length == 1 && this.buttonCell[1].textContent.length == 1 && this.buttonCell[2].textContent.length == 1 && this.buttonCell[3].textContent.length == 1 && this.buttonCell[4].textContent.length == 1 && this.buttonCell[5].textContent.length == 1 && this.buttonCell[6].textContent.length == 1 && this.buttonCell[7].textContent.length == 1 && this.buttonCell[8].textContent.length == 1) {
          this.endGame = true;
          return false;

     }
  }

  reset() {
     this.endGame = false;  
     this.app.innerHTML = "";
     this.currentScore.X = 0;
     this.currentScore.O = 0;
     this.render();
  }

  restart() {
       this.endGame = false;
       this.app.innerHTML = "";
       this.render();
  }


  ifPlayerWin(currentPlayer) {
     alert(`Le joueur ${currentPlayer} à gagner la partie !`);
     return;
  }

  run() {
       this.render();
  }
}

const game = new MyMorpionXO();