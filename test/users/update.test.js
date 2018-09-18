var config = require('../test_helper');
var fs = require('fs');

describe('PUT /api/v1/users/:uid', () => {
  context('should edit a user with', () => {
    it('one valid parameter', done => {
      config.chai.request(config.app)
        .put('/api/v1/users/1')
        .type('form')
        .attach('avatar', fs.readFileSync('test/users/test.jpg'), 'test.jpg')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.have.property('uid');
          res.body.should.have.property('username');
          res.body.should.have.property('avatar');
          res.body.should.have.property('location');
          res.body.should.have.property('bio');
          res.body.uid.should.equal('1');
          res.body.username.should.equal('Jill');
          res.body.location.should.equal('Denver, CO');
          res.body.bio.should.equal('I\'m pretty cool.');
          done();
        });
    });
    it('all valid parameters', done => {
      config.chai.request(config.app)
        .put('/api/v1/users/1')
        .type('form')
        .attach('avatar', fs.readFileSync('test/users/test.jpg'), 'test.jpg')
        .field('username', 'Jim')
        .field('location', 'New Dehli')
        .field('bio', 'Awesome')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.have.property('uid');
          res.body.uid.should.equal('1');
          res.body.should.have.property('username');
          res.body.username.should.equal('Jim');
          res.body.should.have.property('avatar');
          res.body.should.have.property('location');
          res.body.location.should.equal('New Dehli');
          res.body.should.have.property('bio');
          res.body.bio.should.equal('Awesome');
          done();
        });
    });
  });
  it('should 404 if uid does not exist', done => {
    config.chai.request(config.app)
      .put('/api/v1/users/999999')
      .type('form')
      .field('uid', '45')
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });
});
