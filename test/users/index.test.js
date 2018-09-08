var config = require('../test_helper');

describe('GET /api/v1/users', () => {
  it('should return all the users', done => {
    config.chai.request(config.app)
      .get('/api/v1/users')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        res.body.length.should.equal(20);
        res.body[0].should.have.property('id');
        res.body[0].id.should.equal(1);
        res.body[0].should.have.property('uid');
        res.body[0].uid.should.equal(1);
        res.body[0].should.have.property('username');
        res.body[0].uid.should.equal('Jill');
        res.body[0].should.have.property('photo_url');
        res.body[0].photo_url.should.equal('url');
        res.body[0].should.have.property('location');
        res.body[0].location.should.equal('Denver, CO');
        res.body[0].should.have.property('bio');
        res.body[0].bio.should.equal('I\'m pretty cool.');
        done();
      });
  });
});
