// 01) Programa una funcion que cuente el numero
// de caracteres de una cadena de texto ej: 
// mi funcion ("hola mundo") devolvera 10.
function contar(mundo=""){
    console.log(`El texto "${mundo}" tiene ${mundo.length} caracteres`);
}
contar("hola Mundo");

// 02) Programa una funcion que te devuelva el texto recortado
// segun el numero de caracteres indicados ej:
// mi funcion ("hola mundo", 4) devolvera "hola".

function recortar(cadena=""){
    let cadena01 = cadena.slice(0,4);
    console.info(cadena01)
}
recortar("hola mundo");

 

// 03) Programa una funcion que dada una string
// te devuelva un array de textos separados por
// cierto caracter, ej: mi funcion('hola que tal','')
// devolvera ['hola','que','tal'].

function separar(string=""){
    let splitString =string.split(" ");
    console.warn(splitString);
}
separar("hola que tal");


// 04) Programa una funcion que repita un texto X veces, ej:
// mi funcion ("hola mundo", 3) devolvera hola mundo hola mundo hola mundo

function repetir(cadena01="",r=0){
    let repetir=0;
    while(repetir<r){
    document.write(" Hola mundo");
    console.log(cadena01.split());
    repetir=repetir+1;
    }
}
repetir("hola mundo",3);
    

