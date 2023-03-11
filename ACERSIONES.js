/*
ACERSIONES:

comenzar con...
finalizar con...

ejemplo:
    /^a/ -> busca iniciando con 'a'...
    /a$/ -> busca finalizando con ...'a'
    /^a$/ -> busca que la palabra sea igua a 'a'
 */
let regex, text;

regex = /^a$/
text = 'angela'
if (regex.test(text))
    console.log('Es correcto ♥‿♥', text, regex)
else
    console.error('No es bueno (╥﹏╥)', text, regex)

// ------------------------------------------------------
console.log('------------------------------------------------------')
// ------------------------------------------------------

/*
limite de palabras

Si existe la palabra en un string

ejemplo:
    (\b) /Git\b/ -> la palabra 'Git'existe? si
 */
regex = /Git\b/;
text = "Me gusta Git mucho"
if (regex.test(text))
    console.log('Es correcto ♥‿♥', text, regex)
else
    console.error('No es bueno (╥﹏╥)', text, regex)



