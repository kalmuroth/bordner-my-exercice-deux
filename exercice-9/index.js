function checkPalindrome() {
    const loginForm = document.getElementById("login-form");
    const loginButton = document.getElementById("login-form-submit");

    loginButton.addEventListener("click", (e) => {
        array = []
        y = 0
        e.preventDefault();
        const phrase = loginForm.phrase.value;
        array = phrase.split(/[\s,]+/)
        function ifEqual(array) {
            for (var i = 0; i < array.length; i++) {
                if(array[i] === array[i].split("").reverse().join("")){
                    y++;
                }
            }
            if (y == array.length){
                alert("true")
                return true 
            }
            else{
                return false 
            }
        }
        console.log(ifEqual(array))
    })
}

checkPalindrome()