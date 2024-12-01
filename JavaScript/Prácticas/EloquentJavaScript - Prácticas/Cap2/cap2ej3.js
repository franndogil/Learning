/* Tablero deajedrez
 Escribe un programa que cree una cadena que represente un tablero de 8x8,
 usando caracteres de salto de línea para separar las líneas. En cada posición
 del tablero hay un carácter de espacio o un carácter "#". Los caracteres deben
 formar un tablero de ajedrez.
 Al pasar esta cadena a console.log debería mostrar algo como esto:
 # # # #
 # # # #
 # # # #
 # # # #
 # # # #
 # # # #
 # # # #
 # # # #
 Cuando tengas un programa que genere este patrón, define una variable size
 = 8 y cambia el programa para que funcione para cualquier size, generando
 un tablero con el ancho y alto dados. */


 let alto = 15
 let ancho = 15
 let impresion = ''
 for (let i=1; i<=alto; i++){
    if (i % 2 != 0)
        impresion = impresion + ' '
    for (let j=1; j<=ancho; j++){
        impresion = impresion + '#'
        impresion = impresion + ' '
    }
    impresion = impresion + "\n"
 }
 console.log(impresion)