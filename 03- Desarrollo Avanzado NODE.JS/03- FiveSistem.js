// libreria nativa de node
// sirve para manipular archivos de manera sincronica o asincronica
const fs = require('node:fs');

const path = './files.txt';
if(fs.existsSync(path)){
    // console.log(fs.readFileSync(path, 'utf-8'))}; //lee el archivo si existe
    fs.appendFileSync(path, ', como estas?'); //agrega texto al final del archivo
}
else fs.writeFileSync(path, 'hola mundo'); //crea el archivo vacio
// sincronico