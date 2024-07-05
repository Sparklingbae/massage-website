jest.setTimeout(60000); // 60 seconds

const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../server'); // Adjust the path as necessary
const Provider = require('../models/provider');

describe('Provider Signup Endpoint', () => {
    beforeAll(async () => {
        await mongoose.disconnect();
        const url = 'mongodb://localhost:27017/test_massageDB'; // Use a separate test database
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    afterEach(async () => {
        await Provider.deleteMany();
    });

    it('should signup a new provider', async () => {
        const response = await request(app)
            .post('/api/signup')
            .field('name', 'John Doe')
            .field('email', 'john@example.com')
            .field('specialty', 'Massage Therapy')
            .field('password', 'password123')
            .field('bio', 'Experienced therapist')
            .field('services', 'Swedish massage, Deep tissue massage')
            .field('location', 'New York')
            .field('paymentReference', 'ref12345')
            .attach('images', 'path_to_image1.jpg')
            .attach('images', 'path_to_image2.jpg');

        expect(response.status).toBe(201);
        expect(response.body.message).toBe('Provider registered successfully');
    });
});