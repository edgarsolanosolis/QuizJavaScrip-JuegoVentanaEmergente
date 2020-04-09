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

8. Después de mostrar el resultado, muestra la siguiente pregunta aleatoria, para que el juego nunca termine (Sugerencia: escribe una función para esto y llámalo inmediatamente después de mostrar el resultado)

9. Tenga cuidado: después de la Tarea 8, el juego literalmente nunca termina. Por lo tanto, incluya la opción de salir del juego si el usuario escribe 'salir' en lugar de la respuesta. En este caso, NO llame a la función desde la tarea 8.

10. ¡Sigue el puntaje del usuario para que el juego sea más divertido! Entonces, cada vez que una respuesta sea correcta, agregue 1 punto al puntaje (Sugerencia: voy a usar el poder de los cierres para esto, pero no tiene que hacerlo, solo haga esto con las herramientas con las que se sienta más cómodo) punto).

11. Visualice la puntuación en la consola. Use otro método para esto.
*/

(function(){ //funcion privada PASO 7
    function Question(question, answers,correct){ //PASO 1

        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    
    Question.prototype.displayQuestion = function() {
        console.log(this.question);
    
        for(var i = 0; i < this.answers.length; i++){
            console.log(i + ': ' + this.answers[i]);
        }
    };
    
    Question.prototype.checkAmswer = function(ans, callBack) { //PASO 6
        var sc;
        if(ans === this.correct){
            console.log('Respuesta correcta');
            sc = callBack(true);

        }else{
            console.log('Respusta incorrecta.');
            sc = callBack(false);
        }

        this.displayScore(sc);
    };

        Question.prototype.displayScore = function(score){
            console.log('Su puntuacion es: ' + score);
            console.log('---------------------------------');
        };
    
    
    //Creamos las preguntas PASO 2
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
    
    var questions = [q1, q2, q3]; //PASO 3

    function score(){ //PASO 10
        var sc = 0;
        return function (correct){
            if(correct){
                sc++;
            }
            return sc;
        }
    };

    var keepScore = score(); // PASO 11 (Se extinde en todo el codigo, revisar, se llama CIERRES)


    function nextQuestion(){ //PASO 8
    
    var n = Math.floor(Math.random() * questions.length); //el metodo Math nos dara un numero entre 0 y 1, por eso lo multiplicamos por un numero para que sea mayor y el metodo Floor nos quita los decimales. PASO 4
    
    questions[n].displayQuestion();
    
    var answer = prompt('Por favor, elija la respuesta correcta.'); //la funcion prompt es para mostrar el mensaje en una ventana. PASO 5
    

        if(answer != 'exit'){ //PASO 9
            questions[n].checkAmswer(parseInt(answer), keepScore); //la funcion parseInt convierte una cadena en un numero entero     PASO 11
            nextQuestion();
        }

    };
    nextQuestion();
})();
