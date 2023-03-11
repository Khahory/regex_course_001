/*
ACERSIONES:

1 - comenzar con...
2 - finalizar con...

ejemplo:
    /^a/ -> busca iniciando con 'a'...
    /a$/ -> busca finalizando con ...'a'
    /^a$/ -> busca que la palabra sea igua a 'a'
 */
const regex = /^a$/
const text = 'angela'

if (regex.test(text))
    console.log('Es correcto ♥‿♥')
else
    console.error('No es bueno (╥﹏╥)')


