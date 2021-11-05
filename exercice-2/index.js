// Exercice 1
class drawBar {
  constructor(sum, nbr) {
    this.sum = sum;
    this.nbr = nbr;
    this.run();
  }


  run() {
		return document.querySelector("#myBar").innerHTML = `
			<progress id="bar" max="${this.sum}" value="${this.nbr}"></progress>
		`;
	}
}

const bar = new drawBar(5000, 3000);