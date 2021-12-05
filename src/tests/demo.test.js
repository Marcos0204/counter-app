

describe('Pruebas en el archivo Demo.js', ()=>{

    test('Deben de ser iguales los string', () => {
        ////inicializacion
        const mensaje= 'hola mundo'

        /////estimulo
        const mensaje2 = `hola mundo`


        /////observe el comportamiento 
        expect( mensaje ).toBe( mensaje2 );
    })

})