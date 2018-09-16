var config = require('../test_helper');

describe('POST /api/v1/users', () => {
  context('should create a user with', () => {
    it('only uid and name', done => {
      config.chai.request(config.app)
      .post('/api/v1/users')
      .send({uid: '22', username: 'New user'})
      .end((err, res) => {
        res.should.have.status(201);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('uid');
        res.body.uid.should.equal('22');
        res.body.should.have.property('username');
        res.body.username.should.equal('New user');
        res.body.should.have.property('avatar');
        res.body.avatar.should.equal('http://shec-labs.com/wp-content/themes/creativemag/images/default.png');
        res.body.should.have.property('location');
        res.body.should.have.property('bio');
        done();
      });
    });
    it('uid, name, avatar, location, and bio', done => {
      config.chai.request(config.app)
      .post('/api/v1/users')
      .send({
        uid: '22',
        username: 'New user',
        avatar: 'New Url',
        location: 'Honolulu, HI',
        bio: 'Really cool person'
      })
      .end((err, res) => {
        res.should.have.status(201);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('uid');
        res.body.uid.should.equal('22');
        res.body.should.have.property('username');
        res.body.username.should.equal('New user');
        res.body.should.have.property('avatar');
        res.body.avatar.should.equal('New Url');
        res.body.should.have.property('location');
        res.body.location.should.equal('Honolulu, HI');
        res.body.should.have.property('bio');
        res.body.bio.should.equal('Really cool person');
        done();
      });
    });
  });
  context('should not create a user without', () => {
    it('anything', done => sendWithout('anything', done));
    it('a uid', done => sendWithout('uid', done));
    it('a username', done => sendWithout('username', done));
  });
});

const sendWithout = (missingItem, done) => {
  let payload = determinePayload(missingItem);
  config.chai.request(config.app)
  .post('/api/v1/users')
  .send(payload)
  .end((err, res) => {
    res.should.have.status(400);
    res.should.be.json;
    res.body.should.have.property('error');
    res.body.error.should.equal('uid, username required');
    done();
  });
};

const determinePayload = item => {
  let payload;
  switch (item) {
    case 'uid':
      payload = { username: 'Bad User' }
      break;
    case 'username':
      payload = { uid: '1' }
      break;
    default:
      payload = {}
  };
  return payload
};
