const request = require('supertest');
const app = require('../server'); // Adjust the path if necessary

describe('Auth Endpoints', () => {
    it('should create a new user', async () => {
        const res = await request(app)
            .post('/api/signup')
            .send({
                name: 'test',
                email: 'test@test.com',
                password: 'password'
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('token');
    });
});