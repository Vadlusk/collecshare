var config  = require('../test_helper');
var helpers = require('./collectionHelpers');

describe('GET /api/v1/collections/:id', () => {
  it('should return the collection with that id', done => {
    config.chai.request(config.app)
      .get('/api/v1/collections/1')
      .end((err, res) => {
        helpers.collectionAssertions(res, 200, 1, '1',
          'comics', 'My Collection');
        res.body.should.have.property('items');
        res.body.items.should.be.a('array');
        res.body.items[0].should.have.property('title');
        res.body.items[0].should.have.property('image');
        res.body.items[0].should.have.property('description');
        res.body.items[0].should.have.property('value');
        done();
      });
  });
  it('should return 404 if user id does not exist', done => {
        config.chai.request(config.app)
        .get('/api/v1/collections/999999')
        .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });
});
