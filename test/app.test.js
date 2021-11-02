const app  = require('../src/app');
const request = require('supertest');

describe('Post Users', () => {

    describe('Creo un usuario', () => {
        test('Creo un usuario nuevo', async () =>{
            const response = await request(app).post('/api/user').send({
                "user": "PabloTest",
                "nombre": "Pablo",
                "apellido": "Rubianes",
                "password": "password123"
            })
            expect(response.statusCode).toBe(200);
        })
        test('Obtengo el usuario', async () =>{
            const response = await request(app).get('/api/user').send({
                "user": "PabloTest",
            })
            expect(response.statusCode).toBe(200);
        })
    })
})