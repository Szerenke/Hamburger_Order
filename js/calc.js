
function calcAmount() {
    let name = document.querySelector("#name").value.trim();
    let email = document.querySelector("#email").value.trim();
    let address = document.querySelector("#address").value.trim();
    let comment = document.querySelector("#comment").value.trim();
    let extra = parseInt(document.querySelector("[name=extra]:checked").value, 10)
    let sauce = parseInt(document.querySelector("#sauce").value, 10);
    let quantity = parseInt(document.querySelector("input[name ='quantity']").value, 10);
    
    if (isValidPersonalData(name, email, address, comment) == true && isValidQuantity(quantity) == true) {
        let showAmount = document.querySelector("span.show-amount");
        showAmount.innerHTML = getTotal(extra, sauce, quantity);
    }
}

function isValidPersonalData(name, email, address, comment) {
    if (!name) {
        alert("A név megadása kötelező!");
        return false;
    }
    if (!email || !(email.indexOf('@')) > 0 || !(email.indexOf('.')) > 0 || ((email.indexOf('@')) > (email.indexOf('.')))) {
        alert("Invalid email cím!");
        return false;
    }
    if (address.length < 8) {
        alert("Kérjük pontos címet adjon meg!");
        return false;
    }
    if (comment.indexOf('<') > 0 && comment.indexOf('>') > 0) {
        alert("A megjegyzésben nem megengedett HTML használata!");
        return false;
    }
    return true;
}

function isValidQuantity(quantity) {
    if (!quantity || quantity < 1 || quantity > 10) {
        alert("Csak 1 és 10 közötti mennyiséget rendelhetsz");
        return false;
    }
    return true;
}

function getTotal(extra, sauce, quantity) {
    let price = 1200;
    let amount = (price + extra + sauce) * quantity;

    if (amount < 5000) {
        amount += 500;
    }
    return amount;
}