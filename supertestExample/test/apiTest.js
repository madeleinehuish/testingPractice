const supertest = require("supertest");
const expect = require('chai').expect;

// This agent refers to PORT where program is runninng.

const server = supertest.agent("http://localhost:3000");

// UNIT test begin

describe("SAMPLE unit test",function(){

  // #1 should return home page

  it("should return home page", done => {

    // calling home page api
    server
    .get("/")
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end((err,res) => {
      console.log('res.body: ', res.body);
      // HTTP status should be 200
      expect(res.status).to.equal(200);
      // Error key should be false.
      expect(res.body.error).to.equal(false);
      done();
    });
  });

  it("should get information from tests", done => {
    server
      .get('/user')
      .expect("Content-type",/json/)
      .expect(200)
      .end((err, res) => {
        console.log('res.body: ', res.body);
        // expect(res.body.test).to.equal(true);
        // expect(res.body.name).to.equal('Madeleine');
        done();
      })
  })

  it("should add two numbers",function(done){

    //calling ADD api
    server
    .post('/add')
    .send({num1 : 10, num2 : 20})
    .expect("Content-type",/json/)
    .expect(200)
    .end((err,res) => {
      expect(res.status).to.equal(200);
      expect(res.body.error).to.equal(false);
      expect(res.body.data).to.equal(30);
      done();
    });
  });

  it("should return 404",function(done){
    server
    .get("/random")
    .expect(404)
    .end(function(err,res){
      expect(res.status).to.equal(404);
      done();
    });
  })

  // //uncomment to see a failing test case
  // it("should add two numbers failing",function(done){
  //
  //   //calling ADD api
  //   server
  //   .post('/add')
  //   .send({num1 : 10, num2 : 20})
  //   .expect("Content-type",/json/)
  //   .expect(200)
  //   .end(function(err,res){
  //     expect(res.status).to.equal(200);
  //     expect(res.body.error).to.equal(false);
  //     expect(res.body.data).to.equal(40);
  //     done();
  //   });
  // });

});
