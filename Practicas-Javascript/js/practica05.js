// 15)Programa una funcion para convertir numeros de base binaria a
// decimal y viceversa, pe.miFuncion(100,2) devolvera 4 base 10.

//forma #1
const convertir = (n=undefined, c=undefined) =>{
    if(n===undefined) return console.warn("No ingresaste un numero"); 
    if(c===undefined) return console.warn("No ingresaste el numero a convertir");
    if(typeof n != "number") return console.error(`El valor ${n} ingresado, No es un numero`);
    if(typeof c != "number") return console.error(`El valor ${c} ingresado, No es un numero`);
    if(c != 10 && c !=2) return console.error(`El valor ${c} ingresado no es un valor de conversion`);
    
        if(c===2){
            let value=0;
            let b=1;
            let num = n;

            while(n){
                let digit = n % 10;
                n = Math.floor(n/10);

                value += digit * b;
                b= b*2;
            }
            return console.log(`El numero "${num}" binario a decimal es: ${value}`);
        }

        if(c===10){
            const result = n.toString(2);
            //console.log(' Binario:' + ' ' +result);
            console.log(`El numero "${n}" decimal a binario es: ${result}`);
        }
}

convertir(100,2)

//forma #2
const conversion = (n=undefined, b=undefined)=> {
    if(n===undefined) return console.warn("No ingresaste un numero"); 
    if(b===undefined) return console.warn("No ingresaste el numero a convertir");
    if(typeof n != "number") return console.error(`El valor ${n} ingresado, No es un numero`);
    if(typeof b != "number") return console.error(`El valor ${b} ingresado, No es un numero`);

    if(b===2){
        return console.info(`El numero "${n}" binario a decimal es: ${parseInt(n,b)}`);
    } else if(b===10){
        return console.info(`El numero "${n}" decimal a binario es: ${(n.toString(2))}`);
    } else {
        return console.error("El tipo de base a convertir No es valido");
    }
}

conversion(100,2)

// 16)Programa una funcion que devuelva el monto final despues de
// aplicar un desuento a una cantidad dada, pe.miFuncion(1000,20)
// devolvera 800

const descuento = (num=undefined, d=undefined)=>{
    if(num===undefined) return console.warn("No ingresaste el valor");
    if(d===undefined) return console.warn("No ingresaste el descuento");
    if(typeof num != "number") return console.error(`El valor ${num} ingresado, No es un numero`);
    if(typeof d != "number") return console.error(`El valor ${d} ingresado, No es un numero`);
    let total = num * (d/100);
    let descontar = num - total;

    return console.log(`Su valor es de "${num}", su descuento es el ${d}%, total a pagar es de: ${descontar}`)
}

descuento(1000,20)

// 17)Programa una funcion que dada una fecha valida determine cuantos
// años han pasado hasta el dia de hoy, pe.miFuncion(new Date(1984,4,23))
// devolvera 35 años (en 2020)

function fecha(a=undefined){
   if(a===undefined) return console.warn("No ingresaste una fecha");
   if(!(a instanceof Date)) return console.error("El valor que ingresaste no es una fecha valida");
   let d1 = new Date()   

   let d0 = d1.getFullYear()-a.getFullYear();
   if(d0>1){
    return console.info(`Fecha que ingreso ${a}, hasta la fecha actual han transcurrido "${d0}" años`)
   }
   else if(d0<=-1){
    return console.info(`La fecha que ingreso ${a}, falta ${-(d0)} año para la fecha actual`)
   }
}

fecha(new Date(1997,06,05))