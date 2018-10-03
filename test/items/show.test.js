var config  = require('../test_helper');

describe('GET /api/v1/items/:id', () => {
  it('should return the item with that id', done => {
    config.chai.request(config.app)
      .get('/api/v1/items/1')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('id');
        res.body.id.should.equal(1)
        res.body.should.have.property('collection_id');
        res.body.collection_id.should.equal(1)
        res.body.should.have.property('title');
        res.body.title.should.equal('Cool thing')
        res.body.should.have.property('value');
        res.body.value.should.equal(0)
        res.body.should.have.property('description');
        res.body.description.should.equal('I have this.')
        res.body.should.have.property('image');
        res.body.image.should.equal('https://collecshare.herokuapp.com/backgrounds/book.jpeg')
        done();
      });
  });
  it('should return 404 if user id does not exist', done => {
        config.chai.request(config.app)
        .get('/api/v1/items/999999')
        .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });
});
