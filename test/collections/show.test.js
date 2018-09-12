var config = require('../test_helper');

describe('GET /api/v1/collections/:id', () => {
  it('should return the collection with that id', done => {
    config.chai.request(config.app)
      .get('/api/v1/collections/1')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('id');
        res.body.id.should.equal(1);
        res.body.should.have.property('uid');
        res.body.uid.should.equal('1');
        res.body.should.have.property('category');
        res.body.category.should.equal('comics');
        res.body.should.have.property('title');
        res.body.title.should.equal('My Collection');
        res.body.should.have.property('description');
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
