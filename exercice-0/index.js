
const el = document.querySelector('h1');

el.addEventListener('click', (e) => {
  console.log(e.currentTarget)
});


// Call back
const helloWorld = (callback) => {
  setTimeout(() => {
    callback('hello world');
  }, 3000);

  return;
}

helloWorld((value) => {
  console.log(value);

  helloWorld((value) => {
    console.log(value);

    helloWorld((value) => {
      console.log(value);
    });
  });
});

// Les class
class Voiture {
    constructor(name, color, doors) {
        this.name = name;
        this.color = color;
        this.doors = doors;
    }

    info() {
        return {
            name: this.name,
            color: this.color,
            doors: this.doors
        };
    }

    changeColor(color) {
        this.color = color;
    }
}

const lambo = new Voiture('lambo', 'rouge', 4);
const renault = new Voiture('renault', 'blue', 2);

lambo.changeColor('vert');
lambo.info();
