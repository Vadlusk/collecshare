var config = require('../test_helper');

describe('POST /api/v1/users', () => {
  it('should create a user with only uid and name', done => {
    config.chai.request(config.app)
      .post('/api/v1/users')
      .send({uid: 1, username: 'New user'})
      .end((err, res) => {
        res.should.have.status(201);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('id');
        res.body.id.should.equal(21);
        res.body.should.have.property('uid');
        res.body.uid.should.equal('1');
        res.body.should.have.property('username');
        res.body.should.have.property('photo_url');
        res.body.should.have.property('location');
        res.body.should.have.property('bio');
        done();
      });
  });
});
