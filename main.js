/* En 1937, un matemático alemán llamado Lothar Collatz formuló una hipótesis intrigante (aún no se ha comprobado) que se puede describir de la siguiente manera:

1. Toma cualquier número entero que no sea negativo y que no sea cero y asígnale el nombre c0.
2. Si es par, evalúa un nuevo c0 como c0 ÷ 2.
3. De lo contrario, si es impar, evalúe un nuevo  c0  como 3 × c0 + 1.
4. Si c0 ≠ 1, salta al punto 2. */

// La hipótesis dice que, independientemente del valor inicial de c0, el valor siempre tiende a 1.

let c0;
let error = ""
let contador;

console.log("En 1937, un matemático alemán llamado Lothar Collatz formuló una hipótesis intrigante (aún no se ha comprobado) que se puede describir de la siguiente manera:\n\n1. Toma cualquier número entero que no sea negativo y que no sea cero y asígnale el nombre c0.\n2. Si es par, evalúa un nuevo c0 como c0 ÷ 2.\n3. De lo contrario, si es impar, evalúe un nuevo  c0  como 3 × c0 + 1.\n4. Si c0 ≠ 1, salta al punto 2.\n\nLa hipótesis dice que, independientemente del valor inicial de c0, el valor siempre tiende a 1.");

while(true){
    contador = 0;
    c0 = prompt(error + "Ingresa un numero por favor(todo numero decimal se redondeara para abajo): \nEn el caso de finalizar el codigo escribir 'ESC'");

    // El dato ingresado va a pasar por una prueba de si se presiono el boton Escape, o el boton Cancelar o si se escribio "ESC"(Sin importar mayusculas o minusculas) para dejar de ejecutar el codigo

    if(c0 == null || c0.toUpperCase() == "ESC"){
        break;
    }

    // Luego de la verificacion se hace una prueba de si el dato ingresado es valido, tanto si es texto, como si son numeros negativos

    c0 = parseInt(c0);

    if(isNaN(c0)){
        error = "Se han escrito caracteres de TEXTO, por favor vuelva a intentar \n";
        continue;
    } else if(c0 < 0){
        error = "Se han escrito caracteres o numeros NEGATIVOS, por favor vuelva a intentar \n";
        continue;
    }

    console.log(`el numero ingresado fue: ${c0}\nEjecutando proceso...`)
    while(c0 !== 1){
        if(c0 % 2 == 0){
            c0 /= 2;
            console.log(c0);
        }
        else{
            c0 = c0 * 3 + 1;
            console.log(c0);
        }
        contador++;
    }
    error = "";
    console.log(`cantidad de pasos: ${contador}`);
}