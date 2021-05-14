const { argv } = require("./config/yargs");
const colors = require("colors")

let comando = argv._[0];

switch (comando) {
    case "publicar":
        break;

    case "guardar":


        break;
    default:
        console.log("Comando no válido");
        break;
}