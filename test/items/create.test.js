var config = require('../test_helper');
var fs     = require('fs');

describe('POST /api/v1/items', () => {
  context('should create an item', () => {
    it('with required parameters', done => {
      config.chai.request(config.app)
      .post('/api/v1/items')
      .type('form')
      .field('collection_id', '1')
      .field('title', 'Babe Ruth rookie')
      .end((err, res) => {
        res.should.have.status(201);
        done();
      });
    });
    it('with all parameters', done => {
      config.chai.request(config.app)
      .post('/api/v1/items')
      .type('form')
      .attach('image', fs.readFileSync('test/collections/test.png'), 'test.png')
      .field('collection_id', '1')
      .field('title', 'Babe Ruth rookie')
      .field('value', 5.00)
      .field('description', 'Super rare')
      .end((err, res) => {
        res.should.have.status(201);
        done();
      });
    });
  });
  context('should not create an item without', () => {
    it('anything', done => {
      config.chai.request(config.app)
      .post('/api/v1/items')
      .type('form')
      .end((err, res) => {
        createItemErrorAssertions(res);
        done();
      });
    });
    it('a collection id', done => {
      config.chai.request(config.app)
      .post('/api/v1/items')
      .type('form')
      .field('title', 'Babe Ruth rookie')
      .end((err, res) => {
        createItemErrorAssertions(res);
        done();
      });
    });
    it('a title', done => {
      config.chai.request(config.app)
      .post('/api/v1/items')
      .type('form')
      .field('collection_id', '1')
      .end((err, res) => {
        createItemErrorAssertions(res);
        done();
      });
    });
    it('a small enough file', done => {
      config.chai.request(config.app)
      .post('/api/v1/items')
      .type('form')
      .attach('image', fs.readFileSync('test/collections/10MB.jpg'), '10MB.jpg')
      .field('collection_id', '1')
      .field('title', 'Babe Ruth rookie')
      .end((err, res) => {
        createItemErrorAssertions(res);
        done();
      });
    });
  });
});

const createItemErrorAssertions = res => {
  res.should.have.status(400);
  res.should.be.json;
  res.body.should.have.property('error');
};
