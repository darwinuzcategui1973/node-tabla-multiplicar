// princicipio se colocas los requireds y/o los import
// const fs = require('fs');
// tres tipo de requires
// const epx = require('express'); // los paquetes que no so nativos node
// const ArchivosMio = require('./mio'); // si en empieza . o ../ son los archivos propio que nossotro escribimos
const argv = require("./config/yargs").argv;
const colors = require('colors/safe');
const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");


/*
let data = "";

for (let i = 1; i <= 10; i++) {
    data += (` ${base} * ${i} = ${base * i}\n`);
}

fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
    if (err) throw err;
    console.log(`Archivo tabla-${ base }.txt creo Sastifactoriamente!`);
});

*/
// console.log("El Objeto Process:", process.argv);
// argumnetos
// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split("=")[1];
// console.log("El Objeto Module:", module);
// console.log(base);
// let argv2 = process.argv;
// console.log("limite", argv.limite);

// console.log(argv2);



// console.log(module);
// console.log(argv);
let comando = argv._[0];
switch (comando) {
    case "listar":
        console.log("listar");
        listarTabla(argv.base, argv.limite);
        break;

    case "crear":
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log("Archivo creado:", colors.blue(archivo)))
            .catch((e) => console.log(e));
        console.log("crear");

        break;


    default:
        console.log("comando no reconocido");
        break;
}