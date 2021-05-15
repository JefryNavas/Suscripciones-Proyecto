const file = {
    demand: true,
    alias: "f",
    desc: "Permite establecer el path del archivo CSV que contiene los datos a analizar"
}
const country = {
    default: 'ABW',
    alias: "c",
    desc: " Permite determinar el país a analizar a través de su código"
}

const year = {

    alias: "y",
    desc: "Permite especificar el año para el cual se requiere las estadísticas. Por defecto, 2018.",
    default: 2018
}
const out = {
    alias: "o",
    desc: " Establece el nombre del archivo donde se almacenará los resultados."

}

const argv = require("yargs")
    .command("publicar", "Este comando publicará las estadísticas en una página web básica.", {
        file,
        country,
        year
    })
    .command("guardar", "Este comando almacenará los resultados de las estadísticas en un archivo json.", {
        file,
        country,
        year,
        out
    })
    .help()
    .argv;

module.exports = { argv }