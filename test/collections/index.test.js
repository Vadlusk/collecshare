var config = require('../test_helper');

describe('GET /api/v1/collections', () => {
  context('should return all the collections', () => {
    it('', done => {
      config.chai.request(config.app)
        .get('/api/v1/collections')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('array');
          res.body.length.should.equal(20);
          res.body[0].should.have.property('id');
          res.body[0].id.should.equal(1);
          res.body[0].should.have.property('uid');
          res.body[0].uid.should.equal('1');
          res.body[0].should.have.property('category');
          res.body[0].category.should.equal('comics');
          res.body[0].should.have.property('title');
          res.body[0].title.should.equal('My Collection');
          res.body[0].should.have.property('description');
          done();
        });
    });
    it('for a uid', done => {
      config.chai.request(config.app)
        .get('/api/v1/collections?uid=1')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('array');
          res.body.length.should.equal(3);
          res.body.forEach(collection => {
            collection.uid.should.equal('1')
          });
          done();
        });
    });
    it('for a category', done => {
      config.chai.request(config.app)
      .get('/api/v1/collections?category=vinyl')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        res.body.length.should.equal(3);
        res.body.forEach(collection => {
          collection.category.should.equal('vinyl')
        });
        done();
      });
    });
  });
  context('should still be ok if', () => {
    it('the search param is category and there are none', done => {
      config.database.raw('DELETE FROM collections');
      config.chai.request(config.app)
      .get('/api/v1/collections?category=vinyl')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        done();
      });
    });
    it('the search param is uid and there are none', done => {
      config.database.raw('DELETE FROM collections');
      config.chai.request(config.app)
      .get('/api/v1/collections?uid=2')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        done();
      });
    });
  });
});
