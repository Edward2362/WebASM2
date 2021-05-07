const validate = document.getElementById("contact-form");
validate.addEventListener("submit", function (ev) {
  results = {
    'name': validateName(),
    'email': validateEmail(),
    'phone': validatePhone(),
    'contactDay': validateCDay(),
    'message': validateMess()
  };
  checkSubmit = document.getElementById("checkSubmit");
  for (let i in results) {
    if (!results[i]) {
      ev.preventDefault();
      checkSubmit.style.display = "block";
      checkSubmit.innerHTML = "Wrong input";
    }
  }
});

function validateName() {
  customerName = document.getElementById("name").value;
  name_pattern = /^[a-zA-Z ?]{3,}$/;
  if (name_pattern.test(customerName)) {
    return true;
  }
  return false;
}

function validateEmail() {
  customerEmail = document.getElementById("email").value;
  email_pattern = /^(([a-zA-Z0-9]+\.){1,}|([a-zA-Z0-9]+){2,})([[a-zA-Z0-9]+@)([a-zA-Z0-9]+\.)([a-zA-Z0-9]+\.)*([a-zA-Z]{2,5})$/
  if (email_pattern.test(customerEmail)) {
    return true;
  }
  return false;
}

function validatePhone() {
  customerPhone = document.getElementById("phone").value;
  phone_pattern = /^0( |\.|-)?([0-9]( |\.|-)?){7,9}[0-9]$/
  if (phone_pattern.test(customerPhone)) {
    return true;
  }
  return false;
}

function validateCDay() {
  test = [1, 2, 3, 4];
  checkedBoxArr = document.querySelectorAll("input[type=checkbox]:checked");
  arrLength = checkedBoxArr.length;
  if (arrLength > 0) {
    return true;
  }
  return false;
}

inTyping = document.getElementById("message");
var check = false;
inTyping.addEventListener("input", function (ev) {
  userInput = inTyping.value;
  userInputWithoutSpace = userInput.split(" ");
  count = 0;
  for (const i of userInputWithoutSpace) {
    count += i.length;
  }
  message = document.getElementById("notification");
  message.style.display = "block";
  if (count < 50) {
    message.style.color = "red";
    message.innerHTML = (50 - count) + " more letters are needed";
    check = false;
  }
  else if (count <= 500) {
    message.style.color = "black";
    message.innerHTML = "You can type " + (500 - count) + " more letters";
    check = true;
  }
  else {
    message.style.color = "red";
    message.innerHTML = "Deleting " + (count - 500) + " letters is needed";
    check = false;
  }
});

function validateMess() {
  if (check) {
    return true;
  }
  return false;
}

validate.addEventListener("reset", function(ev){
    document.location.reload();
});