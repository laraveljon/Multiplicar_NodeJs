// Se declara el YARGS o el paquete de yargs
// node app listar --limite 5 -b 3

const opts = {

    base: {
        // que valor del objeto base sea obligatorio  por eso escribe demand = true
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10

    },
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts
        /*{ base: {
            // que valor del objeto base sea obligatorio  por eso escribe demand = true
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10

        },

    }*/
    )

.command('crear', 'Genera un archivo d ela tabla de multiplicar', opts
    /*{
        base: {
            // que valor del objeto base sea obligatorio  por eso escribe demand = true
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10

        },

    }*/
)


.help()
    .argv;

module.exports = {
    argv
}