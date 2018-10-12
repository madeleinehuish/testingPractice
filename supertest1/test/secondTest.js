const supertest = require("supertest");
const expect = require('chai').expect;

require('dotenv').config();
const API_KEY = process.env.API_KEY;

let url = "https://www.googleapis.com/youtube/v3/search";
let params = `?part=snippet&key=${API_KEY}&q=javascript&maxResults=50&type=video`;
let queryUrl = url + params;

const requestAuthenticated = supertest.agent;

describe("test Youtube Api",function(){

  // #1 should return home page

  it("should show title of first snippet found", done => {

    // calling home page api
    requestAuthenticated(queryUrl)
    .get("/")
    .expect("Content-type","json")
    .expect(200) // THis is HTTP response
    .end((err,res) => {
      // console.log('res: ', res.body.items[0]);
      expect(res.body.items[0].snippet.title).to.equal('Learn JavaScript in 12 Minutes');
      done();
    });
  }).timeout(5000); //added timeout as sometimes call to youtube fails at 2000

})
