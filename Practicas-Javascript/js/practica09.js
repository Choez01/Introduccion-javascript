// 27) Progama una clase llamada pelicula.
// La clase recibira un objeto al momento de instanciarse con los 
// siguientes datos: id de la pelicula en IMDB, titulo, director, año
// de estreno, pais o paises de origen, genero y calificacion en IMDB
// -Todos los datos del objeto son obligatorios.
// -Valida que el id IMBD tenga 9 caracteres, los primeros 2 sean letras
// y los 7 restante numeros.
// -Valida que el titulo no rebase los 100 caracteres.
// -Valida que el director no rebase los 50 caracteres.
// -Valida que el año de estreno sea un numero entero de 4 digitos.
// -Valida que el pais o paises sea introducidos en forma de arreglo.
// -Valida que los generos sean introducidos en forma de arreglo
// -valida que los generos introducidos esten dentro de los generos 
//  aceptados.
// -Crea un metodo estatico que devuelva los generos aceptados.
// -Valida que la calificacion sea un numero entre o y 10 pudiendo ser
// decimal de una posicion.
// -Crea un metodo que devuelva toda la ficha tecnica de la ppelicula.
// -Apartir de un arreglo con la informacion de 3 peliculas genera 3
// instancias de la clase de forma automatizada e imprime la ficha
// tecnica de cada pelicula.
//
// *Generos aceptados: Action, Adult, Adventure, Animation, biography,
// Comedy, Crime, Documentary, Drama, Family, Fantasy, Film Noir,
// Game-Show, History, Horror, Musical, Music, Mystery, news,
// Reality-TV, Romance, Sci-fi, Short, Sport, Talk-Show, Thrille,
// War, Western.
// forma #1
class pelicula {
    constructor({id, titulo, director, año, pais, genero, calificacion}){
        this.id=id;
        this.titulo=titulo;
        this.director=director;
        this.año=año;
        this.pais=pais;
        this.genero=genero;
        this.calificacion=calificacion;   
        
        let ex=/^[a-z]{2}\d{7}$/.test(id)
        if(!(ex)) return console.error(`los datos ${id} son incorrecto`)

        if(titulo.length >= 101) return console.error("El titulo tiene mas de 100 caracteres")
        if(titulo.length === 0) return console.error(`El titulo esta vacio`);
        
        if(director.length >= 51) return console.error("El director tiene mas de 50 caracteres")
        if(director.length === 0) return console.error(`El director esta vacio`);

        if(!(año.toString().length === 4)) return console.error(`El año ${año} ingresado es incorrecto`)
        if(typeof año !== "number") return console.error(`El valor "${año}" ingresado, No es un año`)

        if(!(pais instanceof Array)) return console.error("El pais que ingresaste no es un arreglo")
        if(pais.length===0) return console.error("El arreglo paises esta vacio");
        
        const generos = ["Action", "Adult", "Adventure", "Animation", "biography","Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "news", "Reality-TV", "Romance", "Sci-fi", "Short", "Sport", "Talk-Show", "Thrille", "War", "Western"]
        if(generos.indexOf(genero)===-1) return console.error("El genero ingresado es invalido")
        
        if(typeof calificacion !== "number") return console.error(`El valor "${calificacion}" ingresado, No es una calificacion valida`)
        let expReg = /^([0-9]+\.?[0-9]{0,2})$/.test(calificacion);
        if (!(expReg) || calificacion >= 11) return console.error(`"${calificacion}", no es una calificacion valida`)    
    }

    static generos(){
        console.log("GENEROS ACEPTADOS:","Action, Adult, Adventure, Animation, biography,Comedy, Crime, Documentary, Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, news, Reality-TV, Romance, Sci-fi, Short, Sport, Talk-Show, Thrille, War, Western")
    }

    ficha_Tecnica(){
        console.log(`"Ficha tecnica de las peliculas"\nId: ${this.id}\nTitulo: ${this.titulo}\nDirector: ${this.director}\nAño: ${this.año}\nPais: ${this.pais}\nGenero: ${this.genero}\nClasificacion: ${this.calificacion}`)
    }
}

class pelicula2 extends pelicula{
    constructor(id, titulo, director, año, pais, genero, calificacion){
        super(id, titulo, director, año, pais, genero, calificacion)
    }

    ficha_Tecnica2(){
        console.log(`"Ficha tecnica #2 de las peliculas"\nId: ${this.id}\nTitulo: ${this.titulo}\nDirector: ${this.director}\nAño: ${this.año}\nPais: ${this.pais}\nGenero: ${this.genero}\nClasificacion: ${this.calificacion}`)
    }
}

class pelicula3 extends pelicula{
    constructor(id, titulo, director, año, pais, genero, calificacion){
        super(id, titulo, director, año, pais, genero, calificacion)
    }

