// requireds
//const fs = require('fs'); // propio de node
//const fs = require('express'); no propio de node
//const fs = require('./fs'); lo hice yo con la daya

const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listar } = require('./multiplicar/multiplicar')

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listar(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo }`.red))
            .catch(e => console.log(e));
        break;
    default:
        console.log('comando no reconocido');
        break;

}


//let base = argv.base
//let parametro = argv[2];
//let base = parametro.split('=')[1]