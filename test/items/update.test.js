var config = require('../test_helper');
var fs = require('fs');

describe('PUT /api/v1/items/:uid', () => {
  context('should edit a item with', () => {
    it('one valid parameter', done => {
      config.chai.request(config.app)
        .put('/api/v1/items/1')
        .type('form')
        .field('title', 'A Rod rookie')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.should.have.property('id');
          res.body.id.should.equal(21);
          res.body.should.have.property('collection_id');
          res.body.collection_id.should.equal(1);
          res.body.should.have.property('title');
          res.body.title.should.equal('A Rod rookie');
          res.body.should.have.property('value');
          res.body.value.should.equal(0);
          res.body.should.have.property('description');
          res.body.should.have.property('image');
          res.body.image.should.equal('avatars/book.jpeg');
          done();
        });
    });
    it('all valid parameters', done => {
      config.chai.request(config.app)
        .put('/api/v1/items/1')
        .type('form')
        .attach('image', fs.readFileSync('test/users/test.jpg'), 'test.jpg')
        .field('collection_id', 2)
        .field('title', 'A Rod rookie')
        .field('description', 'Bent')
        .field('value', 10.5)
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.should.have.property('id');
          res.body.id.should.equal(21);
          res.body.should.have.property('collection_id');
          res.body.collection_id.should.equal(2);
          res.body.should.have.property('title');
          res.body.title.should.equal('A Rod rookie');
          res.body.should.have.property('value');
          res.body.value.should.equal(10.5);
          res.body.should.have.property('description');
          res.body.description.should.equal('Bent');
          res.body.should.have.property('image');
          res.body.image.should.not.equal('avatars/book.jpeg');
          done();
        });
    });
  });
  it('should 404 if uid does not exist', done => {
    config.chai.request(config.app)
      .put('/api/v1/items/999999')
      .type('form')
      .field('collection_id', 45)
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });
});
