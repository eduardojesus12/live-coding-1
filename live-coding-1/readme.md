# Práctica de Live Coding 1
El repo contiene el reto del live coding 1. Clonalo en tu computadora para resolverlo.

## Función de palabras

En este reto reforzarás tus conocimientos en JavaScript, creando funciones, trabajando con arreglos y strings, y manipulando del DOM para mostrar los resultados al usuario.

1.- Construye una función que reciba por parámetros un string y un array de strings. La función debe retornar un arreglo de strings con los strings que sean de mayor longitud que el string recibido por parámetros.

- Escribe una función que reciba 2 parámetros
   - Parámetro 1 - Un string
   - Parámetro 2 - Un array de strings
- La función debe devolver todas las palabras del array de entrada (parámetro 2) que sean más largas que el string de entrada (parámetro 1)
- Ejemplo:
   - `const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];`
   - `bigWords('bocina', myArray);`
   - Output - `['insecto', 'bootcamp', 'escritorio']`

2.- Construye una función que reciba por parámetros un array de strings y lo imprima dentro de la lista (<ul></ul>) en el index.html. La función debe mostrar la lista en el HTML manipulando el DOM, cada string del arreglo debe imprimirse en un elemento **<li></li>**. El array que se recibe por parámetros debe ser un array resultante de utilizar la función anterior.

- Escribe una función que reciba 1 parámetro
   - Parámetro 1 - Un array de strings
- La función debe mostrar la lista en el HTML, cada string del arreglo debe imprimirse en un elemento **<li></li>**.
- Ejemplo:
   - `const myArray = ['insecto', 'bootcamp', 'escritorio'];`
   - `printArray(myArray);`
   - Output - `<li>insecto</li>
               <li>bootcamp</li>
               <li>escritorio</li>
               `
3.- Conecta tu archivo JS con el index.html. Comprueba el funcionamiento del código con diferentes inputs.

### Reglas

- Debes compartir tu pantalla y mantener encendida tu cámara web
- Debes escribir el código JS en el archivo app.js
- Define en tu código el array de palabras, debe contener al menos 10 palabras.
- Durante el desafío debes explicar todos los pasos que realices.
- Debes responder a las preguntas que haga el entrevistador.

### Bonus

1.- Crea un input en el HTML donde el usuario pueda escribir la palabra que se mandará por parámetros a la primera función.
2.- Crea un botón en el HTML. Cuando el usuario de click al botón debe dispararse un evento en el cual se invocará la primera función y recibirá lo que el usuario escriba en el input como el string. Después el array resultante será pasado a la segunda función para mostrarlo en el HTML.