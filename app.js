/*
 * Liga e librerias 
 * 
 * https://nodejs.org/dist/latest-v10.x/docs/api/
 * 
 * Creacion de archivos
 * 
 * https://nodejs.org/dist/latest-v10.x/docs/api/fs.html#fs_file_system
 * 
 * 
 * https://nodejs.org/dist/latest-v10.x/docs/api/fs.html#fs_fs_writefile_file_data_options_callback
 */

// NOTA : PARA EJECUTAR EN LA CONSOLA ES node app crear --limite 20 -b 8

// se exporta el archivo de yargs
const argv = require('./config/yargs').argv;
// ponerle stylo a la consola
//const colors = require('colors');
const colors = require('colors/safe');




//const multiplicar = require('./multiplicar/multiplicar');

// se realizala destructuracion 

const { crearArchivo, listaTaba } = require('./multiplicar/multiplicar');

let comando = argv._[0]

switch (comando) {
    case 'listar':

        listaTaba(argv.base, argv.limite);
        break;
    case 'crear':

        crearArchivo(argv.base, argv.base)
            .then(archivo => console.log(`Archivo creado `, colors.gray.italic(`${ archivo.green.italic}`)))
            .catch(err => console.log(err));

        break;
    default:
        console.log('Comando no reconocido');
}

//console.log(argv);

// ardcode
//let base = 7;

//console.log(multiplicar);
// crear archvo o imprime el archivo


// recibir informacion desde linea de comando

//console.log(process.argv);

let argv2 = process.argv;

//console.log('Limite ', argv.limite);
//console.log(argv2);



// tercer argumento o parametro
//let parametro = argv[2];
// split para separar sting de un arreglo
//let base = parametro.split('=')[1];

//console.log(base);

// NOta : seejecuta de ese modo :  node app --base=24

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado ${ archivo}`))
//     .catch(err => console.log(err));



// Nota : Realizar en la carpeta por medio de consolo y poner
// npm init y seguir las instruciones para sì se crea el archivo
// package.json
// despues que se haya creado ir a la pagia : https://www.npmjs.com/package/yargs
// despues se encuentra un metacomando para instalar yargs.
// npm i yargs --save 
// npm = now package managment es un gestor de paquetes de node
// i = significa el gestionamineto de Instalacion ya abreviada.
// yargs = el paquete 
// --save : la ejecucion correcta.
// en caso de que se haya instalado correctamente el paquete yargs
// semuestra en la consola :+ yargs@12.0.2

// En las dependencias del archivo package.json se encuentra : "yargs": "^12.0.2"
// al igual se creo el archivo  la dependencias del yargs package-lock.json
// Tambien se creo un archivo : node_modules con varias carpetas y archivos.

// Nota: se puede eliminar node_modules sin ningun problema yaque segun no sera necesario
// subir ese reposiorio ya sea a produccion o a git ya si solamente seelimina 
// y y se requiere instalar poner npm install

// tambien seinstalar   npm nodemon con este comando
// npm install --save-dev nodemon

// SI uno quiere desistalar el nodemon es : npm uninstall nodemon


// tambien si se requiere ponerlecolor a la consola es instalarlo con
// npm install colors --save