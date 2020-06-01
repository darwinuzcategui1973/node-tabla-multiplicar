const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite = 10) => {
    console.log("====================".bgGreen);
    console.log(`  Tabla del ${base}`.blue);
    console.log("====================".bgBlue);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }

}

crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor Introducido ${base} No es Un Numero`);
            return;
        }

        let data = "";

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i}\n`);
        }

        fs.writeFile(`tablas/tabla-${base}-hasta-${limite}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}-hasta-${limite}.txt`);
            // console.log(`Archivo tabla - $ { base }.txt creo Sastifactoriamente!`);
        });

    });

}
module.exports = {
    crearArchivo,
    listarTabla

}