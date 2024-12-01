/*FizzBuzz
 Escribe un programa que use console.log para imprimir todos los números
 del 1 al 100, con dos excepciones. Para los números divisibles por 3, imprime
 "Fizz" en lugar del número, y para los números divisibles por 5 (y no por 3),
 imprime "Buzz" en su lugar.
 Cuandotengas eso funcionando, modifica tu programa para imprimir "FizzBuzz
 " para los números que son divisibles por 3 y 5 (y sigue imprimiendo "Fizz" o
 "Buzz" para los números que son divisibles solo por uno de esos).
 (Esto es en realidad una pregunta de entrevista que se ha afirmado que
 elimina a un porcentaje significativo de candidatos a programadores. Entonces,
 si lo resolviste, tu valor en el mercado laboral acaba de aumentar.)*/

for (let i=1; i<=100; i++){
    if (i % 3 == 0){
        if (i % 5 == 0)
            console.log('FizzBuzz')
        else
            console.log('Fizz')
    }
    else
        if(i % 5 == 0)
            console.log('Buzz')
        else
            console.log(i)
}