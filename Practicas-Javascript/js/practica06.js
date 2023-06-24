// 18) Programa una funcion que dada una cadena de texto cuente el 
// numero de vocales y consonantes, pe.miFuncion("Hola Mundo")
// devuelva Vocales: 4, Consonantes: 5.
const contar = (c="")=>{
    if(!c) return console.warn("No ingresaste una cadena de texto");
    if(typeof c != "string") return console.error("El valor que ingresaste no es una cadena de texto");
    let vocales = "aáeéiíoóuú";
    let consonante= "bcdfghjklmnñpqrstvwxyz";
    let contar = 0;
    let contador = 0;

    for(const l of c){
        if(vocales.includes(l.toLowerCase())){
            contar++;
        }
        else if(consonante.includes(l.toLowerCase())){
            contador++;
        }
    }
    return console.log(`El texto ingresado tiene: "${contar}" vocales y "${contador}" consonantes`);
}

contar("hola mundo")

// 19) Programa una funcion que valide que un texto sea un nombre
// valido, pe.miFuncion("Angel  Choez") devolvera verdadero.
//forma #1
const texto = (t="")=>{
    if(!t) return console.warn("No ingresaste una cadena de texto");
    if(typeof t != "string") return console.error("El valor que ingresaste no es una cadena de texto");

    return console.info(`El texto "${t}" si es valido`)
}

texto("Angel Choez")

//forma #2
const validar = (nombre="")=>{
    if(!nombre) return console.warn("No ingresaste un nombre");
    if(typeof nombre !== "string") return console.error(`El valor "${nombre}" ingresado,NO es una cadena de texto`);

    let expReg = /^[A-Za-zÑñaáéíóú\s]+$/g.test(nombre);
    return(expReg)
     ?console.info(`"${nombre}", es un nombre valido`)
     :console.warn(`"${nombre}", NO es un nombre valido`)
}

validar("angel")

// 20) Programa una funcion que valide que un texto sea un email
// valido, pe.miFuncion("samsungchoez@gmail.com") devolvera verdadero.
function validarEmail(v="") {
    if(!v) return console.warn("No ingresaste un correo");
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(v)){
     console.log("La dirección de email " + v + " es correcta.");
    } else {
     console.log("La dirección de email es incorrecta.");
    }
  }

validarEmail("angel@gmail.com")
  