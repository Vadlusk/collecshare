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
  context('should not create a collection without', () => {
    it('anything', done => sendWithout('anything', done));
    it('a uid', done => sendWithout('uid', done));
    it('a category', done => sendWithout('category', done));
    it('a title', done => sendWithout('title', done));
  });
});

const sendWithout = (missingItem, done) => {
  let payload = determinePayload(missingItem);
  config.chai.request(config.app)
  .post('/api/v1/collections')
  .send(payload)
  .end((err, res) => {
    res.should.have.status(400);
    res.should.be.json;
    res.body.should.have.property('error');
    res.body.error.should.equal('uid, category, title required');
    done();
  });
};

const determinePayload = item => {
  let payload;
  switch (item) {
    case 'uid':
      payload = { category: 'comics', title: 'New' }
      break;
    case 'category':
      payload = { uid: '1', title: 'New' }
      break;
    case 'title':
      payload = { uid: '1', category: 'comics' }
      break;
    default:
      payload = {}
  };
  return payload
};
