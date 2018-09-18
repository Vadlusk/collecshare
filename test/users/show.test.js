var config = require('../test_helper');

describe('GET /api/v1/users/:uid', () => {
  it('should return the user with that uid', done => {
    config.chai.request(config.app)
      .get('/api/v1/users/1')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('uid');
        res.body.uid.should.equal('1');
        res.body.should.have.property('username');
        res.body.username.should.equal('Jill');
        res.body.should.have.property('avatar');
        res.body.avatar.should.equal('avatars/avatar.png');
        res.body.should.have.property('location');
        res.body.location.should.equal('Denver, CO');
        res.body.should.have.property('bio');
        res.body.bio.should.equal('I\'m pretty cool.');
        done();
      });
  });
  it('should return 404 if user id does not exist', done => {
    config.chai.request(config.app)
      .get('/api/v1/users/999999')
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });
});
