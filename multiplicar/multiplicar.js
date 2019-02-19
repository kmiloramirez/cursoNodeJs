const fs = require('fs'); // propio de node
const colors = require('colors');

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }
        let data = '';
        for (let i = 0; i <= limite; ++i) {
            data += `${base} * ${i} = ${i * base}\n`;
        }
        console.log(data);

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err)
            }
            resolve(`tabla-${base}.txt`);

        });
    });
}
let listar = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }
        let data = '';
        for (let i = 0; i <= limite; ++i) {
            data += `${base} * ${i} = ${i * base}\n`;
        }
        console.log(`tabla de ${base}`.green);
        console.log(data);


    });
}

module.exports = {
    crearArchivo,
    listar
}