/*
CUANTIFICADORES:

nos dice:
    1 - cuantas veces se repite un caractere en uns string

ejemplo:
    (*) /^a*$/ -> 'aaaa' -> true,
        porque iniciamos en 'a', terminamos en 'a' y todo es 'a' al inicio y final

    (*) /^a* / -> 'aaabb' -> true,
        porque iniciamos en 'a', terminamos ANY y todo es 'a' al inicio

    (*) /^a*e* / -> 'aaaee' -> true,
        tenemos 'a' inifinas, o una 'e' infinitas o NADA

    (+) /^a+e+$/ -> 'aaeeee' -> true
        tenemos AL MENOS UNA 'a' inifinas o UNA 'e' infinitas, al inicio y final

    (+) /^ae+$/ -> 'aaaaeee' -> false
        estamos indicando que solo quere UNA SOLA 'a' iniciando y no infinitas 'a'

 */
let regex, text;

regex = /^ae+$/
text = 'aeeee'
if (regex.test(text))
    console.log('Es correcto ♥‿♥', text, regex)
else
    console.error('No es bueno (╥﹏╥)', text, regex)
