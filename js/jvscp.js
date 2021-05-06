window.onload = () => {
  var cookie = `
  <div id="consent-pop-up" class="cookie-pop-up">
        <h1>I use cookie</h1>
        <p>My website uses cookies necessary for its basic fucntioning. by continuing browsing, you consent to my
            use of cookies and other technology</p>
        <div><a class="btn-accept" id="button-accept" href="#">I Understand</a></div>
        <div><a href="../WebASM1/Mall/Privacy Policy.html">Learn more</a></div>
    </div>`;
  var cookie_insert = document.createElement("div");
  cookie_insert.innerHTML = cookie;
  document.body.append(cookie_insert);

  var element = document.getElementById("consent-pop-up");

  var t = setTimeout(openPopUp, 0);
  function openPopUp() {
    element = document.getElementById("consent-pop-up");
    element.style.visibility = "visible";
    element.style.opacity = "1";
  }
    const storageType = localStorage;
    const consentPropertyName = "sdasd";
    const saveToStorage = () => storageType.setItem(consentPropertyName, true);

    const acceptFn = (event) => {
      saveToStorage(storageType);
      consentPopup.classList.add("consent-pop-up");
      consentPopup.style.display = "none";
    };
    const consentPopup = document.getElementById("consent-pop-up");
    const acceptBtn = document.getElementById("button-accept");
    acceptBtn.addEventListener("click", acceptFn);

    if (storageType.getItem(consentPropertyName) == "true") {
      consentPopup.classList.add("consent-pop-up");
      consentPopup.style.display = "none";
    }
  };