    ficha_Tecnica3(){
        console.log(`"Ficha tecnica #3 de las peliculas"\nId: ${this.id}\nTitulo: ${this.titulo}\nDirector: ${this.director}\nAño: ${this.año}\nPais: ${this.pais}\nGenero: ${this.genero}\nClasificacion: ${this.calificacion}`)
    }
}

const ficha = () => console.log(p.ficha_Tecnica(),p2.ficha_Tecnica2(),p3.ficha_Tecnica3())

const p = new pelicula({
    id: "ab1234567",
    titulo: "Los vengadores",
    director: "Angel",
    año: 2022,
    pais: ["Ecuador"],
    genero: "Action",
    calificacion: 9
});
const p2 = new pelicula2({
    id: "bc1234567",
    titulo: "Iron man",
    director: "Steven",
    año: 2021,
    pais: ["Ecuador"],
    genero: "Sci-fi",
    calificacion: 8
});
const p3 = new pelicula3({
    id: "cd1234567",
    titulo: "Spider-man",
    director: "Choez",
    año: 2020,
    pais: ["Ecuador"],
    genero: "Animation",
    calificacion: 7
})

//console.log(p)
//console.log(p2)
//console.log(p3)
//p.ficha_Tecnica()
pelicula.generos()

ficha()

//Forma #2
class peli{
    constructor({id, titulo, director, año, pais, genero, calificacion}){
        this.id=id;
        this.titulo=titulo;
        this.director=director;
        this.año=año;
        this.pais=pais;
        this.genero=genero;
        this.calificacion=calificacion;

        this.validarIMDB(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarEstreno(año);
        this.validarPais(pais);
        this.validarGeneros(genero);
        this.validarCalificacion(calificacion);
    }

    static get listaGeneros(){
        return ["Action", "Adult", "Adventure", "Animation", "biography","Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "Film", "Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "news", "Reality-TV", "Romance", "Sci-fi", "Short", "Sport", "Talk-Show", "Thrille", "War", "Western"];
    }

    static generosAceptados(){
        return console.info(`Los generos aceptados son: ${peli.listaGeneros.join(" ,")}`)
    }

    validarCadena(propiedad, valor){
        if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio`)

        if(typeof valor !== "string") return console.error(`${propiedad} "${valor}" ingresado, No es una cadena de texto`)

        return true;
    }

    validarLongitudCadena(propiedad,valor,longitud){
        if(valor.length > longitud) return console.error(`${propiedad} "${valor}" excede el numero de caracteres permitidos (${longitud}.)`)

        return true;
    }

    validarNumero(propiedad, valor){
        if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio`)

        if(typeof valor !== "number") return console.error(`${propiedad} "${valor}" ingresado, No es un numero`)

        return true;
    }

    validarArreglo(propiedad, valor){
        if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);

        if(!(valor instanceof Array)) return console.error(`${propiedad} "${valor}" ingresado, No es un arreglo`);

        if(valor.length===0) return console.error(`${propiedad} "${valor}" no tiene datos`);

        for(let cadena of valor){
            if(typeof cadena !== "string") return console.error(`El valor "${cadena}" ingresado, No es una cadena de texto`);
        }
        return true;
    }

    validarIMDB(id){
        if(this.validarCadena("IMDB id",id)){
            if(!(/^([a-z]){2}([0-9]){7}$/.test(id))) return console.error(`IMDB id "${id}" no es valido, debe tener 9 caracteres, los 2 primeros letras minuculas, los 7 restante numeros`)
        }
    }

    validarTitulo(titulo){
        if(this.validarCadena("Titulo",titulo)){
            this.validarLongitudCadena("Titulo",titulo,100)
        }
    }

    validarDirector(director){
        if(this.validarCadena("Director",director)){
            this.validarLongitudCadena("Director",director,50)
        }
    }

    validarEstreno(año){
        if(this.validarNumero("Año de estreno",año)){
            if(!(/^([0-9]){4}$/.test(año))) return console.error(`Año de estreno "${año}" no es valido, debe ser un numero de 4 digitos`)
        }
    }

    validarPais(pais){
        this.validarArreglo("Pais",pais)
    }

    validarGeneros(genero){
        if(this.validarArreglo("Genero",genero)){
            for(let generos of genero){
                //console.log(generos, peli.listaGeneros.includes(generos));
                if(!peli.listaGeneros.includes(generos)){
                    console.error(`Generos incorrectos "${genero.join(", ")}"`);
                    peli.generosAceptados();
                }
            }
        }
    }

    validarCalificacion(calificacion){
        if(this.validarNumero("Calificacion",calificacion)){
            return(calificacion < 0 || calificacion > 10)
             ?console.error(`La calificacion tiene que estar en un rango entre 0 y 10`)
             :this.calificacion = calificacion.toFixed(1);
        }
    }

    ficha_Tecnica(){
        console.log(`*Ficha tecnica de las peliculas*\nId: ${this.id}\nTitulo: ${this.titulo}\nDirector: ${this.director}\nAño: ${this.año}\nPais: ${this.pais.join("-")}\nGenero: ${this.genero.join(", ")}\nClasificacion: ${this.calificacion}`)
    }

}

//peli.generosAceptados();
const pel = new peli({
    id: "ab1234567",
    titulo: "Los vengadores",
    director: "Angel",
    año: 2020,
    pais: ["Ecuador"],
    genero: ["Adventure", "Animation", "Action"],
    calificacion: 7.69
});

//pel.ficha_Tecnica();

const misPelis = [
    {
        id: "ab1234567",
        titulo: "Los vengadores",
        director: "Angel",
        año: 2020,
        pais: ["Ecuador"],
        genero: ["Adventure", "Animation", "Action"],
        calificacion: 7.69
    },
    {
        id: "bc1234567",
        titulo: "Iron man",
        director: "Steven",
        año: 2020,
        pais: ["Ecuador"],
        genero: ["Adventure", "Animation", "Action"],
        calificacion: 8
    },
    {
        id: "cd1234567",
        titulo: "Spider-man",
        director: "Choez",
        año: 2020,
        pais: ["Ecuador"],
        genero: ["Adventure", "Animation", "Action"],
        calificacion: 9.5
    }
];

//misPelis.forEach(el => new peli(el).ficha_Tecnica())