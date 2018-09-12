var config = require('../test_helper');

describe('POST /api/v1/collections', () => {
  context('should create a collection', () => {
    it('with all required parameters', done => {
      config.chai.request(config.app)
      .post('/api/v1/collections')
      .send({uid: '1', category: 'comics', title: 'New'})
      .end((err, res) => {
        res.should.have.status(201);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('id');
        res.body.id.should.equal(21);
        res.body.should.have.property('uid');
        res.body.uid.should.equal('1');
        res.body.should.have.property('category');
        res.body.category.should.equal('comics');
        res.body.should.have.property('title');
        res.body.title.should.equal('New');
        res.body.should.have.property('description');
        done();
      });
    });
    it('with all required and optional parameters', done => {
      config.chai.request(config.app)
      .post('/api/v1/collections')
      .send({uid: '1', category: 'comics', title: 'New', description: 'Pretty good'})
      .end((err, res) => {
        res.should.have.status(201);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('id');
        res.body.id.should.equal(21);
        res.body.should.have.property('uid');
        res.body.uid.should.equal('1');
        res.body.should.have.property('category');
        res.body.category.should.equal('comics');
        res.body.should.have.property('title');
        res.body.title.should.equal('New');
        res.body.should.have.property('description');
        res.body.description.should.equal('Pretty good');
        done();
      });
    });

  });
});
