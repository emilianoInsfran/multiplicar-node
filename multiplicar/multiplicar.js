const fs = require('fs');//esta libreria existe en node
//const fs = require('express'); no viene en node, son paquetes que no son nativos de node
//const fs = require('./fs'); ahí viene el paht de donde viene el archivo
var colors = require('colors');

let listarTabla = (base, limite) => {
    return new Promise( (resolve, reject)=>{


        console.log('=============='.green);
        console.log(`tabla de ${ base }`.green);
        console.log('=============='.green);

        if ( !Number(base) ) {
            reject('No es un número');
            return//por que el reject sige ejecutando el profgrama por eso agrego el return
        }

        let data = '';
        for (let i=0; i<=  limite; i++){
            console.log(base*i);
            data +=`${ base } * ${ i } = ${ base * i }\n`;
        }
        //const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`Archivo creado: tabla-${base}.txt`);
        });

    });
}

let crearArchivo = (base) => {//o agregar el modulo.exports.crearArchivo sacando el let
    return new Promise( (resolve, reject)=>{

        if ( !Number(base) ) {
            reject('No es un número');
            return//por que el reject sige ejecutando el profgrama por eso agrego el return
        }

        let data = '';
        for (let i=0; i<=  10; i++){
            console.log(base*i);
            data +=`${ base } * ${ i } = ${ base * i }\n`;
        }
        //const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`Archivo creado: tabla-${base}.txt`);
        });

    });
}

module.exports= {
    crearArchivo, listarTabla
}
