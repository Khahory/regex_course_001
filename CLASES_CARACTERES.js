/*
CLASES DE CARACTERES

Las clases de caracteres son una forma de agrupar caracteres que se comportan de la misma manera. Por ejemplo,
si queremos buscar todas las letras del alfabeto, podemos hacerlo de la siguiente manera:

    [a-zA-Z]

Miralo como:
    buscar cualquier numero
    [0-9]

    buscar cualquier letra
    [a-zA-Z]

    buscar cualquier letra o numero
    [a-zA-Z0-9]

    buscar cualquier caracter
    [a-zA-Z0-9_]

Tenemos las clases de caracteres:
    \d: cualquier numero
    \D: cualquier caracter que no sea un numero
    \w: cualquier letra, numero o guion bajo
    \W: cualquier caracter que no sea una letra, numero o guion bajo
    \s: cualquier espacio en blanco
    \S: cualquier caracter que no sea un espacio en blanco

    ejemplo:
    /^\d+$/ -> solo numeros -> true
    /^\D+$/ -> solo letras -> true

    si ponemos:
        /^a\d+a$/ -> a148723904a -> true
        /^a\d+a$/ -> a3a -> true
        /^a\d+a$/ -> a3 -> false

recuerda que (+) es para que busque una o mas veces
y que (?) es para que busque 0 o 1 vez
*/

regex = /^\d+$/
text = '1231s2123'
if (regex.test(text))
    console.log('Es correcto ♥‿♥', text, regex)
else
    console.error('No es bueno (╥﹏╥)', text, regex)
