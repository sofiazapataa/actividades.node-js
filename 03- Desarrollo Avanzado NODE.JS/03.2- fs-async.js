const fs = require('node:fs');
const crypto = require('node:crypto');

class userManager {
    constructor(){
        this.users = []
    }
    getUsers = async() => {
        try{
        if(fs.existsSync(this.path)){
            const users = await fs.promises.readFile(this.path, 'utf-8');
            return JSON.parse (users);
        }
        return [];
}catch (error){
    throw new Error ('No se pudieron obtener los usuarios');
}
    }
}
register = async(obj) => {
        try{
            const users = await this.getUsers();
            const user = {
                        ...obj,
                    };
                        user.secret = Crypto.randomBytes(128).toString(),
                        user.password =  Crypto
                        .createHmac('sha256', user.secrete)
                        .update(user.password)
                        .digest('hex'),
                users.push(user);
                await fs.promises.writeFile(this.path, JSON.stringify(users)); //guardar en formato json
                return user;
        }catch (error){
            throw new Error ('No se pudo registrar el usuario');
        }
    }
const userManager = new userManager('./users.json');
const test = async() => {
await userManager.register({email: 'juan@gmail.com', password: '1234'})
await userManager.register({email: 'mariano@gmail.com', password: '12345'})
console.log(await userManager.getUsers());
}
test();