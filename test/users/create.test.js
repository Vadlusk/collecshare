var config = require('../test_helper');

describe('POST /api/v1/users', () => {
  context('should create a user with', () => {
    it('only uid and name', done => {
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
        res.body.username.should.equal('New user');
        res.body.should.have.property('photo_url');
        res.body.photo_url.should.equal('http://shec-labs.com/wp-content/themes/creativemag/images/default.png');
        res.body.should.have.property('location');
        res.body.should.have.property('bio');
        done();
      });
    });
    it('uid, name, photo_url, location, and bio', done => {
      config.chai.request(config.app)
      .post('/api/v1/users')
      .send({
        uid: 1,
        username: 'New user',
        photo_url: 'New Url',
        location: 'Honolulu, HI',
        bio: 'Really cool person'
      })
      .end((err, res) => {
        res.should.have.status(201);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('id');
        res.body.id.should.equal(21);
        res.body.should.have.property('uid');
        res.body.uid.should.equal('1');
        res.body.should.have.property('username');
        res.body.username.should.equal('New user');
        res.body.should.have.property('photo_url');
        res.body.photo_url.should.equal('New Url');
        res.body.should.have.property('location');
        res.body.location.should.equal('Honolulu, HI');
        res.body.should.have.property('bio');
        res.body.bio.should.equal('Really cool person');
        done();
      });
    });
  });
  context('should not create a user without', () => {
    it('anything', done => {
      config.chai.request(config.app)
      .post('/api/v1/users')
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
    });
    it('uid', done => {
      config.chai.request(config.app)
      .post('/api/v1/users')
      .send({uid: 4})
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
    });
    it('username', done => {
      config.chai.request(config.app)
      .post('/api/v1/users')
      .send({username: 'Bad User'})
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
    });
  });
});
