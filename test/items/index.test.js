var config = require('../test_helper');

describe('GET /api/v1/items', () => {
  it('should return all the items', done => {
    config.chai.request(config.app)
      .get('/api/v1/items')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        res.body.length.should.equal(20);
        res.body[0].should.have.property('id');
        res.body[0].id.should.equal('1');
        res.body[0].should.have.property('collection_id');
        res.body[0].collection_id.should.equal('1');
        res.body[0].should.have.property('image');
        res.body[0].should.have.property('value');
        res.body[0].value.should.equal('5.00');
        res.body[0].should.have.property('title');
        res.body[0].title.should.equal('Item');
        res.body[0].should.have.property('description');
        res.body[0].description.should.equal('Cool thing I have');
        done();
      });
  });
});
