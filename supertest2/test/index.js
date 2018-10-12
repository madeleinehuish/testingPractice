const request = require('supertest');
const app = require('../app');
const assert = require('assert');

describe('basic tests', function() {

  it('respond with json', function(done) {
    request(app)
      .get('/user')
      .set('Accept', 'application/json')
      .expect('Content-Type', 'json')
      .expect(200)
      .end((err, res) => {
        assert.equal(res.body.name, 'Madeleine');
        done();
      })
  });

  it('redirection', function(done) {
    request(app)
      .post('/redir')
      .expect(302)
      .end((err, res) => {
        request(app)
          .get(res.header.location)
          .expect(200)
          .end((err, res) => {
            assert.equal(res.body.data, 'you got the moves');
            done()
          })
      })
  });

  it('form post', function(done) {
    let testName = 'Madeleine';
    let testEmail = 'test@test.com';

    request(app)
      .post('/form')
      .send({name: testName, email: testEmail})
      .expect(200)
      .end((err, res) => {
        console.log('response from form: ', res.text);
        assert(res.text, testName + ' ' + testEmail);
        done();
      })
  });


});
