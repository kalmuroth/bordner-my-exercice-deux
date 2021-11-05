function checkForm() {
  const loginForm = document.getElementById("login-form");
  const loginButton = document.getElementById("login-form-submit");
  var errors = [];

  loginButton.addEventListener("click", (e) => {
      e.preventDefault();
      const nom = loginForm.nom.value;
      const prenom = loginForm.prenom.value;
      const email = loginForm.email.value;
      const password = loginForm.password.value;

      if (!nom.match(/^([A-Za-z]+\s*[A-Za-z]+)$/)) {
        errors.push({
          message: "Votre nom ne doit pas contenir de caractére numérique"
        });
      }
      if (!prenom.match(/^([A-Za-z]+\s*[A-Za-z]+)$/)) {
        errors.push({
          message: "Votre prenom ne doit pas contenir de caractére numérique"
        });
      }
      if (!email.match(/[\w-]+@([\w-]+\.)+[\w-]+/)) {
        errors.push({
          message: "Le format de l'adresse email est invalide (pas de @ ou de .)"
        });
      }
      if (!password.match(/^(?=.*\d).{4,8}$/)) {
        errors.push({
          message: "Le mot de passe doit avoir un nombre de charactére entre 4 et 16 et doit au moins contenir un caractére numérique"
        });
      }
      if (errors.length) {
        alert("Plusieurs erreurs :\n" + errors.map(function (e) { return e.message; }).join('\n'));
        errors = [];
      }
      else {
        console.log('Connexion')
      }
  })
}

checkForm()