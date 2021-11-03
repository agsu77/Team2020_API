const app  = require('../src/app');
const {disconect, connect} = require('../src/config/connectionBD');
const request = require('supertest');

beforeAll(async () => {
    await connect(process.env.DB_TEST);
})
afterAll(async () => {
    await disconect();
})

describe('Post Users', () => {

    describe('CRUD USER', () => {
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

        test('Actualizar Usuario', async () =>{
            const response = await request(app).put(`/api/user/PabloTest`).send({
                "user": "PabloTest",
                "nombre": "Pablo",
                "apellido": "Rubianes",
                "password": "password456"
            })
            expect(response.statusCode).toBe(200);
        })
    })
})