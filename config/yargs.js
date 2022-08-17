// const argv = require('yargs').argv;
const argv = require('yargs')
        .option('b', {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla de multiplicar'
        })
        .option('l', {
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe: 'Muestra la tabla  en consola'
        })
        .option('h', {
            alias: 'hasta',
            type: 'number',
            default: 10,
            describe: 'Es la cantidad de multiplicaciones'
        })
        .check( (argv, options) => {
            if( isNaN( argv.base ) ) {
                throw 'La base tiene que ser un número';
            }
            if( isNaN( argv.hasta ) ) {
                throw 'El multiplicando tiene que ser un número';
            }
            
            return true;
        })
        .argv;

module.exports = argv;