// 12)programa una funcion que determine si un numero es primo 
// (aquel que solo es divisible por si mismo y 1) i no,
// pe.miFuncion(7) devolvera true.

//forma #1
function primo (a=undefined){
    if(a===undefined) return console.warn("No ingresaste un numero");
    if(typeof a != "number") return console.error(`El valor ${a} ingresado, No es un numero`);
    if(a===0) return console.error("El numero no puede ser 0");
    if (a<=1) return false;
    for (let i = 2; i <= a-1; i++)
        if (a % i == 0)
            return false, console.log(`El numero "${a}" no es un numero primo`);
            
            return true, console.log(`El numero "${a}" si es un numero primo`)        
}

primo(3)

//forma #2
const primos = (a=undefined) =>{
    if(a===undefined) return console.warn("No ingresaste un numero");
    if(typeof a != "number") return console.error(`El valor ${a} ingresado, No es un numero`);
    if(a===0) return console.error("El numero no puede ser 0")
    if(a<=1) return false;
    for (let i=2; i<=a-1; i++){
        if(a % i == 0){
            return false, console.log(`El numero "${a}" no es un numero primo`)
        }  
    }
    return true, console.log(`El numero "${a}" si es un numero primo`);
}

primos(6)

// 13)programa una funcion que determine si un numero es par o
// impar, pe.miFuncion (29) devolvera impar.

//forma #1
function par(a=undefined){
    let t
    t=a%2
    if(a===undefined) return console.warn("No ingresaste un numero");
    if(typeof a != "number") return console.error(`El valor ${a} ingresado, No es un numero`);
    if(t===0){
        console.info(`El numero "${a}" si es un numero par`)
    }
    else{
        console.info(`El numero "${a}" es un numero impar`)
    }
}

par(29)

//forma #2
const pares = (a=undefined) =>{ let t
    t=a%2;
    if(a===undefined) return console.warn("No ingresaste un numero");
    if(typeof a != "number") return console.error(`El valor ${a} ingresado, No es un numero`);
    if(t===0){
        console.info(`El numero "${a}" si es un numero par`);  
    }
    else{
        console.info(`El numero "${a}" es un numero impar`);
    }
}

pares(6)

//forma #3
const impares_pares = (a=undefined) => {
    if(a===undefined) return console.warn("No ingresaste un numero");
    if(typeof a != "number") return console.error(`El valor ${a} ingresado, No es un numero`);

    return((a % 2)===0)
        ?console.info(`El numero ${a} es Par`)
        :console.info(`El numero ${a} es Impar`)
}

impares_pares(6)


// 14)programa una funcion para convertir grados Celsius a Fahrenheit
// y viceversa, pe.miFuncion(0,"C") devolvera 32°F.
//forma #1
function grados(num, convertir=""){
    let c,f;
    convertir = convertir.toUpperCase();
    if(!convertir) return console.error("No ingresaste los valores a convertir");
    if(convertir!="C" && convertir!="F") return console.error("Valor de unidad no reconocida");
    if(convertir==="C"){
      c=(num*9/5)+32
      return  console.warn(`El grado ${num } Celsius a Fahrenheit es: ${c}°F`)
    }
    if(convertir==="F"){
      f=(num-32)/1.8
      return  console.warn(`El grado ${num} Fahrenheit a Celsius es: ${f}°C`)
    }
}

grados(32,"F")

//forma #2
const grado = (num, convertir="") =>{
    let c,f;
    convertir = convertir.toUpperCase();
    if(!convertir) return console.error("No ingresaste los valores a convertir");
    if(convertir!="C" && convertir!="F") return console.error("Valor de unidad no reconocida");
    if(convertir==="C"){
        c=(num*9/5)+32;
        return console.warn(`El grado ${num } Celsius a Fahrenheit es: ${c}°F`);
    }
    if(convertir==="F"){
        f=(num-32)/1.8
        return  console.warn(`El grado ${num} Fahrenheit a Celsius es: ${f}°C`);
    }
}

grado(32,"F")
