
const argv = require('yargs')
                .options('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .options('l', {
                    alias: 'listar',
                    type: 'boolean',
                    demandOption: true,
                    default: false,
                    describe: 'Muestra la tabla en consola'
                })
                .options('h', {
                    alias: 'hasta',
                    type: 'number',
                    demandOption: false,
                    describe: 'Hasta donde va ir la multiplicacion'
                })

                .check((argv , options) => {
                    if(isNaN(argv.b)){
                        throw 'la base tiene que ser un numero'
                    }
                    return true;
                })
            
                .argv

    module.exports = argv;
