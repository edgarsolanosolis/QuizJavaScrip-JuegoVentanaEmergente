/*
--- ¡Construyamos un divertido juego de preguntas en la consola! ---

1. Construya un constructor de funciones llamado Pregunta para describir una pregunta. Una pregunta debe incluir:
a) pregunta en sí
b) las respuestas de las cuales el jugador puede elegir la correcta (elija aquí una estructura de datos adecuada, matriz, objeto, etc.)
c) respuesta correcta (usaría un número para esto)

2. Crea un par de preguntas usando el constructor

3. Almacénelos todos dentro de una matriz

4. Seleccione una pregunta aleatoria y regístrela en la consola, junto con las posibles respuestas (cada pregunta debe tener un número) (Sugerencia: escriba un método para los objetos Pregunta para esta tarea).

5. Use la función 'prompt' para pedirle al usuario la respuesta correcta. El usuario debe ingresar el número de la respuesta correcta tal como la mostró en la Tarea 4.

6. Compruebe si la respuesta es correcta e imprima en la consola si la respuesta es correcta o no (Sugerencia: escriba otro método para esto).

7. Suponga que este código sería un complemento para que otros programadores lo usen en su código. Así que asegúrese de que todo su código sea privado y no interfiera con el código de otros programadores (Sugerencia: aprendimos una técnica especial para hacer exactamente eso).
*/


function Question(question, answers,correct){

    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

Question.prototype.displayQuestion(){
    
};

//Creamos las preguntas
var q1 = new Question('La operacion 32+32=64 es correcta?',


                    ['Yes', 'No'],
                    0); // NOS BASAMOS EN EL CONTRUCTOR DE ARRIBA

var q2 = new Question('Cual es la respuesta correcta de la siguiente operacion: 5x6=?',
                    ['25',
                    '35',
                    '30'],2);

var q3 = new Question('Cual es la respuesta correcta de la siguiente operacion: 8x4=?',
                    ['42','34',
                    '32'],2);

var questions = [q1, q2, q3];

var n = Math.floor(Math.random() * questions.length);

questions[n];