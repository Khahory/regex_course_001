/*
CUANTIFICADORES:
* -> quiere decir que viene una letra si o no infinitas veces
+ -> quiere decir que viene una letra si o no infinitas veces, pero al menos una vez
? -> quiere decir que viene una letra si o no una vez


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

    (?) /^a?e?$/ -> 'aeeee' -> true
        tenemos UNA 'a' o UNA 'e' o NADA

 */
let regex, text;

regex = /^ae+$/
text = 'aeeee'
if (regex.test(text))
    console.log('Es correcto ♥‿♥', text, regex)
else
    console.error('No es bueno (╥﹏╥)', text, regex)


// ------------------------------------------------------
console.log('------------------------------------------------------')
// ------------------------------------------------------


/*
podemos establecer rangos
    {1,2} -> debe de venir la letra '1' 1 o 2 veces

    {3,} -> debe de venir la letra '1' 3 o mas veces

    . -> cualquier caracter, puede ser cualquier letra, numero, simbolo, etc
        /^pato.1{3,}A$/ -> 'pato1111A' -> true

    /^pato1{3,}A$/ -> 'pato1111A' -> true
        porque tenemos 'pato' al inicio, '1' 3 o mas veces, 'A' al final
 */
regex = /^pato1{3,}$/
text = 'pato1111'
if (regex.test(text))
    console.log('Es correcto ♥‿♥', text, regex)
else
    console.error('No es bueno (╥﹏╥)', text, regex)


// ------------------------------------------------------
console.log('------------------------------------------------------')
// ------------------------------------------------------


/*
vamos hacer un ejemplo para extraer items de unos tags
    <beer>Maleton</beer>
    <beer>TheGloze</beer>

    si queremos agregar un '/' en el regex, tenemos que ponerlo asi: \/

    '.' -> cualquier caracter
    '*' -> cualquier caracter 0 o mas veces (infinitas)
    'g' -> global, para que busque en todo el string
 */


regex = /<beer>.*?<\/beer>/g
text = '<beer>Maleton</beer><beer>TheGloze</beer>'
console.log(text.match(regex))
// if (regex.test(text))
//     console.log('Es correcto ♥‿♥', text, regex)
// else
//     console.error('No es bueno (╥﹏╥)', text, regex)
