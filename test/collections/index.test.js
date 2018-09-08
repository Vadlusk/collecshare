var config = require('../test_helper');

describe('GET /api/v1/collections', () => {
  it('should return all the collections', done => {
    config.chai.request(config.app)
      .get('/api/v1/collections')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        res.body.length.should.equal(20);
        res.body[0].should.have.property('id');
        res.body[0].id.should.equal(1);
        res.body[0].should.have.property('user_id');
        res.body[0].user_id.should.equal(1);
        res.body[0].should.have.property('category');
        res.body[0].category.should.equal('comics');
        done();
      });
  });
});