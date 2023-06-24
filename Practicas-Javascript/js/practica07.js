// 21) Programa una funcion que dado un array numerico devuelve otro
// array con los numeros elevados al cuadrado, pe.mi_funcion([1,4,5])
// devolvera [1,16,25];
const numerico = (n=undefined)=>{
    if(n===undefined) return console.warn("No ingresaste un array");
    if(!(n instanceof Array)) return console.error("El valor que ingresaste no es un arreglo")
    if(n.length===0) return console.error("El arreglo esta vacio")
    for(let i=0; i<n.length; i++){
        console.log(n[i]**2)
    }
}

numerico([1,4,5])

// 22) Programa una funcion que dado un array devuelva el numero mas
// alto y el mas bajo de dicho array, pe.miFuncion([1,4,99,-60])
// devolvera [99, -60]

const numero = (num=undefined)=>{
    if(num===undefined) return console.warn("No ingresaste un array");
    if(!(num instanceof Array)) return console.error("El valor que ingresaste no es un arreglo")
    if(num.length===0) return console.error("El arreglo esta vacio")
    let arr = []
    arr = num
    return console.info(`Arreglo original: "${num}"\nEl numero maximo es: "${Math.max(...arr)}"\nEl numero minimo es: "${Math.min(...arr)}"`)
}

numero([1,4,99,-60])

// 23) Programa una funcion que dado un array de numeros devuelva
// un objeto con 2 arreglos en el primero almacena los numeros pares
// y en el segundo los impares, pe.miFuncion([1,2,3,4,5,6,7,8,9,0])
// devolvera {pares:[2,4,6,8,0], impares[1,3,5,7,9]}
const separar = (arr=undefined)=>{
    if(arr===undefined) return console.warn("No ingresaste un arreglo de numeros"); 
    if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo")
    if(arr.length===0) return console.error("El arreglo esta vacio");

    for(let num of arr){
        if(typeof num !== "number") return console.error(`El valor "${num}" ingresado, No es un numero`)
    }

    return console.info({
        pares: arr.filter(num => num%2===0),
        impares: arr.filter(num=>num%2===1)
    })
}

separar([1,2,3,4,5,6,7,8,9,0])