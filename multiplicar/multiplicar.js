// Al inicio se pone los 'requiere'
/*
* existen tres tipos de requiere 
const fs = require('fs');
const fs = require('express');  -> es unpaquete que se instala
const fs = require('./fs');     ->
*/


const fs = require('fs');

const colors = require('colors');

// funsion promesa o realizael get


let listaTaba = (base, limite = 10) => {
    console.log('***************'.green);
    console.log(`****** tabla de ${base} *********`.green);
    console.log('***************'.green);
    for (let i = 1; i <= limite; i++) {

        console.log(`${ base} * ${ i } = ${ base * i }`);

    }

}


let crearArchivo = (base, limite = 10) => {

        return new Promise((resolve, reject) => {

            if (!Number(base)) {
                reject('No es un numero');
                return;
            }


            let data = '';

            for (let i = 1; i <= limite; i++) {

                data += `${ base} * ${ i } = ${ base * i }\n`;

            }


            // este codigo proviene de node.js  : https://nodejs.org/dist/latest-v10.x/docs/api/fs.html#fs_fs_writefile_file_data_options_callback
            // el fs hace referencia cone l requiere

            fs.writeFile(`tablas/tabla_${base}-al-${limite}.txt`, data, (err) => {


                if (err)
                    reject(err)
                else
                    resolve(`tabla_${base}-al-${limite}.txt`)

                //console.log(`El archivo tabla_${base}.txt ha sido creado!`);
            });



        });


    }
    // se exportan las funciones
module.exports = {
    crearArchivo,
    listaTaba
}