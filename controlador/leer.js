const csv = require('csv-parser');
const fs = require('fs');
let datosCSV = [];

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
    topCinco(arreglado, year);
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
    valorSPais(datos, media.toFixed(2), cod);
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
    if (suma > media) {
        console.log(`el valor de las suscripciones del país ${cod} si es mayor a la media mundial ${suma}`);
    } else {
        console.log(`La media mundial ${media} es mayor a las suscripciones del país ${suma}`);
    }
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
    porEncima(vec, sumaP);
    porDebajo(vec, sumaP);
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
    /* console.log("5 Países por encima del Pais");
    for (let i = 0; i < 5; i++) {
        console.log(porE[i]);
    } */
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
    /*  console.log("5 Países por debajo del Pais");
    for (let i = 0; i < 5; i++) {
        console.log(porE[i]);
    } */

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
    /* console.log("Top 5 del año especificado");
    for (let i = 0; i < 5; i++) {
        console.log(vec[i]);
    } */

}


module.exports = { leerDatos }