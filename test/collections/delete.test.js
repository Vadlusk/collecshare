var config = require('../test_helper');

describe('DELETE /api/v1/collections/:id', () => {
  it('should delete a collection', done => {
    config.chai.request(config.app)
      .delete('/api/v1/collections/1')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('message');
        res.body.message.should.equal('Successfully deleted collection 1');
        done();
      });
  });
  it('should return 404 if collection id does not exist', done => {
    config.chai.request(config.app)
      .delete('/api/v1/collections/999999')
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });
});
