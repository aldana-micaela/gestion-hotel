"use strict"
const form = document.getElementById("register-form");

document.addEventListener('DOMContentLoaded', function () {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const new_user = createUser();
        console.log("Usuario creado: " + new_user);
    });
});

function createUser() {
    const first_name = form.firstname.value;
    const last_name = form.lastname.value;
    const dni = form.dni.value;
    const birthday = form.birthday.value;
    const email = form.email.value;
    const password = form.password.value;
    const address = form.address.value;
    const payment = form.payment.value;
    const payment_data = readPaymentInput(payment);

    return new User(first_name, last_name, dni, birthday, email, password, address, payment, payment_data);
}

function readPaymentInput(payment) {
    let data = '';
    if (payment == "credit" || payment == "debit"){
        data = readPaymentCard();
    } else if (payment == "mp") {
        data = readPaymentMP();
    } else if (payment == "transfer") {
        data = readPaymentTransfer();
    }
    return data;
}

function readPaymentCard() {
    return {
        titular : form.querySelector("#card-name").value,
        numero : form.querySelector("#card-number").value,
        codigo : form.querySelector("#card-code").value,
        expira : form.querySelector("#card-expiration").value
    };
}

function readPaymentMP() {
    return {
        cvu : form.querySelector("#mp-cvu").value,
        alias : form.querySelector("#mp-alias").value
    };
}

function readPaymentTransfer() {
    return {
        cbu : form.querySelector("#cbu").value
    };
}

function User(nombre, apellido, dni, fecha_de_nacimiento, email, contraseña, direccion, medio_de_pago, datos_de_pago){
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.fecha_de_nacimiento = fecha_de_nacimiento;
    this.email = email;
    this.contraseña = contraseña;
    this.direccion = direccion;
    this.medio_de_pago = medio_de_pago;
    this.datos_de_pago = datos_de_pago;
}