const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'imprime en colnsola la tabla de multiplicar', opt)
    .command('crear', 'guarda en un archivo la tabla de multiplicar', opt)
    .help()
    .argv;

module.exports = {
    argv
}