var config = require('../test_helper');

describe('PUT /api/v1/collections/:id', () => {
  context('should edit a collection with', () => {
    it('one valid parameter', done => {
      config.chai.request(config.app)
        .put('/api/v1/collections/1')
        .send({title: 'Title'})
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.have.property('id');
          res.body.id.should.equal(1)
          res.body.should.have.property('title');
          res.body.title.should.equal('Title');
          res.body.should.have.property('category');
          res.body.should.have.property('description');
          done();
        });
    });
    it('all valid parameters', done => {
      config.chai.request(config.app)
        .put('/api/v1/collections/1')
        .send({
          title: 'New',
          category: 'Comics',
          description: 'Cool'
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.have.property('id');
          res.body.id.should.equal(1);
          res.body.should.have.property('title');
          res.body.title.should.equal('New');
          res.body.should.have.property('category');
          res.body.category.should.equal('Comics');
          res.body.should.have.property('description');
          res.body.description.should.equal('Cool');
          done();
        });
    });
  });
  it('should 404 if collection id does not exist', done => {
    config.chai.request(config.app)
      .put('/api/v1/collections/999999')
      .send({title: 'Title'})
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });
});
