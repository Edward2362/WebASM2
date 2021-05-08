if (!(localStorage.getItem('User') == null)) {
    const productName = document.querySelector(".product-name").textContent;
    var strPrice = document.querySelector(".product-price").textContent;
    strLength = strPrice.length;
    const productPrice = Number(strPrice.substr(0, strLength - 1).replace(/\./g, ""));

    sessionStorage.setItem("clickTimes", 0);

    var cart = Object;
    if (localStorage.getItem("Cart") == null) {
        cart = {};
    }
    else {
        cart = JSON.parse(localStorage.getItem("Cart"));
    }

    function productExist(productN) {
        if (cart[productN] == null) {
            cart[productN] = {};
            cart[productN].price = 0;
            cart[productN].quantity = 0;
        }
    }

    document.getElementById("addCart").addEventListener("click", function (ev) {
        qtt = Number(sessionStorage.getItem("clickTimes"));
        newQtt = qtt + 1;
        sessionStorage.setItem("clickTimes", newQtt);
        productExist(productName);
        cart[productName].quantity = newQtt;
        cart[productName].price = productPrice * newQtt;
        localStorage.setItem("Cart", JSON.stringify(cart));
        ev.preventDefault();
        document.getElementById("add-message").style.display = "block";
    });
}else{
    document.getElementById("addCart").style.display = "none";
}
