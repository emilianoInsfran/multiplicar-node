//const multiplicar = require('./multiplicar/multiplicar');


const argv = require('./config/yargs').argv;
const colors = require('colors');//trabaja con string
//desestruturación cuando defino un obj ej:
const { crearArchivo,listarTabla } = require('./multiplicar/multiplicar');//desestruturación
let comando = argv._[0];

switch ( comando ) {

    case 'listar2':
        listarTabla(argv.b, argv.limite)//ejecuta node app listar2  -b 5 --limite 3 (si queres poner --base cambia argv.b por argv.base)
            .then(archivo=> console.log(`Archivo creado : `,colors.green( archivo )))
            .catch(e => console.log(e))
        break
    case 'crear':
        crearArchivo(argv.base)
            .then(archivo=> console.log(archivo))
            .catch(e => console.log(e))

            
        break;

    default:
        console.log('comando no reconocido');

}
//let base = 'abc';
// console.log(module); module obj global con informacion tirada por consola

//console.log(process);//variable de entorno - tira informacion por consola -es un obj.
//console.log(process.argv );//path del archivo donde estamos
let argv2= process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];

//console.log(argv.base);//consoleas el obj de yargs
//console.log(argv.limite);
console.log(argv);


//multiplicar.crearArchivo
/*crearArchivo(base)
    .then(archivo=> console.log(archivo))
    .catch(e => console.log(e))*/

    //fundamentos de git ramificaciones y canban y saqe foto de los campitulos de git
