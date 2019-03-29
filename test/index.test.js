const app = require('../app');
const request = require('supertest');

const http = request(app);

describe('Key Value Store Integration Tests', () => {
  it('should return "Hello World!"', done => {
    http.get('/')
      .expect(200)
      .expect('"Hello World!"', done);
  });

  it('Should save an object by using a key', done => {
    http
      .post('/key1')
      .type('application/json')
      .send({ id: 1, name: 'express' })
      .expect('"OK"')
      .expect(200, done);
  });

  it('Should get an object by its key', done => {
    http
      .post('/key-abcd')
      .send({ id: 1, name: 'express' })
      .expect('"OK"')
      .end(() => {
        http
          .get('/key-abcd')
          .accept('application/json')
          .expect({ id: 1, name: 'express' })
          .expect(200, done);
      });
  });

});
