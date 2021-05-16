const csv = require('csv-parser');
const fs = require('fs');
let datosCSV = [];
const http = require('http');
let resultado = [];

const leerDatos = (path, cod, year) => {
    let n = 0;
    fs.createReadStream(path)
        .pipe(csv({ headers: false }))
        .on('data', (row) => {

            if (n > 4) {
                datosCSV.push(row);
            } else {
                delete row;
                n++;
            }

        })
        .on('end', () => {
            arreglar(cod, year);
            imprimir(cod, year);
        });
}
const arreglar = (cod, year) => {
    var arreglado = datosCSV.map(item => {
        return {
            nombre_ciudad: item[0],
            codigo_ciudad: item[1],
            year: {
                '1960': item[4],
                '1961': item[5],
                '1962': item[6],
                '1963': item[7],
                '1964': item[8],
                '1965': item[9],
                '1966': item[10],
                '1967': item[11],
                '1968': item[12],
                '1969': item[13],
                '1970': item[14],
                '1971': item[15],
                '1972': item[16],
                '1973': item[17],
                '1974': item[18],
                '1975': item[19],
                '1976': item[20],
                '1977': item[21],
                '1978': item[22],
                '1979': item[23],
                '1980': item[24],
                '1981': item[25],
                '1982': item[26],
                '1983': item[27],
                '1984': item[28],
                '1985': item[29],
                '1986': item[30],
                '1987': item[31],
                '1988': item[32],
                '1989': item[33],
                '1990': item[34],
                '1991': item[35],
                '1992': item[36],
                '1993': item[37],
                '1994': item[38],
                '1995': item[39],
                '1996': item[40],
                '1997': item[41],
                '1998': item[42],
                '1999': item[43],
                '2000': item[44],
                '2001': item[45],
                '2002': item[46],
                '2003': item[47],
                '2004': item[48],
                '2005': item[49],
                '2006': item[50],
                '2007': item[51],
                '2008': item[52],
                '2009': item[53],
                '2010': item[54],
                '2011': item[55],
                '2012': item[56],
                '2013': item[57],
                '2014': item[58],
                '2015': item[59],
                '2016': item[60],
                '2017': item[61],
                '2018': item[62],
                '2019': item[63],
                '2020': item[64]
            }

        };
    });
    calcularMedia(arreglado, cod, year);
    let top = topCinco(arreglado, year);
    resultado.push(top);
}

const calcularMedia = (datos, cod, year) => {

    len = datos.length;
    let cont = 0;
    for (let i = 0; i < datos.length; i++) {
        datoy = Number(datos[i].year[year]);
        if (datoy) {
            cont = cont + datoy;
        }
    }
    media = cont / len;
    mediaR = media.toFixed(2);

    resultado.push(mediaR);
    valorSPais(datos, mediaR, cod);

}
const valorSPais = (datos, media, cod) => {
    let suma = 0;
    for (const i in datos) {
        if (datos[i].codigo_ciudad == cod) {
            for (var key in datos[i].year) {
                suma += Number(datos[i].year[key]);
            };
        }
    }
    /* if (suma > media) {
        console.log(`el valor de las suscripciones del país ${cod} si es mayor a la media mundial ${suma}`);
    } else {
        console.log(`La media mundial ${media} es mayor a las suscripciones del país ${suma}`);
    } */

    sumaPaises(datos, suma);
}

// Suma de todos los años de cada pais del csv
const sumaPaises = (datos, sumaP) => {
    let suma = 0;
    let vec = [];
    for (const i in datos) {
        for (var key in datos[i].year) {
            //sumando todos los años de cada pais

            suma += Number(datos[i].year[key]);
        };
        nombre = datos[i].nombre_ciudad;
        //Guardando en un vector el nombre del pais con la suma de los años
        vec.push({ nombre, suma });
        suma = 0;
    }
    let porE = porEncima(vec, sumaP);
    let porD = porDebajo(vec, sumaP);
    resultado.push(porE);
    resultado.push(porD);

}

const porEncima = (vec, sumaP) => {
    // Ordenación del array para obtener los 5 paises por encima
    vec.sort(function(a1, b2) {
        if (a1.suma > b2.suma) {
            return 1;
        } else if (a1.suma < b2.suma) {
            return -1;
        }
        return 0;
    });
    //Los 5 paises por encima del pais especificado
    let porE = [];
    for (const key in vec) {
        if (vec[key].suma > sumaP) {
            porE.push(vec[key]);
        }
    }
    //Impresión de los 5 paises
    let result = [];
    for (let i = 0; i < 5; i++) {
        result.push(porE[i]);
    }
    return result;
}
const porDebajo = (vec, sumaP) => {
    // Ordenación del array para obtener los 5 paises por debajo
    vec.sort(function(a1, b2) {
        if (a1.suma > b2.suma) {
            return -1;
        } else if (a1.suma < b2.suma) {
            return 1;
        }
        return 0;
    });
    //Los 5 paises por debajo del pais especificado
    let porE = [];
    for (const key in vec) {
        if (vec[key].suma < sumaP) {
            porE.push(vec[key]);
        }
    }
    //Impresión de los 5 paises
    let result = []
    for (let i = 0; i < 5; i++) {
        result.push(porE[i]);
    }
    return result;
}
const topCinco = (datos, year) => {
    let vec = [];
    //Obteniendo el nombre y el dato del año especificado
    for (const i in datos) {
        dato = Number(datos[i].year[year]);
        nombre = datos[i].nombre_ciudad;
        datosC = { nombre, dato };
        vec.push(datosC);
    }

    // Ordenando el vector de mayor a menor 
    vec.sort(function(a1, b2) {
        if (a1.dato > b2.dato) {
            return -1;
        } else if (a1.dato < b2.dato) {
            return +1;
        }
        return 0;
    });

    //Obteniendo el top 5 de paises por el año especificado
    let result = []
    for (let i = 0; i < 5; i++) {
        result.push(vec[i]);
    }

    return result;

}
let imprimir = (cod, year) => {
    const hostname = '127.0.0.1';
    const port = 3000;
    top = resultado[3];
    top5 = [];
    for (const i in top) {
        top5.push(`<tr><td>${top[i].nombre}</td><td>${top[i].dato}</td></tr>`);
    }
    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(`<!DOCTYPE html>
        <html>
        
        <head>
            <meta charset='utf-8'>
            <meta http-equiv='X-UA-Compatible' content='IE=edge'>
            <title>Proyecto</title>
            <meta name='viewport' content='width=device-width, initial-scale=1'>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
        
        </head>
        <body>
            <div class="container">
                <h1 class="display-4">Top 5 países del año ${year}</h1>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Páis</th>
                            <th scope="col">Suscripciones de telefonía celular movíl</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${top5}
                    </tbody>
                </table>
            </div>
        
        </body>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
        
        </html>`);
    });

    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });


}



module.exports = { leerDatos, resultado }