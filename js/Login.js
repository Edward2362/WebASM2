if (localStorage.getItem('User') == null) {
    var username = String;
    var password = String;
    document.getElementById("login-form").addEventListener("submit", function (ev) {
        if (!validateLogin()) {
            ev.preventDefault();
            document.getElementById("error-message").style.display = "block";
        }
        else {
            localStorage.setItem('User', username);
            setTimeout(goToMyA, 0);
        }
    })

    function validateLogin() {
        username = document.getElementById("username").value;
        password = document.getElementById("password").value;
        email_pattern = /^(([a-zA-Z0-9]+\.){1,}|([a-zA-Z0-9]+){2,})([[a-zA-Z0-9]+@)([a-zA-Z0-9]+\.)([a-zA-Z0-9]+\.)*([a-zA-Z]{2,5})$/
        if (email_pattern.test(username) && (password == "password")) {
            return true;
        }
        return false;
    }

    function goToMyA() {
        window.location.href = "My Account.html";
    }
}
else{
    window.location.href = "My Account.html";
    document.getElementById("error-message").style.display = "none";
}