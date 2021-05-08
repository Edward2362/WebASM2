if (!(localStorage.getItem('User') == null)) {
    email = localStorage.getItem("User");
    document.getElementById("email").innerHTML = "Email: " + email;
}
else {
    window.location.href = "Login.html";
}

