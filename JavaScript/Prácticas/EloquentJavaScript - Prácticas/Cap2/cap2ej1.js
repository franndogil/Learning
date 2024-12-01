/*Escribe un bucle que realice siete llamadas a console.log para mostrar el
 siguiente triángulo:
 #
 ##
 ###
 ####
 #####
 ######
 #######
 */

const max = 7
let i = 1
let impresion = ""

while (i<=max){
    let j = 1
    while (j<=i){
        impresion = impresion + "#"
        j=j+1
    }
    console.log(impresion)
    impresion = ""
    i=i+1
}