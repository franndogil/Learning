/* A continuación, escribe una función llamada contarCaracter que se com
porte como contarBs, excepto que toma un segundo argumento que indica el
 carácter que se va a contar (en lugar de contar solo caracteres B en mayúscula).
 Reescribe contarBs para hacer uso de esta nueva función. */

function contarCaracter(pa, carac){
    let cont = 0
    let palabra = String (pa)   
    let largo = palabra.length

    for (let i=0; i<largo; i++){
        if(palabra[i] == carac)
            cont++
    }
    return cont
}

console.log(contarCaracter('sdfsdfsdfffffaaaaaaaaaaaa', 'a'))