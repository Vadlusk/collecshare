var config  = require('../test_helper');
var helpers = require('./collectionHelpers');
var fs      = require('fs');

describe('PUT /api/v1/collections/:id', () => {
  context('should edit a collection with', () => {
    it('one valid parameter', done => {
      config.chai.request(config.app)
        .put('/api/v1/collections/1')
        .type('form')
        .field('category', 'coins')
        .end((err, res) => {
          helpers.collectionAssertions(res, 200, 1, '1',
            'coins', 'Title', null);
          done();
        });
    });
    it('all valid parameters', done => {
      config.chai.request(config.app)
        .put('/api/v1/collections/1')
        .type('form')
        .field('category', 'coins')
        .field('title', 'coins')
        .field('description', 'coins')
        .attach('image', fs.readFileSync('test/collections/test.png'), 'test.png')
        .end((err, res) => {
          helpers.collectionAssertions(res, 200, 1, '1',
            'coins', 'coins', 'coins');
          done();
        });
    });
  });
  it('should 404 if collection id does not exist', done => {
    config.chai.request(config.app)
      .put('/api/v1/collections/999999')
      .send({title: 'Title'})
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });
});
