import '@testing-library/jest-dom'
import { getUser, getUsuarioActivo } from '../../base/05-funciones'


describe('Pruebas en 05-funciones', () => {

    test('Debe de Retornar un objeto', () => {
        const userTest = {uid: 'ABC123', username: 'El_Papi1502'}
        const user = getUser()
        expect(user).toEqual(userTest)
    })

    /////getUsuarioActivo debe de retornar un objeto
    test('getUsuarioActivo debe de retornar un objeto', () => {
        const userTest= {
            uid: 'ABC567',
            username: 'Marcos'
        }
        const { username } = userTest

        const userActive = getUsuarioActivo(username)

        expect(userActive).toEqual(userTest)
    })
    
})