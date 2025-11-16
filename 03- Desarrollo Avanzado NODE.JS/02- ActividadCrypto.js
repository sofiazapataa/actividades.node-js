// modulo: bloque de codigo organizado, que nosotros podemos exportar facilmente para ser reutilizado. codigo encapsulado. 
// se encuentran los:
// Modulos Nativos: vienen incluidos con la instalacion de node, filesistem, crypto, HTTP, PAT, 
// Modulos Propios: Se escriben dentro de un equipo de desarrollo
// Modulos Externos: los creados por personas que siben el codigo a repositorios abiertos

// Actividad:
// Practica de Modulo nativo de crypto.
// se creara una clase "userManager" que va a tener los metodos de 
// crear, consultar y validar usuario. El usuario recibira una contraseña de string plano,
// y se debera guardar la contraseña hasheada con crypto por seguridad. 

const Crypto = require('node:crypto');
const { create } = require('node:domain');
class UserManager {
    constructor(){
        this.users = []
    }
    getUsers = () => {
        return this.users
    }
    register = (obj) => {
        const user = {
            ...obj,
        };
            user.secret = Crypto.randomBytes(128).toString(),
            user.password =  Crypto
            .createHmac('sha256', user.secrete)
            .update(user.password)
            .digest('hex'),
        this.users.push(user);
        return user;
    };
    login = (email, password) => {
        const users = this.getUsers();
        const user = user.find((user) => user.email === email);
        if(!user) throw new Error('Usuario no encontrado');

        const newCrypto = crypto.createHmac('sha256', user.secrete).update(password).digest('hex');
        if(user.password !== newCrypto) throw new Error('Contraseña incorrecta');
    return "login ok";
    };
}
const userManager = new UserManager();

userManager.register({email: 'juan@gmail.com', password: '1234'})
userManager.register({email: 'mariano@gmail.com', password: '12345'})
console.log(userManager.getUsers());

// la contarseña que creo el asuario se transforma en otro en valores secretos aleatorios y cada uno va a etener una distinta. 
// password hasheaada "xhbdcebcewj"
// secret: "duendkwen" clave secreta para hashear la constarseña, el metodo que usamos necesita 2 valores. 
userManager.login('juan@gmail.com', '1234') 