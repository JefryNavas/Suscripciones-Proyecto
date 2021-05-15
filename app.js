const { argv } = require("./config/yargs");
const colors = require("colors")
const { leerDatos } = require("./controlador/leer")
const { html5 } = require("./servidor/servidor")
let comando = argv._[0];

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;



switch (comando) {
    case "publicar":
        leerDatos(argv.file, argv.country, argv.year);

        break;
    case "guardar":


        break;
    default:
        console.log("Comando no válido");
        break;
}