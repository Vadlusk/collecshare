var config = require('../test_helper');

describe('GET /api/v1/users/:id', () => {
  it('should return the user with that id', done => {
    config.chai.request(config.app)
      .get('/api/v1/users/1')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('id');
        res.body.id.should.equal(1);
        res.body.should.have.property('uid');
        res.body.uid.should.equal('1');
        res.body.should.have.property('username');
        res.body.username.should.equal('Jill');
        res.body.should.have.property('photo_url');
        res.body.photo_url.should.equal(
          'http://shec-labs.com/wp-content/themes/creativemag/images/default.png'
        );
        res.body.should.have.property('location');
        res.body.location.should.equal('Denver, CO');
        res.body.should.have.property('bio');
        res.body.bio.should.equal('I\'m pretty cool.');
        done();
      });
  });
});
