"use strict"
const payment_option = document.getElementById('payment');
const payment_box = document.getElementById('payment-box');

payment_option.addEventListener('change', function(){
    if (payment_box.hasChildNodes) {
        payment_box.innerHTML = '';
    }

    createPaymentBox(payment_option.value);
});

function createPaymentBox(payment) {
    console.log("AAAAA")
    let created_box;

    if (payment === "credit" || payment === "debit") {
        created_box = createBoxCard();

    } else if (payment == "mp") {
        created_box = createBoxMP();

    } else if (payment == "transfer") {
        created_box = createBoxTransfer();
    }

    payment_box.appendChild(created_box);
}

function createBoxCard() {
    console.log("process");
    const box = document.createElement("DIV");
    const card_name = document.createElement("INPUT");
    const card_number = document.createElement("INPUT");
    const card_expiration = document.createElement("INPUT");
    const card_code = document.createElement("INPUT");

    card_name.setAttribute("type", "text");
    card_number.setAttribute("type", "number");
    card_expiration.setAttribute("type", "number");
    card_code.setAttribute("type", "number");

    card_name.setAttribute("placeholder", "Nombre del titular");
    card_number.setAttribute("placeholder", "Número de tarjeta");
    card_expiration.setAttribute("placeholder", "Fecha de expiración");
    card_code.setAttribute("placeholder", "Código de seguridad");

    card_name.classList.add("form-input");
    card_number.classList.add("form-input");
    card_expiration.classList.add("form-input", "card-input");
    card_code.classList.add("form-input", "card-input");

    box.appendChild(card_name);
    box.appendChild(card_number);
    box.appendChild(card_expiration);
    box.appendChild(card_code);

    return box;
}

function createBoxMP(){
    const box = document.createElement("DIV");
    const mp_cvu = document.createElement("INPUT");
    const mp_alias = document.createElement("INPUT");

    mp_cvu.setAttribute("type", "number");
    mp_alias.setAttribute("type", "text");

    mp_cvu.setAttribute("placeholder", "CVU");
    mp_alias.setAttribute("placeholder", "Alias");

    mp_cvu.classList.add("form-input");
    mp_alias.classList.add("form-input");

    box.appendChild(mp_cvu);
    box.appendChild(mp_alias);

    return box;
}

function createBoxTransfer(){
    const box = document.createElement("DIV");
    const cbu = document.createElement("INPUT");
    cbu.setAttribute("type", "number");
    cbu.setAttribute("placeholder", "CBU");
    cbu.classList.add("form-input");
    box.appendChild(cbu);
    return box;
}
