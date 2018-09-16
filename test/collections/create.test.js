var config = require('../test_helper');

describe('POST /api/v1/collections', () => {
  context('should create a collection', () => {
    it('with all required parameters', done => {
      postToCollections('reqd', done, null);
    });
    it('with all required and optional parameters', done => {
      postToCollections('optional', done, 'Pretty good');
    });
  });
  context('should not create a collection without', () => {
    it('anything', done => postToCollections('anything', done, null));
    it('a uid', done => postToCollections('uid', done, null));
    it('a category', done => postToCollections('category', done, null));
    it('a title', done => postToCollections('title', done, null));
  });
});

const collectionAssertions = (res, status, id, uid, category, title, desc) => {
  res.should.have.status(status);
  res.should.be.json;
  res.body.should.be.a('object');
  res.body.should.have.property('id');
  res.body.should.have.property('uid');
  res.body.should.have.property('category');
  res.body.should.have.property('title');
  res.body.should.have.property('description');
  res.body.id.should.equal(id);
  res.body.uid.should.equal(uid);
  res.body.category.should.equal(category);
  res.body.title.should.equal(title);
  res.body.description ? res.body.description.should.equal(desc) : null;
};

const createCollectionErrorAssertions = res => {
  res.should.have.status(400);
  res.should.be.json;
  res.body.should.have.property('error');
  res.body.error.should.equal('uid, category, title required');
};

const postToCollections = (situation, done, desc) => {
  config.chai.request(config.app)
  .post('/api/v1/collections')
  .send(determinePayload(situation))
  .end((err, res) => {
    if (res.status === 400) {
      createCollectionErrorAssertions(res);
    } else {
      collectionAssertions(res, 201, 21, '1', 'comics', 'New', desc);
    }
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
    case 'reqd':
      payload = { uid: '1', category: 'comics', title: 'New' }
      break;
    case 'optional':
      payload = { uid: '1', category: 'comics', title: 'New',
        description: 'Pretty good' }
      break;
    default:
      payload = {}
  };
  return payload
};
