// vamos a recorrer 10 mil num aleatorios en un rango de 1-20, 
// y crear un objeto cuya clave sean los num aridos y el valor 
// asociado a cada clave sera la cantidad de veces que salio dicho num. 

// Empezamos creando un objeto vacio, con el que vamos a rellenar el num y la cant de veces que salio.
const obj={}
// forma mas basica: bucle for, que va a tener el iterador que incia en 0 y va a ir hasta 10mil
for (let i = 0; i <= 10000; i++) {
    const numero = Math.floor(Math.random() * 20) + 1 //redondea para abajo, devuelve un entero
    if(!obj[numero]) obj[numero] = 1 //si ya existe el numero que salio
    else obj[numero]++ //le sumamos uno
}
console.log(obj);

