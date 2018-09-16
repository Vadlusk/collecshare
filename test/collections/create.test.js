var config  = require('../test_helper');
var helpers = require('./collectionHelpers');

describe('POST /api/v1/collections', () => {
  context('should create a collection', () => {
    it('with required parameters', done => postToCollections('reqd', done, null));
    it('with all parameters', done => postToCollections('all', done, 'Pretty good'));
  });
  context('should not create a collection without', () => {
    it('a category', done => postToCollections('category', done, null));
    it('anything', done => postToCollections('anything', done, null));
    it('a title', done => postToCollections('title', done, null));
    it('a uid', done => postToCollections('uid', done, null));
  });
});

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
      helpers.collectionAssertions(res, 201, 21, '1', 'comics', 'New', desc);
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
    case 'all':
      payload = { uid: '1', category: 'comics', title: 'New',
        description: 'Pretty good' }
      break;
    default:
      payload = {}
  };
  return payload
};
