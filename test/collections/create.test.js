var config     = require('../test_helper');
var helpers    = require('./collectionHelpers');
var fs = require('fs');


describe('POST /api/v1/collections', () => {
  context('should create a collection', () => {
    it('with required parameters', done => {
      config.chai.request(config.app)
      .post('/api/v1/collections')
      .type('form')
      .field('uid', '1')
      .field('category', 'comics')
      .field('title', 'New')
      .end((err, res) => {
        helpers.collectionAssertions(res, 201, 21, '1',
          'comics', 'New', null);
        done();
      });
    });
    it('with all parameters', done => {
      config.chai.request(config.app)
      .post('/api/v1/collections')
      .type('form')
      .attach('image', fs.readFileSync('test/collections/test.png'), 'test.png')
      .field('uid', '1')
      .field('category', 'comics')
      .field('title', 'New')
      .end((err, res) => {
        helpers.collectionAssertions(res, 201, 21, '1',
          'comics', 'New');
        done();
      });
    });
  });
  context('should not create a collection without', () => {
    it('anything', done => {
      config.chai.request(config.app)
      .post('/api/v1/collections')
      .type('form')
      .end((err, res) => {
        createCollectionErrorAssertions(res);
        done();
      });
    });
    it('a uid', done => {
      config.chai.request(config.app)
      .post('/api/v1/collections')
      .type('form')
      .field('category', 'comics')
      .field('title', 'New')
      .end((err, res) => {
        createCollectionErrorAssertions(res);
        done();
      });
    });
    it('a category', done => {
      config.chai.request(config.app)
      .post('/api/v1/collections')
      .type('form')
      .field('uid', '1')
      .field('title', 'New')
      .end((err, res) => {
        createCollectionErrorAssertions(res);
        done();
      });
    });
    it('a title', done => {
      config.chai.request(config.app)
      .post('/api/v1/collections')
      .type('form')
      .field('uid', '1')
      .field('category', 'comics')
      .end((err, res) => {
        createCollectionErrorAssertions(res);
        done();
      });
    });
  });
});

const createCollectionErrorAssertions = res => {
  res.should.have.status(400);
  res.should.be.json;
  res.body.should.have.property('error');
  res.body.error.should.equal('uid, category, title required');
};
