function checkPhoneNumber() {
  const loginButton = document.getElementById("login-form-submit");
  loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const get = document.getElementById('login-form');
    const phone = get.phone.value;
    if (phone.match(/^(0[6-7 1])(?:[ _.-]?(\d{2})){4}$/)) {
      alert("true")
      return true;
    }
    else {
      alert("false")
      return false;
    }
  })
}

checkPhoneNumber()
