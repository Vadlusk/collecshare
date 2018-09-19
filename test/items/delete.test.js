var config = require('../test_helper');

describe('DELETE /api/v1/items/:id', () => {
  it('should delete a item', done => {
    config.chai.request(config.app)
      .delete('/api/v1/items/1')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('message');
        res.body.message.should.equal('Successfully deleted item 1');
        done();
      });
  });
  it('should return 404 if item id does not exist', done => {
    config.chai.request(config.app)
      .delete('/api/v1/items/999999')
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });
  it('should return 404 if path does not exist', done => {
    config.chai.request(config.app)
      .get('/api/v1/zebras')
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });
});
