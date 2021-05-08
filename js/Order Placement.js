function formatPrice(price) {
    strPrice = String(price);
    oldPriceArr = strPrice.split("");
    oldPriceLength = oldPriceArr.length;
    period = Number.parseInt(oldPriceLength / 3);
    newPriceArr = [];
    count = oldPriceLength - 1;

    for (var i = 0; i < period; i++) {
        element = "";
        count = count - 2;
        for (var e = 0; e < 3; e++) {
            element += oldPriceArr[count];
            count++;
        }
        count = count - 4;
        newPriceArr.push(element);
    }

    if (!Number.isInteger(oldPriceLength / 3)) {
        element = "";
        index = 0;
        while (!(count < 0)) {
            element += oldPriceArr[index];
            count--;
            index++;
        }
        newPriceArr.push(element);
    }

    result = "";

    for (var i = newPriceArr.length; i > 0; i--) {
        result += (newPriceArr[i - 1] + ".");
    }

    result += " VND";

    return result;
}

function updateOrder(cart) {
    innerToHTML = ``;
    totalQtt = 0;
    totalPrice = 0;
    countProduct = 0;
    for (var i in cart) {
        part = `
            <p>`+ i + `</p>
            <input id="`+ countProduct + `" type="number" min="0" max="99" value="` + cart[i].quantity + `">
            <p id="`+ "price" + countProduct + `">` + formatPrice(cart[i].price) + `</p>` + `\n`;
        innerToHTML += part;

        totalQtt += cart[i].quantity;
        totalPrice += cart[i].price;
        sessionStorage.setItem(countProduct, cart[i].quantity);
        countProduct++;
    };
    document.getElementById("order").innerHTML = innerToHTML;
    document.getElementById("total").innerHTML = `
        <p>Total</p>
        <p>`+ totalQtt + `</p>
        <p id="totalPrice">`+ formatPrice(totalPrice) + `</p>`
}

if (!(localStorage.getItem('Cart') == null)) {
    var cart = JSON.parse(localStorage.getItem("Cart"));
    window.onload = () => {
        updateOrder(cart);
    }
    document.addEventListener('change', function (ev) {
        for (var i = 0; i < countProduct; i++) {
            currentQtt = Number(document.getElementById(i).value);
            if (currentQtt > 0) {
                storageQtt = sessionStorage.getItem(i);
                if (currentQtt != storageQtt) {
                    originalPrice = cart[(Object.keys(cart)[i])].price / cart[(Object.keys(cart)[i])].quantity;
                    cart[(Object.keys(cart)[i])].quantity = currentQtt;
                    cart[(Object.keys(cart)[i])].price = originalPrice * currentQtt;
                    localStorage.setItem("Cart", JSON.stringify(cart));
                    updateOrder(cart);
                }
            } else {
                delete cart[(Object.keys(cart)[i])];
                sessionStorage.removeItem(i);
                localStorage.setItem("Cart", JSON.stringify(cart));
                updateOrder(cart);
            }
        }
        // strLength = strPrice.length;
        // totalPrice = document.document.getElementById("totalPrice").textContent;

    })

    document.getElementById("coupon").addEventListener('change', function (ev) {
        valuetest = 5000;
        coupon = document.getElementById("coupon").value;
        const hd = "COSC2430-HD";
        const di = "COSC2430-DI";
        if (coupon == hd) {
            document.getElementById("totalPrice").innerHTML = formatPrice(totalPrice * 0.8);
            document.getElementById("invalid").style.display = "none";
        }
        else if (coupon == di) {
            document.getElementById("totalPrice").innerHTML = formatPrice(totalPrice * 0.9);
            document.getElementById("invalid").style.display = "none";
        }
        else {
            document.getElementById("invalid").style.display = "block";
            document.getElementById("totalPrice").innerHTML = formatPrice(totalPrice);
        }
    })
} else {
    document.getElementById("order").innerHTML = "";
    document.getElementById("total").innerHTML = "";
}
