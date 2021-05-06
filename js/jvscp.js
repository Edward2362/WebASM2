window.onload = () => {
  var cookie = `
  <div id="consent-pop-up" class="cookie-pop-up">
        <h1>I use cookie</h1>
        <p>My website uses cookies necessary for its basic fucntioning. by continuing browsing, you consent to my
            use of cookies and other technology</p>
        <div><a class="btn-accept" id="button-accept" href="#">I Understand</a></div>
        <div><a href="https://www.cookiebot.com/en/cookie-policy/#:~:text=that%20you%20comply.-,What%20is%20a%20cookie%20policy%3F,world%20this%20data%20is%20sent.">Learn more</a></div>
    </div>`;
  var cookie_insert = document.createElement("div");
  cookie_insert.innerHTML = cookie;
  document.body.append(cookie_insert);

  var element = document.getElementById("consent-pop-up");

  const storageType = localStorage;
  const consentPropertyName = "Accept Cookies";
  const saveToStorage = function () {
    return storageType.setItem(consentPropertyName, true);
  }
  
  const acceptFn = (event) => {
    saveToStorage();
    element.classList.add("consent-pop-up");
    element.style.display = "none";
  };
  const acceptBtn = document.getElementById("button-accept");
  acceptBtn.addEventListener("click", acceptFn);

  if (storageType.getItem(consentPropertyName) == "true") {
    element.classList.add("consent-pop-up");
    element.style.display = "none";
  }
};

// About Us Overlay

document.getElementById("Quang").addEventListener("click", overlayOnQuang);

function overlayOnQuang() {
  document.getElementById("overlayQuang").style.display = "block";
  }

function overlayOffQuang() {
  document.getElementById("overlayQuang").style.display = "none";
  }

document.getElementById("Chang").addEventListener("click", overlayOnChang);

function overlayOnChang() {
  document.getElementById("overlayChang").style.display = "block";
  }

function overlayOffChang() {
  document.getElementById("overlayChang").style.display = "none";
  }

document.getElementById("Tuan").addEventListener("click", overlayOnTuan);

function overlayOnTuan() {
  document.getElementById("overlayTuan").style.display = "block";
  }

function overlayOffTuan() {
  document.getElementById("overlayTuan").style.display = "none";
  }

document.getElementById("Minh").addEventListener("click", overlayOnMinh);

function overlayOnMinh() {
  document.getElementById("overlayMinh").style.display = "block";
  }

function overlayOffMinh() {
  document.getElementById("overlayMinh").style.display = "none";
  }
