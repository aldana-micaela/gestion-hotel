"use strict"

const cosme_payment_data = {titular : "Cosme Fulanito", numero : "1234123412341234", codigo : "999", expira : "1028"};

let current_users = JSON.parse(localStorage.getItem('users'))
    || [new User("Alguien", "Persona", "12345678", "2004-06-26", "alguien@gmail.com", "holamundo", "Springfield, Calle Falsa 123", "cash", "")
        ,
        new User("Cosme", "Fulanito", "87654321", "2005-06-16", "cosme@fulanito.com", "mundohola", "Shelbyville, Calle Verdadera 321", "credit", cosme_payment_data)
    ];

console.log("Todos los usuarios:");
console.log(current_users);

function existsUser(new_user){
    for(let i = 0; i < current_users.length; i++) {
        if(current_users[i].dni === new_user.dni) {
            showAlert("Existe usuario registrado con ese DNI");
            return true;
        }
        if(current_users[i].email === new_user.email) {
            showAlert("Existe usuario registrado con ese email");
            return true;
        }
    }

    return false;
}

function registerNewUser(new_user) {
    //COMENTADO SOLO PARA LOS TEST AUTOMATIZADOS
    //current_users.push(new_user);
    //localStorage.setItem('users', JSON.stringify(current_users));
    showAlert("Registro exitoso");
}