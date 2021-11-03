const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const francais = loginForm.francais.value;
    const math = loginForm.math.value;
    const anglais = loginForm.anglais.value;
    const sum = (parseInt(francais) + parseInt(math) + parseInt(anglais))/3
    return sum
})