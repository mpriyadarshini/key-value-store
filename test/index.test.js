const app = require('../app');
const request = require('supertest');

describe('Key Value Store Integration Tests', () => {
  it('should return "Hello World!"', done => {
    request(app).get('/')
      .expect(200)
      .expect('"Hello World!"', done);
  });

  it('Should save an object by using a key', done => {
    request(app)
      .post('/key1')
      .send('value')
      .expect('"OK"')
      .expect(200, done);
  });

  it('Should get an object by its key', done => {
    request(app)
      .post('/key1')
      .send('value')
      .expect('"OK"')
      .end(() => {
        request(app)
          .get('/key1')
          .expect('value')
          .expect(200, done);
      });
  });

});
