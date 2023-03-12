/*
ACERSIONES_AVANZADAS
Es poner condiciones a la expresion regular (=?)
    ejemplo: /Vino(=?\s\w+)/
        la palabra Vino seguida de un espacio y una palabra (ESTA ES MI CONDICION)

Es poner condiciones a la expresion regular (?!)
    ejemplo: /Java\s(?!8|9)/
        la palabra Java seguida de un espacio y que no sea 8 o 9 (ESTA ES MI CONDICION)

 */

let regex, text;

regex = /Java\s(?!8|9)/
text = 'Java 7'
if (regex.test(text))
    console.log('Es correcto ♥‿♥', text, regex)
else
    console.error('No es bueno (╥﹏╥)', text, regex)
