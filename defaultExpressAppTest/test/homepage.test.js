const request = require('supertest');
const app = require('../app');

describe('homepage', () => {
	it('welcomes the user', done => {
		request(app).get('/')
			.expect(200)
			.expect(/Hello Madeleine!/, done)
	})
})

describe('contact form', () => {
	it('thanks the user after they fill out form', done => {
		request(app).post('/contact')
			.send({name: "Madeleine"})
			.expect(302)
			.expect('Location',/\/thank-you/, () => {
				request(app).get('/thank-you')
					.expect(200)
					.expect(/Thank you/, done)
			})
	})
})
