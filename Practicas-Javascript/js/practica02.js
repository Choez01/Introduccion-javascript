// 5) Programa una funcion que invierta las palabras
// de una cadena de Texto, pe.miFuncion ("Hola mundo")
// devolvera "odnuM aloH"
const invierto = s => console.log(s.split("").reverse().join(""));
invierto("Hola Mundo");


// 06) Programa una funcion para contar el numero de
// veces que se repite una palabra en un texto largo
// pe.miFuncion ("hola mundo adios mundo","mundo") devolvera 2
// forma #1
const contar = (array, elemento) =>{
  let contador = 0;
  for(let i=0; i<array.length; i++){
    for(item of array[i]){
      if(item === elemento){
        contador++;
      }
    }
  }
  return contador;
}

console.info('Repetidos: ' + contar([['manzana', 'pera'],['pera', 'pera'],['uva', 'manzana']], 'manzana'));

//forma #2
const contarCadena = (cadena="",texto="")=>{
  if(!cadena) return console.warn("No ingresaste el texto largo");
  if(!texto) return console.warn("No ingresaste la palabra a evaluar");

  let i=0,
      contador=0;
  
  while(i!==-1){
    i=cadena.indexOf(texto,i);
    if(i!==-1){
      i++;
      contador++;
    }
  }
  return console.info(`La palabra ${texto} se repite ${contador} veces`);
}

contarCadena("hola mundo adios mundo","mundo");
// 07) Programa una funcion que valide si una palabra o
// frase dada, es un palindromo (que se lee igual en un sentido que en otro),
// pe.miFuncion("Salas") devolvera true

//El método toLowerCase() para regresar el valor de la  cadena de llamada  convertida en minúsculas.
const palindromo = txt =>{
  let re= /[\W_]/g; let lowRegStr = txt.toLowerCase().replace(re, ''); let reverseStr = lowRegStr.split('').reverse().join('');
  return console.warn(reverseStr===lowRegStr);
}
palindromo("Salas")


// 08) Programa una funcion que elimine cierto patron de caracteres de
// un texto dado, pe.miFuncion("xyz1,xyz2,xyz3,xyz4,xyz5", "xyz")
// devolvera "1,2,3,4 y 5"

const eliminar = (texto="", patron="")=>
  (!texto)
    ?console.warn("No ingresaste un texto")
    :(!patron)
      ?console.warn("No ingresaste un patron de caracteres")
      :console.info(texto.replace(new RegExp(patron, "ig"),""));

eliminar("xyz1,xyz2,xyz3,xyz4 y xyz5","xyz");

