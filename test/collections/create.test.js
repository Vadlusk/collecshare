var config = require('../test_helper');

describe('POST /api/v1/collections', () => {
  it('should create a collection', done => {
    config.chai.request(config.app)
      .post('/api/v1/collections')
      .send({uid: 1, category: 'comics'})
      .end((err, res) => {
        res.should.have.status(201);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('id');
        res.body.id.should.equal(21);
        res.body.should.have.property('user_id');
        res.body.user_id.should.equal(1);
        res.body.should.have.property('category');
        res.body.category.should.equal('comics');
      });
  });
});
