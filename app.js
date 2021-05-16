const { argv } = require("./config/yargs");
const colors = require("colors")
const { leerDatos } = require("./controlador/leer")
let comando = argv._[0];

switch (comando) {
    case "publicar":
        leerDatos(argv.file, argv.country, argv.year, 1);
        break;
    case "guardar":
        leerDatos(argv.file, argv.country, argv.year, argv.out)
        break;
    default:
        console.log("Comando no válido");
        break;
}