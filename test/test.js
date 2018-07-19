const request = require('supertest');
const app = require('../app');

// API test 
describe('API', function() {
  it('return json object', function(done) {
    request(app)
      .get('/api')
      .expect('{"success":"your API is connected <3"}')
      .expect(200, done)
  });
}); 
