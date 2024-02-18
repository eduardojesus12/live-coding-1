// Escribe tu código aquí.
const miArreglo = ['holísticos', 'pensamientos', 'masaje', 'linfático', 'sistema', 'emocionalmente'];
const resultado = bigWords('terapeuta', miArreglo);
console.log(resultado);
  
function bigWords(string, stringArray) {
    return stringArray.filter(palabra => palabra.length > string.length);
}

function printArray(stringArray) {
    let listaContainer = document.getElementById("listaContainer");
    // Limpiar <ul>
    listaContainer.innerHTML = "";
    // Crear un elemento <li> por cada palabra del array y agregarlo a <ul>
    stringArray.forEach(palabra => { 
      let listItem = document.createElement("li");
      listItem.textContent = palabra;
      listaContainer.appendChild(listItem);

    });
  }
 printArray(resultado);