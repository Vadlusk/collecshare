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
        res.body[0].should.have.property('uid');
        res.body[0].uid.should.equal('1');
        res.body[0].should.have.property('category');
        res.body[0].category.should.equal('comics');
        res.body[0].should.have.property('title');
        res.body[0].title.should.equal('My Collection');
        res.body[0].should.have.property('description');
        done();
      });
  });
});
