const should = require('should');
const request = require('request');
const expect = require('chai').expect;
const util = require('util');
const baseUrl = 'https://swapi.co/api';

describe('return Luke', ()=> {
	it('returns Luke', done => {
		request.get({url:baseUrl + '/people/1/'}, (err, response, body) => {
			const bodyObj = JSON.parse(body);
			expect(bodyObj.name).to.equal("Luke Skywalker");
			expect(bodyObj.hair_color).to.equal("blond");
			expect(response.statusCode).to.equal(200);
			console.log('body: ', body);
			done();
		});
	})
})
