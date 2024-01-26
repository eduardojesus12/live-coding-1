//Aldo Beltran
//Mas logica de progrmacion y dominio de conceptos
let miArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio', 'papel','cacahuates','pistaches','chicharon']
const bocina = "bocina";

const resultado = [];

function bigWords (palabra, miArraypalabras){

    resultado.push(palabra);
    console.log(palabra);
    miArraypalabras.forEach(elemento => {
        if(palabra.length < elemento.length){
            resultado.push(elemento);
        }
    });
    console.log(resultado.toString());
}
    bigWords(bocina, miArray);

    const contenedor = document.querySelector(".contenedor");

    const imprimeLista =(string) =>{
        string.forEach(valor =>{
            const lista = document.createElement("li");
            lista.innerText = valor;
            contenedor.appendChild(lista);
        })
    }
imprimeLista(resultado)
//console.log(bigWord(string, myArray));