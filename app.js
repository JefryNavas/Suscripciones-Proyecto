const { argv } = require("./config/yargs");
const colors = require("colors")
const { leerDatos, resultado } = require("./controlador/leer")

let comando = argv._[0];

const http = require('http');



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