var config = require('../test_helper');

describe('POST /api/v1/search', () => {
  it('should return all matching collections and users', done => {
    config.chai.request(config.app)
      .post('/api/v1/search')
      .send({ keyword: 'Collection' })
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('collections');
        res.body.should.have.property('users');
        res.body['collections'].should.be.a('array');
        res.body['users'].should.be.a('array');
        done();
      });
  });
});
