// 9) Programa una funcion que obtenga un numero aleatorio
// entre 501 y 600

//forma #1
function aleatorio(min, max){
    return console.log(Math.floor(Math.random() * (max - min) + min));
}

//forma #2
const aleatorios = (min,max)=>{
    (!max)
    ?console.warn("No ingresaste un numero minimo o numero maximo")
    :console.log(Math.floor(Math.random() * (max - min) + min));
}

aleatorio(501, 600)//forma #1
aleatorios(501,600)//forma #2

// 10) Programa una funcion que reciba un numero y evalue si
// es capicua o no(que se lee igual en un sentido que en otro),
// pe.miFuncion(2002) devolvera true.

//forma #1
const capicua = num =>{
    let re= /[\W_]/g; let lowRegStr = num.toLowerCase().replace(re, ''); let reverseStr = lowRegStr.split('').reverse().join('');
    return console.warn(reverseStr===lowRegStr);
  }
capicua("2002")

//forma #2
const capicuas = (numero = 0)=>{
    if(!numero) return console.warn("No ingresaste un numero");

    if(typeof numero !== "number") return console.error(`El valor "${numero}" ingresado, No es un numero`);

    numero = numero.toString();
    let alReves = numero.split("").reverse().join("");

    return(numero === alReves)
        ?console.info(`Si es capicua, Numero original ${numero}, Numero al reves ${alReves}`)
        :console.info(`No es capicua, Numero original ${numero}, Numero al reves ${alReves}`)
}

capicuas(2002);

// 11) Programa una funcion que calcule el factorial de un
// numero (el factorial de un entero positivo n, se define como)
// el producto de todos los numeros enteros positivos desde 1 hasta n),
// pe.miFuncion(5) devolvera 120.

//forma #1
const factorial= num =>{ let t=1;
    for(i=1; i<=num; i++){
        t=t * i;
    }
    return console.info(t);
}

factorial(5)

//forma #2
function factoria (num){
    let t=1;
    for(i=1; i<=num; i++){
        t=t * i;
    }
    return console.info(t);
}

factoria(5)

