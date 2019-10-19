const opt  = {
    base: {
        demand: true, // esto significa que es obligatorio  y base es lo que poniamos en consola --base=5
        alias: 'b'//en ves de poner node app listar base 5 - ponemos- node app listar -b 5
    },
    limite: {
        alias: 'l',
        default: 10
    } 
}

const argv =require('yargs')
        .command('listar','Imprime en consola la tabla de multiplicar', opt )
        .command('crear','Genera un archivo con la tabla multiplicar',  opt )
        .help() 
        .argv;

module.exports = {
    argv
}