"use strict"
let first_name;
let last_name;
let dni;
let birthday;
let email;
let password;
let address;
let payment;
let payment_data;
const form = document.getElementById("register-form");

document.addEventListener('DOMContentLoaded', function () {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (!isValidInput()) {
            return;
        }

        const new_user = createUser();
        console.log("Usuario creado:");
        console.log(new_user);
        
        if (!existsUser(new_user)) {
            registerNewUser(new_user);
        }
    });
});

function readInput() {
    first_name = form.firstname.value;
    last_name = form.lastname.value;
    dni = form.dni.value;
    birthday = form.birthday.value;
    email = form.email.value;
    password = form.password.value;
    address = form.address.value;
    payment = form.payment.value;
    payment_data = readPaymentInput(payment);
}

function isValidInput() {
    readInput();
    const input = {
        first_name : first_name.length > 1 && /^((?![0-9.,!?:;_|+\-*\\/=%°@&#§$"'`¨^ˇ()\[\]<>{}])[\S])+$/.test(first_name),
        last_name : last_name.length > 1 && /^((?![0-9.,!?:;_|+\-*\\/=%°@&#§$"'`¨^ˇ()\[\]<>{}])[\S])+$/.test(last_name),
        dni: dni.length > 7 && dni.length < 12 && /^\d+$/.test(dni),
        birthday : '1923-16-06' < birthday && birthday < '2005-06-16',
        email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email),
        password : /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[.,*!#$%&='¿+¡?]).{8,}$/.test(password), //8 caracteres con al menos {1 mayus, 1 minus, 1 símbolo}
        address : /^(?:[\w+\s*]+\s*,\s*\w+\s*\w*){2}$/.test(address), //Tres oraciones separadas por dos comas 
        payment : ['cash', 'credit', 'debit', 'mp', 'transfer'].includes(payment),
        payment_data : isValidPaymentData()
    };

    return checkValidityMessage(input);
}

function checkValidityMessage(input){
    let isValid = true;
    let errorMessage = [];

    if (!input.first_name) {
        errorMessage.push("Nombre no válido");
        isValid = false;
    }

    if (!input.last_name) {
        errorMessage.push("Apellido no válido");
        isValid = false;
    }

    if (!input.dni) {
        errorMessage.push("DNI no válido");
        isValid = false;
    }

    if (!input.birthday){
        errorMessage.push("Fecha de nacimiento no válida");
        isValid = false;
    }

    if (!input.email){
        errorMessage.push("Email no válido");
        isValid = false;
    }

    if (!input.password){
        errorMessage.push("Contraseña no válida");
        isValid = false;
    }

    if (!input.address){
        errorMessage.push("Dirección no válida");
        isValid = false;
    }

    if (!input.payment){
        errorMessage.push("Medio de pago no válido");
        isValid = false;
    }

    if (!input.payment_data){
        errorMessage.push("Datos de pago no válidos");
        isValid = false;
    }

    if (!isValid) {
        alert(errorMessage);
    }

    return isValid;
}

function isValidPaymentData() {
    if (payment === 'credit' || payment === 'debit') {
        const valid_card_name = /^(?:[a-zA-z]+ +[a-zA-Z]+)$/.test(payment_data.titular);
        const valid_card_number = /^[0-9]{16}$/.test(payment_data.numero);
        const valid_card_code = /^[0-9]{3}$/.test(payment_data.codigo);
        const valid_card_expiration = /^(?:0[1-9]{1}[0-9]{2}|1[0-2]{1}[0-9]{2})$/.test(payment_data.expira);
        return valid_card_name && valid_card_number && valid_card_code && valid_card_expiration;
    }

    if (payment === 'mp') {
        const valid_cvu = /^[0-9]{22}$/.test(payment.cvu);
        const valid_alias = /^(?:[a-zA-z0-9]+\.*[a-zA-z0-9]+){6,20}$/.test(payment.alias); //alfanumérico con punto entre 6 y 22 caracteres
        return valid_cvu && valid_alias;
    }

    if (payment === 'transfer') {
        return /^[0-9]{22}$/.test(payment.cbu);
    }

    return true;

}

function createUser() {
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