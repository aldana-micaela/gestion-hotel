"use strict"

const cosme_payment_data = {titular : "Cosme Fulanito", numero : "1234123412341234", codigo : "999", expira : "1028"};

let current_users = JSON.parse(localStorage.getItem('users'))
    || [new User("Alguien", "Persona", "12345678", "2004-06-26", "alguien@gmail.com", "holamundo", "Springfield, Calle Falsa 123", "cash", "")
        ,
        new User("Cosme", "Fulanito", "87654321", "2005-06-16", "cosme@fulanito.com", "mundohola", "Shelbyville, Calle Verdadera 321", "credit", cosme_payment_data)
    ];

console.log("Todos los usuarios:" + current_users);

//TODO
function existsUser(user){
    return false;
}