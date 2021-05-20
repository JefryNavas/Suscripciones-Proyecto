# Suscripciones a telefonía celular móvil-Proyecto primer parcial

Crear una aplicación en NodeJS que permita leer los datos de las Suscripciones a telefonía celular móvil, Publicadas por el Banco Mundial y publicar las estadísticas

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

Mira **Deployment** para conocer como desplegar el proyecto.


### Pre-requisitos 📋

Software de desarrollo que necesitas para poder instalar en tu máquina local
```
Node.js (Lenguaje de programación)
Visual Studio Code (IDE de desarrollo)
```
Dependencias para poder ejecutar la aplicación.
```
yargs (librería para obtener valores por comandos en consola )
colors (librería para dar color a la aplicación por consola)
csvtojson (libreria para leer un archivo csv)
```

### Instalación 🔧

Primero debemos instalar el IDE de desarrollo Visual Studio Code
link de descarga: https://code.visualstudio.com/download

Segundo instalar el lenguaje de programación Node js
https://nodejs.org/es/download/

Instalar el repositorio npm en tu proyecto
```
npm init
```
Comandos para poder instalar las dependencias del proyecto.
```
npm install csvtojson yargs colors --save
```
<img src="/img_readme/package.PNG"/>

Dataset de Suscripciones de telefonía celular móvil https://datos.bancomundial.org/indicador/IT.CEL.SETS

<img src="/img_readme/datos.PNG"/>

## Ejecutando las pruebas ⚙️

La aplicación cuenta con dos opciones:
- Publicar
- Guardar

#### **Publicar**

La comandos para publicar en la aplicacion es la sigueinte: node app.js publicar -f "path_del_archivo.csv" -c "codigo_del_pais" -y Año

```
Ejemplo:
node app.js publicar -f "C:\Users\Jeffry\Desktop\Nueva carpeta (2)\datos.csv" -c ECU -y 2018
```
Ejecución por Consola:
<img src="/img_readme/por_consola.PNG"/>


Ejecución por Web:
```
Para visualizar por web ir a un navegador y poner la siguiente url
http://127.0.0.1:3000/
```
<img src="/img_readme/por_web.PNG"/>


#### **Guardar**
La comandos para guardar en archivo json es la sigueinte: node app.js guardar -f "path_del_archivo.csv" -c "codigo_del_pais" -y Año -c "nombre_del_archivo"
```
Ejemplo:
node app.js guardar -f "C:\Users\Jeffry\Desktop\Nueva carpeta (2)\datos.csv" -c ECU -y 2018 -o datos
```

Ejecución:
<img src="/img_readme/guardar.PNG"/>

Datos Guardados:

<img src="/img_readme/datos_json.PNG"/>


## Construido con 🛠️

- Visual Studio Code - IDE de desarrollo
- Node js - Lenguaje de Programación

## Versionado 📌

Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/JefryNavas/Suscripciones-Proyecto/tags).

## Autores ✒️

* **Jefry Navas** (https://github.com/JefryNavas)

También puedes mirar la lista de todos los [contribuyentes](https://github.com/your/project/contributors) quíenes han participado en este proyecto. 

## Licencia 📄

Este proyecto está bajo la Licencia ISC


