//*Escribe una función contarBs que tome una cadena como único argumento y devuelva un número que indique cuántos caracteres B en mayúscula hay en la cadena.

function contarBs(pa){
    let cont = 0
    let palabra = String (pa)   
    let largo = palabra.length

    for (let i=0; i<largo; i++){
        if(palabra[i] == "B")
            cont++
    }
    return cont
}

console.log(contarBs('BBdfdffBBB'))