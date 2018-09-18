var config = require('../test_helper');

describe('POST /api/v1/search', () => {
  it('should return all matching collections and users', done => {
    config.chai.request(config.app)
      .get('/api/v1/search?keyword=Collection')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        res.body.length.should.equal(6);
        res.body[0].should.have.property('username');
        res.body[0].should.have.property('avatar');
        res.body[0].should.have.property('bio');
        res.body[0].should.have.property('location');
        res.body[0].should.have.property('collections');
        res.body[0].collections.should.be.a('array');
        res.body[0].collections[0].should.have.property('title');
        res.body[0].collections[0].should.have.property('category');
        res.body[0].collections[0].should.have.property('image');
        res.body[0].collections[0].should.have.property('description');
        res.body[0].collections[0].should.have.property('image');
        done();
      });
  });
});
