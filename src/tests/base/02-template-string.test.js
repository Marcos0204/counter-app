import '@testing-library/jest-dom'

import { getSaludo } from '../../base/02-template-string'

describe('prueba en 02 template-string', () => {

    
    test('prueba en el metodo getSaludo', () => {
        ////inicializacion
        const nombre = 'Marcos'
        ///estimulo
        const saludo = getSaludo(nombre)
        //console.log(saludo)
        // lo que se espera
        expect( saludo ).toBe('Hola ' + nombre)
    });

    ///////debe de retornar hola Anger si no hay agumentos en el nombre
    test('debe de retornar hola Ange si no hay agumentos en el nombre', () => {
        const saludo = getSaludo()
        expect( saludo ).toBe('Hola Angel')
    })
    
    
})