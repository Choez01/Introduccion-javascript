// 24) Programa una funcion que dado un arreglo de numeros devuelva un
// objeto con dos arreglos, el primero tendra los numeros ordenados
// en forma descendiente, pe. miFuncion([7,5,7,8,6]) devolvera 
// {asc: [5,6,7,7,8], desc: [8,7,7,6,5]}.
//forma #1
const ordenar = (arr=undefined)=>{
    if(arr===undefined) return console.warn("No ingresaste un arreglo de numeros"); 
    if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo")
    if(arr.length===0) return console.error("El arreglo esta vacio");

    for(let num of arr){
        if(typeof num !== "number") return console.error(`El valor "${num}" ingresado, No es un numero`)
    }

    console.info("ASC:",arr.sort())
    console.info("DESC",arr.reverse())

}

ordenar([7,5,7,8,6])

//formaa #2
const ordenarArreglo = (arr=undefined)=>{
    if(arr===undefined) return console.warn("No ingresaste un arreglo de numeros"); 
    if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo")
    if(arr.length===0) return console.error("El arreglo esta vacio");

    for(let num of arr){
        if(typeof num !== "number") return console.error(`El valor "${num}" ingresado, No es un numero`)
    }

    return console.info({
        arr,
        asc: arr.map(el => el).sort(),
        desc: arr.map(el => el).sort().reverse(),
    })

}

ordenarArreglo([7,5,7,8,6])

// 25) Programa una funcion que dado un arreglo de elementos, elimine
// los duplicados, pe.miFuncion(["x", 10, "x", 2, "10", 10, true, true])
// devolvera ["x", 10, 2, "10", true].

const duplicados = (arr=undefined)=>{
    if(arr===undefined) return console.warn("No ingresaste un arreglo de numeros"); 
    if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo")
    if(arr.length===0) return console.error("El arreglo esta vacio");

    let eliminar = new Set(arr);
    return console.log("Elementos duplicados:", [...eliminar])
} 

duplicados(["x", 10, "x", 2, "10", 10, true, true])

//forma #2
const Eliminarduplicados = (arr=undefined)=>{
    if(arr===undefined) return console.warn("No ingresaste un arreglo de numeros"); 
    if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo")
    if(arr.length===0) return console.error("El arreglo esta vacio");

    return console.info({
        Original: arr,
        Sin_duplicados: arr.filter((value,index,self)=>self.indexOf(value)===index),
    })
} 

Eliminarduplicados(["x", 10, "x", 2, "10", 10, true, true])

// 26) Programa una funcion que dado un arreglo de numeros obtenga
// obtenga el promedio, pe.promedio([9,8,7,6,5,4,3,2,1,0]) 
// devolvera 4.5

//forma #1
const promedio = (arr=undefined)=>{
    if(arr===undefined) return console.warn("No ingresaste un arreglo de numeros"); 
    if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo")
    if(arr.length===0) return console.error("El arreglo esta vacio");
    
    let suma = 0;
    for(let n of arr){
        suma += n;
    }

    let promedio = suma/arr.length;
    console.log(`La suma del array es "${suma}"\nel promedio es: "${promedio}"`)
}

promedio([9,8,7,6,5,4,3,2,1,0])

