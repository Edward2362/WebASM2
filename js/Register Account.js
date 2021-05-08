window.addEventListener("load", function(e) {
    document.getElementById("businessOpt").style.visibility = "hidden";
})

var businessBtn = document.getElementById("acctype1");
businessBtn.addEventListener("click", function (e) {
    document.getElementById("businessOpt").style.visibility = "visible";
});

var shopperBtn = document.getElementById("acctype2");
shopperBtn.addEventListener("click", function (e) {
    document.getElementById("businessOpt").style.visibility = "hidden";
});

function validateAll() {
  validateEmail();
  validatePhone();
  validatePassword();
  validateRePassword();
  validateFName();
  validateLName();
  validateAddress();
  validateCity();
  validateZipcode();
}

function validateEmail() {
var customerEmail = document.forms["RegisterForm"]["regEmail"].value;
emailPattern = /^(([a-zA-Z0-9]+\.){1,}|([a-zA-Z0-9]+){2,})([[a-zA-Z0-9]+@)([a-zA-Z0-9]+\.)([a-zA-Z0-9]+\.)*([a-zA-Z]{2,5})$/
if (emailPattern.test(customerEmail)) {
return true;
}
alert("Wrong email format.")
return false;
}

function validatePhone() {
var customerPhone = document.forms["RegisterForm"]["regNumber"].value;
phonePattern = /^0( |\.|-)?([0-9]( |\.|-)?){7,9}[0-9]$/
if (phonePattern.test(customerPhone)) {
return true;
}
alert("Wrong phone number format.")
return false;
}

function validatePassword() {
var customerPassword = document.forms["RegisterForm"]["regPw"].value;
passwordPttern = /^(?!.*[\s])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*]).{8,20}$/;
if (passwordPattern.test(customerPassword)) {
return true;
}
alert("Password must have at least one Uppercase, one lowercase, a digit and a special character.")
return false;
}  

function validateRePassword() {
if (document.forms["RegisterForm"]["regPw"].value == document.forms["RegisterForm"]["regRePw"].value) {
return true;
}
alert("Check your confirm password.")
return false;
}

function validateFName() {
var customerFName = document.forms["RegisterForm"]["regFName"].value;
fNamePattern = /^[a-zA-Z\s]{3,}$/;
if (fNamePattern.test(customerFName)) {
return true;
}
alert("Wrong first name format.")
return false;
}

function validateLName() {
var customerLName = document.forms["RegisterForm"]["regLName"].value;
lNamePattern = /^[a-zA-Z\s]{3,}$/;
if (lNamePattern.test(customerLName)) {
return true;
}
alert("Wrong last name format.")
return false;
}

function validateAddress() {
var customerAddress = document.forms["RegisterForm"]["regAddress"].value;
addressPattern = /^[a-zA-Z0-9\s]{3,}$/;
if (addressPattern.test(customerAddress)) {
return true;
}
alert("Wrong address format.")
return false;
}

function validateCity() {
var customerCity = document.forms["RegisterForm"]["regCity"].value;
cityPattern = /^[a-zA-Z\s]{3,}$/;
if (cityPattern.test(customerCity)) {
return true;
}
alert("Wrong city format.")
return false;
}

function validateZipcode() {
var customerZip = document.forms["RegisterForm"]["regZip"].value;
zipPattern = /^[0-9]{4,6}$/;
if (zipPattern.test(customerZip)) {
return true;
}
alert("Wrong zipcode format.")
return false;
}
