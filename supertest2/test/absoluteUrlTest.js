
//this test uses request and chai instead of supertest
const request = require('request');
const expect = require('chai').expect;
const baseUrl = 'https://swapi.co/api';
const lukeUrl = baseUrl + '/people/1/';

describe('return Luke', ()=> {
	it('returns Luke', done => {
		request.get(lukeUrl, (err, response, body) => {
			const bodyObj = JSON.parse(body);
			expect(bodyObj.name).to.equal("Luke Skywalker");
			expect(bodyObj.hair_color).to.equal("blond");
			expect(response.statusCode).to.equal(200);
			// console.log('body: ', body);
			done();
		});
	})
})

describe('hit google', ()=> {
	it('returns 200', done => {
		request.get('https://www.google.com', (err, response, body) => {
			expect(response.statusCode).to.equal(200);

			done();
		})
	})
})

describe('hit jsonplaceholder', ()=> {
	it('returns 200', done => {
		request.get('https://jsonplaceholder.typicode.com/todos/1', (err, response, body) => {
			console.log('response: ', JSON.parse(body));
			const data = JSON.parse(body);
			const userId = data.userId;
			expect(response.statusCode).to.equal(200);
			expect(userId).to.equal(1);

			done();
		})
	})
})
