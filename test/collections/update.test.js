var config  = require('../test_helper');
var helpers = require('./collectionHelpers');


describe('PUT /api/v1/collections/:id', () => {
  context('should edit a collection with', () => {
    it('one valid parameter', done => {
      config.chai.request(config.app)
        .put('/api/v1/collections/1')
        .send({title: 'Title'})
        .end((err, res) => {
          helpers.collectionAssertions(res, 200, 1, '1',
            'comics', 'Title', null);
          done();
        });
    });
    it('all valid parameters', done => {
      config.chai.request(config.app)
        .put('/api/v1/collections/1')
        .send({ title: 'New', category: 'Comics', description: 'Cool' })
        .end((err, res) => {
          helpers.collectionAssertions(res, 200, 1, '1',
            'Comics', 'New', 'Cool');
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
